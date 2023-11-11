import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import { useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import {
  faAddressCard,
  faCircleChevronLeft,
  faCircleChevronRight,
  faClock,
  faLocationDot,
  faTag,
} from "@fortawesome/free-solid-svg-icons";
import { NewsList } from "./NewsList";

const JobsSection = () => {
  const swiperRef = useRef(null);

  const handlePrevClick = () => {
    if (swiperRef.current) {
      swiperRef.current.slidePrev();
    }
  };

  const handleNextClick = () => {
    if (swiperRef.current) {
      swiperRef.current.slideNext();
    }
  };

  const JobsList = [
    {
      icon: "https://jobs.telegrafi.com/storage/xMiwXwKh5UYADl68e3jIlLeddAubgYMRYR0w1xR4.png",
      name: "Smart Pharma",
      title: "Prezantues/e mjekësore",
      link: "https://jobs.telegrafi.com/job/prezantuese-mjekesore-full-time-6",
      category: "Shërbime Shëndetësore",
      location: "Prishtinë",
      openPositions: "1",
      date: "14",
    },
    {
      icon: "https://jobs.telegrafi.com/storage/thumbs/zvVm980cpLPucXWZgSTHSFxXHcsafKzaST7vFpXe_s-thumb.png",
      name: "FASAL",
      title: "Inxhinier i Makinerisë",
      link: "https://jobs.telegrafi.com/job/inxhinier-i-makinerise-full-time-4",
      category: "Inxhinieri",
      location: "Pejë",
      openPositions: "1",
      date: "8",
    },
    {
      icon: "https://jobs.telegrafi.com/storage/thumbs/zvVm980cpLPucXWZgSTHSFxXHcsafKzaST7vFpXe_s-thumb.png",
      name: "FASAL",
      title: "Inxhinier/e i/e ndërtimtarisë",
      link: "https://jobs.telegrafi.com/job/inxhiniere-ie-ndertimtarise-full-time-3-2",
      category: "Ndërtimtari",
      location: "Pejë",
      openPositions: "1",
      date: "25",
    },
    {
      icon: "https://jobs.telegrafi.com/storage/thumbs/zmbSfr6bhDuczr2jDhczj5OULImPC6JtNGrSnQ5d_s-thumb.png",
      name: "BauMarket l.l.c",
      title: "Specialist i vendosjes së produktit",
      link: "https://jobs.telegrafi.com/job/specialist-i-vendosjes-se-produktit-full-time",
      category: "Shitje",
      location: "Prishtinë",
      openPositions: "1",
      date: "13",
    },
    {
      icon: "https://jobs.telegrafi.com/storage/thumbs/zmbSfr6bhDuczr2jDhczj5OULImPC6JtNGrSnQ5d_s-thumb.png",
      name: "BauMarket l.l.c",
      title: "Analist i tregut dhe çmimeve",
      link: "https://jobs.telegrafi.com/job/analist-i-tregut-dhe-cmimeve-full-time",
      category: "Administratë",
      location: "Prishtinë",
      openPositions: "1",
      date: "13",
    },
    {
      icon: "https://jobs.telegrafi.com/storage/thumbs/8NgYD07MFHW2M7LrNKzeFFWQi3sB6mKptjcpRBDA_s-thumb.png",
      name: "Democracy Plus",
      title: "Thirrje për Aplikim: Bootcamp për edukim medial",
      link: "https://jobs.telegrafi.com/listings/thirrje-per-aplikim-bootcamp-per-edukim-medial",
      category: "Trajnime",
      location: "Kosovë",
      openPositions: "",
      date: "4",
    },
    {
      icon: "https://jobs.telegrafi.com/storage/thumbs/dsSreDknBF009M2ddaYYI5W8jjVM0aib1Z2TTm15_s-thumb.png",
      name: "Germanikos GmbH",
      title: "Infermierë/e",
      link: "https://jobs.telegrafi.com/job/teknike-mjekesore-full-time",
      category: "Shërbime Shëndetësore",
      location: "Kosovë",
      openPositions: "10",
      date: "26",
    },
  ];
  return (
    <div className="bg-gray-100">
      <section className="container mx-auto px-4 md:px-32 py-6">
        <div className="flex justify-between items-center pb-4">
          <div className="flex gap-4">
            <button className="bg-black text-white md:text-lg text-sm px-4  rounded-2xl">
              Jobs
            </button>
            <button className="border border-black  md:text-lg text-sm px-4  rounded-2xl hover:bg-black hover:text-white">
              Real Estate
            </button>
            <button className=" border border-black md:text-lg text-sm px-4 rounded-2xl hover:bg-black hover:text-white">
              Deals
            </button>
          </div>

          <div>
            <button onClick={handlePrevClick}>
              <FontAwesomeIcon
                icon={faCircleChevronLeft}
                size="2xl"
                className="mr-4"
              />
            </button>
            <button onClick={handleNextClick}>
              <FontAwesomeIcon icon={faCircleChevronRight} size="2xl" />
            </button>
          </div>
        </div>
        <Swiper
          spaceBetween={30}
          slidesPerView={5}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          modules={[Pagination, Autoplay, Navigation]}
          navigation={{
            prevEl: ".swiper-button-prev",
            nextEl: ".swiper-button-next",
          }}
          breakpoints={{
            100: {
              slidesPerView: 1.5,
              spaceBetween: 10,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 15,
            },
            1024: {
              slidesPerView: 2.5,
              spaceBetween: 10,
            },
            1280: {
              slidesPerView: 5,
              spaceBetween: 30,
            },
          }}
          onSwiper={(swiper) => (swiperRef.current = swiper)} // Save Swiper instance to the ref
        >
          {JobsList.map((jobs, index) => (
            <SwiperSlide key={index}>
              <div className="bg-white p-4  border rounded-lg w-56 h-72">
                <a href={jobs.link}>
                  <div className="flex items-center py-2 ">
                    <img src={jobs.icon} alt="" className="w-12 " />
                    <p className="text-base font-medium pl-2">{jobs.name}</p>
                  </div>
                  <h1 className=" text-base font-bold py-2 border-b border-black">
                    {jobs.title}
                  </h1>

                  <div className="flex items-center pt-2">
                    <FontAwesomeIcon icon={faTag} />
                    <p className="pl-3 text-sm">{jobs.category}</p>
                  </div>
                  <div className="flex items-center pt-2">
                    <FontAwesomeIcon icon={faLocationDot} />
                    <p className="pl-3 text-sm">{jobs.location}</p>
                  </div>
                  <div className="flex items-center pt-2">
                    <FontAwesomeIcon icon={faAddressCard} />
                    <p className="pl-2 text-sm">
                      Pozita te lira: {jobs.openPositions}
                    </p>
                  </div>
                  <div className="flex items-center py-2">
                    <FontAwesomeIcon icon={faClock} />
                    <p className="pl-2 text-sm">{jobs.date} ditë të mbetura</p>
                  </div>
                </a>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>
    </div>
  );
};

export default JobsSection;
