
import axios from "axios";
import { useEffect , useState } from "react";
import SingleContent from "../../components/SingleContent/SingleContent";

import "./Trending.css";
import CustomPagination from "../../components/Pagination/CustomPagination";

const Trending=()=>{
// shivi@777

    const[content, setContent] = useState([]);
    console.log(content,"mm");

    const[page, setPage]=useState(1);

// You can take notes from vdo about destructuring ===>>   33:00

    const fetchTrending = async() => {
               
        const  data  = await axios.get(

                 `https://api.themoviedb.org/3/trending/all/day?api_key=c54261795aebcc7205dc57aef68d81ae&page=${page}`

            // `https://api.themoviedb.org/3/trending/all/day?api_key=${process.env.REACT_APP_API_KEY}`
            // `https://api.themoviedb.org/3/trending/all/day?api_key=c54261795aebcc7205dc57aef68d81ae`
        );

        // console.log(data);
        
        // console.log(data);

        setContent(data.data.results);
        // console.log(content,"mm");
    }
   

       useEffect(()=>{
        fetchTrending();
        // eslint-disable-next-line
       },[page]);

       console.log(content,"kk");
    return(
        <div>
            <span className="pageTitle">Trending</span>

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
                    // date={data.release_date || "null"}

                    date={data.release_date || "2023-07-08"}


                    // 2023-07-08
                    media_type={data.media_type}
                    vote_average={data.vote_average}
                    />)
                }

            </div>
            <CustomPagination setPage={setPage}/>
        </div>
    )
}

export default Trending;