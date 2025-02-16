
import Product from "@/components/product/Product";
import { product } from "@/types/types";

 
 async function AllProducts() {
  const response = await fetch("https://fakestoreapi.com/products");
  const products = await response.json();
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 w-full justify-center">
    {products &&
      products.map((product: product) => (
        <Product product={product} key={product.id} />
      ))}
  </div>
  )
}

export default AllProducts
