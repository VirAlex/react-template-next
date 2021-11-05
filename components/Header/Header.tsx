import React, { useEffect } from "react";
import { useSelector, useDispatch, RootStateOrAny } from "react-redux";

import Image from "next/image";
import Link from "next/link";

// COMPONENT IMPORT
import logo from "@/public/static/images/logo.jpeg";
import CustomSearchBox from "./SearchBox";
import SelectPersona from "@/components/Header/Personna";
import {
  searchVisible,
  federatedSearchVisible,
  catOne,
  catTwo,
} from "../../actions/visibility";
import { getQuery } from "../../actions/getQuery";

const Header = () => {
  const federatedSearchVisibleSelector = useSelector(
    (state: RootStateOrAny) => state.visibility.federatedSearchVisible
  );

  const dispatch = useDispatch();
  const homepageSelector = useSelector(
    (state: RootStateOrAny) => state.visibility.homepage
  );
  const catTwoSelector = useSelector(
    (state: RootStateOrAny) => state.visibility.catTwo
  );
  const catOneSelector = useSelector(
    (state: RootStateOrAny) => state.visibility.catOne
  );
  const searchVisibleSelector = useSelector(
    (state: RootStateOrAny) => state.visibility.searchVisible
  );

  useEffect(() => {
    if (federatedSearchVisibleSelector) {
      document.body.classList.add("stop-scrolling");
    } else {
      document.body.classList.remove("stop-scrolling");
    }
  }, []);
  return (
    <header className="header">
      <div className="header-wrapper">
        <div
          className="list-img-wrapper"
          onClick={() => {
            dispatch(federatedSearchVisible(false));
            dispatch(getQuery(""));
          }}
        >
          <Link href="/">
            <a>
              <Image
                src={logo}
                alt="logo"
                className="logo"
                width={"100%"}
                height={"100%"}
                onClick={() => {
                  dispatch(catOne(false));
                  dispatch(searchVisible(false));
                  dispatch(catTwo(false));
                  dispatch(federatedSearchVisible(false));
                }}
              />
            </a>
          </Link>

          <ul>
            <li>
              <Link style={{ textDecoration: 'none' }} href="/cat_one">
                <a>CAT ONE</a>
              </Link>
            </li>
            <li
              onClick={() => {
                dispatch(catOne(false));
                dispatch(searchVisible(false));
                dispatch(catTwo(true));
                dispatch(federatedSearchVisible(false));
                dispatch(getQuery(""));
              }}
            >
              CAT TWO
            </li>
            <li
              className="design"
              onClick={() => {
                dispatch(catOne(false));
                dispatch(searchVisible(false));
                dispatch(catTwo(false));
                dispatch(federatedSearchVisible(false));
                dispatch(getQuery(""));
              }}
            >
              CAT 3
            </li>
            <li
              onClick={() => {
                dispatch(catOne(false));
                dispatch(searchVisible(false));
                dispatch(catTwo(false));
                dispatch(federatedSearchVisible(false));
                dispatch(getQuery(""));
              }}
            >
              CAT 4
            </li>
            <li>CAT 5</li>
            <li>CAT 6</li>
            <li className="promo">CAT 7</li>
            <li>
              <SelectPersona />
            </li>
          </ul>
        </div>
        <div
          className="search-wrapper"
          onClick={(e) => {
            if (homepageSelector || catOneSelector || catTwoSelector) {
              dispatch(federatedSearchVisible(true));
            }
            if (searchVisibleSelector) {
              dispatch(federatedSearchVisible(false));
            }
          }}
        >
          <CustomSearchBox />
        </div>
      </div>
    </header>
  );
};

export default Header;
