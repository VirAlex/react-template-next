import React from "react";
import { useDispatch, useSelector, RootStateOrAny } from "react-redux";

import Image from "next/image";

import { appId, searchApiKey, indexAsc } from "@/utils/env";

import algoliasearch from "algoliasearch/lite";
import { Configure, InstantSearch } from "react-instantsearch-dom";

// IMPORT COMPONENTS
import { CustomHitsModal } from "@/components/SearchPage/Hits";

// IMPORT ASSETS
import pdp from "@/public/static/images/pdp.png";
import { showModalPDP } from "../../actions/productDetail";

const ProductDetails = () => {
  const searchClient = algoliasearch(appId, searchApiKey);
  const dispatch = useDispatch();
  const { product } = useSelector(
    (state: RootStateOrAny) => state.productDetail
  );

  if (product) {
    return (
      <div className="modal-inner-wrapper">
        <p
          className="close-modal"
          onClick={() => {
            dispatch(showModalPDP(false));
          }}
        >
          X
        </p>
        <div className="modal-detail">
          <div className="product-side">
            <div className="modal-images">
              <Image src={product.image_link} alt="" />
            </div>
          </div>
          <div className="fake-filters">
            <div className="modal-infos">
              <h3>{product.title}</h3>
              <p>${product.price}</p>
              <p>{product.description}</p>
              <p className="btn-modal">Buy me</p>
            </div>
            <Image src={pdp} alt="" />
          </div>
        </div>
        <div className="recommand-side">
          <div>
            <h3>Recommandations</h3>
          </div>
          <div className="modal-hits">
            <Configure hitsPerPage={8} />
            <CustomHitsModal />
          </div>
          <div>
            <h3>Bought together</h3>
          </div>
          <div className="modal-hits">
            <InstantSearch indexName={indexAsc} searchClient={searchClient}>
              <Configure hitsPerPage={8} />
              <CustomHitsModal />
            </InstantSearch>
          </div>
        </div>
      </div>
    );
  }
};

export default ProductDetails;
