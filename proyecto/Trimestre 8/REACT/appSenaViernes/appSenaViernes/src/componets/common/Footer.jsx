import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import { StayPrimaryLandscape } from "@mui/icons-material";

export default function Footer() {
  return (
    <>
     <Box
        sx={{
          width: "100%",
          height: 60,
          bgcolor: "#2196f3",
          display: "flex",
          justifyContent: "center",
        }}
      >
      <Stack direction="row" spacing={2} bgcolor={'#0303b5'}>
        <Avatar
          alt="productos referentes a pollo "
          src="./icoPollo.jpg"
          sx={{ width: 50, height: 50 }}
        />

        <Avatar
          alt="productos referentes a pizza "
          src="./icoPizza.jpg"
          sx={{ width: 50, height: 50 }}
        />

        <Avatar
          alt="productos referentes a hamburguesas "
          src="./icoHamburguesa.jpg"
          sx={{ width: 50, height: 50 }}
        />

        <Avatar
          alt="productos referentes a carnes "
          src="./icoCarne.jpg"
          sx={{ width: 50, height: 50 }}
        />

      </Stack>
     
        
      </Box>
    </>
  );
}
