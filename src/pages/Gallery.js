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

function Gallery() {
  const galleryData = [
    {
      img: "gallery/gallery-1.jpeg",
      rows: 2,
      cols: 2,
    },
    {
      img: "gallery/gallery-2.jpeg",
      cols: 2,
    },
    {
      img: "gallery/gallery-3.jpeg",
    },
    {
      img: "gallery/gallery-4.jpeg",
    },
    {
      img: "gallery/gallery-5.jpeg",
    },
    {
      img: "gallery/gallery-6.jpeg",
      cols: 2,
    },
    {
      img: "gallery/gallery-7.jpeg",
    },
    {
      img: "gallery/gallery-8.jpeg",
    },
    {
      img: "gallery/gallery-9.jpeg",
      rows: 2,
    },
    {
      img: "gallery/gallery-10.jpeg",
      cols: 2,
    },
    {
      img: "gallery/gallery-11.jpeg",
    },
    {
      img: "gallery/gallery-12.jpeg",
    },
    {
      img: "gallery/gallery-13.jpeg",
    },
    {
      img: "gallery/gallery-14.jpeg",
      cols: 2,
    },
    {
      img: "gallery/gallery-15.jpeg",
    },
    {
      img: "gallery/gallery-16.jpeg",
    },
    {
      img: "gallery/gallery-17.jpeg",
      rows: 2,
    },
    {
      img: "gallery/gallery-18.jpeg",
    },
    {
      img: "gallery/gallery-19.jpeg",
    },
    {
      img: "gallery/gallery-20.jpeg",
    },
    {
      img: "gallery/gallery-21.jpeg",
    },
    {
      img: "gallery/gallery-22.jpeg",
    },
    {
      img: "gallery/gallery-23.jpeg",
      rows: 2,
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
                <div className="font-bodybold">Gallery</div>
              </Grid>
              <Grid item>
                <div className="font-super color-primary">State of the art</div>
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
              {galleryData.map((item) => (
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

export default Gallery;
