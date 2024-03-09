import React from "react"
import "react-responsive-carousel/lib/styles/carousel.min.css" // requires a loader
import { Carousel } from "react-responsive-carousel"
import styled from "styled-components"

const CarouselContainer = styled.div`
  && {
    .carousel .control-dots {
      position: absolute;
      margin: 10px 0;
      padding: 0;
      text-align: center;
      bottom: 10px;
      right: auto;
      width: 100%;
      height: 8px;
    }
    .carousel .control-dots li:hover {
      opacity: 0.3;
    }
    .carousel.carousel-slider {
      height: 100%;
    }
    && .carousel .slider .slide {
      background: transparent !important;
      div > span {
        width: 100% !important;
      }
      img {ncbvx;,w:
        height: 100% !important;
        width: 100% !important;
      }
    }
  }
`

const indicatorStyles = {
  display: "inline-block",
  margin: "0 8px",
  height: "9.6px",
  width: "9.6px",
  backgroundColor: "#ffffff",
  borderRadius: "100%",
  bottom: "12px",
  cursor: "pointer",
}

const renderIndicator = (onClickHandler, isSelected, index) =>
  isSelected ? (
    <li
      style={{
        ...indicatorStyles,
        backgroundColor: "#BD0033",
        opacity: 1,
      }}
      className="h-full w-full"
    />
  ) : (
    <li
      style={indicatorStyles}
      onClick={onClickHandler}
      onKeyDown={onClickHandler}
      value={index}
      key={index}
      aria-hidden
      className="h-full w-full"
    />
  )

const settings = {
  autoPlay: true,
  showArrows: false,
  showThumbs: false,
  showStatus: false,
  infiniteLoop: true,
  renderIndicator,
  interval: 3000,
  stopOnHover: true,
}

const CustomizedCarousel = ({ children, showIndicators }) => {
  return (
    <CarouselContainer className="h-full w-full">
      <Carousel
        className="h-full w-full"
        {...settings}
        showIndicators={showIndicators}
      >
        {children}
      </Carousel>
    </CarouselContainer>
  )
}

export default CustomizedCarousel
