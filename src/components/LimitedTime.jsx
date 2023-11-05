import { Box, Container, Typography } from "@mui/material";
import React from "react";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

function LimitedTime() {
  return (
    <Box sx={style.main}>
      <Container sx={style.container}>
        <Typography sx={style.heading} className={poppins.className}>
          Exclusive Lifetime Access:
          <span style={{ color: "#18247E" }}> Limited Time Offer!</span>
        </Typography>
        <Typography sx={style.heading} className={poppins.className}>
          <span className="line-through">($80)</span>
          <span style={{ color: "#AA131D" }}> $19 Only!</span>
        </Typography>
        <Typography sx={style.heading} className={poppins.className}>
          <span style={{ color: "#AA131D" }}> +FREE E-Book</span>
        </Typography>
      </Container>
    </Box>
  );
}

export default LimitedTime;
const style = {
  main: {
    width: "100%",
    height: "100%",
    position: "relative",
    overflowX: "hidden",
  },
  container: {
    maxWidth: { lg: "1400px" },
    paddingY: "40px",
  },
  box: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
  },
  heading: {
    fontSize: "40px",
    fontWeight: 800,
    opacity: 0.8,
    textAlign: "center",
    width: "100%",
  },
};
