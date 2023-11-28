import React, { useEffect } from "react";
import Filters from "../components/myStuff/Filters";
import useFetch from "../Hooks/useFetch";
import { useNavigate, useParams } from "react-router-dom";
import Card from "../components/Card";
import Header from "../components/header/Header";
import Footer from "../components/Footer";
import MoreMovies from "./MoreMovies";

const Search = () => {
  const { data, loading, error, get, moreData } = useFetch([]);
  const { query } = useParams();
  useEffect(() => {
    get(`/ott/show?search={"title" : "${query}"}&limit=10`);
  }, [query]);
  // console.log(data, "Data");
  console.log(data, "Query");

  return (
    <>
      <Header />
      <div className="px-20 h-[75vh]">
        <Filters />
        {data?.data?.length > 0 ? (
          <>
            <div>
              <h1 className="text-2xl font-bold text-white  py-6">
                Result for "{query}".
              </h1>
            </div>
            <div className="grid gap-2 md:gap-4 py-10 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
              {data.data.map((movie) => (
                <Card key={movie._id} movie={movie} />
              ))}
            </div>
          </>
        ) : (
          <div>
            <h2 className="text-white text-xl font-bold">
              We didn't find any matches for "{query}". Browse our most popular
              TV shows and movies.
            </h2>
            <div className=" mt-14 text-center  cursor-default text-3xl">
              <span className="font-bold text-[#1A98FF]">Prime</span>
              <span className=" change-button font-bold ml-3 text-white">
                Top TV and movies
              </span>
            </div>
            <MoreMovies />
          </div>
        )}
      </div>
      <Footer />
    </>
  );
};

export default Search;
