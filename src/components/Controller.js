import * as React from "react";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import PauseRounded from "@mui/icons-material/PauseRounded";
import PlayArrowRounded from "@mui/icons-material/PlayArrowRounded";
import FastForwardRounded from "@mui/icons-material/FastForwardRounded";
import FastRewindRounded from "@mui/icons-material/FastRewindRounded";
import useMusicPlayer from "../hooks/useMusicPlayer";


const Widget = styled("div")(({ theme }) => ({
  //   padding: 16,
  borderRadius: " 0px 0px 70px 70px",
  //   width: 343,
  maxWidth: "100%",
  margin: "auto",
  position: "relative",
  zIndex: 1,
  backgroundColor:
    theme.palette.mode === "dark" ? "rgba(0,0,0,0.6)" : "rgba(255,255,255,0.4)",
  backdropFilter: "blur(40px)",
}));

export default function MusicPlayerSlider() {

  const {
    isPlaying,
    playTrack,
    currentTrackIndex,
    currentTrackName,
    playPreviousTrack,
    playNextTrack,
  } = useMusicPlayer();

  const theme = useTheme();
  const [paused, setPaused] = React.useState(false);
  const mainIconColor = theme.palette.mode === "dark" ? "#fff" : "#000";
  return (
    <Box sx={{ width: "100%", overflow: "hidden" }}>
      <Widget>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            opacity: currentTrackName ? 1 : 0.2,
            ":focus-within": currentTrackName ? "" : { pointerEvents: "none" },
          }}
        >
          <IconButton onClick={playPreviousTrack} aria-label="previous song">
            <FastRewindRounded fontSize="large" htmlColor={mainIconColor} />
          </IconButton>

          <IconButton onClick={() => playTrack(currentTrackIndex)}>
            {isPlaying ? (
              <PauseRounded
                sx={{ fontSize: "3rem" }}
                htmlColor={mainIconColor}
              />
            ) : (
              <PlayArrowRounded
                sx={{ fontSize: "3rem" }}
                htmlColor={mainIconColor}
              />
            )}
          </IconButton>
          <IconButton onClick={playNextTrack} aria-label="next song">
            <FastForwardRounded fontSize="large" htmlColor={mainIconColor} />
          </IconButton>
        </Box>
      </Widget>
    </Box>
  );
}
