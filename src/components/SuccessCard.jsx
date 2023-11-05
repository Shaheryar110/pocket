import { Box, Container, Grid, Typography } from "@mui/material";
import React from "react";
import { Poppins } from "next/font/google";
import Image from "next/image";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

function SuccessCard() {
  const cardData = [
    {
      img: "/dollar.webp",
      heading: "Effortless Expense Tracking",
      para: "Log daily expenditures with ease. Categorize, tag, and monitor where your money goes.",
    },
    {
      img: "/detail.webp",
      heading: "Detailed Analytics",
      para: "Unlock insights into your spending habits. Make informed decisions and adjust for a prosperous future.",
    },
    {
      img: "/sync.webp",
      heading: "Auto-Sync Across Devices",
      para: "Have your finances handy. Expenzify syncs seamlessly across all devices, from desktop to mobile, keeping your financial snapshot accurate and current, wherever you go.",
    },
  ];
  return (
    <>
      <Box sx={style.main}>
        <Container sx={style.container}>
          <Typography sx={style.heading} className={poppins.className}>
            Features Tailored For Your
            <span style={{ color: "#182459" }}> Financial Success!</span>
          </Typography>
          <Grid
            container
            rowSpacing={3}
            sx={{ display: "flex", justifyContent: "center" }}
          >
            {cardData.map((data, index) => {
              return (
                <>
                  <Grid item lg={3} key={index}>
                    <Box
                      sx={{
                        padding: "1rem",
                        width: "100%",
                        height: "100%",
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "start",
                        alignItems: "center",
                      }}
                    >
                      <Image
                        src={data.img}
                        alt="img"
                        width={128}
                        height={128}
                      />
                      <Typography
                        className={poppins.className}
                        sx={{
                          fontSize: "24px",
                          color: "#182459",
                          paddingTop: "16px",
                          fontWeight: 800,
                          textAlign: "center",
                        }}
                      >
                        {data?.heading}
                      </Typography>
                      <Typography
                        className={poppins.className}
                        sx={{
                          color: "#182459",
                          paddingTop: "10px",
                          textAlign: "center",
                        }}
                      >
                        {data?.para}
                      </Typography>
                    </Box>
                  </Grid>
                </>
              );
            })}
          </Grid>
        </Container>
      </Box>
    </>
  );
}

export default SuccessCard;
const style = {
  main: {
    width: "100%",
    height: "100%",
    position: "relative",
    backgroundColor: "#F4F5F6",
  },
  container: {
    maxWidth: { lg: "1400px" },
    paddingY: "50px",
  },
  heading: {
    fontSize: "36px",
    fontWeight: 800,
    opacity: 0.7,
    textAlign: "center",
  },
};
