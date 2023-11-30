import React, { useRef, useState } from "react";
import { useEffect } from "react";
import Card from "../components/Card";
import useFetch from "../Hooks/useFetch";
import Skelton from "../components/Loader/Skelton";
import { useParams } from "react-router-dom";

const MoreMovies = () => {
  const { moreData, loading, get } = useFetch([]);
  const [page, setPage] = useState(1);
  const targetRef = useRef();
  const { type } = useParams();

  useEffect(() => {
    get(`/ott/show?limit=30&page=${page}`);
    get(`/ott/show?filter={"type":"${type}"}&limit=30&page=${page}`);
  }, [page]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        console.log(entry.isIntersecting);
        if (entry.isIntersecting) {
          setPage((prev) => prev + 1);
        }
      },
      {
        rootMargin: "500px", // margin around the viewport
      }
    );

    if (targetRef.current) {
      observer.observe(targetRef.current);
    }

    return () => {
      // Clean up the observer when the component unmounts
      observer.disconnect();
    };
  }, []); // [] makes this useEffect run once when the component mounts
  console.log(page);

  return (
    <>
      <div className="text-white font-bold text-4xl mt-5 px-14">
        <span className="font-bold ml-3 capitalize">{type}</span>
      </div>

      <div className="grid gap-2  md:gap-4 md:gap-y-8 py-10 px-14 grid-cols-2  md:grid-cols-3 lg:grid-cols-5">
        {moreData?.map((item) => (
          <Card key={item?._id} movie={item} />
        ))}
        {loading && new Array(20).fill("").map((_, i) => <Skelton key={i} />)}
      </div>
      <div ref={targetRef} />
    </>
  );
};
export default MoreMovies;
