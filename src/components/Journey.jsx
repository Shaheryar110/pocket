import { Box, Container, Typography } from "@mui/material";
import React from "react";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

function Journey() {
  return (
    <Box sx={style.main}>
      <Container sx={style.container}>
        <Typography
          sx={{
            color: "white",
            fontWeight: 700,
            fontSize: "2.5rem",
            textAlign: "center",
          }}
          className={poppins.className}
        >
          Enjoy a Stress-Less Financial Journey
        </Typography>
        <Typography sx={{ textAlign: "center", color: "white" }}>
          Discover clarity and gain confidence as you navigate through your
          finances with ease. With Expenzify, take control and transform your
          financial outlook, no complex methods required.
        </Typography>
      </Container>
    </Box>
  );
}

export default Journey;
const style = {
  main: {
    width: "100%",
    height: "100%",
    position: "relative",
    overflowX: "hidden",
    backgroundColor: "#3C4777",
  },
  container: {
    maxWidth: { lg: "1400px" },
    paddingY: "40px",
  },
};
