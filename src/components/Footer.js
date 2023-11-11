import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="bg-gray-100 ">
      <div className="container mx-auto px-4 md:px-32 py-8">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 ">
          <div className="flex flex-col">
            <h1 className="text-xl font-bold pb-2">Redaksia</h1>
            <Link
              to="/"
              className=" items-center border-b-2 border-transparent  pt-1 text-lg font-medium text-gray-600 hover:border-red-300 hover:text-gray-700"
            >
              Ballina
            </Link>
            <Link
              to="/link1"
              className=" items-center border-b-2 border-transparent pt-1 text-lg font-medium text-gray-600 hover:border-red-300 hover:text-gray-700"
            >
              Lajme
            </Link>
            <Link
              to="/link1"
              className=" items-center border-b-2 border-transparent  pt-1 text-lg font-medium text-gray-600 hover:border-red-300 hover:text-gray-700"
            >
              Botë
            </Link>
            <Link
              to="/link1"
              className=" items-center border-b-2 border-transparent pt-1 text-lg font-medium text-gray-600 hover:border-red-300 hover:text-gray-700"
            >
              Ekonomi
            </Link>
            <Link
              to="/link1"
              className=" items-center border-b-2 border-transparent  pt-1 text-lg font-medium text-gray-600 hover:border-red-300 hover:text-gray-700"
            >
              Sport
            </Link>
            <Link
              to="/link1"
              className=" items-center border-b-2 border-transparent pt-1 text-lg font-medium text-gray-600 hover:border-red-300 hover:text-gray-700"
            >
              Magazina
            </Link>
            <Link
              to="/link1"
              className=" items-center border-b-2 border-transparent  pt-1 text-lg font-medium text-gray-600 hover:border-red-300 hover:text-gray-700"
            >
              Cult
            </Link>
            <Link
              to="/link1"
              className=" items-center border-b-2 border-transparent  pt-1 text-lg font-medium text-gray-600 hover:border-red-300 hover:text-gray-700"
            >
              Femra
            </Link>
          </div>
          <div className="flex flex-col">
            <Link
              to="/link1"
              className=" items-center border-b-2 border-transparent  pt-1 text-lg font-medium text-gray-600 hover:border-red-300 hover:text-gray-700"
            >
              Stili
            </Link>
            <Link
              to="/link1"
              className=" items-center border-b-2 border-transparent  pt-1 text-lg font-medium text-gray-600 hover:border-red-300 hover:text-gray-700"
            >
              Shëndetësi
            </Link>
            <Link
              to="/link1"
              className=" items-center border-b-2 border-transparent  pt-1 text-lg font-medium text-gray-600 hover:border-red-300 hover:text-gray-700"
            >
              Kuzhina
            </Link>
            <Link
              to="/link1"
              className=" items-center border-b-2 border-transparent  pt-1 text-lg font-medium text-gray-600 hover:border-red-300 hover:text-gray-700"
            >
              Auto
            </Link>
            <Link
              to="/link1"
              className=" items-center border-b-2 border-transparent  pt-1 text-lg font-medium text-gray-600 hover:border-red-300 hover:text-gray-700"
            >
              Teknologji
            </Link>
            <Link
              to="/link1"
              className=" items-center border-b-2 border-transparent  pt-1 text-lg font-medium text-gray-600 hover:border-red-300 hover:text-gray-700"
            >
              Fun
            </Link>
            <Link
              to="/link1"
              className=" items-center border-b-2 border-transparent pt-1 text-lg font-medium text-gray-600 hover:border-red-300 hover:text-gray-700"
            >
              Video
            </Link>
          </div>
          <div className="flex flex-col">
            <h1 className="text-xl font-bold pb-2">Shërbimet</h1>
            <Link
              to="/link1"
              className=" items-center border-b-2 border-transparent  pt-1 text-lg font-medium text-gray-600 hover:border-red-300 hover:text-gray-700"
            >
              Deals
            </Link>
            <Link
              to="/link1"
              className=" items-center border-b-2 border-transparent  pt-1 text-lg font-medium text-gray-600 hover:border-red-300 hover:text-gray-700"
            >
              Real Estate
            </Link>
            <Link
              to="/link1"
              className=" items-center border-b-2 border-transparent  pt-1 text-lg font-medium text-gray-600 hover:border-red-300 hover:text-gray-700"
            >
              Jobs
            </Link>
            <Link
              to="/link1"
              className=" items-center border-b-2 border-transparent  pt-1 text-lg font-medium text-gray-600 hover:border-red-300 hover:text-gray-700"
            >
              Reklamo tek ne
            </Link>
            <Link
              to="/link1"
              className=" items-center border-b-2 border-transparent  pt-1 text-lg font-medium text-gray-600 hover:border-red-300 hover:text-gray-700"
            >
              Prokurimi i hapur
            </Link>
            <Link
              to="/link1"
              className=" items-center border-b-2 border-transparent pt-1 text-lg font-medium text-gray-600 hover:border-red-300 hover:text-gray-700"
            >
              Arkiva
            </Link>
          </div>
          <div className="flex flex-col md:border-r border-black">
            <h1 className="text-xl font-bold pb-2">Telegrafi:</h1>
            <Link
              to="/link1"
              className=" items-center border-b-2 border-transparent  pt-1 text-lg font-medium text-gray-600 hover:border-red-300 hover:text-gray-700"
            >
              Rreth nesh
            </Link>
            <Link
              to="/link1"
              className=" items-center border-b-2 border-transparent  pt-1 text-lg font-medium text-gray-600 hover:border-red-300 hover:text-gray-700"
            >
              Privacy policy
            </Link>
            <Link
              to="/link1"
              className=" items-center border-b-2 border-transparent pt-1 text-lg font-medium text-gray-600 hover:border-red-300 hover:text-gray-700"
            >
              Na kontaktoni
            </Link>
          </div>
          <div>
            <h1 className="text-xl font-bold pb-2">Partnerët:</h1>
            <a href="http://www.dukagjini.com/">
              <h1 className="items-center border-b-2 border-transparent pt-1 text-lg font-medium text-gray-600 hover:border-red-300 hover:text-gray-700">
                RTV Dukagjini
              </h1>
            </a>
            <a href="https://www.dw.com/">
              <h1 className="items-center border-b-2 border-transparent pt-1 text-lg font-medium text-gray-600 hover:border-red-300 hover:text-gray-700">
                Deutsche Welle
              </h1>
            </a>
            <a href="https://www.ndreqe.com/">
              <h1 className="items-center border-b-2 border-transparent pt-1 text-lg font-medium text-gray-600 hover:border-red-300 hover:text-gray-700">
                Ndreqe.com
              </h1>
            </a>
            <a href="https://www.shkabaj.net/">
              <h1 className="items-center border-b-2 border-transparent pt-1 text-lg font-medium text-gray-600 hover:border-red-300 hover:text-gray-700">
                Shkabaj
              </h1>
            </a>
            <a href="https://germin.org/">
              <h1 className="items-center border-b-2 border-transparent pt-1 text-lg font-medium text-gray-600 hover:border-red-300 hover:text-gray-700">
                Germin
              </h1>
            </a>
            <a href="https://ick.com/">
              <h1 className="items-center border-b-2 border-transparent pt-1 text-lg font-medium text-gray-600 hover:border-red-300 hover:text-gray-700">
                ICK
              </h1>
            </a>
          </div>
          <div className="py-8">
            <p className="text-sm">Shkarkoje aplikacionin e Telegrafit</p>
            <img
              src="https://telegrafi.com/wp-content/themes/telegrafi/assets/img/phone2.png"
              alt=""
              className="py-4"
            />
            <img
              src="https://telegrafi.com/wp-content/themes/telegrafi/assets/img/phone1.png"
              alt=""
            />
          </div>
        </div>
        <br />
        <div className="border-b border-black"></div>
        <br />

        <div className="">
          <div className="flex gap-8">
            <img
              src="https://telegrafi.com/wp-content/themes/telegrafi/assets/img/telegrafi.png"
              alt=""
            />
            <div>
              <h1 className="text-base font-bold">TELEGRAFI sh.p.k.</h1>
              <p className=" font-medium">
                Rr. Rexhep Mala, Aktash, Nr.34, Prishtinë, Kosovë
                info@telegrafi.com 038 224 093 – +383 48 222 355
              </p>
            </div>
          </div>
          <br />
          <p className="text-sm">
            Ky portal mirëmbahet nga kompania “Telegrafi”. Materialet dhe
            informacionet në këtë portal nuk mund të kopjohen, të shtypen, ose
            të përdoren në çfarëdo forme tjetër për qëllime përfitimi, pa
            miratimin e drejtuesve të “Telegrafit”. Për ta shfrytëzuar
            materialin e këtij portali obligoheni t’i pranoni Kushtet e
            përdorimit.
          </p>
          <br />
          <p className="text-sm">
            Të gjitha të drejtat janë të rezervuara © 2006-2022 Portali
            Telegrafi
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
