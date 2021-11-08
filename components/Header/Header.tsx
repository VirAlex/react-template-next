import React from "react";
import { useVisibility } from "@/contexts/visibilityContext";

import Image from "next/image";
import Link from "next/link";

// COMPONENT IMPORT
import logo from "@/public/static/images/logo.jpeg";
import CustomSearchBox from "./SearchBox";
import SelectPersona from "@/components/Header/Personna";

const Header = () => {
  // const [state, dispatch] = useContext(VisibilityContext);

  // const displayFederated = (value: boolean) => {
  //   dispatch({
  //     type: "CHANGE_FEDERATED",
  //     payload: value,
  //   });
  // };

  // const resetStates = () => {
  //   dispatch({
  //     type: "RESET_ALL_STATES",
  //   });
  // };

  const { setfederatedSearchVisible } = useVisibility();

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
                onClick={() => {
                  // resetStates();
                }}
              />
            </a>
          </Link>

          <ul>
            <li>
              <Link href="/cat_one">
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
          onClick={() => {
            setfederatedSearchVisible(true);
         
          }}
        >
          <CustomSearchBox />
        </div>
      </div>
    </header>
  );
};

export default Header;
