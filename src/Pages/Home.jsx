import { Container, Grid } from "@chakra-ui/react";
import React from "react";
import PostCard from "../Components/PostCard";

function Home() {
  return (
    <Container maxW="container.xl">
      <Grid gap={4} gridTemplateColumns="repeat(auto-fit,minmax(320px,1fr))">
        <PostCard />
        <PostCard />
        <PostCard />
      </Grid>
    </Container>
  );
}

export default Home;
