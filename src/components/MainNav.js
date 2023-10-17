

import * as React from 'react';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';

import Whatshot from '@mui/icons-material/Whatshot';
import MovieIcon from '@mui/icons-material/Movie';
import LiveTvIcon from '@mui/icons-material/LiveTv';
import SearchIcon from '@mui/icons-material/Search';

import {Navigate, useNavigate} from "react-router-dom";

// You have to import it from @mui/styles.
// const useStyles= makeStyles({
   
//     root:{
//         width:1500,
//         position:"fixed",
//         bottom:0,
//         backgroundColor:"black",
//         zIndex:100
//     }
// })

export default function SimpleBottomNavigation() {
    // const classes= useStyles();

  const [value, setValue] = React.useState(0);

  const navigate= useNavigate();

      React.useEffect(()=>{
        if(value===0) navigate("/");
        if(value===1) navigate("/movies");
        if(value===2) navigate("/series");
        if(value===3) navigate("/search");


      },[value , navigate]);

  return (

    // <CacheProvider value={cache}>
    <Box sx={{
         width: 590,
        //  width:1500,
         position:"fixed",
         bottom:0,
         backgroundColor:"black",
         zIndex:100
    
    
    
    }}>
      <BottomNavigation
        style={{

          backgroundColor:"#39445a",
          // width: 590,
           width:"100%",
           position:"fixed",
           bottom:0,
        
           zIndex:100
        }}
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      >



        <BottomNavigationAction
          style={{color:"white"}}
         label="Trending"
          icon={<Whatshot/>} 
          />
        <BottomNavigationAction
        style={{color:"white"}}
         label="Movies" 
         icon={<MovieIcon />} 
         />

        <BottomNavigationAction 
        style={{color:"white"}}
        label="TV Series" 
        icon={<LiveTvIcon />}
         />
{/* 
       <BottomNavigationAction 
        style={{color:"white"}}
        label="Search" 
        icon={<SearchIcon />}
         /> */}

      </BottomNavigation>
    </Box>
    // </CacheProvider>
  );
}