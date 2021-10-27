import React from "react";
import { useDispatch, useSelector, RootStateOrAny } from "react-redux";

import { Highlight, connectHits } from "react-instantsearch-dom";
import { showModalPDP, productDetail } from "@/actions/productDetail";
import { federatedSearchVisible, searchVisible } from "@/actions/visibility";
import ProductDetails from "@/components/ProductDetails/ProductsDetails";

import { motion, AnimateSharedLayout } from "framer-motion";

import Image from "next/image";

type HitsProps = {
  hits: any[];
};
type HitsModalProps = {
  hits: any[];
};

// MAIN SEARCH RESULT PAGE + FEDERATED
const Hits = ({ hits }: HitsProps) => {
  console.log(typeof hits);
  const dispatch = useDispatch();
  const listItem = {
    hidden: { opacity: 0, y: 100 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.2,
      },
    },
  };
  return (
    <AnimateSharedLayout>
      <div className="hits-wrapper">
        <ul className="hits-list">
          {hits.map(
            (hit: { objectID: number; image_link: string; price: number }) => (
              <motion.li
                key={hit.objectID}
                variants={listItem}
                initial="hidden"
                animate="show"
                className="hit-list"
                onClick={() => {
                  dispatch(productDetail(hit));
                  dispatch(showModalPDP(true));
                  dispatch(federatedSearchVisible(false));
                  dispatch(searchVisible(true));
                }}
              >
                <div className="image-wrapper">
                  <Image src={hit.image_link} alt="" />
                </div>
                <div className="infos">
                  <h3>
                    <Highlight hit={hit} attribute="title" />
                  </h3>
                  <p>$ {hit.price}.00</p>
                </div>
              </motion.li>
            )
          )}
        </ul>
        <ModalProduct />
      </div>
    </AnimateSharedLayout>
  );
};

// PDP
const HitsModal = ({ hits }: HitsModalProps) => {
  const dispatch = useDispatch();

  return (
    <div className="hits-wrapper">
      <ul className="hits-list hits-list-modal">
        {hits.map((hit) => (
          <li
            key={hit.objectID}
            className="hit-list"
            onClick={() => {
              dispatch(productDetail(hit));
              dispatch(showModalPDP(true));
              dispatch(federatedSearchVisible(false));
              dispatch(searchVisible(true));
            }}
          >
            <div className="image-wrapper">
              <Image src={hit.image_link} alt="" />
            </div>
            <div className="infos">
              <h3>
                <Highlight hit={hit} attribute="title" />
              </h3>
              <p>$ {hit.price}.00</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

const ModalProduct = () => {
  const dispatch = useDispatch();
  const { showModal } = useSelector(
    (state: RootStateOrAny) => state.productDetail
  );
  return (
    <div>
      {showModal ? (
        <div
          className="modal-bg"
          onClick={(e) => {
            if (e.target === e.currentTarget) {
              dispatch(showModalPDP(false));
            }
          }}
        >
          <motion.div className="modal-wrapper fadeModal">
            <ProductDetails />
          </motion.div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

const CustomHits = connectHits(Hits);
const CustomHitsModal = connectHits(HitsModal);

export { CustomHits, CustomHitsModal };
