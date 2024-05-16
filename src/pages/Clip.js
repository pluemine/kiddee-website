import "../App.css";

import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

import YouTubeIcon from "@mui/icons-material/YouTube";

import { SiteButton } from "../components/SiteButton";

import { member_list } from "../data/member";

function Clip() {
  function getPosition(string, subString, index) {
    return string.split(subString, index).join(subString).length;
  }

  return (
    <div style={{ backgroundColor: "#F8F8F8" }}>
      <Container style={{ paddingTop: "96px", paddingBottom: "96px" }}>
        <Grid
          container
          direction="column"
          alignItems="center"
          gap={4}
          style={{ width: "100%" }}
        >
          <Grid item>
            <Grid container direction="column" alignItems="center" gap={0}>
              <Grid item>
                <div className="font-bodybold">Portfolio</div>
              </Grid>
              <Grid item>
                <div className="font-super color-primary">Our Clips</div>
              </Grid>
            </Grid>
          </Grid>
          <Grid item style={{ width: "100%" }}>
            <Grid container spacing={4}>
              {member_list.map((data, index) => {
                return (
                  <Grid item xs={12} sm={6} md={6} lg={4} key={"index" + index}>
                    <Grid
                      container
                      className="member-card"
                      direction="column"
                      gap={1}
                    >
                      <Grid item>
                        <Grid container direction="row" gap={2}>
                          <Grid item>
                            <div className="tag">{data.id}</div>
                          </Grid>
                          <Grid item xs style={{ overflow: "hidden" }}>
                            <div
                              className="font-bodybold"
                              style={{
                                overflow: "hidden",
                                textOverflow: "ellipsis",
                                whiteSpace: "nowrap",
                              }}
                            >
                              {data.name}
                            </div>
                          </Grid>
                        </Grid>
                      </Grid>
                      <hr
                        className="line"
                        style={{
                          width: "100%",
                        }}
                      />
                      <Grid item>
                        <iframe
                          //width="560"
                          width="100%"
                          height="320"
                          src={`https://www.youtube.com/embed/${data.link.substring(
                            getPosition(data.link, "/", 3)
                          )}`}
                          title="YouTube video player"
                          frameborder="0"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                          referrerpolicy="strict-origin-when-cross-origin"
                          allowfullscreen
                          style={{ borderRadius: "4px" }}
                        ></iframe>
                      </Grid>
                      <hr
                        className="line"
                        style={{
                          width: "100%",
                        }}
                      />
                      <Grid item style={{ width: "100%" }}>
                        <Grid
                          container
                          direction="row"
                          alignItems="center"
                          gap={1}
                        >
                          <Grid item className="color-primary">
                            <YouTubeIcon />
                          </Grid>
                          <Grid
                            item
                            xs
                            style={{
                              overflow: "hidden",
                            }}
                          >
                            <a
                              className="font-body color-primary"
                              style={{
                                overflow: "hidden",
                                textOverflow: "ellipsis",
                                whiteSpace: "nowrap",
                                textDecoration: "underline",
                                cursor: "pointer",
                              }}
                              href={data.link}
                            >
                              {data.video}
                            </a>
                          </Grid>
                        </Grid>
                      </Grid>
                    </Grid>
                  </Grid>
                );
              })}
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default Clip;
