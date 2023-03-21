// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

// import required modules
import { Autoplay, EffectCoverflow, Pagination } from "swiper";

import Qgis from '../../icons/Qgis';
import Excel from '../../icons/Excel';
import AutocadDWG from '../../icons/AutocadDWG';
import GoogleEarth from '../../icons/GoogleEarth';
import Laravel from '../../icons/Laravel';
import Leaflet from '../../icons/Leaflet';
import LogoReact from '../../icons/LogoReact';
import Mysql from '../../icons/Mysql';
import Python from '../../icons/Python';

import '../../css/SwiperCard.css';

export default function SwiperCard() {
  return (
    <>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={1}
        spaceBetween={10}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        breakpoints={{
          768: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
        }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={false}
        modules={[Autoplay, EffectCoverflow, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <a href="https://www.qgis.org/es/site/about/index.html" 
          target="_blank" className="colorSvg">
            <Qgis />
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <a href="https://support.microsoft.com/es-es/office/an%C3%A1lisis-de-datos-en-excel-3223aab8-f543-4fda-85ed-76bb0295ffc4" 
          target="_blank" className="colorSvg">
            <Excel />
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <a href="https://www.autodesk.es/products/autocad/overview?term=1-YEAR&tab=subscription&plc=ACDIST"
          target="_blank" className="colorSvg">
           <AutocadDWG /> 
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <a href="https://www.google.com/intl/es-419/earth/"
          target="_blank" className="colorSvg">
            <GoogleEarth />
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <a href="https://laravel.com/"
          target="_blank" className="colorSvg">
            <Laravel />
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <a href="https://leafletjs.com/" target="_blank" className="colorSvg">
            <Leaflet />
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <a href="https://es.reactjs.org/" target="_blank">
            <LogoReact />
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <a href="https://mappinggis.com/2019/09/mysql-y-gis-usa-mysql-como-una-base-de-datos-espacial/" target="_blank">
            <Mysql />
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <a href="https://mappinggis.com/2020/11/7-maneras-de-usar-python-en-qgis/" className="colorSvg" target="_blank">
            <Python />
          </a>
        </SwiperSlide>
      </Swiper>
    </>
  );
}