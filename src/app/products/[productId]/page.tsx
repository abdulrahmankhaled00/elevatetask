import Image from "next/image"

async function page({params}:{
  params: Promise<{ productId: string }>
}) {
  const productId = (await params).productId
  const response = await fetch(`https://fakestoreapi.com/products/${productId}`)  
  const product  = await response.json()
  return (
<div className="min-h-screen flex flex-col px-4 md:px-16 lg:px-32 justify-center items-center">
  <h3 className="text-2xl md:text-3xl lg:text-4xl block text-center py-5">Product Details</h3>

  {product && (
    <div className="w-full flex flex-col md:flex-row rounded border overflow-hidden shadow-lg">
      <Image
        className="w-40 sm:w-48 md:w-56 max-w-xs sm:max-w-sm p-4 mx-auto object-cover"
        unoptimized
        width={0}
        height={0}
        src={product.image}
        alt="Product Image"
      />
      <div className="bg-emerald-300 flex flex-col justify-center w-full p-4">
        <h4 className="font-bold text-lg md:text-xl mb-2 line-clamp-2 h-[3.5rem] text-center">
          {product.title}
        </h4>

        <div className="flex items-center justify-center md:justify-start">
          {[...Array(5)].map((_, index) => (
            <svg
              key={index}
              className={`w-4 h-4 ${
                product.rating.rate >= index + 1 ? "text-yellow-300" : "text-gray-300"
              } me-1`}
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 22 20"
            >
              <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
            </svg>
          ))}
          <span className="ms-1 text-sm font-medium text-gray-500">{product.rating.rate}</span>
        </div>

        <div className="text-sm text-gray-500 underline pb-3 pt-1 text-center md:text-left">
          {product.rating.count} reviews
        </div>

        <p className="text-gray-700 text-sm md:text-base line-clamp-3">{product.description}</p>

        <div className="font-bold text-lg mt-3">
          Price: 
          <span className="text-sky-900 font-extrabold px-2">${product.price}</span>
        </div>

        <div className="font-bold mt-2">
          Category: 
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 ml-2">
            {product.category}
          </span>
        </div>
      </div>
    </div>
  )}
</div>

  )
}

export default page
