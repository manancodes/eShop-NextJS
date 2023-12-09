import React, { useState } from "react";
import Image from "next/image";
import StarRatings from "react-star-ratings";

const ProductImages = [
  {
    item: "img1",
    src: "https://rukminim2.flixcart.com/image/832/832/xif0q/television/u/a/k/oled65c2psc-lg-original-imaggyy6jvwbhc9h.jpeg?q=70",
  },
  {
    item: "img2",
    src: "https://rukminim2.flixcart.com/image/832/832/xif0q/television/p/7/6/oled65c2psc-lg-original-imaggyy6kdxmcxyh.jpeg?q=70",
  },
  {
    item: "img3",
    src: "https://rukminim2.flixcart.com/image/832/832/xif0q/television/p/5/z/oled65c2psc-lg-original-imaggyy6e38rfggg.jpeg?q=70",
  },
  {
    item: "img4",
    src: "https://rukminim2.flixcart.com/image/832/832/xif0q/television/i/c/i/oled55c24la-lg-original-imaggyy5pnxfz3vm.jpeg?q=70",
  },
];
const Description = [
  " α9 Gen5 AI Processor with AI Picture Pro & AI 4K Upscaling ",
  "Pixel Dimming, Perfect Black, 100% Color Fidelity & Color Volume",
  " Hands-free Voice Control, Always Ready ",
  "Dolby Vision IQ with Precision Detail, Dolby Atmos, Filmmaker Mode ",
  "Eye Comfort Display: Low-Blue Light, Flicker-Free",
];

const SKUs = [
  "106 cm (42)",
  "121 cm (48)",
  "139 cm (55)",
  "164 cm (65)",
  "196 cm (77)",
  "210 cm (83)",
];
const ProductPage = () => {
  const [activeImg, setActiveImage] = useState(0);
  const [amount, setAmount] = useState(1);
  const [selectedDiv, setSelectedDiv] = useState(0);

  return (
    <div className="flex flex-col justify-between lg:flex-row gap-6 lg:gap-0">
      <div className="flex flex-col lg:flex-row flex-1 gap-6 lg:gap-0">
        <div className="flex flex-row lg:flex-col gap-8 order-2 lg:order-1 overflow-scroll thumbnails">
          {ProductImages.map((image, index) => {
            return (
              <div
                key={image.item}
                className="border relative flex-none flex justify-center items-center w-32 lg:w-32 xl:w-44 h-32 "
                style={{
                  borderColor: index === activeImg ? "#E73C17" : "#F0F0F0",
                }}
              >
                <Image
                  src={image.src}
                  alt=""
                  fill={true}
                  objectFit="contain"
                  className="rounded-md p-8 cursor-pointer"
                  onClick={() => setActiveImage(index)}
                />
              </div>
            );
          })}
        </div>

        <div className="flex-1 mx-0 lg:ml-8 order-1 lg:order-2">
          <div
            className="relative flex flex-row justify-center items-center h-[400px] lg:h-[660px] overflow-hidden "
            style={{ background: "#f1f1f1" }}
          >
            <Image
              src={ProductImages[activeImg].src}
              alt=""
              fill={true}
              objectFit="contain"
              style={{
                paddingLeft: "15%",
                paddingRight: "15%",
                paddingBottom: "16px",
                paddingTop: "16px",
              }}
              className="aspect-square  object-cover rounded-xl"
            />
          </div>
          <div className="text-neutral-500 text-xs lg:text-sm font-light mt-2 lg:mt-8">
            *LG C2 42 (106cm) 4K Smart OLED evo TV
          </div>
        </div>
      </div>
      {/* ABOUT */}
      <div className="flex flex-col gap-4 p-0 lg:px-6 lg:w-5/12 w-full">
        <div>
          <p className="font-extralight leading-loose lg:leading-loose text-sm md:text-base lg:text-lg">
            <span className="font-light">Brand:</span> LG
          </p>
          <p className="font-extralight leading-loose lg:leading-loose text-sm md:text-base lg:text-lg">
            <span className="font-light">Model:</span> OLED42C2PSA
          </p>
          <p className="font-extralight leading-loose lg:leading-loose text-sm md:text-base lg:text-lg">
            <span className="font-light">Availability:</span> Only 2 in Stock
          </p>
          <h1 className="text-xl sm:text-2xl md:text-3xl font-normal mt-2">
            LG C2 42 (106cm) 4K SMART OLED EVO TV | WEBOS | CINEMA HDR
          </h1>
        </div>
        {/* For large screen */}
        <div className="hidden lg:block">
          <StarRatings
            rating={4}
            starEmptyColor=" #F4F5F8"
            starRatedColor="#E73C17"
            starDimension="30px"
            starSpacing="5px"
            numberOfStars={5}
            name="rating"
            className="hidden"
          />
        </div>
        {/* For small screen */}
        <div className="block lg:hidden">
          <StarRatings
            rating={4}
            starEmptyColor=" #F4F5F8"
            starRatedColor="#E73C17"
            starDimension="20px"
            starSpacing="2px"
            numberOfStars={5}
            name="rating"
            className="hidden"
          />
        </div>

        <ul className="text-gray-700 list-disc ml-3.5 font-light text-sm md:text-base lg:text-lg">
          {Description.map((item, index) => (
            <li key={index} className="mb-2">
              {item}
            </li>
          ))}
        </ul>
        <hr />
        <div className="flex flex-wrap">
          {SKUs.map((text, index) => (
            <div
              key={index}
              onClick={() => setSelectedDiv(index)}
              className={
                "h-10 lg:h-14 flex items-center justify-center font-light flex-grow w-1/4 border p-4 m-2 cursor-pointer text-center text-xs md:text-base"
              }
              style={{
                border:
                  index === selectedDiv
                    ? "1px solid #e73c17"
                    : "1px solid white",
                color: index === selectedDiv ? "#e73c17" : "#6F6F6F",
              }}
            >
              {text}
            </div>
          ))}
        </div>
        <hr />
        <div>
          <p className="text-xs md:text-base font-light">
            USD(incl. of all taxes):
          </p>
          <p className="text-xl sm:text-2xl md:text-3xl font-light mt-2">
            $600.72 &nbsp;
            <s className=" text-neutral-300 text-sm sm:text-base md:text-lg lg:text-xl font-light">
              $800.00
            </s>
          </p>
        </div>
        <div className="flex flex-row flex-wrap items-center gap-2 lg:gap-6">
          <div className="flex flex-row items-center">
            <button
              className="text-xl md:text-2xl flex justify-center items-center h-10 w-10 md:h-14 md:w-14 border text-black"
              onClick={() => setAmount((prev) => prev - 1)}
            >
              -
            </button>
            <div className="text-lg md:text-2xl flex justify-center items-center h-10 w-10 md:h-14 md:w-14 border border-r-0 border-l-0 text-black">
              {amount}
            </div>
            <button
              className="text-xl md:text-2xl flex justify-center items-center h-10 w-10 md:h-14 md:w-14 border text-black "
              onClick={() => setAmount((prev) => prev + 1)}
            >
              +
            </button>
          </div>
          <button
            className="text-sm md:text-base h-10 md:h-14 w-32 md:w-44 bg-violet-800 text-white "
            style={{
              background: "#e73c17",
            }}
          >
            Buy Now
          </button>
          <button
            className="text-sm md:text-base h-10 md:h-14 w-32 md:w-44 border text-white "
            style={{
              border: "1px solid #e73c17",
              color: "#e73c17",
            }}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
