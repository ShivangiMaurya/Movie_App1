

import axios from 'axios';
import React, { useEffect, useState } from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import { img_300, unavailable } from '../../config/config';
import "./Carousel.css";

const handleDragStart = (e) => e.preventDefault();



const Carousel = ({media_types, ids}) => {

  console.log(media_types , ids ,"idddd");

  const[ credits, setCredits] = useState();

    const items = credits?.map((c) =>(

      <div className='carouselItem'>

        <img 
           src={c.profile_path ? `${img_300}/${c.profile_path}`:unavailable}
           alt={c?.name}
           onDragStart={handleDragStart}
           className='carouselItem_img'
        />

        <b className='carouselItem_txt'>{c?.name}</b>

      </div>
    ));
     

     const responsive ={

      0:{
        items: 3,
      },

      512:{
        items: 5,
      },

      1024:{
        items: 7,
      }
     }
  // const items = [
  //   <img src="path-to-img" onDragStart={handleDragStart} role="presentation" />,
  //   <img src="path-to-img" onDragStart={handleDragStart} role="presentation" />,
  //   <img src="path-to-img" onDragStart={handleDragStart} role="presentation" />,
  // ];
     
  const fetchCredits = async () => {

    const { data } = await axios.get(`https://api.themoviedb.org/3/${media_types}/${ids}/credits?api_key=c54261795aebcc7205dc57aef68d81ae&language=en-US`);



     console.log(data,"DATA ERROR ");
    setCredits(data.cast);

  };

    useEffect(()=>{
      fetchCredits();
    },[]);

  return (
    <AliceCarousel 
    autoPlay
    responsive={responsive}
    infinite
    disableButtonsControls
    disableDotsControls
     mouseTracking 
     items={items} />
  );
}

export default Carousel;