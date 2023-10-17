
import { Pagination, ThemeProvider, createTheme,  } from "@mui/material";

//  CUSTOM DARK THEME ==>> 

const darkTheme= createTheme(
    {
        palette:{
            type:"dark"
        }
    }
)


const CustomPagination=({setPage , numOfPages=10})=>{

     const handlePageChange=(page)=>{
        setPage(page);
        window.scroll(0, 0);

     }

    return(
        <div style={{
            width:"100%",
            display:"flex",
            justifyContent:"center",
            marginTop:10
        }}>

            {/* Its chnage a function which is called { handlePageChange } */}

            {/* <Pagination count={10} color="primary" /> */}

            <ThemeProvider theme={darkTheme}>
            <Pagination 
            count={numOfPages} 
            variant="outlined"
             shape="rounded" 
             color="primary"
            //  onChange={handlePageChange}

            onChange={(e)=> handlePageChange(e.target.textContent)}
            hideNextButton
            hidePrevButton


             />
             </ThemeProvider>
        </div>
    )
}
export default CustomPagination;