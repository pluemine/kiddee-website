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
  const itemData = [
    {
      img: "member/Super AI SS 400086.jpg",
      title: "Breakfast",
      rows: 2,
      cols: 2,
    },
    {
      img: "member/Super AI SS 400086.jpg",
      title: "Burger",
    },
    {
      img: "member/Super AI SS 400086.jpg",
      title: "Camera",
    },
    {
      img: "member/Super AI SS 400086.jpg",
      title: "Coffee",
      cols: 2,
    },
    {
      img: "member/Super AI SS 400086.jpg",
      title: "Hats",
      cols: 2,
    },
    {
      img: "member/Super AI SS 400086.jpg",
      title: "Honey",
      author: "@arwinneil",
      rows: 2,
      cols: 2,
    },
    {
      img: "member/Super AI SS 400086.jpg",
      title: "Basketball",
    },
    {
      img: "member/Super AI SS 400086.jpg",
      title: "Fern",
    },
    {
      img: "member/Super AI SS 400086.jpg",
      title: "Mushrooms",
      rows: 2,
      cols: 2,
    },
    {
      img: "member/Super AI SS 400086.jpg",
      title: "Tomato basil",
    },
    {
      img: "member/Super AI SS 400086.jpg",
      title: "Sea star",
    },
    {
      img: "member/Super AI SS 400086.jpg",
      title: "Bike",
      cols: 2,
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
                <div className="font-member/Super color-primary">
                  Our Professor
                </div>
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
              {itemData.map((item) => (
                <ImageListItem
                  key={item.img}
                  cols={item.cols || 1}
                  rows={item.rows || 1}
                >
                  <img
                    {...srcset(item.img, 121, item.rows, item.cols)}
                    alt={item.title}
                    loading="lazy"
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
