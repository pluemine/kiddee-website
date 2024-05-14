import "../App.css";

import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

import WorkOutlineIcon from "@mui/icons-material/WorkOutline";
import EmojiEventsOutlinedIcon from "@mui/icons-material/EmojiEventsOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";

import { SiteButton } from "../components/SiteButton";

function Staff() {
  const staff_list = [
    {
      image_path: "member-pic.jpg",
      id: "400123",
      name: "Hongtae Haha",
      nickname: "Hongtae",
      occupation: "นักศึกษาปริญญาตรี สมาชิคสภาผูเแืน ราษฎร",
      slogan: "หนอนที่ตื่นเช้าจะโดนนกกิน",
      email: "hongtae2020@gmail.com",
    },
    {
      image_path: "member-pic.jpg",
      id: "400000",
      name: "Name Surname",
      nickname: "Nickname",
      occupation: "",
      slogan: "-",
      email: "-",
    },
    {
      image_path: "member-pic.jpg",
      id: "400000",
      name: "Name Surname",
      nickname: "Nickname",
      occupation: "",
      slogan: "-",
      email: "-",
    },
    {
      image_path: "member-pic.jpg",
      id: "400000",
      name: "Name Surname",
      nickname: "Nickname",
      occupation: "",
      slogan: "-",
      email: "-",
    },
  ];

  return (
    <div style={{ backgroundColor: "#F8F8F8" }}>
      <Container style={{ paddingTop: "64px" }}>
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
                <div className="font-bodybold">Staff Member</div>
              </Grid>
              <Grid item>
                <div className="font-super color-primary">Our Professor</div>
              </Grid>
            </Grid>
          </Grid>
          <Grid item style={{ width: "100%" }}>
            <Grid container spacing={4}>
              {staff_list.map((data, index) => {
                return (
                  <Grid item xs={12} sm={6} md={6} lg={4} key={"index" + index}>
                    <Grid
                      container
                      className="member-card"
                      direction="column"
                      alignItems="center"
                      gap={2}
                    >
                      <Grid item>
                        <img
                          src={data.image_path}
                          style={{ height: "180px", borderRadius: "180px" }}
                        />
                      </Grid>
                      <Grid item>
                        <Grid
                          container
                          direction="column"
                          gap={1}
                          alignItems="center"
                        >
                          <Grid item>
                            <div className="tag">{data.id}</div>
                          </Grid>
                          <Grid item>
                            <div className="font-subheader">{data.name}</div>
                          </Grid>
                          <Grid item>
                            <div className="font-bodybold">
                              {data.nickname
                                ? "(" + data.nickname + ")"
                                : undefined}
                            </div>
                          </Grid>
                        </Grid>
                      </Grid>
                      <hr
                        style={{
                          width: "100%",
                          borderTop: "1px solid #EBEBEB",
                        }}
                      />
                      <Grid item style={{ width: "100%" }}>
                        <Grid container direction="column" gap={1}>
                          <Grid item style={{ width: "100%" }}>
                            <Grid container gap={1}>
                              <Grid item className="color-primary">
                                <WorkOutlineIcon />
                              </Grid>
                              <Grid
                                item
                                xs
                                style={{
                                  overflow: "hidden",
                                }}
                              >
                                <div
                                  className="font-body"
                                  style={{
                                    overflow: "hidden",
                                    textOverflow: "ellipsis",
                                    whiteSpace: "nowrap",
                                  }}
                                >
                                  {data.occupation}
                                </div>
                              </Grid>
                            </Grid>
                          </Grid>
                          <Grid item style={{ width: "100%" }}>
                            <Grid container gap={1}>
                              <Grid item className="color-primary">
                                <EmojiEventsOutlinedIcon />
                              </Grid>
                              <Grid
                                item
                                xs
                                style={{
                                  overflow: "hidden",
                                }}
                              >
                                <div
                                  className="font-body"
                                  style={{
                                    overflow: "hidden",
                                    textOverflow: "ellipsis",
                                    whiteSpace: "nowrap",
                                  }}
                                >
                                  {data.slogan}
                                </div>
                              </Grid>
                            </Grid>
                          </Grid>
                          <Grid item style={{ width: "100%" }}>
                            <Grid container gap={1}>
                              <Grid item className="color-primary">
                                <EmailOutlinedIcon />
                              </Grid>
                              <Grid
                                item
                                xs
                                style={{
                                  overflow: "hidden",
                                }}
                              >
                                <div
                                  className="font-body"
                                  style={{
                                    overflow: "hidden",
                                    textOverflow: "ellipsis",
                                    whiteSpace: "nowrap",
                                  }}
                                >
                                  {data.email}
                                </div>
                              </Grid>
                            </Grid>
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

export default Staff;
