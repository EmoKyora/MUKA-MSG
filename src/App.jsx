import React, { useState } from "react";
import {
  Box,
  Typography,
  Container,
  Stack,
  createTheme,
  ThemeProvider,
  CssBaseline,
  Grid,
  Card,
  CardMedia,
  CardContent,
  IconButton,
} from "@mui/material";
// เพิ่ม Icon สำหรับเลื่อนหน้าจอ และ Icon สำหรับปิด Modal
import KeyboardDoubleArrowDownIcon from "@mui/icons-material/KeyboardDoubleArrowDown";
import CloseIcon from "@mui/icons-material/Close";

// ====== 1. นำเข้าไฟล์ภาพ Face (ภาพหน้ากาก) จากโฟลเดอร์ assets ======
import imgChiken from "./assets/Chiken.png";
import imgHibiki from "./assets/Hibiki.jpg";
import imgKyora from "./assets/Kyora.png";
import imgShoji from "./assets/Shoji.png";
import imgSyouma from "./assets/Syouma.jpg";
import imgZeirina from "./assets/Zeirina.jpg";

// ====== 2. นำเข้าไฟล์ภาพ Performance (ภาพเล่นดนตรี) จากโฟลเดอร์ Instruments ======
import perfBass from "./assets/Instruments/Bass.jpg";
import perfDrums from "./assets/Instruments/Drums.jpg";
import perfGuitar from "./assets/Instruments/Guitar.jpg";
import perfKeyboard from "./assets/Instruments/Keyboard.jpg";
import perfTheramin from "./assets/Instruments/Theramin.jpg";
import perfVocal from "./assets/Instruments/Vocal.jpg";

// 1. สร้าง Theme ที่สะท้อนความเป็น MUKA
const mukaTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#bc002d", // สีแดงก่ำแบบขบถ (สีหลักของวง)
    },
    background: {
      default: "#050505", // ดำเกือบสนิท
    },
  },
  typography: {
    fontFamily: '"Kanit", "Orbitron", sans-serif',
  },
});

// ข้อมูลสมาชิกทั้ง 6 คน (เพิ่มสีประจำตัว memberColor)
// *** คุณสามารถเปลี่ยนรหัสสี HEX ตรงนี้ให้ตรงกับสีจริงๆ ของตัวละครได้เลยครับ ***
const members = [
  {
    id: 1,
    stageName: "STAGE NAME",
    nameTH: "ฮานายางิ เซย์รินะ",
    nameJP: "花弥月 聖凛奈",
    nameEN: "Hanayagi Zeirina",
    role: "นักร้องนำ (Vocal)",
    maskType: "นางฟ้า",
    memberColor: "#fd0051", // สีทอง (สมมติสำหรับนางฟ้า)
    imgPerformance: perfVocal,
    imgFace: imgZeirina,
  },
  {
    id: 2,
    stageName: "STAGE NAME",
    nameTH: "ชิเกน",
    nameJP: "智賢",
    nameEN: "Chiken",
    role: "กีตาร์ (Guitar)",
    maskType: "พระ",
    memberColor: "#0001ff", // สีส้ม (สมมติสำหรับพระ)
    imgPerformance: perfGuitar,
    imgFace: imgChiken,
  },
  {
    id: 3,
    stageName: "STAGE NAME",
    nameTH: "โอตะ โชวมะ",
    nameJP: "大田 頌马",
    nameEN: "Oota Syouma",
    role: "เธรามิน (Theramin)",
    maskType: "กระสอบ",
    memberColor: "#81defe", // สีน้ำตาล (สมมติสำหรับกระสอบ)
    imgPerformance: perfTheramin,
    imgFace: imgSyouma,
  },
  {
    id: 4,
    stageName: "STAGE NAME",
    nameTH: "อากางิ ฮิบิกิ",
    nameJP: "赤城  響",
    nameEN: "Akagi Hibiki",
    role: "กลอง (Drums)",
    maskType: "แพะ",
    memberColor: "#ff5c3b", // สีแดงเข้ม (สมมติสำหรับแพะ)
    imgPerformance: perfDrums,
    imgFace: imgHibiki,
  },
  {
    id: 5,
    stageName: "STAGE NAME",
    nameTH: "ฮิซาเมะ เคียวระ",
    nameJP: "氷雨 響羅",
    nameEN: "Hisame Kyōra",
    role: "คีบอร์ด (Keyboard)",
    maskType: "ฉลาม",
    memberColor: "#f9a5b8",
    imgPerformance: perfKeyboard,
    imgFace: imgKyora,
  },
  {
    id: 6,
    stageName: "STAGE NAME",
    nameTH: "โชจิ ยูทากะ",
    nameJP: "所司 豊",
    nameEN: "Shoji Yutaka",
    role: "เบส (Bass)",
    maskType: "ปาไมค์",
    memberColor: "#096CFF",
    imgPerformance: perfBass,
    imgFace: imgShoji,
  },
];

