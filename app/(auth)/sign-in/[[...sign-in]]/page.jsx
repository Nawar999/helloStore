import { SignIn } from "@clerk/nextjs";
import React from "react";

const Sign_in = () => {
  return (
    <div className="flex h-screen bg-primary justify-center   ">
      <div className="m-auto">
        <SignIn />
      </div>
    </div>
  );
};

export default Sign_in;
