import React from "react";
import Header from "./(component)/Header";
import ProductsView from "./(component)/ProductsView";
import Hero from "./(component)/Hero";
import MainNavBar from "./(component)/MainNavBar";

const HomePage = async () => {
  return (
    <>
      <Header />
      <div className="flex  justify-center flex-col bg-primary p-4">
        <div className="">
          <Hero />
          <ProductsView />
        </div>
      </div>
      <MainNavBar />
    </>
  );
};

export default HomePage;
