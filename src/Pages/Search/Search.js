import { Button, TextField, ThemeProvider } from "@mui/material";
import { useEffect, useState } from "react";
import { createTheme} from "@mui/material/styles";
// import Search 
import SearchIcon from '@mui/icons-material/Search';
import {Tab} from "@mui/material";
import {Tabs} from "@mui/material";
import axios from "axios";

import CustomPagination from "../../components/Pagination/CustomPagination";
import SingleContent from "../../components/SingleContent/SingleContent";

// import TransitionsModal from  "../../components/ContentModal/TransitionsModal";
import TransitionsModal from "../../ContentModal/ContentModal";

const Search=()=>{
       
    const[type, setType]=useState(0);
    const[page, setPage]=useState(1);
    const[searchText, setSearchText]=useState("");

    const[content, setContent]= useState([]);
    const[numOfPages, setNumOfPages]= useState();


    const darkTheme= createTheme({
        palette:{
            type:"dark",
            primary:{
                main:"#fff",
            },
        },
    });

    const fetchSearch= async() =>{
     const { data } = await axios.get(`https://api.themoviedb.org/3/search/${type?"tv":"movie"}?api_key=c54261795aebcc7205dc57aef68d81ae&language=en-US&query=${searchText}&page=${page}&include_adult=false`);
  
     setContent(data.results);

     setNumOfPages(data.total_pages);

     console.log(data,"Data!!");
     
    }

    useEffect(()=>{
        window.scroll(0,0);
        fetchSearch();
        console.log("called");

    },[type, page])

    console.log(content ,"content");

    return content.length == 0?"loading...":
    (
    
        <div>gg</div>
    //     <div>
            
    //         <span className="pageTitle"> Search </span>

    //    <ThemeProvider theme={darkTheme}>

    //       <div style={{display:"flex" ,margin:'15px'}}>

    //         <TransitionsModal/>

    //         <TextField
    //            style={{flex:1}}
    //            className="searchBox"
    //            label="Search"
    //            variant="filled"
    //            onChange={(e) => setSearchText(e.target.value)}
    //         />

    //         <Button 
    //           variant="contained"
    //           style={{marginLeft: 10}}
    //           onClick={fetchSearch}
    //         >
    //             <SearchIcon/> 
    //         </Button>
    //         </div>

    //         <Tabs 
    //         style={{paddingBottom: 5}}
    //         value={type}
    //         indicatorColor='primary'
    //         textColor='primary'
    //         onChange={(event, newValue)=>{
    //             setType(newValue);
    //             setPage(1);
    //         }}

    //         >
    //           <Tab style={{ width:"50%"}} label="Search Movies"/>

    //           <Tab style={{ width:"50%"}} label="Search TV Movies"/>


    //         </Tabs>
    //         </ThemeProvider>

    //         <div className="trending">
    //             {/* video --33 agar content  */}
    //             {
    //                 content && content.map((data)=>
    //                 <SingleContent
    //                 key={data.id}
    //                 id={data.id}
    //                 poster={data.poster_path}
    //     // || iska matlab vaise toh title ho behjo agar kisi data mai title nahi hai toh vha name bhjeo
    //     // bcz isme movie mai title hai, ot jha tv hai vha title keyword nhi hai, thats why we put this condition.
    //                 title={data.title || data.name}
    //                 date={data.release_date || "null"}
    //                 // media_type={data.media_type}
    //                 media_type={ type ? "tv" : "movie"}
    //                 vote_average={data.vote_average}
    //                 />)
    //             }

    //             { searchText &&
    //                !content &&
    //                (type ? <h2>No Series Found</h2> : <h2>No Movie Found</h2>)

    //             }


    //         </div>

    //         { numOfPages > 1 &&
    //         <CustomPagination 
    //         setPage={setPage}
    //         numOfPages={numOfPages}
    //         />
    //        }
  
        
    //     </div>
    )
}

export default Search;