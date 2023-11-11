import { NewsList } from "../components/NewsList";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import "swiper/css";
import { useSwiper } from "swiper/react";
import { useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleChevronLeft,
  faCircleChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import JobsSection from "../components/JobsSection";

const Home = () => {
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

  const TopLajme = NewsList.filter(
    (news) => news.category === "Lajme" || "Në fokus"
  );
  const NeFokus = NewsList.filter((news) => news.category === "Në fokus");
  const NeTrend = NewsList.filter((news) => news.category === "Në Trend");
  const Lajme = NewsList.filter((news) => news.category === "Lajme");
  const Bote = NewsList.filter((news) => news.category === "Botë");
  const Sport = NewsList.filter((news) => news.category === "Sport");

  return (
    <div className="">
      {/* header section */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-8 container mx-auto px-4 md:px-32 py-6">
        <div className="col-span-1 ">
          <h1 className="text-3xl font-bold text-gray-400 pb-4">
            Liga e Konferencës
          </h1>
          <img
            src="https://telegrafi.com/wp-content/uploads/2023/11/ilir-daja-380x233.jpg"
            alt=""
            className="rounded-lg w-full "
          />
          <a href="https://telegrafi.com/daja-deklarohet-rreth-barazimit-te-ballkanit-ne-udhetim-te-astana/">
            <h1 className="text-xl font-medium hover:underline">
              Daja deklarohet rreth barazimit të Ballkanit në udhëtim te Astana
            </h1>
            <p className="text-green-600 text-lg py-2">Ligat e tjera</p>
          </a>

          <hr />

          <a href="https://telegrafi.com/gripshi-na-mungoi-vetem-goli-loja-e-mire-e-jona-jashte-fushe/">
            <h1 className="text-xl font-medium pt-2 hover:underline">
              Gripshi: Na mungoi vetëm goli, loja më e mirë e jona jashtë
              shtëpisë
            </h1>
            <p className="text-green-600 text-lg py-2">Ligat e tjera</p>
          </a>

          <hr />

          <a href="https://telegrafi.com/notat-e-lojtareve-astana-0-0-ballkani-dellova-jashanica-gripshi-dhe-kryeziu-te-miret/">
            <h1 className="text-xl font-medium pt-2 hover:underline">
              Notat e lojtarëve, Astana 0-0 Ballkani: Dellova, Jashanica,
              Gripshi dhe Kryeziu më të mirët
            </h1>
            <p className="text-green-600 text-lg py-2">Ligat e tjera</p>
          </a>

          <hr />
        </div>
        <div className="col-span-2">
          <h1 className="text-3xl font-bold text-gray-400 pb-4">
            Sulmi terrorist në veri
          </h1>
          <img
            src="https://telegrafi.com/wp-content/uploads/2023/11/381013995_1029838758212803_7956616368183364680_n-1-1-1130x635-1-780x439.png"
            alt=""
            className="rounded-lg w-full"
          />
          <a href="https://telegrafi.com/ne-sulmin-ne-banjske-plumba-te-rinj-dhe-mortaja-te-sapo-riparuara-ne-serbi/">
            <h1 className="text-3xl font-medium hover:underline">
              Fabrika e armëve në Serbi pranon se granatahedhës të konfiskuar në
              Banjskë janë në arkivat e saj të prodhimit
            </h1>
            <h1 className="text-green-600 text-lg py-2">Kosovë</h1>

            <hr />

            <h1 className="text-xl font-medium pt-2 hover:underline">
              Në sulmin në Banjskë, plumba të rinj dhe mortaja të sapo-riparuara
              në Serbi
            </h1>
          </a>
        </div>
      </section>
      <section className="md:pt-32 container mx-auto px-4 md:px-32 py-6">
        <div className="flex justify-between items-center">
          <h1 className="text-3xl font-bold text-gray-400 pb-4">Top Lajme</h1>

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
          spaceBetween={50}
          slidesPerView={4}
          navigation={{
            prevEl: ".swiper-button-prev",
            nextEl: ".swiper-button-next",
          }}
          breakpoints={{
            100: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 4,
              spaceBetween: 50,
            },
          }}
          onSwiper={(swiper) => (swiperRef.current = swiper)} // Save Swiper instance to the ref
        >
          {TopLajme.map((news, index) => (
            <SwiperSlide key={index}>
              <div className="">
                <img src={news.img} alt="" className="rounded-lg w-full " />
                <a href={news.link}>
                  <h1 className="text-xl font-medium hover:underline">
                    {news.title}
                  </h1>
                  <p className="text-green-600 text-lg py-2">{news.type}</p>
                </a>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>
      <section className="md:pt-32 container mx-auto px-4 md:px-32 py-6">
        <div className="flex justify-between items-center">
          <h1 className="text-3xl font-bold text-gray-400 pb-4">Promo</h1>
          <a href="https://marketing.telegrafi.com/">
            <h1 className="text-xl hover:text-red-400">Reklamo ketu</h1>
          </a>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div>
            <img
              src="https://telegrafi.com/wp-content/uploads/2023/11/Products-380x233.jpg"
              alt=""
              className="rounded-lg w-full "
            />
            <a href="https://telegrafi.com/doleo-group-partneri-juaj-per-ushqim-natyral/">
              <h1 className="text-xl font-medium hover:underline">
                Doleo Group – partneri juaj për ushqim natyral
              </h1>
              <p className=" text-sm py-2">Nga Doleo Group</p>
            </a>
          </div>
          <div>
            <img
              src="https://telegrafi.com/wp-content/uploads/2023/11/foto-kryesore-5-380x233.jpg"
              alt=""
              className="rounded-lg w-full "
            />
            <a href="https://telegrafi.com/kontribuoni-ne-kampanjen-per-blerjen-e-furres-se-qeramikes-per-shkollen-e-artit-odhise-paskali-ne-peje/">
              <h1 className="text-xl font-medium hover:underline">
                Kontribuoni në kampanjën për blerjen e furrës së qeramikës për
                Shkollën e Artit “Odhise Paskali” në Pejë
              </h1>
              <p className=" text-sm py-2">
                Nga Shkolla e Artit - “Odhise Paskali”
              </p>
            </a>
          </div>
          <div>
            <img
              src="https://telegrafi.com/wp-content/uploads/2023/11/384567738_280198978345569_8758371734717512089_n-380x233.jpg"
              alt=""
              className="rounded-lg w-full "
            />
            <a href="https://telegrafi.com/tregu-kriptovalutave-ne-ndryshim-renia-dhe-ngritja-e-tyre/">
              <h1 className="text-xl font-medium hover:underline">
                Tregu i kriptovalutave në ndryshim – rënia dhe ngritja e tyre
              </h1>
              <p className=" text-sm py-2">Nga exCoins.me</p>
            </a>
          </div>
          <div>
            {" "}
            <img
              src="https://telegrafi.com/wp-content/uploads/2023/11/09.11.2023-4-380x233.jpg"
              alt=""
              className="rounded-lg w-full "
            />
            <a href="https://telegrafi.com/stina-e-vjeshtes-perjetohet-ndryshe-ne-kompleksin-linda/">
              <h1 className="text-xl font-medium hover:underline">
                Stina e vjeshtës përjetohet më ndryshe në kompleksin Linda
              </h1>
              <p className=" text-sm py-2">Nga Al Trade Center</p>
            </a>
          </div>
        </div>
      </section>
      <JobsSection />
      <section className="md:pt-32 container mx-auto px-4 md:px-32 py-6">
        <h1 className="text-3xl font-bold text-gray-400 pb-4">Në fokus</h1>
        {NeFokus.map((news, index) => (
          <div key={index} className="flex md:gap-12 gap-4 pb-12">
            <img
              src={news.img}
              alt=""
              className="rounded-lg w-36 md:w-72 h-36 md:h-auto "
            />
            <a href={news.link}>
              <h1 className="text-base md:text-xl md:font-medium font-bold hover:underline">
                {news.title}
              </h1>
              <p className="text-green-600 text-sm md:text-lg py-2">
                {news.type}
              </p>
            </a>
          </div>
        ))}
      </section>
      <section className="md:pt-32 container mx-auto px-4 md:px-32 py-6">
        <div className="flex items-center gap-6 pb-4">
          <h1 className="text-3xl font-bold text-blue-800 ">Në Trend</h1>
          <button className="border border-gray-600   text-base font-medium px-4 py-1 rounded-2xl hover:bg-blue-800 hover:text-white">
            Më shumë &#62;
          </button>
        </div>
        {NeTrend.map((news, index) => (
          <div key={index} className="flex md:gap-12 gap-4 pb-12">
            <img
              src={news.img}
              alt=""
              className="rounded-lg w-36 md:w-72 h-36 md:h-auto "
            />
            <a href={news.link}>
              <h1 className="text-base md:text-xl md:font-medium font-bold hover:underline">
                {news.title}
              </h1>
              <p className="text-green-600 text-sm md:text-lg py-2">
                {news.type}
              </p>
            </a>
          </div>
        ))}
      </section>
      <section className="md:pt-32 container mx-auto px-4 md:px-32 py-6">
        <div className="flex items-center gap-6 pb-4">
          <h1 className="text-3xl font-bold text-red-800 ">Lajme</h1>
          <button className="border border-gray-600   text-base font-medium px-4 py-1 rounded-2xl hover:bg-red-800 hover:text-white">
            Më shumë &#62;
          </button>
        </div>
        {Lajme.map((news, index) => (
          <div key={index} className="flex md:gap-12 gap-4 pb-12">
            <img
              src={news.img}
              alt=""
              className="rounded-lg w-36 md:w-72 h-36 md:h-auto "
            />
            <a href={news.link}>
              <h1 className="text-base md:text-xl md:font-medium font-bold hover:underline">
                {news.title}
              </h1>
              <p className="text-green-600 text-sm md:text-lg py-2">
                {news.type}
              </p>
            </a>
          </div>
        ))}
      </section>
      <section className="md:pt-32 container mx-auto px-4 md:px-32 py-6">
        <div className="flex items-center gap-6 pb-4">
          <h1 className="text-3xl font-bold text-blue-600 ">Botë</h1>
          <button className="border border-gray-600   text-base font-medium px-4 py-1 rounded-2xl hover:bg-blue-600 hover:text-white">
            Më shumë &#62;
          </button>
        </div>
        {Bote.map((news, index) => (
          <div key={index} className="flex md:gap-12 gap-4 pb-12">
            <img
              src={news.img}
              alt=""
              className="rounded-lg w-36 md:w-72 h-36 md:h-auto "
            />
            <a href={news.link}>
              <h1 className="text-base md:text-xl md:font-medium font-bold hover:underline">
                {news.title}
              </h1>
              <p className="text-green-600 text-sm md:text-lg py-2">
                {news.type}
              </p>
            </a>
          </div>
        ))}
      </section>
      <section className="md:pt-32 container mx-auto px-4 md:px-32 py-6">
        <div className="flex items-center gap-6 pb-4">
          <h1 className="text-3xl font-bold text-green-800 ">Sport</h1>
          <button className="border border-gray-600   text-base font-medium px-4 py-1 rounded-2xl hover:bg-green-800 hover:text-white">
            Më shumë &#62;
          </button>
        </div>
        {Sport.map((news, index) => (
          <div key={index} className="flex md:gap-12 gap-4 pb-12">
            <img
              src={news.img}
              alt=""
              className="rounded-lg w-36 md:w-72 h-36 md:h-auto "
            />
            <a href={news.link}>
              <h1 className="text-base md:text-xl md:font-medium font-bold hover:underline">
                {news.title}
              </h1>
              <p className="text-green-600 text-sm md:text-lg py-2">
                {news.type}
              </p>
            </a>
          </div>
        ))}
      </section>
    </div>
  );
};

export default Home;
