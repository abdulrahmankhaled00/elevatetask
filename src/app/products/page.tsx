import AllProducts from "@/components/product/AllProducts";
import { Suspense } from "react";
import Loading from "@/components/loading/Loading";

async function page() {

  return (
    <div className="p-12" >
      <h3 className=" text-4xl block text-center py-5 pt-10 ">All Products</h3>
      <Suspense fallback={<Loading/>}>
      <AllProducts/>
      </Suspense>
    </div>

  );
}

export default page;
