import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

function PicProducto({ foto, precio }) {
  return (
    <Box sx={{ width: "100%", padding: "0.5rem"  , position: 'relative' }}>
      <img style={{ width: "100%", borderRadius: "1rem" }} src={foto} />
      <Box
        sx={{
          padding: "0.5rem",
          borderRadius: "5px",
          bgcolor: "#ffffff",
          zIndex: "100",
          position: "absolute",
          top:"1rem",
          right: "2rem"
        }}
      >
        <Typography fontSize={25}> $ {precio} </Typography>
      </Box>
    </Box>
  );
}

export default PicProducto;
