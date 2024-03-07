import { style } from "@vanilla-extract/css";
import { vars } from '../../../styles/theme.css';

import { calc } from '@vanilla-extract/css-utils';


export const navbar = style({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "space-between",
  width: "100%",
  backgroundColor: vars.colors.complementary,
  minHeight: "100%",
  color: vars.colors.primary,
  '@media': {
    'screen and (max-width: 875px)': {
      height: "7vh",
      width: "100vw",
      flexDirection: "row",
    },
  },
})

export const hamburger = style({
  color: "white", 
  marginTop: "1.8em",
  ":hover": {
    color: vars.colors.brand,
        cursor: "pointer",
  },
  '@media': {
    'screen and (max-width: 875px)': {
      margin: "0.5em 0 0 1em "
    },
  },
  
})

export const iconLinks = style({
  display: "inherit",
  flexDirection: "inherit",
  marginBottom: "2.5em",
  '@media': {
    'screen and (max-width: 875px)': {
      display: "flex",
      flexDirection: "row",
      margin: "0 0.5em 0 0"
    },
  },
})

export const icon = style({
  color: "white", 
  marginBottom: "2em",
  ":hover": {
    color: vars.colors.brand,
    cursor: "pointer",
  },
  '@media': {
    'screen and (max-width: 875px)': {
      margin: "0.5em 0 0 1em"
    },
  },
})

//* HAMBURGER NAVIGATION SCREEN

export const navigation = style({
  position: "absolute",
  top: "0px",
  left: calc("100vw").multiply(0.04).toString(),
  height: "100vh",
  width: calc("40vw").subtract(calc("100vw").multiply(0.04)).toString(),
  background: vars.colors.complementary,
  zIndex: "3",
  opacity: "93%",
  '@media': {
    'screen and (max-width: 875px)': {
      width: "100%",
      top:"7vh",
      left: "0"
    },
  },
})

export const navScreen = style({
  display: "grid",
  gridTemplateRows: "0.1fr 2fr 2fr",
  rowGap: "4em", 
  height: "100%",
  padding: "3em 1em",
  textAlign: "center",
  color: vars.colors.primary,
  '@media': {
    'screen and (max-width: 875px)': {
      rowGap: "3em"
    },
  },
})

export const navScreenLink = style({
  ":hover": {
    cursor: "pointer",
    color: vars.colors.brand,
  },
  '@media': {
    'screen and (max-width: 400px)': {
      fontSize: "2em"
    },
  },
})

export const projectLinks = style({
  display: "flex",
  flexDirection: "column",
  marginTop: "2em", 
  gap: "3em",
  '@media': {
    'screen and (max-width: 400px)': {
      fontSize: "0.8em"
    },
  },
})

export const project = style({
  margin: "0 25%",
  ":hover": {
    cursor: "pointer",
    color: vars.colors.brand,
  }
})