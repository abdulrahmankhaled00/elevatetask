import { product } from "@/types/types";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Link from "next/link";

export default function Product({ product }: { product: product }) {
  return (
    
    <Link href={`/products/${product.id}`} className="max-w-sm rounded overflow-hidden shadow-sm duration-150 transition border hover:shadow-xl">
      <Image
        className="w-full h-44 object-contain p-8"
        unoptimized
        width={0}
        height={0}
        src={product.image}
        alt="Sunset in the mountains"
      />
      <div className="px-6 py-4">
        <h4 className="font-bold text-xl mb-2 line-clamp-2 h-[3.5rem]      text-center">
          {product.title}{" "}
        </h4>

        <div className="">
          <div className="flex items-center">
            <svg
              className={`w-4 h-4 ${
                product.rating.rate >= 1 ? "text-yellow-300" : "text-gray-300"
              } me-1`}
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 22 20"
            >
              <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
            </svg>
            <svg
              className={`w-4 h-4 ${
                product.rating.rate >= 2 ? "text-yellow-300" : "text-gray-300"
              } me-1`}
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 22 20"
            >
              <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
            </svg>
            <svg
              className={`w-4 h-4 ${
                product.rating.rate >= 3 ? "text-yellow-300" : "text-gray-300"
              } me-1`}
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 22 20"
            >
              <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
            </svg>
            <svg
              className={`w-4 h-4 ${
                product.rating.rate >= 4 ? "text-yellow-300" : "text-gray-300"
              } me-1`}
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 22 20"
            >
              <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
            </svg>
            <svg
              className="w-4 h-4 text-gray-300 me-1 dark:text-gray-500"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 22 20"
            >
              <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
            </svg>
            <div className="ms-1 text-sm font-medium block text-gray-500 dark:text-gray-400">
              {product.rating.rate}
            </div>
          </div>
          <div className="ms-1 text-sm font-medium text-gray-500 dark:text-gray-40 underline pb-3 pt-1">
            {product.rating.count} previews
          </div>
        </div>
        <p className="text-gray-700 text-base line-clamp-3">
          {product.description}
        </p>
      </div>
      <div className="px-6 font-bold pb-2">
        Price :
        <span className="text-center px-5 font-extrabold text-sky-900 ">
        {product.price}
      </span>
      </div>

      <div className="px-6 pt-4 pb-2 font-bold">
        Category :{" "}
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
          {product.category}
        </span>
      </div>
    </Link>
  );
}