function App() {
  const [selectedFace, setSelectedFace] = useState(null);

  const scrollToMembers = () => {
    document
      .getElementById("members-section")
      .scrollIntoView({ behavior: "smooth" });
  };

  return (
    <ThemeProvider theme={mukaTheme}>
      <CssBaseline />

      {/* ================= HERO SECTION ================= */}
      <Box
        sx={{
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          position: "relative",
          backgroundImage:
            'radial-gradient(circle, rgba(188, 0, 45, 0.15) 0%, rgba(0, 0, 0, 0.95) 100%), url("https://images.unsplash.com/photo-1514525253361-bee8718a300a?auto=format&fit=crop&w=1920&q=80")',
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
        }}
      >
        <Container maxWidth="md">
          <Stack spacing={4} alignItems="center">
            <Box sx={{ textAlign: "center" }}>
              <Typography
                variant="h6"
                sx={{
                  letterSpacing: 8,
                  color: "primary.main",
                  fontWeight: 300,
                  mb: 1,
                }}
              >
                REBELLION OF THE FACELESS
              </Typography>
              <Typography
                variant="h1"
                sx={{
                  fontWeight: 900,
                  fontSize: { xs: "3.5rem", md: "7rem" },
                  textShadow: "0 0 30px rgba(188, 0, 45, 0.6)",
                  lineHeight: 1,
                  mb: 2,
                }}
              >
                MUKA{" "}
                <span style={{ fontWeight: 300, fontSize: "0.6em" }}>
                  (無顔)
                </span>
              </Typography>
              <Typography
                variant="h5"
                sx={{
                  fontWeight: 300,
                  fontStyle: "italic",
                  color: "grey.500",
                }}
              >
                “เพื่อประกาศศรัทธาใหม่”
              </Typography>
            </Box>

            <Typography
              variant="body1"
              sx={{
                textAlign: "center",
                lineHeight: 1.8,
                color: "grey.400",
                borderLeft: "2px solid #bc002d",
                borderRight: "2px solid #bc002d",
                px: 4,
                py: 2,
                backgroundColor: "rgba(0,0,0,0.5)",
              }}
            >
              พวกเราปฏิเสธศรัทธาเดิมที่จองจำตัวตน
              เหยียบย่ำความคาดหวังที่ไร้เสียง
              และจะประกาศความจริงผ่านเสียงเพลงที่ไม่มีใครอาจละสายตาได้
              <br />
              <span style={{ color: "#bc002d", fontWeight: "bold" }}>
                ยินดีต้อนรับสู่ศรัทธาใหม่...
              </span>
            </Typography>
          </Stack>
        </Container>

        <Box sx={{ position: "absolute", bottom: 40, textAlign: "center" }}>
          <Typography
            variant="overline"
            sx={{
              display: "block",
              mb: -1,
              color: "grey.600",
              letterSpacing: 3,
            }}
          >
            MEET THE MEMBERS
          </Typography>
          <IconButton
            onClick={scrollToMembers}
            sx={{
              color: "primary.main",
              animation: "bounce 2s infinite",
              "@keyframes bounce": {
                "0%, 20%, 50%, 80%, 100%": { transform: "translateY(0)" },
                "40%": { transform: "translateY(-15px)" },
                "60%": { transform: "translateY(-7px)" },
              },
            }}
          >
            <KeyboardDoubleArrowDownIcon fontSize="large" />
          </IconButton>
        </Box>
      </Box>

      {/* ================= MEMBERS SECTION (GRID) ================= */}
      <Box
        id="members-section"
        sx={{ py: 12, bgcolor: "#050505", borderTop: "1px solid #222" }}
      >
        <Container maxWidth="lg">
          <Box sx={{ textAlign: "center", mb: 10 }}>
            <Typography
              variant="h2"
              sx={{
                fontWeight: 900,
                letterSpacing: 15,
                color: "white",
                display: "inline-block",
                borderBottom: "4px solid #bc002d",
                pb: 2,
              }}
            >
              MEMBERS
            </Typography>
          </Box>

          <Grid container spacing={4}>
            {members.map((member, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <Card
                  onClick={() => setSelectedFace(member)}
                  sx={{
                    bgcolor: "#0a0a0a",
                    borderRadius: 2,
                    position: "relative",
                    overflow: "hidden",
                    cursor: "pointer",
                    transition: "all 0.5s ease-in-out",
                    border: "1px solid #222",
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    // === เปลี่ยน Effect ตอน Hover ให้เรืองแสงเป็นสีประจำตัว ===
                    "&:hover": {
                      transform: "translateY(-15px)",
                      borderColor: member.memberColor, // ขอบเป็นสีประจำตัว
                      boxShadow: `0 15px 40px ${member.memberColor}66`, // แสงฟุ้งเป็นสีประจำตัว (เติม 66 ต่อท้ายคือปรับ Opacity)
                      "& .member-img": {
                        filter: "grayscale(0%) contrast(1.1)",
                        transform: "scale(1.05)",
                      },
                      "& .member-info": {
                        // เปลี่ยนสีพื้นหลังตอน Hover ให้มีติ่งสีประจำตัวนิดๆ
                        background: `linear-gradient(transparent, ${member.memberColor}E6)`,
                        pb: 6,
                      },
                      "& .reveal-text": {
                        opacity: 1,
                        color: member.memberColor, // ตัวหนังสือ CLICK TO REVEAL เป็นสีประจำตัว
                      },
                    },
                  }}
                >
                  <Box
                    sx={{
                      overflow: "hidden",
                      position: "relative",
                      height: 450,
                    }}
                  >
                    <CardMedia
                      component="img"
                      className="member-img"
                      image={member.imgPerformance}
                      alt={member.stageName}
                      sx={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                        objectPosition: "center",
                        filter: "grayscale(100%) brightness(0.6)",
                        transition: "transform 0.5s ease, filter 0.5s ease",
                      }}
                    />
                  </Box>

                  <CardContent
                    className="member-info"
                    sx={{
                      position: "absolute",
                      bottom: 0,
                      left: 0,
                      width: "100%",
                      background:
                        "linear-gradient(transparent, rgba(0,0,0,0.95) 40%, rgba(0,0,0,1))",
                      pt: 8,
                      pb: 3,
                      transition: "0.5s",
                      textAlign: "center",
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "flex-end",
                    }}
                  >
                    <Typography
                      variant="h4"
                      sx={{
                        fontWeight: 900,
                        color: "white",
                        letterSpacing: 2,
                        position: "relative",
                        zIndex: 1,
                        fontFamily: '"Orbitron", sans-serif',
                        textTransform: "uppercase",
                      }}
                    >
                      {member.stageName}
                    </Typography>

                    {/* === เปลี่ยนสีชื่อตำแหน่งในหน้า Grid ให้เป็นสีประจำตัว === */}
                    <Typography
                      variant="subtitle2"
                      sx={{
                        color: member.memberColor,
                        letterSpacing: 3,
                        mt: 1,
                        fontWeight: "bold",
                        position: "relative",
                        zIndex: 1,
                      }}
                    >
                      {member.role}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* ================= FACE REVEAL MODAL (OVERLAY) ================= */}
      {selectedFace && (
        <Box
          sx={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100vw",
            height: "100vh",
            bgcolor: "rgba(0,0,0,0.95)",
            zIndex: 9999,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            backdropFilter: "blur(25px)", // ปรับเบลอให้เยอะขึ้นเป็น 25px
            animation: "popIn 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)", // แอนิเมชันเด้งดึ๋งนิดๆ
            "@keyframes popIn": {
              from: { opacity: 0, transform: "scale(0.95) translateY(20px)" }, // โผล่มาจากด้านล่างพร้อมขยาย
              to: { opacity: 1, transform: "scale(1) translateY(0)" },
            },
          }}
          onClick={() => setSelectedFace(null)}
        >
          <IconButton
            onClick={() => setSelectedFace(null)}
            sx={{ position: "absolute", top: 20, right: 20, color: "white" }}
          >
            <CloseIcon fontSize="large" />
          </IconButton>

          <Container maxWidth="md">
            <Grid
              container
              spacing={4}
              alignItems="center"
              justifyContent="center"
            >
              {/* รูปภาพหน้ากาก */}
              <Grid item xs={12} sm={5} md={4}>
                <Card
                  sx={{
                    borderRadius: 4,
                    overflow: "hidden",
                    // === เปลี่ยนกรอบรูปและแสงฟุ้งใน Modal ให้เป็นสีประจำตัว ===
                    border: `2px solid ${selectedFace.memberColor}`,
                    boxShadow: `0 0 40px ${selectedFace.memberColor}80`,
                  }}
                >
                  <CardMedia
                    component="img"
                    image={selectedFace.imgFace}
                    alt={selectedFace.nameEN}
                    sx={{
                      width: "100%",
                      height: { xs: "250px", sm: "350px", md: "400px" },
                      objectFit: "cover",
                      objectPosition: "center top",
                      aspectRatio: "3/4",
                    }}
                  />
                </Card>
              </Grid>

              {/* รายละเอียด */}
              <Grid item xs={12} sm={7} md={8}>
                <Stack spacing={2}>
                  <Box>
                    <Typography
                      variant="h4"
                      sx={{
                        color: "grey.600",
                        fontWeight: 900,
                        mb: -1,
                        letterSpacing: 4,
                      }}
                    >
                      {selectedFace.nameJP}
                    </Typography>

                    {/* === ทำให้ชื่อภาษาอังกฤษตอน Reveal เป็นสีประจำตัว === */}
                    <Typography
                      variant="h3"
                      sx={{
                        color: selectedFace.memberColor,
                        fontWeight: 900,
                        mb: 1,
                        fontFamily: '"Orbitron", sans-serif',
                        textTransform: "uppercase",
                        textShadow: `0 0 15px ${selectedFace.memberColor}40`,
                      }}
                    >
                      {selectedFace.nameEN}
                    </Typography>

                    <Typography
                      variant="h6"
                      sx={{ fontWeight: 300, color: "white" }}
                    >
                      {selectedFace.nameTH}
                    </Typography>
                  </Box>

                  <Box sx={{ borderTop: "1px solid #333", pt: 1.5 }}>
                    <Typography
                      variant="subtitle1"
                      color="grey.400"
                      gutterBottom
                    >
                      ตำแหน่ง:{" "}
                      <span
                        style={{
                          color: selectedFace.memberColor,
                          fontWeight: "bold",
                          marginLeft: 8,
                        }}
                      >
                        {selectedFace.role}
                      </span>
                    </Typography>

                    <Typography
                      variant="subtitle1"
                      color="grey.400"
                      gutterBottom
                    >
                      สัญลักษณ์แห่งการขบถ:{" "}
                      <span
                        style={{
                          color: "white",
                          fontWeight: "bold",
                          marginLeft: 8,
                        }}
                      >
                        {selectedFace.maskType}
                      </span>
                    </Typography>

                    <Typography
                      variant="body2"
                      color="grey.500"
                      sx={{ lineHeight: 1.5, mt: 1, fontStyle: "italic" }}
                    >
                      "แม้จะสวมหน้ากาก
                      แต่เสียงเพลงคือความจริงใจที่ไม่อาจปกปิดได้..."
                    </Typography>
                  </Box>
                </Stack>
              </Grid>
            </Grid>
          </Container>
        </Box>
      )}

      {/* ================= FOOTER ================= */}
      <Box
        sx={{
          bgcolor: "#000",
          py: 4,
          textAlign: "center",
          borderTop: "1px solid #111",
        }}
      >
        <Typography
          variant="overline"
          sx={{ letterSpacing: 5, color: "grey.700" }}
        >
          FOR MSG COMMU
        </Typography>
      </Box>
    </ThemeProvider>
  );
}

export default App;
