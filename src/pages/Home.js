import "../App.css";

import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

import { SiteButton } from "../components/SiteButton";
import { useEffect } from "react";

function Home(props) {
  const { setPage } = props;

useEffect(() => {
  setPage("Home");
});

  return (
    <Container>
      <Grid
        container
        direction="column"
        justifyContent="center"
        alignItems="center"
        gap={4}
        style={{ minHeight: "100vh" }}
      >
        <Grid item>
          <img src="/kiddee-logo.png" style={{ height: "180px" }} />
        </Grid>
        <Grid item>
          <Grid container direction="column" alignItems="center" gap={0.5}>
            <Grid item>
              <div className="font-subheader">Welcome to</div>
            </Grid>
            <Grid item>
              <div className="font-super color-primary">KidDee House</div>
            </Grid>
          </Grid>
        </Grid>
        <Grid item>
          <div className="font-subheader">สโลแกนบ้าน</div>
        </Grid>
        <Grid item>
          <Grid container direction="row" alignItems="center" gap={1}>
            <Grid item>
              <SiteButton variant="contained">About us</SiteButton>
            </Grid>
            <Grid item>
              <SiteButton variant="outlined">Our Member</SiteButton>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
}

export default Home;
