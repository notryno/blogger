import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination} from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';

const Slider = () => {
    const slides = [
        {
            image: "https://images.pexels.com/photos/3060516/pexels-photo-3060516.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        },
        {
            image: "https://images.pexels.com/photos/1309373/pexels-photo-1309373.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        },
        {
            image: "https://images.pexels.com/photos/1381558/pexels-photo-1381558.jpeg",
        }
    ];

    return (
        <div className="bg-[#fb6719] flex flex-col md:flex-row justify-between p-8">
            {/* Description */}
            <div className="text-white max-w-md p-2">
                <h2 className="text-3xl font-bold mb-4">Bloggers</h2>
                <p>
                    Website design inspiration. Discover the best website designs of the world.
                    Awwwards recognizes the talent and effort of the best designers,
                    web developers, and digital agencies.
                </p>
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
