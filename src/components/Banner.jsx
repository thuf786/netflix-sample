import { useState } from "react";
import instance from "../instance";
import { useEffect } from "react";
function Banner({fetchurl}) {
    const base_url = "https://image.tmdb.org/t/p/original"
    const [movie,setMovieBanner]= useState();
    const fetchData = async()=>{
        const {data} = await instance.get(fetchurl);
        setMovieBanner(data.results[Math.floor(Math.random()*data.results.length)])
    }
    useEffect(() => {
        fetchData();
    }, []);
    console.log("movie banner images");
    console.log(movie);
    return(
        <>
        <div style={{height:"600px", backgroundImage:`url(${base_url}${movie?.backdrop_path})`}}>
        </div>
        </>
    )
}
export default Banner;