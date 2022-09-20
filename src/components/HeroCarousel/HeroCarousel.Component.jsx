import React, { useState } from 'react';
import HeroSlider from "react-slick";
import { NextArrow, PrevArrow } from './Arrows.Component';

const HeroCarousel = () => {

    const [images, setImages] = useState([
        {
            "adult": false,
            "backdrop_path": "/2RSirqZG949GuRwN38MYCIGG4Od.jpg",
            "genre_ids": [
                53
            ],
            "id": 985939,
            "original_language": "en",
            "original_title": "Fall",
            "overview": "For best friends Becky and Hunter, life is all about conquering fears and pushing limits. But after they climb 2,000 feet to the top of a remote, abandoned radio tower, they find themselves stranded with no way down. Now Becky and Hunter’s expert climbing skills will be put to the ultimate test as they desperately fight to survive the elements, a lack of supplies, and vertigo-inducing heights",
            "popularity": 9320.962,
            "poster_path": "/9f5sIJEgvUpFv0ozfA6TurG4j22.jpg",
            "release_date": "2022-08-11",
            "title": "Fall",
            "video": false,
            "vote_average": 7.4,
            "vote_count": 658
        },
        {
            "adult": false,
            "backdrop_path": "/1n7ZGr6WeDOW4rFiQKmFel8baWH.jpg",
            "genre_ids": [
                12,
                18,
                27
            ],
            "id": 760741,
            "original_language": "en",
            "original_title": "Beast",
            "overview": "A recently widowed man and his two teenage daughters travel to a game reserve in South Africa. However, their journey of healing soon turns into a fight for survival when a bloodthirsty lion starts to stalk them.",
            "popularity": 7086.027,
            "poster_path": "/iRV0IB5xQeOymuGGUBarTecQVAl.jpg",
            "release_date": "2022-08-11",
            "title": "Beast",
            "video": false,
            "vote_average": 7.1,
            "vote_count": 337
        },

    ]);

    const settingsLG = {
        arrows: true,
        slidesToShow: 1,
        infinite: true,
        slideToScroll: 1,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 4000,
        cssEase: "linear",
    };

    const settings = {
        arrows: true,
        slidesToShow: 1,
        infinite: true,
        slideToScroll: 1,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 4000,
        cssEase: "linear",
    };

    return (
        <>
            <div className="lg:hidden">
                <HeroSlider {...settings}>
                    {images.map((images, index) => (
                        <div className="w-full h-56 md:h-80" key={index}>
                            <img
                                src={`https://image.tmdb.org/t/p/original${images.backdrop_path}`}
                                alt="Hero Banner"
                                className="w-full h-full rounded-md object-cover"
                            />
                        </div>
                    ))}
                </HeroSlider>
            </div>
            <div className="hidden lg:block">
                <HeroSlider {...settingsLG}>
                    {images.map((images, index) => (
                        <div className="w-full h-96 px-2 py-3" key={index}>
                            <img
                                src={`https://image.tmdb.org/t/p/original${images.backdrop_path}`}
                                alt="Hero Banner"
                                className="w-full h-full rounded-md object-cover"
                            />
                        </div>
                    ))}
                </HeroSlider>
            </div>
        </>
    )
}

export default HeroCarousel;