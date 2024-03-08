import { style, globalStyle } from "@vanilla-extract/css";
import { vars } from '../styles/theme.css';


export const topSection = style({
  display: "grid",
  gridTemplateColumns: "2.25fr 1fr",
  marginTop: "2em",
  columnGap: "2em",
  '@media': {
    'screen and (max-width: 1340px)': {
      height: "20rem",
    },
    'screen and (max-width: 1110px)': {
      marginTop: "4em",
      gridTemplateColumns: "auto",
    },
    'screen and (max-width: 955px)': {
      marginTop: "2em",
      height: "100%"
    },
    'screen and (max-width: 605px)': {
      marginTop: "3em",
      height: "100%"
    },
    'screen and (max-width: 380px)': {
      marginTop: "2em",
      height: "100%"
    },
  },
})

export const image = style({
  display: "flex",
  justifyContent: "center",
  height: "25rem",
  margin: "auto",
  marginTop: "4rem",
  '@media': {
    'screen and (max-width: 1340px)': {
      height: "20rem",
    },
    'screen and (max-width: 1110px)': {
      display: "none"
    },
    'screen and (max-width: 955px)': {
    },
  },
})

export const profile = style({
  display: "inline-block",
  aspectRatio: "1/1",
  borderRadius: "50%",
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat"
})

export const p = style({
  marginBottom: "1em",
  '@media': {
    'screen and (max-width: 1340px)': {
      fontSize: "1.1em",
    },
  },
})