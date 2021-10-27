import React from "react";
import { Configure } from "react-instantsearch-dom";
import { CustomHitsModal } from "@/components/SearchPage/Hits";

const CarouselHome = () => {
  return (
    <>
      <Configure hitsPerPage={8} ruleContexts="aviator" />
      <CustomHitsModal />
    </>
  );
};

export default CarouselHome;
