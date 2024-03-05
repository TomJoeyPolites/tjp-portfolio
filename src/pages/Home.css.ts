import { style } from "@vanilla-extract/css";
import { vars } from '../styles/theme.css';

export const page = style({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  marginTop: "5em",
  textAlign: "center"
})

export const img = style({
  '@media': {
    'screen and (max-width: 700px)': {
      marginBottom: "1em"
    },
  },
})

export const portfolio = style({
  '@media': {
    'screen and (max-width: 700px)': {
      fontSize: "2em"
    },
  },
})