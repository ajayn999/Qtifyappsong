import React, { useState } from "react";
import Card from "../card/Card";
import "./Albums.css";
import Slider from "react-slick";
import Loading from "../../utils/loading/Loading";
import Error from "../../utils/error/Error";
import { MdChevronLeft, MdOutlineChevronRight } from "react-icons/md";

const Albums = ({ albums, title, isLoading, isError, isAlbum}) => {
  const [open, setOpen] = useState(false);
  const [sliderRef, setSliderRef] = useState(null);

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

  return (
    <div className="album">
      <div className="album_header">
        <p className="album_header-title">{title}</p>
        {!open ? (
          <button
            onClick={() => setOpen((prev) => !prev)}
            className="album_header-btn"
          >
            Collapse
          </button>
        ) : (
          <button onClick={() => setOpen(false)} className="album_header-btn">
            Show All
          </button>
        )}
      </div>

      <div className="slider">
        {!open ? (
          <div>
            <div className="controls">
              <button className="prev_btn" onClick={sliderRef?.slickPrev}>
                <MdChevronLeft />
              </button>
              <button className="next_btn" onClick={sliderRef?.slickNext}>
                <MdOutlineChevronRight />
              </button>
            </div>
            <Slider ref={setSliderRef} {...settings}>
              {albums &&
                albums?.map((album, index) => {
                  return <Card key={album.id} album={album} />;
                })}
            </Slider>
          </div>
        ) : (
          <div className="grid">
            {/* <Slider {...settings}> */}
            {albums &&
              albums?.map((album) => {
                return <Card key={album.id} album={album} isAlbum={isAlbum} />;
              })}
            {/* </Slider> */}
          </div>
        )}
        {isLoading && <Loading />}
        {isError && <Error />}
      </div>
    </div>
  );
};

export default Albums;
