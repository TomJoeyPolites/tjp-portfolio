import { style } from "@vanilla-extract/css";
import { vars } from '../styles/theme.css';

export const gallery = style({
  display: "grid",
  gridTemplateColumns: "1fr 1fr 1fr",
  gap: "4em",
  padding: "5% 0 0 5%",
  alignItems: "centre",
  '@media': {
    'screen and (max-width: 1320px)': {
      display: "flex",
      flexDirection: "column",
      gap: "1em",
      padding: "4vh 0 0 0",
    },
    'screen and (max-width: 1025px)': {
      gap: "2em"
    },
  },
})

export const project = style({
  border: `2px solid ${vars.colors.complementary}`,
  padding: "1em",
  ":hover":{
    boxShadow: "1px 1px 9px 6px lightGrey",
  },
  '@media': {
    'screen and (max-width: 1320px)': {
      display: "grid",
      gridTemplateColumns: "1fr 2fr",    
      gap: "2em", 
      fontSize: "0.8em"
    },
    'screen and (max-width: 1025px)': {
      display: "flex",
      textAlign: "center"
    },
    'screen and (max-width: 875px)': {
      fontSize: "0.7em"
    },
  },
})

export const h3 = style({
  borderBottom: `1px solid ${vars.colors.complementary}`,
  marginBottom: "0.5em",
  '@media': {
    'screen and (max-width: 1320px)': {
      fontSize: "1.5em"
    },
  },
})

export const icon = style({
  width: "2em",
  height: "2em",
  margin: "1em",
  marginBottom: "0em",
  ':first-of-type':{
    marginLeft: "0em",
  }
})

export const img = style({
  width: "auto",
  height: "200px",
  margin: "auto",
  marginBottom: "1em",
  '@media': {
    'screen and (max-width: 1320px)': {
      height: "175px",
      margin: "auto",
    },
    'screen and (max-width: 1025px)': {
      display: "none"
    },
  },
})