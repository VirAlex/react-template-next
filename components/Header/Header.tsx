import React, { useEffect } from "react";

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
  // useEffect(() => {
  //   if (federatedSearchVisibleSelector) {
  //     document.body.classList.add("stop-scrolling");
  //   } else {
  //     document.body.classList.remove("stop-scrolling");
  //   }
  // }, []);
  return (
    <header className="header">
      <div className="header-wrapper">
        <div className="list-img-wrapper" onClick={() => {}}>
          <Link href="/">
            <a>
              <Image
                src={logo}
                alt="logo"
                className="logo"
                width={"100%"}
                height={"100%"}
                onClick={() => {}}
              />
            </a>
          </Link>

          <ul>
            <li>
              <Link style={{ textDecoration: "none" }} href="/cat_one">
                <a>CAT ONE</a>
              </Link>
            </li>
            <li onClick={() => {}}>CAT TWO</li>
            <li className="design" onClick={() => {}}>
              CAT 3
            </li>
            <li onClick={() => {}}>CAT 4</li>
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
            // if (homepageSelector || catOneSelector || catTwoSelector) {
            //   dispatch(federatedSearchVisible(true));
            // }
            // if (searchVisibleSelector) {
            //   dispatch(federatedSearchVisible(false));
            // }
          }}
        >
          <CustomSearchBox />
        </div>
      </div>
    </header>
  );
};

export default Header;
