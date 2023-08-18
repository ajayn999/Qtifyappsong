import axios from "axios";
import React, { useEffect, useState } from "react";
import "./Songs.css";
import { MdChevronLeft, MdOutlineChevronRight } from "react-icons/md";
import Slider from "react-slick";

import { formatNumber } from "../../utils/FormatNumber";

const categories = [
  {
    id: 1,
    name: "All",
  },
  {
    id: 2,
    name: "Rock",
  },
  {
    id: 3,
    name: "Pop",
  },
  {
    id: 4,
    name: "Jazz",
  },
  {
    id: 5,
    name: "Blues",
  },
];
var settings = {
  dots: false,
  infinite: false,
  speed: 500,
  slidesToShow: 7,
  slidesToScroll: 7,
  initialSlide: 0,
  responsive: [
    {
      breakpoint: 1885,
      settings: {
        slidesToShow: 6,
        slidesToScroll: 6,
        infinite: true,
        initialSlide: 0,
      },
    },
    {
      breakpoint: 1624,
      settings: {
        slidesToShow: 5,
        slidesToScroll: 5,
        infinite: true,
        initialSlide: 0,
      },
    },
    {
      breakpoint: 1350,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 4,
        infinite: true,
        initialSlide: 0,
      },
    },
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        infinite: true,
        initialSlide: 0,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        initialSlide: 0,
      },
    },
  ],
};

const Songs = () => {
  const [songs, setSongs] = useState([]);

  const [sliderRef, setSliderRef] = useState(null);
  const [selectCategory, setSelectCategory] = useState("All");
  useEffect(() => {
    fetchSongs();
  }, [selectCategory]);

  async function fetchSongs() {
    try {
      const response = await axios.get(
        "https://qtify-backend-labs.crio.do/songs"
      );
      const data = await response.data;
      setSongs(data);
    } catch (error) {
      console.error(error);
    }
  }

  const handleCategory = (title) => {
    setSelectCategory(title);

    if(selectCategory === "All") {
        return songs
    }else {
        const filter = [...songs].filter(song => song.genre.label === selectCategory)
        console.log(filter);
        setSongs(filter)
    }

    
    
  };

  return (
    <div className="songs">
      <p className="song_title">Songs</p>
      <div className="category">
        {categories.map((cat, index) => {
          return (
            <button
              onClick={() => handleCategory(cat.name)}
              className={`${
                selectCategory === cat.name
                  ? "category_btn category_btn-active"
                  : "category_btn"
              }`}
              key={cat.id}
            >
              {cat.name}
            </button>
          );
        })}
      </div>
      <div className="slider">
        <div className="controls">
          <button className="prev_btn" onClick={sliderRef?.slickPrev}>
            <MdChevronLeft />
          </button>
          <button className="next_btn" onClick={sliderRef?.slickNext}>
            <MdOutlineChevronRight />
          </button>
        </div>

        <Slider ref={setSliderRef} {...settings}>
          {songs &&
            songs?.map((song, index) => {
              return (
                <div key={song?.id} className="card">
                  <div>
                    <img
                      src={song?.image}
                      alt={song?.title}
                      className="card_image"
                    />
                    <div className="card_body">
                      <span>{formatNumber(song?.likes)} Likes</span>
                    </div>
                  </div>

                  <div className="card_footer">
                    <p>{song?.title}</p>
                  </div>
                </div>
              );
            })}
        </Slider>
      </div>
    </div>
  );
};

export default Songs;
