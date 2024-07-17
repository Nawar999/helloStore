"use client";

import Link from "next/link";
import home from "../../public/home.png";
import contact from "../../public/customer-service.png";
import cart from "../../public/shopping-bag.png";
import Image from "next/image";
const MainNavBar = () => {
  return (
    <div className="flex w-full h-16 sticky bottom-0 flex-row-reverse justify-between bg-orange z-50 p-2  ">
      <div className="">
        <Link className="flex flex-col items-center " href={"/"}>
          <Image alt="home" width={25} height={25} src={home} />
          <h1 className="text-center text-sm">الرئيسية</h1>
        </Link>
      </div>
      <div>
        <Link className="flex flex-col items-center " href={"/cart"}>
          <Image alt="home" width={25} height={25} src={cart} />
          <h1 className="text-center text-sm">السلة</h1>
        </Link>
      </div>
      <div className="">
        <Link className="flex flex-col items-center" href={"/contact"}>
          <Image alt="home" width={25} height={25} src={contact} />
          <h1 className="text-center text-sm">تواصل معنا </h1>
        </Link>
      </div>
      {/* <div>
        <Link href={"/"}>HOME</Link>
      </div> */}
    </div>
  );
};

export default MainNavBar;
