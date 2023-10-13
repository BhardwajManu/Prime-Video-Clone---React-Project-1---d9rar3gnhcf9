import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import CardOne from '../moviespage/CardOne';



const Search = () => {
    const [data, setData] = useState([]);
    const { query } = useParams();

    useEffect(() => {
        async function fetchData() {
            try {
                const url = `https://academics.newtonschool.co/api/v1/ott/show?search={"keywords":"${query}"}`;
                const getData = await fetch(url, {
                    method: "GET",
                    headers: {
                        projectID: "knjxpr9vh9wr",
                    },
                });
                const json = await getData.json();
                console.log(json.data);
                setData(json.data);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        }
        if (query.trim() !== "") {
            fetchData();
        }
        // fetchData(data);
    }, [query]);
    console.log(data);

    // Initialize the state with 'related' selected

    return (
        <>
            {query.trim() === "" ? (
                // Render PotraitCard when query is empty
                <CardOne />
            ) : (
                // Render fetched data when query is not empty

                <div className="allportrait-card">
                    {data.length > 0 ? (
                        data?.map((item, index) => (
                            <div className="allportrait-data" key={index}>
                                {console.log("item._id:", item._id)}
                                <Link to={`/details/${item._id}`}>
                                    <img
                                        className="allportrait-img"
                                        src={item.thumbnail}
                                        alt={`Image ${index}`}
                                    />
                                </Link>
                            </div>
                        ))
                    ) : (
                        <p>No results found</p>
                    )}
                </div>
            )}
        </>



    );
};

export default Search;
