import {
  Box,
  Container,
  Grid2,
  Stack,
  Typography,
} from "@mui/material";
import React from "react";
import { COLORS } from "../../config/colors";
import bg from "../../assets/product1.png";
import { SecondaryButton } from "../../components/secondary-button";
import { ProductCard } from "../../components/product-card";
import { Title } from "../title/title";
import { LastCard } from "../../components/last-card";
import { Homelinks , Mainlinks} from "../../layout/home";
import { Link } from "react-router-dom";

export const Home = () => {
  return (
    <>
        <section>
        <Box bgcolor={COLORS.primary} py={"98px"}>
          <Container maxWidth="xl">
            <Stack
              direction={"row"}
              alignItems={"center"}
              justifyContent={"space-between"}
            >
              <Box maxWidth={"524px"}>
                <Typography
                  mb={"32px"}
                  fontWeight={700}
                  fontSize={60}
                  color="#fff"
                >
                  Новая коллекция ковров Venetta
                </Typography>
                <SecondaryButton>Смотреть все</SecondaryButton>
              </Box>
              <Stack direction={"row"}>
                <img src={bg} alt="img" />
                <img src={bg} alt="img" />
              </Stack>
            </Stack>
          </Container>
        </Box>
      </section>  
      <Box pt={"100px"}>
        <Title title={"Новинки"} link={"Все новинки"} />
      </Box>
      <Box py={"100px"}>
        <Container maxWidth="xl">
          <Grid2 container spacing={"40px"}>
            {Homelinks.map((item) => (
              <Link to={`/home/${item.id}`} key={item.id}>
              <Grid2 size={{ xs: 12, sm: 6, md: 4, lg: 3 }} key={item.id}>
                <ProductCard {...item} key={item.id}/>
              </Grid2>
              </Link>
            ))}
          </Grid2>
        </Container>
      </Box>
      <Box pt={"100px"}>
        <Title title={"Скидки"} link={"Все скидки"} />
      </Box>
      <Box py={"100px"}>
        <Container maxWidth="xl">
        <Grid2 container spacing={"40px"}>
            {Mainlinks.map((item) => (
              <Link to={`/product/${item.id}`} key={item.id}>
                <Grid2 key={item.id} size={{ xs: 12, sm: 6, md: 4, lg: 3 }}>
                  <LastCard {...item}  gap={"20px"} key={item.id}/>
                </Grid2>
              </Link>
            ))}
          </Grid2>
        </Container>
      </Box>
    </>
  );
};
