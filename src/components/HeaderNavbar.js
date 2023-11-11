import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import "swiper/css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const HeaderNavbar = () => {
  return (
    <div className="container mx-auto px-4 md:px-32 ">
      <Swiper
        spaceBetween={20}
        slidesPerView={15}
        breakpoints={{
          100: {
            slidesPerView: 4.5,
            spaceBetween: 10,
          },
          768: {
            slidesPerView: 7.5,
            spaceBetween: 15,
          },
          1024: {
            slidesPerView: 8.5,
            spaceBetween: 15,
          },
          1280: {
            slidesPerView: 15,
            spaceBetween: 20,
          },
        }}
      >
        <div className="flex justify-between items-center py-2 ">
          <SwiperSlide>
            <Link
              to="/"
              className="inline-flex items-center border-b-2 border-transparent px-1 pt-1 text-sm font-medium text-gray-600 hover:border-red-300 hover:text-gray-700"
            >
              Ballina
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link
              to="/link1"
              className="inline-flex items-center border-b-2 border-transparent px-1 pt-1 text-sm font-medium text-gray-600 hover:border-red-300 hover:text-gray-700"
            >
              Lajme
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link
              to="/link1"
              className="inline-flex items-center border-b-2 border-transparent px-1 pt-1 text-sm font-medium text-gray-600 hover:border-red-300 hover:text-gray-700"
            >
              Botë
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link
              to="/link1"
              className="inline-flex items-center border-b-2 border-transparent px-1 pt-1 text-sm font-medium text-gray-600 hover:border-red-300 hover:text-gray-700"
            >
              Ekonomi
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link
              to="/link1"
              className="inline-flex items-center border-b-2 border-transparent px-1 pt-1 text-sm font-medium text-gray-600 hover:border-red-300 hover:text-gray-700"
            >
              Sport
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link
              to="/link1"
              className="inline-flex items-center border-b-2 border-transparent px-1 pt-1 text-sm font-medium text-gray-600 hover:border-red-300 hover:text-gray-700"
            >
              Magazina
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link
              to="/link1"
              className="inline-flex items-center border-b-2 border-transparent px-1 pt-1 text-sm font-medium text-gray-600 hover:border-red-300 hover:text-gray-700"
            >
              Cult
            </Link>
          </SwiperSlide>

          <SwiperSlide>
            <Link
              to="/link1"
              className="inline-flex items-center border-b-2 border-transparent px-1 pt-1 text-sm font-medium text-gray-600 hover:border-red-300 hover:text-gray-700"
            >
              Femra
            </Link>
          </SwiperSlide>

          <SwiperSlide>
            <Link
              to="/link1"
              className="inline-flex items-center border-b-2 border-transparent px-1 pt-1 text-sm font-medium text-gray-600 hover:border-red-300 hover:text-gray-700"
            >
              Stili
            </Link>
          </SwiperSlide>

          <SwiperSlide>
            <Link
              to="/link1"
              className="inline-flex items-center border-b-2 border-transparent px-1 pt-1 text-sm font-medium text-gray-600 hover:border-red-300 hover:text-gray-700"
            >
              Shëndetësi
            </Link>
          </SwiperSlide>

          <SwiperSlide>
            <Link
              to="/link1"
              className="inline-flex items-center border-b-2 border-transparent px-1 pt-1 text-sm font-medium text-gray-600 hover:border-red-300 hover:text-gray-700"
            >
              Kuzhina
            </Link>
          </SwiperSlide>

          <SwiperSlide>
            <Link
              to="/link1"
              className="inline-flex items-center border-b-2 border-transparent px-1 pt-1 text-sm font-medium text-gray-600 hover:border-red-300 hover:text-gray-700"
            >
              Auto
            </Link>
          </SwiperSlide>

          <SwiperSlide>
            <Link
              to="/link1"
              className="inline-flex items-center border-b-2 border-transparent px-1 pt-1 text-sm font-medium text-gray-600 hover:border-red-300 hover:text-gray-700"
            >
              Teknologji
            </Link>
          </SwiperSlide>

          <SwiperSlide>
            <Link
              to="/link1"
              className="inline-flex items-center border-b-2 border-transparent px-1 pt-1 text-sm font-medium text-gray-600 hover:border-red-300 hover:text-gray-700"
            >
              Fun
            </Link>
          </SwiperSlide>

          <SwiperSlide>
            <Link
              to="/link1"
              className="inline-flex items-center border-b-2 border-transparent px-1 pt-1 text-sm font-medium text-gray-600 hover:border-red-300 hover:text-gray-700"
            >
              Video
            </Link>
          </SwiperSlide>
        </div>
      </Swiper>
    </div>
  );
};

export default HeaderNavbar;
