import "../App.css";

import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

import WorkOutlineIcon from "@mui/icons-material/WorkOutline";
import EmojiEventsOutlinedIcon from "@mui/icons-material/EmojiEventsOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";

import { SiteButton } from "../components/SiteButton";

import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";

function srcset(image, size, rows = 1, cols = 1) {
  return {
    src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
    srcSet: `${image}?w=${size * cols}&h=${
      size * rows
    }&fit=crop&auto=format&dpr=2 2x`,
  };
}

function Recognition() {
  const recognitionData = [
    {
      img: "recognition/recognition-1.jpeg",
      rows: 2,
      cols: 2,
    },
    {
      img: "recognition/recognition-2.jpeg",
      cols: 2,
    },
    {
      img: "recognition/recognition-3.jpeg",
    },
    {
      img: "recognition/recognition-4.jpeg",
    },
    {
      img: "recognition/recognition-5.jpeg",
    },
    {
      img: "recognition/recognition-6.jpeg",
      cols: 2,
    },
    {
      img: "recognition/recognition-7.jpeg",
    },
    {
      img: "recognition/recognition-8.jpeg",
    },
    {
      img: "recognition/recognition-9.jpeg",
      rows: 2,
      cols: 2,
    },
    {
      img: "recognition/recognition-10.jpeg",
    },
    {
      img: "recognition/recognition-11.jpeg",
    },
    {
      img: "recognition/recognition-12.jpeg",
    },
  ];

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
                <div className="font-bodybold">Pantheon</div>
              </Grid>
              <Grid item>
                <div className="font-super color-primary">Recognition</div>
              </Grid>
            </Grid>
          </Grid>
          <Grid item style={{ width: "100%" }}>
            <ImageList
              //sx={{ width: 500, height: 450 }}
              variant="quilted"
              cols={4}
              //rowHeight={121}
            >
              {recognitionData.map((item) => (
                <ImageListItem
                  key={item.img}
                  cols={item.cols || 1}
                  rows={item.rows || 1}
                >
                  <img
                    {...srcset(item.img, 121, item.rows, item.cols)}
                    alt={item.title}
                    loading="lazy"
                    style={{ borderRadius: "8px" }}
                  />
                </ImageListItem>
              ))}
            </ImageList>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default Recognition;
