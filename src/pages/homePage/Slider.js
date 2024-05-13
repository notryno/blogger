import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import { Link } from "react-router-dom";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";

const Slider = () => {
  const slides = [
    {
      image:
        "https://images.pexels.com/photos/3060516/pexels-photo-3060516.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
    {
      image:
        "https://images.pexels.com/photos/1309373/pexels-photo-1309373.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
    {
      image:
        "https://images.pexels.com/photos/1381558/pexels-photo-1381558.jpeg",
    },
  ];

  return (
    <div className="bg-[#fb6719] flex flex-col md:flex-row justify-between p-8">
      {/* Description */}
      <div class="text-white max-w-lg p-2">
        <h2 class="text-3xl font-bold mb-4">Discover Life's Rich Tapestry</h2>
        <p class="text-justify">
          Welcome to our vibrant lifestyle blog, where every click opens a door
          to inspiration, creativity, and discovery. Immerse yourself in a world
          of diverse topics, from fashion trends to wellness wisdom, travel
          escapades to culinary delights, and everything in between. Our curated
          collection of articles offers a kaleidoscope of perspectives, inviting
          you to explore, learn, and embrace the beauty of everyday life. Join
          us on this journey as we celebrate the art of living fully and
          authentically.
        </p>
        <p class="text-justify mt-4">
          Dive into our carefully crafted content created by passionate writers
          and experts in various fields. Whether you're seeking practical
          advice, thoughtful insights, or simply a moment of inspiration, our
          blog is your go-to destination for enriching your lifestyle and
          expanding your horizons. Join our community of like-minded individuals
          who share a common passion for living life to the fullest. Let's
          embark on this journey together and embrace the richness of life's
          tapestry.
        </p>
        <div className="mt-6 flex items-center">
          <FontAwesomeIcon icon={faChevronRight} className="text-xl mr-2" />
          <Link to="/blog" className="text-xl font-semibold underline">
            Explore more blogs
          </Link>
        </div>
      </div>

      {/* Slider */}
      <div className=" md:w-1/2 p-2">
        <Swiper
          modules={[Navigation, Pagination]}
          loop
          autoplay={{ delay: 2000 }}
          slidesPerView={1}
          pagination={{ clickable: true }}
          navigation={{ clickable: true }}
        >
          {slides.map((slide, index) => (
            <SwiperSlide key={index}>
              <img src={slide.image} alt="" className="w-full h-auto" />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Slider;
