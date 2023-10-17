
import axios from "axios";
import { useEffect } from "react";
import { Chip } from "@mui/material";

const Genres=({
    selectedGenres,
    setSelectedGenres,
    genres,
    setGenres,
    type,
    setPage,

})=>{

// what its going to do is, its going to first remove from this array [ unselected arry ] and then its going 
    //  to add to selected genre array.

    const handleAdd=(genre)=>{
        // so first add everyting thats inside of this [ selectedGenres ] first and then after that we are going
        //  to add the one that is being sent to us.
        // 
        setSelectedGenres([...selectedGenres, genre]);
        // and other thing what we like to do, we like to remove it from this previous array 
        // so we are gonna use filter function for that we will gonna filter out that is being sent to us.

// condition ==> It should only return if there is no eqaulity between all of these values.

        setGenres(genres.filter((g)=> g.id !== genre.id));
// and we are going to set the page to one.
        setPage(1);

    }

    const handleRemove=(genre)=>{
        setSelectedGenres(
            selectedGenres.filter((selected)=>selected.id !== genre.id)
        );
        setGenres([...genres, genre]);
        setPage(1);
    }

    const fetchGenres= async () =>{
     
const  data  =await axios.get(

    // `https://api.themoviedb.org/3/genre/movie/list?api_key=c54261795aebcc7205dc57aef68d81ae&language=en-US`

    `https://api.themoviedb.org/3/genre/${type}/list?api_key=c54261795aebcc7205dc57aef68d81ae&language=en-US`

    );

        // console.log(data,"Genres");

        setGenres(data?.data?.genres);

        // console.log(genres,"GEnres!!");
        
    }
       console.log(genres,"genres only!!");

    useEffect(()=>{
        fetchGenres();

        // WhenEver we are changing the page, we want this genres component to be unmounted.
        // so what do we do to get unmount the component 
        // Unmount means that it should cancel the API Call 

        // so we need to return 
        // It's not important but it's good practice to do. 

        // return()=>{
        //     setGenres([]);
        //     console.log("return called" ,genres)
        // }
    },[]);

    console.log(selectedGenres,"GEnres!!");

    
    return(
        <>
        <div style={{padding:"6px 0"}}>

        {/* {genres.map(()=>{
    // So chip component is going to have a name, and it's going to have a key bcz we are going to map it from 
    //  the selectedGenres component / or the genres component, So lets just map it from the genres component.

            "lll"

        })} */}
        {/* I have mapped through the selected genre  */}
         {
            // genres.map((data, index)=>console.log(index))

            selectedGenres && selectedGenres.map((genre, index)=>(
               <Chip 
               style={{margin:5}}
                color="primary"
                label={genre.name}
                size='small'
                key={genre.id}
                clickable
                onDelete={()=>handleRemove(genre)}
                />))
 // So we want whenever i clicked on a particular genre, It should go back to another array called 
//  "Selected genre" which is imported by us, so it should go inside of "selected genre" 
// and that particular array should display itself.

         }

{
            // genres.map((data, index)=>console.log(index))

            genres && genres.map((genre, index)=>(
               <Chip 
               style={{margin:5}}
                color="secondary"
                label={genre.name}
                size='small'
                key={genre.id}
                clickable
                onClick={()=>handleAdd(genre)}
                />))
 // So we want whenever i clicked on a particular genre, It should go back to another array called 
//  "Selected genre" which is imported by us, so it should go inside of "selected genre" 
// and that particular array should display itself.

         }
        
        </div>
       
        </>
    )

}
export default Genres;