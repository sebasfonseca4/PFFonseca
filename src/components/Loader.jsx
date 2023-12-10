import {
    Box, CircularProgress
  } from "@mui/material";

const Loading = () => {
  return (
    <>
        <div className="container d-flex  py-5">
            <Box sx={{ display: 'flex' }} className=" justify-content-center flex-column mx-auto text-center">
                <h2 className="w-100 pb-3">Cargando</h2>
                <CircularProgress className="mx-auto"/>
            </Box>
        </div>
    </>
  )
}

export default Loading
