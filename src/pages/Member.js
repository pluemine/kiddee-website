import "../App.css";

import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

import { SiteButton } from "../components/SiteButton";

function Member() {
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
              <div className="font-subheader">Member</div>
            </Grid>
          </Grid>
        </Grid>
        <Grid item>
          <div className="font-subheader">Hello</div>
        </Grid>
      </Grid>
    </Container>
  );
}

export default Member;
