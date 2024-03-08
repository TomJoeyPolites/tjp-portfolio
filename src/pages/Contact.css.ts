import { style } from "@vanilla-extract/css";
import { vars } from '../styles/theme.css';

export const grid = style({
  display: "grid",
  gridTemplateColumns: "1fr 1fr",
  margin: "1em 1em",
  gap: "4em",
  '@media': {
    'screen and (max-width: 768px)': {
      display: "flex",
      flexDirection: "column",
      margin: "3em 0"
    },
  },
  })

export const secondSection = style({
  display: "flex",
  flexDirection: "column",
  rowGap: "1em",
  textAlign: "center",
  '@media': {
    'screen and (max-width: 768px)': {
      display: "none",
    },
  },
})
export const details = style({
  display: "flex",
  columnGap: "4em",
  justifyContent: "center",
  textAlign: "center", 
  '@media': {
    'screen and (max-width: 1340px)': {
      flexDirection: "column",
      rowGap: "1em"
    },
  },
})

export const profile = style({
  width: "350px",
  height: "350px",
  margin: "auto",
  aspectRatio: "1/1",
  borderRadius: "50%",
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
  '@media': {
    'screen and (max-width: 1340px)': {
    },
  },
})

export const name = style({
  marginBottom: "0",
  fontSize: "2.5em",
  '@media': {
    'screen and (max-width: 1340px)': {
      fontSize: "2em",
    },
  },
})