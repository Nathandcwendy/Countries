import { React, useContext } from "react";
import { MdOutlineKeyboardBackspace } from "react-icons/md";
import { useNavigate, useParams } from "react-router-dom";
import CountrySingle from "../components/CountrySingle";
import DataContext from "../contexts/DataContext";
import ErrorPage from "../components/Error";
import LoadingCountry from "../components/LoadingCountry";

const CountryPage = () => {
  const { countries, isLoading, fetchError, filter, setFilter } =
    useContext(DataContext);
  const navigate = useNavigate();
  const id = useParams();
  const indexId = id.id;
  const country = countries[parseFloat(indexId)];
  if (filter === "All") {
    setFilter("Filter by Region");
  }

  return (
    <main className="w-full mb-12 text-black dark:text-neutral-300 pt-4">
      <div className="sync-padding w-full flex flex-col items-start gap-y-16">
        <div
          id="backButton"
          className="w-max flex items-center justify-center px-6 mdsm:px-8 gap-x-2 mdsm:gap-x-4 bg-white dark:bg-dm-dBlue p-2 rounded-md shadow-custom-5 shadow-shadow-custom font-bold hover:cursor-pointer"
          onClick={() => {
            navigate(-1);
          }}
        >
          <MdOutlineKeyboardBackspace className="text-xl mdsm:text-xl" />
          <p className="text-base mdsm:text-base">Back</p>
        </div>
        <div className="w-full">
          {(isLoading && !fetchError) ||
          (countries.length === 0 && !fetchError) ? (
            <LoadingCountry />
          ) : !isLoading && fetchError ? (
            <ErrorPage fetchError={fetchError} />
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
