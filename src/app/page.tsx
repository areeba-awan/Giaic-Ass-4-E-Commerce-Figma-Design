import Image from "next/image";

export default function Home() {
  return (
    <>
    <div>
          {/* Hero Section */}
            <div className="bg-customGray">
            <div className="container mx-auto px-6 py-10 flex flex-col md:flex-row items-center">

{/* Text Content */}
<div className="md:w-1/2 space-y-6">
  <h1 className="text-3xl md:text-5xl font-extrabold text-black leading-tight hover:scale-y-125 hover:text-purple-400">
    FIND CLOTHES <br />
    THAT MATCHES <br />
    YOUR STYLE
  </h1>
  <p className="text-gray-600 text-base md:text-lg">
    Browse through our diverse range of meticulously crafted garments, designed to bring out your individuality and cater to your sense of style.
  </p>
  
  <button className="bg-black text-white px-12 py-2 rounded-full shadow-lg hover:bg-gray-800 transition duration-300 hover:scale-125 hover:text-orange-300 text-xl font-bold ml-6">
    Shop Now
  </button>

  {/* Stats Section */}
  <div className="mt-8 flex flex-col sm:flex-row justify-between text-center sm:text-left">
    <div className="mb-4 sm:mb-0">
      <h2 className="text-2xl font-bold text-black hover:scale-125 hover:text-blue-700">200+</h2>
      <p className="text-gray-600 font-bold hover:text-green-600 hover:scale-125">International Brands</p>
    </div>
    <div className="mb-4 sm:mb-0">
      <h2 className="text-2xl font-bold text-black hover:scale-125 hover:text-blue-700">2,000+</h2>
      <p className="text-gray-600 font-bold hover:text-green-600 hover:scale-125">High-Quality Products</p>
    </div>
    <div>
      <h2 className="text-2xl font-bold text-black hover:scale-125 hover:text-blue-700">30,000+</h2>
      <p className="text-gray-600 font-bold hover:text-green-600 hover:scale-125">Happy Customers</p>
    </div>
  </div>
</div>

{/* Image Section */}
<div className="relative md:w-1/2 mt-10 md:mt-0">
  {/* Main Image */}
  <Image
    className="cursor-pointer hover:scale-x-110 pr-20 md:pr-0 lg:pr-0"
    src="/fashon1.png"
    alt="Fashion Image"
    height={800}
    width={800}
  />

  {/* Left Star Image */}
  <Image
    className="absolute animate-spin-slow mr-14 top-1 md:mr-12 lg:mr-12 md:top-8 lg:top-8 right-0 transform -translate-y-1/2 md:h-12 md:w-12 lg:h-12 lg:w-12 cursor-pointer"
    src="/star1.png"
    alt="Star Left"
    height={50}
    width={50}
  />

  {/* Right Star Image */}
  <Image
    className="absolute animate-spin-slow ml-12 top-1/2 md:ml-72 lg:ml-72  md:top-1/2 lg:-1/2 left-0 transform -translate-y-1/2 h-8 w-8 cursor-pointer transition-transform duration-500"
    src="/star2.png"
    alt="Star Right"
    height={50}
    width={50}
  />
</div>

</div>

</div>


{/* Brands Section */}
<div className="bg-black py-8">
  <div className="container mx-auto px-6 sm:px-12 md:px-16 lg:px-20">
    <div className="flex flex-wrap justify-center items-center gap-6">
      <Image
        className="cursor-pointer hover:scale-125 border-2 border-transparent hover:border-yellow-500 rounded-md transition duration-300 p-2"
        src="/ver1.png"
        alt="vercase"
        height={150}
        width={150}
      />
      <Image
        className="cursor-pointer hover:scale-125 border-2 border-transparent hover:border-yellow-500 rounded-md transition duration-300 p-2"
        src="/zar1.png"
        alt="zara"
        height={80}
        width={80}
      />
      <Image
        className="mt-1 px-2 cursor-pointer hover:scale-125 border-2 border-transparent hover:border-yellow-500 rounded-md transition duration-300 p-2"
        src="/guc1.png"
        alt="gucci"
        height={150}
        width={150}
      />
      <Image
        className="cursor-pointer hover:scale-125 border-2 border-transparent hover:border-yellow-500 rounded-md transition duration-300 p-2"
        src="/pra1.png"
        alt="parada"
        height={150}
        width={150}
      />
      <Image
        className="cursor-pointer hover:scale-125 border-2 border-transparent hover:border-yellow-500 rounded-md transition duration-300 p-2"
        src="/cal1.png"
        alt="calvinkelin"
        height={150}
        width={150}
      />
    </div>
  </div>
</div>

                                                    

                                                    <div className="bg-gray-100">
                                                    {/* New Arrivals Section */}
                                                    <div className="container mx-auto py-10">
                                                    <h2 className=" text-4xl md:text-5xl lg:text-5xl font-extrabold text-black text-center mb-6 hover:text-pink-500                                          hover:scale-y-150  md:hover:scale-x-150 lg:hover:scale-x-150">NEW ARRIVALS</h2>
                                                    <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                                                    {/* Product Card */}
                                                    {[
                                                    { name: "T-shirt with Tape Details", price: 120, image: "/tshirt1.png" },
                                                    { name: "Skinny Fit Jeans", price: 240, discount: 260, image: "/jean1.png" },
                                                    { name: "Checkered Shirt", price: 180, image: "/check1.png" },
                                                    { name: "Sleeve Striped T-shirt", price: 130, discount: 160, image: "/tshirt2.png" },
                                                    ].map((product, index) => (
                                                    <div key={index} className="bg-white rounded-lg p-4 shadow-lg text-black">
                                                    <Image
                                                    src={product.image}
                                                    alt={product.name}
                                                    height={250}
                                                    width={250}
                                                    className=" w-full object-cover rounded hover:scale-110 " />
                                                    <h3 className="mt-4 text-lg font-bold  hover:text-blue-600 hover:scale-y-150">{product.name}</h3>
                                                    <div className="flex items-center mt-2 space-x-2">
                                                    <p className="text-xl font-bold hover:text-red-600 hover:scale-y-150">${product.price}</p>
                                                    {product.discount && <p className="text-sm line-through text-gray-500">${product.discount}</p>}
                                                    </div>
                                                    </div>
                                                    ))}
                                                    </div>
                                                    <div className="flex justify-center mt-8">
                                                    <button className="bg-white text-black px-16 py-2 rounded-full font-bold hover:scale-125                                           hover:text-blue-500 border-2 border-gray-200 ">View All</button>
                                                    </div>
                                                    </div>

                                                    {/* Top Selling Section */}
                                                    <div className="container mx-auto py-10">
                                                    <h2 className=" text-4xl md:text-5xl lg:text-5xl text-black text-center mb-6 hover:scale-y-150 md:hover:scale-x-150 lg:hover:scale-x-150 hover:text-pink-500                                           font-extrabold  ">TOP SELLING</h2>
                                                    <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-black">
                                                    {[
                                                    { name: "Vertical Striped Shirt", price: 212, discount: 232, image: "/green1.png" },
                                                    { name: "Orange Graphic T-shirt", price: 145, image: "/orange1.png" },
                                                    { name: "Loose Fit Bermuda Shorts", price: 80, image: "/short1.png" },
                                                    { name: "Faded Skinny Jeans", price: 210, image: "/black1.png" },
                                                    ].map((product, index) => (
                                                    <div key={index} className="bg-white rounded-lg p-4 shadow-lg">
                                                    <Image
                                                    src={product.image}
                                                    alt={product.name}
                                                    height={250}
                                                    width={250}
                                                    className="w-full object-cover rounded hover:scale-110" />
                                          
                                                    <h3 className="mt-4 text-lg font-bold  hover:text-blue-600 hover:scale-y-150">{product.name}</h3>
                                                    <div className="flex items-center mt-2 space-x-2">
                                                    <p className="text-xl font-bold hover:text-red-600 hover:scale-y-150">${product.price}</p>
                                                    {product.discount && <p className="text-sm line-through text-gray-500">${product.discount}</p>}
                                                    </div>
                                                    </div>
                                                    ))}
                                                    </div>
                                                    <div className="flex justify-center mt-8">
                                                    <button className="bg-white text-black px-16 py-2 rounded-full font-bold hover:scale-125                                           hover:text-blue-500 border-2 border-gray-200 ">View All</button>
                                                    </div>
                                                    </div>

                                                     {/* Browse by Dress Style */}
<div className="bg-customGray flex flex-col rounded-lg mx-4 md:mx-8 lg:mx-12 xl:mx-20">
  <h2 className=" text-3xl md:text-5xl lg:text-5xl text-black text-center mt-8 hover:scale-x-125 hover:text-pink-500 font-extrabold">
    BROWSE BY DRESS STYLE
  </h2>

  {/* First Row of Images */}
  <div className="flex flex-col sm:flex-row mt-8 space-x-0 sm:space-x-10 sm:space-y-0 space-y-6 sm:mt-10">
    <Image
      className="cursor-pointer hover:scale-110 rounded-lg mx-auto sm:ml-14"
      src="/casual1.png"
      alt="casual"
      height={300}
      width={400}
    />
    <Image
      className="cursor-pointer hover:scale-110 rounded-lg mx-auto h-[220px] w-[300px] md:h-[300px] md:w-[800px] lg:h-[300px] lg:w-[800px]"
      src="/formal1.png"
      alt="formal"
      height={300}
      width={800}
    />
  </div>

  {/* Second Row of Images */}
  <div className="flex flex-col sm:flex-row mt-8 mb-8 space-x-0 sm:space-x-10 sm:space-y-0 space-y-6 sm:mt-10">
    <Image
      className="cursor-pointer hover:scale-110 rounded-lg mx-auto h-[220px] w-[300px] md:h-[300px] md:w-[800px] lg:h-[300px] lg:w-[800px]"
      src="/party1.png"
      alt="party"
      height={300}
      width={800}
    />
    <Image
      className="cursor-pointer hover:scale-110 rounded-lg mx-auto"
      src="/gym1.png"
      alt="gym"
      height={300}
      width={400}
    />
  </div>
</div>

                                            
                                              
                                                      </div>


                                                      <div className="bg-gray-50">
                                                      {/* Happy Customers Section */}
                                                      <div className="container mx-auto py-10">
                                                      <h2 className=" text-4xl md:text-5xl lg:text-5xl font-bold text-black text-center mb-10 hover:text-pink-500 hover:scale-y-150                                               ">OUR HAPPY CUSTOMERS</h2>
                                                      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-black hover:text-blue-500">
                                                      {[
                                                      {
                                                      name: "Sarah M.",
                                                      rating: 5,
                                                      review:
                                                      "I'm blown away by the quality and style of the clothes I received from Shop.co. From casual wear to                                               elegant dresses, every piece I've bought has exceeded my expectations.",
                                                        
                                                      },
                                                      {
                                                      name: "Alex K.",
                                                      rating: 5,
                                                      review:
                                                      "Finding clothes that align with my personal style used to be a challenge until I discovered Shop.co.                                               The range of options they offer is truly remarkable, catering to a variety of tastes and occasions.",
                                                      },
                                                      {
                                                      name: "James L.",
                                                      rating: 5,
                                                      review:
                                                      "As someone who's always on the lookout for unique fashion pieces, I'm thrilled to have stumbled upon                                               Shop.co. The selection of clothes is not only diverse but also on-point with the latest trends.",
                                                      },
                                                      ].map((customer, index) => (
                                                      <div key={index} className="bg-white rounded-lg p-6 shadow-md">
                                                      <div className="flex items-center mb-4">
                                                      <div className="flex items-center text-yellow-500">
                                                      {Array.from({ length: customer.rating }, (_, i) => (
                                                      <span key={i}>&#9733;</span>
                                                      ))}
                                                      </div>
                                                      <span className="text-green-600 text-sm ml-2 hover:scale-y-150 font-bold">✔ Verified</span>
                                                      </div>
                                                      <h3 className="font-bold text-lg mb-2 hover:scale-y-150">{customer.name}</h3>
                                                      <p className="text-gray-600">{customer.review}</p>
                                                      </div>
                                                      ))}
                                                      </div>
                                                      </div>

  {/* Stay Updated Section */}
  <div className="bg-black md:py-6 lg:py-6 flex flex-col md:flex-row lg:flex-row md:mx-8 lg:mx-8 rounded-3xl">
  <div className="w-full text-center md:text-left lg:text-left md:ml-8 lg:ml-8">
  <h2 className="text-white text-xl sm:text-2xl md:text-3xl lg:text-3xl font-bold mt-2 hover:text-violet-500 hover:scale-y-125 md:hover:scale-y-150 lg:hover:scale-y-150">
    STAY UPTO DATE ABOUT <br /> OUR LATEST OFFERS
  </h2>
</div>
                                                
<div className="flex flex-col md:flex-col lg:flex-col justify-center items-center mr-8 ">
<div className="relative w-[300px] md:w-[600px] lg:w-[600px] mb-2 ml-8 md:ml-0 lg:ml-0 hover:scale-105 transition-transform duration-200">
  {/* Envelope Icon */}
  <Image
    src="/env1.png"
    alt="Envelope Icon"
    height={50}
    width={50}
    className="absolute left-4 top-1/2 transform -translate-y-1/2 w-6 h-6 pointer-events-none"
  />
  {/* Input Field */}
  <input
    type="email"
    placeholder="Enter your email address"
    className="pl-12 pr-4 py-2 w-full text-black rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
  />
</div>


<button className="bg-white text-black px-1 py-2 w-[300px] md:w-[600px] lg:w-[600px] mb-2 ml-8 md:ml-0 lg:ml-0 rounded-full font-semibold hover:text-violet-500 hover:scale-x-110 border-2 border-blue-500">
    Subscribe to Newsletter
</button>
</div>
                                                      
</div>
                                                  
</div>



      </div>
    </>
  );
}