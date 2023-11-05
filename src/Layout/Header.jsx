import { Box, Container, Grid, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

function Header() {
  return (
    <>
      <Box sx={style.main}>
        <Container sx={style.container}>
          <Grid container>
            <Grid item md={7}>
              <Box sx={style.left}>
                <Image alt="oops" src={"/logo.png"} width={160} height={160} />
                <Box sx={style.listBox}>
                  <Typography className={poppins.className} sx={style.listItem}>
                    Home
                  </Typography>
                  <Typography className={poppins.className} sx={style.listItem}>
                    Pricing
                  </Typography>
                  <Typography className={poppins.className} sx={style.listItem}>
                    About
                  </Typography>
                  <Typography className={poppins.className} sx={style.listItem}>
                    Contact
                  </Typography>
                </Box>
              </Box>
            </Grid>
            <Grid item md={5}>
              <Box sx={style.iconBox}>
                <Image
                  style={{ cursor: "pointer" }}
                  src={"/search.png"}
                  alt="search"
                  width={24}
                  height={24}
                />
                <Image
                  style={{ cursor: "pointer" }}
                  src={"/bag.png"}
                  alt="bag"
                  width={32}
                  height={32}
                />
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
}

export default Header;
const style = {
  main: {
    width: "100%",
    height: "100%",
    position: "fixed",
    top: 0,
    zIndex: 99,
    backgroundColor: "white",
    height: "160px",
  },
  container: {
    maxWidth: { lg: "1300px" },
  },
  left: {
    display: "flex",
    flexDirection: "row",
    alignItems: "Center",
    gap: "1rem",
  },
  listBox: {
    display: "flex",
    flexDirection: "row",
    gap: "16px",
    alignItems: "Center",
  },
  listItem: {
    fontSize: "18px",
    fontWeight: 600,
    opacity: 0.7,
    borderBottom: "2px solid transparent",
    transition: "all ease-in-out 0.3s",
    cursor: "pointer",
    ":hover": {
      borderBottom: "2px solid black",
      opacity: 1,
    },
  },
  iconBox: {
    width: "100%",
    height: "100%",
    display: "flex",
    flexDirection: "row",
    gap: "19px",
    alignItems: "Center",
    justifyContent: "end",
  },
};
