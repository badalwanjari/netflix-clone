import React from "react";
import Banner from "../Banner";
import Navbar from "../Navbar";
import requests from "../Requests";
import Row from "../Row";
function HomeScreen() {
    return (
        <div className="homescreen">
            <Navbar />
            <Banner />

            <Row
                title="NETFLIX ORIGINALS"
                request_url={requests.fetchNetflixOriginals}
                isLargeRow
            />
            <Row
                title="Trending Now"
                request_url={requests.fetchTrending}
                
            />
            <Row
                title="Top rated"
                request_url={requests.fetchTopRated}
                
            />
            <Row
                title="Action Movies"
                request_url={requests.fetchActionMovies}
                
            />
            <Row
                title="Comedy Movies"
                request_url={requests.fetchComedyMovies}
                
            />
            <Row
                title="Horror Movies"
                request_url={requests.fetchHorrorMovies}
                
            />
            <Row
                title="Rommance Movies"
                request_url={requests.fetchRomanceMovies}
                
            />

            <Row
                title="Docummentaries"
                request_url={requests.fetchDocumentaries}
                
            />
        </div>
    );
}

export default HomeScreen;
