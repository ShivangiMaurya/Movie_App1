import { img_300, unavailable } from "../../config/config";
import "./SingleContent.css";
// import {IconButton, Badge} from "@mui/material";
import IconButton from '@mui/material/IconButton';
import Badge from '@mui/material/Badge';
import ContentModal from "../../ContentModal/ContentModal";

const SingleContent=({id, poster, title, date, media_type, vote_average})=>{

  

    return(
        // <div className="media">

        <ContentModal 
           
        media_type={media_type}
        id={id}
        >

        
           <Badge badgeContent={vote_average} 
        //    if vote are more than 6 , then it should have have "primary color",
        // otherwise it should have secondary color.

           color={vote_average>7  ? "primary" : "secondary"}
        //    6
           >
           
            </Badge>
          


            {/* if poster is present then show it, if not there then show unavailable image. */}

            <img className="poster" 
            src={poster ? `${img_300}/${poster}`: unavailable} alt={title}/>

            <b className="title">{title}</b>
            
            <span className="subTitle">
                {media_type === "tv" ? "TV Series" : "Movie"}

                <span className="subTitle">{date}</span>
            </span>

            {/* // {title} */}
        {/* </div> */}
        </ContentModal>
    )
 }
 export default SingleContent;

















 
//  const SingleContent=(props_data)=>{
//     console.log(props_data,"props data !!");

//     const {id, poster, title}=props_data;
//     console.log(id, poster, title ,"dddddddddddd")