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
  Collapse,
} from "@mui/material";
// Icons
import KeyboardDoubleArrowDownIcon from "@mui/icons-material/KeyboardDoubleArrowDown";
import CloseIcon from "@mui/icons-material/Close";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import PauseIcon from "@mui/icons-material/Pause";
import VolumeUpIcon from "@mui/icons-material/VolumeUp";
import VolumeDownIcon from "@mui/icons-material/VolumeDown";
import MusicNoteIcon from "@mui/icons-material/MusicNote"; // ไอคอนสำหรับปุ่มตอนหด
import { Slider } from "@mui/material";

// ====== 1. นำเข้าไฟล์ภาพ Face (ภาพหน้ากาก) ======
import imgChiken from "./assets/Chiken.png";
import imgHibiki from "./assets/Hibiki.jpg";
import imgKyora from "./assets/Kyora.png";
import imgShoji from "./assets/Shoji.png";
import imgSyouma from "./assets/Syouma.jpg";
import imgZeirina from "./assets/Zeirina.jpg";

// ====== 2. นำเข้าไฟล์ภาพ Performance ======
import perfBass from "./assets/Instruments/Bass.jpg";
import perfDrums from "./assets/Instruments/Drums.jpg";
import perfGuitar from "./assets/Instruments/Guitar.jpg";
import perfKeyboard from "./assets/Instruments/Keyboard.jpg";
import perfTheramin from "./assets/Instruments/Theramin.jpg";
import perfVocal from "./assets/Instruments/Vocal.jpg";

// ====== 3. นำเข้าไฟล์เพลง (ตัวอย่าง: เอาคอมเมนต์ออกแล้วใช้จริงได้เลย) ======
// import mukaThemeSong from './assets/muka-theme.mp3';

// 1. สร้าง Theme
const mukaTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#bc002d",
    },
    background: {
      default: "#050505",
    },
  },
  typography: {
    fontFamily: '"Kanit", "Orbitron", sans-serif',
  },
});

