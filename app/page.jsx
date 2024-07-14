import { Button } from "@/components/ui/button";
import React from "react";
import { auth } from "@clerk/nextjs/server";
const HomePage = async () => {
  const user = auth();

  console.log(user);
  return (
    <div>
      <Button>Click</Button>
    </div>
  );
};

export default HomePage;
