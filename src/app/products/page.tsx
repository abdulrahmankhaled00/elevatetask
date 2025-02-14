
async function page() {
  const response= await fetch('https://fakestoreapi.com/products')
  const data= await response.json()
  console.log(data);
    return (
      <div>
        <h1>Products</h1>
      </div>
    )
  }
  
  export default page
  