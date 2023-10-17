import { useEffect, useState } from "react";
import axios from "axios";

import SingleContent from "../../components/SingleContent/SingleContent";

import CustomPagination from "../../components/Pagination/CustomPagination";

import Genres from "../../components/Genres";

import useGenre from "../../hooks/useGenre";


const Series =()=>{

    const[page, setPage]= useState(1);
    const[content, setContent] = useState([]);
    const[numOfPages, setNumOfPages] = useState();
    const[selectedGenres, setSelectedGenres] = useState([]);
    const[genres, setGenres]= useState([]);


     const genreforURL = useGenre(selectedGenres);

     console.log(useGenre,"useGenre!!");

    // arr(20) hai iska matlab array ( 20) data for one page, totalResult 40,550  hai, but one page pr 20 show
    // karega

    const fetchMovies = async() => {
        const { data } = await axios.get(
`https://api.themoviedb.org/3/discover/tv?api_key=c54261795aebcc7205dc57aef68d81ae&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${page}&with_genres=${genreforURL}`);

         
        console.log(data.results ,"movies");

        setContent(data.results);
        setNumOfPages(data.total_pages);

    }

    useEffect(()=>{
        fetchMovies();
        // eslint-disable-next-line
    },[page, genreforURL])

    return(
        <div>
            <span className="pageTitle"> Series </span>

            <Genres 
             type="tv"
             selectedGenres={selectedGenres}
             setSelectedGenres={setSelectedGenres}
             genres={genres}
             setGenres={setGenres}
             setPage={setPage}
            />
           
            <div className="trending">
                {/* video --33 agar content  */}
                {
                    content && content.map((data)=>
                    <SingleContent
                    key={data.id}
                    id={data.id}
                    poster={data.poster_path}
        // || iska matlab vaise toh title ho behjo agar kisi data mai title nahi hai toh vha name bhjeo
        // bcz isme movie mai title hai, ot jha tv hai vha title keyword nhi hai, thats why we put this condition.
                    title={data.title || data.name}
                    date={data.release_date || "null"}
                    // media_type={data.media_type}
                    media_type="tv"
                    vote_average={data.vote_average}
                    />)
                }

            </div>

            { numOfPages > 1 &&
            <CustomPagination 
            setPage={setPage}
            numOfPages={numOfPages}
            />
           }
  




        </div>
    )
}

export default Series;