const members = [
  {
    id: 1,
    stageName: "STAGE NAME",
    nameTH: "ฮานายางิ เซย์รินะ",
    nameJP: "花弥月 聖凛奈",
    nameEN: "Hanayagi Zeirina",
    role: "นักร้องนำ (Vocal)",
    maskType: "นางฟ้า",
    memberColor: "#fd0051",
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
    memberColor: "#0001ff",
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
    memberColor: "#81defe",
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
    memberColor: "#ff5c3b",
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

  // === State สำหรับเครื่องเล่นเพลง ===
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(0.3);
  const [isExpanded, setIsExpanded] = useState(true); // State ควบคุมการหด/ขยาย เริ่มต้นให้กางออก
  const audioRef = React.useRef(null);

  const togglePlay = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const handleVolumeChange = (event, newValue) => {
    setVolume(newValue);
    if (audioRef.current) {
      audioRef.current.volume = newValue;
    }
  };

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
                sx={{ fontWeight: 300, fontStyle: "italic", color: "grey.500" }}
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
                    "&:hover": {
                      transform: "translateY(-15px)",
                      borderColor: member.memberColor,
                      boxShadow: `0 15px 40px ${member.memberColor}66`,
                      "& .member-img": {
                        filter: "grayscale(0%) contrast(1.1)",
                        transform: "scale(1.05)",
                      },
                      "& .member-info": {
                        background: `linear-gradient(transparent, ${member.memberColor}E6)`,
                        pb: 6,
                      },
                      "& .reveal-text": {
                        opacity: 1,
                        color: member.memberColor,
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

      {/* ================= FACE REVEAL MODAL ================= */}
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
            backdropFilter: "blur(25px)",
            animation: "popIn 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)",
            "@keyframes popIn": {
              from: { opacity: 0, transform: "scale(0.95) translateY(20px)" },
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
              <Grid item xs={12} sm={5} md={4}>
                <Card
                  sx={{
                    borderRadius: 4,
                    overflow: "hidden",
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

      {/* ================= CUSTOM FLOATING MUSIC PLAYER (พับเก็บได้) ================= */}
      <Box
        sx={{
          position: "fixed",
          bottom: { xs: 20, md: 30 },
          right: { xs: 20, md: 30 },
          zIndex: 9000,
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-end", // จัดให้อยู่ชิดขวา
        }}
      >
        {/* === จุดแก้ไขเพลง: เปลี่ยนลิงก์ src ตรงนี้ === */}
        {/* ถ้าใช้เพลงในเครื่อง ให้เปลี่ยนเป็น: src={mukaThemeSong} */}
        <audio
          ref={audioRef}
          src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3"
          loop
        />

        {/* ส่วนที่หด/ขยายได้ (เครื่องเล่นเต็มรูปแบบ) */}
        <Collapse in={isExpanded}>
          <Box
            sx={{
              width: "280px",
              bgcolor: "rgba(10, 10, 10, 0.95)",
              border: "1px solid #bc002d",
              boxShadow: "0 0 20px rgba(188, 0, 45, 0.4)",
              borderRadius: "12px",
              p: 2,
              mb: 2, // ระยะห่างจากปุ่มกลมๆ ด้านล่าง
              backdropFilter: "blur(10px)",
            }}
          >
            <Stack spacing={1}>
              {/* ชื่อเพลงและปุ่มปิด(หด) */}
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <Typography
                  variant="subtitle2"
                  sx={{
                    color: "white",
                    fontWeight: "bold",
                    fontFamily: '"Orbitron", sans-serif',
                  }}
                >
                  MUKA THEME (DEMO)
                </Typography>
                <IconButton
                  size="small"
                  onClick={() => setIsExpanded(false)}
                  sx={{ color: "grey.500" }}
                >
                  <CloseIcon fontSize="small" />
                </IconButton>
              </Box>

              <Typography
                variant="caption"
                sx={{ color: "primary.main", letterSpacing: 1, mt: -1 }}
              >
                NOW PLAYING
              </Typography>

              {/* ปุ่มควบคุมและ Slider */}
              <Stack direction="row" alignItems="center" spacing={2}>
                <IconButton
                  onClick={togglePlay}
                  sx={{
                    bgcolor: "primary.main",
                    color: "white",
                    "&:hover": { bgcolor: "#8a0021" },
                  }}
                >
                  {isPlaying ? <PauseIcon /> : <PlayArrowIcon />}
                </IconButton>

                <VolumeDownIcon
                  sx={{ color: "grey.500", fontSize: "1.2rem" }}
                />
                <Slider
                  size="small"
                  value={volume}
                  min={0}
                  max={1}
                  step={0.01}
                  onChange={handleVolumeChange}
                  sx={{
                    color: "primary.main",
                    "& .MuiSlider-thumb": { width: 12, height: 12 },
                  }}
                />
                <VolumeUpIcon sx={{ color: "grey.500", fontSize: "1.2rem" }} />
              </Stack>
            </Stack>
          </Box>
        </Collapse>

        {/* ปุ่มกลมๆ สำหรับกางเครื่องเล่น (จะโชว์ตอนที่หดอยู่) */}
        {!isExpanded && (
          <IconButton
            onClick={() => setIsExpanded(true)}
            sx={{
              bgcolor: "rgba(10,10,10,0.9)",
              border: "1px solid #bc002d",
              color: isPlaying ? "primary.main" : "white", // ถ้าเพลงเล่นอยู่ ไอคอนจะเป็นสีแดง
              boxShadow: isPlaying
                ? "0 0 15px rgba(188, 0, 45, 0.8)"
                : "0 0 10px rgba(0,0,0,0.5)",
              p: 2,
              "&:hover": { bgcolor: "#bc002d", color: "white" },
              // แอนิเมชันกระเพื่อมเบาๆ ถ้าเพลงเล่นอยู่
              animation: isPlaying ? "pulse 2s infinite" : "none",
              "@keyframes pulse": {
                "0%": { transform: "scale(1)" },
                "50%": { transform: "scale(1.1)" },
                "100%": { transform: "scale(1)" },
              },
            }}
          >
            <MusicNoteIcon fontSize="large" />
          </IconButton>
        )}
      </Box>

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
