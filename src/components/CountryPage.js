import { React, useContext } from "react";
import { MdOutlineKeyboardBackspace } from "react-icons/md";
import { useNavigate, useParams } from "react-router-dom";
import CountrySingle from "./CountrySingle";
import Loading from "./Loading";
import DataContext from "../contexts/DataContext";

const CountryPage = () => {
  const { countries, isLoading, fetchError } = useContext(DataContext);
  const navigate = useNavigate();
  const id = useParams();
  const indexId = id.id;
  const country = countries[parseFloat(indexId)];

  return (
    <main className="w-full">
      <div className="sync-padding w-full flex flex-col items-start gap-y-20 mb-8 dark:text-white pt-12">
        <div
          id="backButton"
          className="w-max flex items-center justify-center px-8 gap-x-4 bg-white dark:bg-dm-dBlue p-2 rounded-md shadow-custom-5 shadow-shadow-custom font-bold hover:cursor-pointer"
          onClick={() => navigate(`/`)}
        >
          <MdOutlineKeyboardBackspace className="text-2xl text-black dark:text-white" />
          <p className="text-lg text-slate-800 dark:text-white">Back</p>
        </div>
        <div className="w-full">
          {isLoading || countries.length === 0 ? (
            <Loading />
          ) : (
            <section className="w-full h-auto">
              <h2 className="sr-only">{country.name.official}</h2>
              <CountrySingle country={country} data={countries} />
            </section>
          )}
        </div>
      </div>
    </main>
  );
};

export default CountryPage;
