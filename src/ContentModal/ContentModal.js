

import * as React from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import axios from 'axios';

import { useState, useEffect } from 'react';
import { img_500, unavailable, unavailableLandscape } from '../config/config';
// import {YouTubeIcon } from 
import YouTubeIcon from '@mui/icons-material/YouTube';
import Carousel from "../components/Carousel/Carousel";
// import Genres from "../SingleContent/Genres";

import "./ContentModal.css";

const style = {
  position: 'absolute' ,
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  // bgcolor: 'background.paper',
  // bgcolor: 'black',
  color:"white",
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,

  width:"80%",
  height:"80%",



  backgroundColor:"#39445a",
  border:"1px solid #282c34",
  borderRadius:10,
  // color:"white",
  // boxShadow:ThemeContext.shadows[5],
  // padding:ThemeContext.spacing(1,1,3),

};

export default function ContentModal({children , media_type , id}) {
  const [open, setOpen] = useState(false);
   const [content, setContent]= useState();
   const[video, setVideo]= useState();

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const fetchData= async()=>{

    const { data } = await axios.get(`https://api.themoviedb.org/3/${media_type}/${id}?api_key=c54261795aebcc7205dc57aef68d81ae&language=en-US`);

    console.log(data, "Content Modal Data!!!!");

    setContent(data);

  };


  const fetchVideo = async() =>{
    
    const{ data } = await axios.get(`https://api.themoviedb.org/3/${media_type}/${id}/videos?api_key=c54261795aebcc7205dc57aef68d81ae&language=en-US`);


    console.log(data);
     setVideo(data.results[0]?.key);
  };

  useEffect(()=>{
    fetchData();

    fetchVideo();
  },[])

  return (
    <>
      {/* <Button  */}
      <div
    //   i'll bring my style here, classname="media"
    // import that css file also.

    className="media"
      type = "button"
      onClick={handleOpen}
    
      >  
        {/* Open modal */}
        {children}
      
      </div>
      {/* </Button> */}


      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
      >
        <Fade in={open}>
          <Box sx={style}>
            {/* <div className={ClassNames.paper}> */}
        
        {content &&
            <div className='ContentModal'>

           <img 
            alt={ content.name || content.title}
            className='ContentModal_portrait'
            src={content.poster_path?`${img_500}/${content.poster_path}`:unavailable}/> 

            <img 
            alt={ content.name || content.title}
            className='ContentModal_landscape'
            src={content.backdrop_path?`${img_500}/${content.backdrop_path}`:unavailableLandscape}/>

            <div className="ContentModal_about">
              <span className="ContentModal_title">
                {content.name || content.title}(
                  {(

                    content.first_air_date  ||
                    content.release_date ||
                    " ------- "
                  ).substring(0, 4)}
                )
            </span>

            {content.tagline && (
                  <i className="tagline">{content.tagline}</i>
            )}

            <span className="ContentModal_description">
              {content.overview}

            </span>
            <div>
              <Carousel
              media_types={media_type}
              ids={id}
              
              />
            </div>

            <Button
               variant="contained"
               startIcon={<YouTubeIcon/>}
               color="secondary"
               target="_blank"
               href={`https://www.youtube.com/watch?v=${video}`} 
            >

              Watch the Trailer
            </Button>

         </div>

            </div>
}



            {/* </div> */}
           
          </Box>
        </Fade>
      </Modal>
    </>
  );
}
















