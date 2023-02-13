import axios from "./Axios";
import React, { useEffect, useState } from "react";
import "./row.css";

const base_url = "https://image.tmdb.org/t/p/original/";

function Row({ title, request_url, isLargeRow = false }) {
    const [movies, setMovies] = useState([]);
    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(request_url);
            setMovies(request.data.results);
            return request;
        }
        fetchData();
    }, [request_url]);

    return (
        <div className="row">
            <h2>{title}</h2>

            <div className="row__posters">
                {movies.map((movie) => {
                    return (
                        ((isLargeRow && movie.poster_path) ||
                            (!isLargeRow && movie.backdrop_path)) && (
                            <img
                                key={movie.id}
                                className={`row__poster ${
                                    isLargeRow && "row__posterLarge"
                                }`}
                                src={`${base_url}${
                                    isLargeRow
                                        ? movie.poster_path
                                        : movie.backdrop_path
                                }`}
                                alt={movie.name}
                            />
                        )
                    );
                })}
            </div>
        </div>
    );
}

export default Row;
