import React from "react";
import { prisma } from "@/prisma/prismaClient";
import Button from "../../(component)/Button";
import { redirect } from "next/dist/server/api-utils";
import Link from "next/link";
const ProductDetails = async ({ params }) => {
  const product = await prisma.product.findFirst({
    where: {
      id: params.id,
    },
  });

  return (
    <section className="bg-gray-900 text-white p-3">
      <Link href="/">
        <Button title={"الرئيسية"} />
      </Link>

      <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
        <div className="mx-auto max-w-lg text-center">
          <h2 className="text-3xl font-bold sm:text-4xl">{product?.name}</h2>

          <p className="mt-4 text-gray-300">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Consequuntur aliquam doloribus nesciunt eos fugiat. Vitae aperiam
            fugit consequuntur saepe laborum.
          </p>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          <Featcher />
          <Featcher />
          <Featcher />
          <Featcher />
          <Featcher />
          <Featcher />
          <Featcher />
        </div>

        <div className="mt-12 text-center">
          <a
            href="#"
            className="inline-block rounded bg-pink-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-pink-700 focus:outline-none focus:ring focus:ring-yellow-400"
          >
            Get Started Today
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProductDetails;

function Featcher() {
  return (
    <a
      className="block rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-pink-500/10 hover:shadow-pink-500/10"
      href="#"
    >
      <h2 className="mt-4 text-xl font-bold text-white text-right">الضمان</h2>

      <p className="mt-1 text-sm text-gray-300 text-right">
        تابع مرتاح واستمتع بضمان طول مدة الإشتراك
      </p>
    </a>
  );
}
