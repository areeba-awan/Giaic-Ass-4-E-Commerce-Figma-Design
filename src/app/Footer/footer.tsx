import Image from "next/image";

export default function Footer() {
  return (
    <>
      {/* Footer Section */}
      <footer className="bg-gray-200 py-10">
        <div className="container mx-auto px-6 sm:px-12 lg:px-16">
          <div className="flex flex-col md:flex-row  lg:flex-row items-start justify-between gap-8 lg:gap-0">
            {/* About Shop.co */}
            <div className="pl-8 lg:w-1/4">
              <h3 className="font-extrabold text-4xl mb-4 text-black hover:scale-y-150 hover:text-yellow-400">
                SHOP.CO
              </h3>
              <p className="text-gray-600 mb-4 text-balance ">
                We have clothes that suit your style and which you are proud to wear. From women to men.
              </p>
              <div className="flex space-x-4">
                <Image
                  className="w-6 h-6 border-2 border-transparent rounded-full  hover:border-pink-600 transition duration-300 hover:scale-150"
                  src="/twit1.png"
                  alt="twitter"
                  height={50}
                  width={50}
                />
                <Image
                  className="w-6 h-6 border-2 border-transparent rounded-full  hover:border-pink-600 transition duration-300 hover:scale-150"
                  src="/face1.png"
                  alt="facebook"
                  height={50}
                  width={50}
                />
                <Image
                  className="w-6 h-6 border-2 border-transparent rounded-full  hover:border-pink-600 transition duration-300 hover:scale-150"
                  src="/inst1.png"
                  alt="instagram"
                  height={50}
                  width={50}
                />
                <Image
                  className="w-6 h-6 border-2 border-transparent rounded-full   hover:border-pink-600 transition duration-300 hover:scale-150"
                  src="/git1.png"
                  alt="github"
                  height={50}
                  width={50}
                />
              </div>
            </div>

            {/* Links: Company, Help, FAQ, Resources */}
            <div className="flex flex-col md:flex-row lg:flex-row md:justify-evenly lg:justify-evenly lg:w-3/4 gap-8">
              {/* Company */}
              <div className="lg:w-1/4">
                <h3 className="font-bold text-lg mb-4 text-black hover:scale-y-150 hover:text-blue-600">COMPANY</h3>
                <ul className="space-y-2 text-gray-600">
                  <li className="hover:underline decoration-pink-500 hover:decoration-4 "><a href="#">About</a></li>
                  <li className="hover:underline decoration-pink-500 hover:decoration-4 "><a href="#">Features</a></li>
                  <li className="hover:underline decoration-pink-500 hover:decoration-4 "><a href="#">Works</a></li>
                  <li className="hover:underline decoration-pink-500 hover:decoration-4 "><a href="#">Career</a></li>
                </ul>
              </div>

              {/* Help */}
              <div className="lg:w-1/4">
                <h3 className="font-bold text-lg mb-4 text-black hover:scale-y-150 hover:text-blue-600">HELP</h3>
                <ul className="space-y-2 text-gray-600">
                  <li className="hover:underline decoration-pink-500 hover:decoration-4 "><a href="#">Customer Support</a></li>
                  <li className="hover:underline decoration-pink-500 hover:decoration-4 "><a href="#">Delivery Details</a></li>
                  <li className="hover:underline decoration-pink-500 hover:decoration-4 "><a href="#">Terms & Conditions</a></li>
                  <li className="hover:underline decoration-pink-500 hover:decoration-4 "><a href="#">Privacy Policy</a></li>
                </ul>
              </div>

              {/* FAQ */}
              <div className="lg:w-1/4">
                <h3 className="font-bold text-lg mb-4 text-black hover:scale-y-150 hover:text-blue-600">FAQ</h3>
                <ul className="space-y-2 text-gray-600">
                  <li className="hover:underline decoration-pink-500 hover:decoration-4 "><a href="#">Account</a></li>
                  <li className="hover:underline decoration-pink-500 hover:decoration-4 "><a href="#">Manage Deliveries</a></li>
                  <li className="hover:underline decoration-pink-500 hover:decoration-4 "><a href="#">Orders</a></li>
                  <li className="hover:underline decoration-pink-500 hover:decoration-4 "><a href="#">Payments</a></li>
                </ul>
              </div>

              {/* Resources */}
              <div className="lg:w-1/4">
                <h3 className="font-bold text-lg mb-4 text-black hover:scale-y-150 hover:text-blue-600">RESOURCES</h3>
                <ul className="space-y-2 text-gray-600">
                  <li className="hover:underline decoration-pink-500 hover:decoration-4 "><a href="#">Free eBooks</a></li>
                  <li className="hover:underline decoration-pink-500 hover:decoration-4 "><a href="#">Development Tutorial</a></li>
                  <li className="hover:underline decoration-pink-500 hover:decoration-4 "><a href="#">How to - Blog</a></li>
                  <li className="hover:underline decoration-pink-500 hover:decoration-4 "><a href="#">Youtube Playlist</a></li>
                </ul>
              </div>
            </div>

          </div>

          <div className="border-2 border-b-gray-300 w-11/12 mx-auto mt-8 "></div>

          <div className="mt-8 text-left text-gray-700 flex flex-col lg:flex-row items-center justify-between gap-4 lg:gap-0 hover:text-lime-700 font-bold">
            {/* Footer Text */}
            <p className="lg:w-auto hover:scale-y-150">Shop.co © 2000-2023, All Rights Reserved</p>

            {/* Payment Icons */}
            <div className="flex flex-wrap justify-center gap-4">
              <Image
                className="w-12 h-8 cursor-pointer hover:scale-125 border-2 border-transparent hover:border-purple-500 rounded-md transition duration-300"
                src="/visa1.png"
                alt="visacard"
                height={50}
                width={50}
              />
              <Image
                className="w-12 h-8 cursor-pointer hover:scale-125 border-2 border-transparent hover:border-purple-500 rounded-md transition duration-300"
                src="/mast1.png"
                alt="mastercard"
                height={50}
                width={50}
              />
              <Image
                className="w-12 h-5 mt-1 px-2 cursor-pointer hover:scale-125 border-2 border-transparent  hover:border-purple-500 rounded-md transition duration-300"
                src="/pypl1.png"
                alt="paypal"
                height={50}
                width={50}
              />
              <Image
                className="w-12 h-8 cursor-pointer hover:scale-125 border-2 border-transparent  hover:border-purple-500 rounded-md transition duration-300"
                src="/apay1.png"
                alt="applepay"
                height={50}
                width={50}
              />
              <Image
                className="w-12 h-8 cursor-pointer hover:scale-125 border-2 border-transparent  hover:border-purple-500 rounded-md transition duration-300"
                src="/gpay1.png"
                alt="gpay"
                height={50}
                width={50}
              />
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}