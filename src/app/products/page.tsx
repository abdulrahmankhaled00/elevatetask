import Product from "@/components/product/Product";
import { product } from "@/types/types";
import Image from "next/image";

async function Products() {
  const response = await fetch("https://fakestoreapi.com/products");
  const products = await response.json();
  return (
    <div className="p-12" >
      <h3 className=" text-4xl block text-center py-5 ">All Products</h3>

      <div className="grid grid-cols-4 gap-3 w-full ">
      {products &&
        products.map((product: product) => (
          <Product product={product} key={product.id} />
        ))}
    </div>
    </div>

  );
}

export default Products;
