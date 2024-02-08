import { Box, Typography, useMediaQuery, useTheme } from "@mui/material";
import React from "react";
import tabletImage from "../assets/Tablet.png";
import mobileImage from "../assets/mobile-image.png";
import { useTranslation } from "react-i18next";

const Header = () => {
  const theme = useTheme();
  const darkMode = theme.palette.mode === "dark";
  const tabletUpper = useMediaQuery("(max-width:789px)");
  const tabletLower = useMediaQuery("(min-width:481px)");

  const { t } = useTranslation();

  const tablet = tabletLower && tabletUpper;

  const image = tablet ? tabletImage : mobileImage;

  return (
    <Box
      backgroundColor={darkMode ? "#131825" : "#00296B"}
      display="flex"
      w="100%"
    >
      <Box
        alignItems="center"
        sx={{
          width: { xs: "90%", sm: "84%", lg: "84%" },
          margin: { xs: "40px auto", sm: "40px auto", md: "0px auto" },
        }}
        maxWidth="1440px"
      >
        <Box
          display="flex"
          gap="24px"
          sx={{
            height: { xs: "599px", sm: "650px", md: "400px", lg: "604px" },
            flexDirection: { xs: "column", md: "row" },
          }}
        >
          <Box
            display="flex"
            flexDirection="column"
            gap="10px"
            sx={{
              width: { xs: "100%", md: "100%" },
              alignItems: { xs: "center", md: "start" },
            }}
            justifyContent="center"
          >
            <Typography
              fontWeight="600"
              letterSpacing="-0.02em"
              sx={{
                fontSize: { xs: "32px", sm: "36px" },
                lineHeight: { xs: "40px", sm: "44px" },
              }}
              color="#F5F5F5"
            >
              {t("about_Us")}
            </Typography>

            <Typography
              fontWeight="400"
              sx={{
                fontSize: { xs: "20px", sm: "20px", md: "15px", lg: "20px" },
                lineHeight: { lg: "28px" },
              }}
              color="#F5F5F5"
            >
              {t("about_p1")}
            </Typography>
          </Box>

          <Box
            width="100%"
            marginLeft="-25px"
            sx={{
              marginTop: { xs: "-25px", sm: "-75px", md: "0px", xl: "0px" },
            }}
          >
            <img src={image} width="100%" alt="" />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Header;
