import "../App.css";

import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

import { HashLink } from "react-router-hash-link";

import { SiteButton } from "../components/SiteButton";
import { useEffect } from "react";

function Home(props) {
  const { setPage } = props;

  useEffect(() => {
    setPage("Home");
  });

  return (
    <div>
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
            <img src="/logo.png" style={{ height: "180px" }} />
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
            <div className="font-bodybold">"Brings Better Tomorrow"</div>
          </Grid>
          <Grid item>
            <Grid container direction="row" alignItems="center" gap={1}>
              <Grid item>
                <SiteButton
                  variant="contained"
                  component={HashLink}
                  to="/members"
                >
                  View Member
                </SiteButton>
              </Grid>
              <Grid item>
                <SiteButton
                  variant="outlined"
                  component={HashLink}
                  to="/gallery"
                >
                  Our Gallery
                </SiteButton>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
      <div style={{ backgroundColor: "#F8F8F8" }}>
        <Container>
          <Grid
            container
            gap={8}
            style={{ paddingTop: "64px", paddingBottom: "64px" }}
          >
            <Grid item xs={12} md={6}>
              <img src="main.png" style={{ width: "100%" }} />
            </Grid>
            <Grid item xs={12} md={4}>
              <Grid container gap={4}>
                <Grid item>
                  <div className="font-super">OUR HOUSE</div>
                </Grid>
                <Grid item>
                  <div className="font-body">
                    บ้านคิดดีของเรา เป็นบ้านที่รวมความหลากหลายของอายุความสามารถ
                    และ mindsets ที่แตกต่างกัน
                    ทำให้บ้านของเรามีการแลกเปลี่ยนความรู้และประสบการณ์ของคนในบ้านอยู่เสมอ
                    พวกเราเชื่อในความหลากหลายที่เป็นส่วนสำคัญของหลักการ design
                    thinking อันเป็นหัวใจของการเกิด innovation ใหม่ ๆ ในระดับโลก
                    ทำให้บ้านคิดดีของเราเป็นเหมือนบริษัทย่อมๆที่ทำงานอย่างเป็นระบบและแชร์ไอเดียร่วมกันเป็นอย่างดี
                  </div>
                </Grid>
                <Grid item>
                  <div className="font-body">
                    บ้านของเราจริงจังทั้งในเวลาทำงานและเวลาผ่อนคลาย
                    เวลางานเราไม่แพ้ใคร แต่เวลาเล่นเราก็ใส่สุดเหมือนกันครับ
                    จุดเด่นของบ้านของเราคือพวกเราทุกคน willing to share
                    และบริหารงานกันอย่างเป็นระบบ
                    มีประสิทธิภาพให้เป็นเหมือนสตาร์ทอัพที่กำลังจะเติบโตในอนาคต
                  </div>
                </Grid>
                <Grid item>
                  <div className="font-subheader color-primary">
                    Together bring better tomorrow ครับ
                  </div>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Container>
      </div>
      <div>
        <Container>
          <Grid
            container
            gap={8}
            style={{ paddingTop: "64px", paddingBottom: "64px" }}
          >
            <Grid item xs={12} md={6}>
              <Grid container gap={4}>
                <Grid item xs={12}>
                  <div className="font-super">แบบเสื้อ</div>
                </Grid>
                <Grid item xs={12}>
                  <div className="font-subheader color-primary">
                    เหตุผลที่เลือกฮู้ดผ้าห่ม
                  </div>
                </Grid>
                <Grid item xs={12}>
                  <div className="font-body">
                    ห้องบ้านคิดดีแอร์เย็นมาก
                    อีกทั้งคนในบ้านมีคนที่ขี้ร้อนและขี้หนาว
                    ฮู้ดผ้าห่มจึงเป็นไอเทมที่ตอบโจทย์ ส่วนเหตุผลที่ใช้สีดำคือ
                    สามารถคลุมร่วมกับชุดสีอะไรก็ได้
                    และยังตัดกับสีเขียวที่เป็นสีของโลโก้ประจำบ้านอีกด้วย
                  </div>
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={12} md={4}>
              <img src="hood.png" style={{ width: "100%" }} />
            </Grid>
          </Grid>
        </Container>
      </div>
    </div>
  );
}

export default Home;
