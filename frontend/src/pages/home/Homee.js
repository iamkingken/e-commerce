import React from "react";
import Slider from "../../components/slider/Slider";
import "./Home.scss";
import HomeInfoBox from "./HomeInfoBox";
import { productData } from "../../components/corousel/data";
import CorouselItem from "../../components/corousel/CorouselItem";
import ProductCorousel from "../../components/corousel/Corousel";
import ProductCategory from "./ProductCategory";
import FooterLinks from "../../components/footer/FooterLinks";

const PageHeading = ({ heading, btnText }) => {
  return (
    <div className="--flex-between">
      <h2 className="--fw-thin">{heading}</h2>
      <button className="--btn">{btnText}</button>
      <div className="--hr"></div>
    </div>
  );
};

const Homee = () => {
  const productss = productData.map((item, index) => (
    <div key={item.id}>
      <CorouselItem
        name={item.name}
        url={item.imageurl}
        price={item.price}
        description={item.description}
      />
    </div>
  ));

  return (
    <>
      <Slider />
      <section>
        <div className="container">
          <HomeInfoBox />
          <PageHeading heading={"Latest Products"} btnText={"Shop Now>>>"} />
          <ProductCorousel products={productss} />
        </div>
      </section>
      <section className="--bt-grey">
        <div className="container">
          <h3>Categories</h3>
          <ProductCategory />
        </div>
      </section>

      <section className="--bg-grey">
        <div className="container">
          <PageHeading heading={"Mobile Phones"} btnText={"Shop Now>>>"} />
          <ProductCorousel products={productss} />
        </div>
      </section>
      <FooterLinks />
    </>
  );
};

export default Homee;
