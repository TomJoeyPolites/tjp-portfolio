import { style } from "@vanilla-extract/css";
import { calc } from '@vanilla-extract/css-utils';
import { vars } from '../../styles/theme.css';

export const layout = style({
  display: "flex",
  flexDirection: "column",
  margin: "0 0 0 100px",
  height: "100%",
  '@media': {
    'screen and (max-width: 875px)': {
      gridTemplateAreas:
      `
      "navBar navBar navBar"
      "headings headings number"
      "content content content"
      "leftArrow space rightArrow"
      `,
      gridTemplateRows: "7vh 10vh auto 6vh",
      gridTemplateColumns: "15vw 70vw 15vw",
    },
  },
})

export const navBar = style({
  gridArea: "navBar",
  display: "block",
  position: "fixed",
  top: "0px",
  left: "0px",
  minHeight: "100vh",
  width: "100px",
  '@media': {
    'screen and (max-width: 875px)': {
      minHeight: "7vh",
      width: "auto",
      flexDirection: "row",
      position: "static",
    },
  },
})

export const topSection = style({
  display: "flex",
  justifyContent: "space-between"
})

export const bottomSection = style({
  display: "flex",
  flex: "2",
  justifyContent: "space-between",
})

export const headings = style({
  gridArea: "headings",
  fontSize: "1em",
  marginTop: "1em",
  marginLeft: "3em",
  '@media': {
    'screen and (max-width: 875px)': {
      marginLeft: "1em",
      fontSize: "0.8em"
    },
    'screen and (max-width: 380px)': {
      fontSize: "0.7em"
    },
  },
})

export const pageNumberCircle = style({
  display: "flex",
  justifyContent: "flex-end",
  gridArea: "number",
  // position: "absolute",
  marginTop: "1.5em",
  marginRight: "3em",
  '@media': {
    'screen and (max-width: 875px)': {
      marginTop: "0.8em",
      marginRight: "1em",
    },
    'screen and (max-width: 380px)': {
      marginTop: "0.3em",
      marginRight: "1em",
    },
  },
})

export const pageNumber = style({
  display: "flex",
  justifyContent: "center",
  fontSize: "2em",
  letterSpacing: "1px"
})

export const content = style({
  gridArea: "content",
  margin: "0 5%",
  minHeight: "70vh",
  backgroundColor: vars.colors.primary,
  '@media': {
    'screen and (max-width: 875px)': {
      margin: "0 2em",
    },
  },
})

export const leftArrow = style({
  gridArea: "leftArrow",
  display: "flex",
  marginTop: "1em",
  marginLeft: "3em",
  '@media': {
    'screen and (max-width: 875px)': {
      marginLeft: "1em",
    },
  },
})

export const leftArrowIcon = style({
  height: "50px",
  width: "50px",
  ":hover": {
    cursor: "pointer",
  },
  '@media': {
    'screen and (max-width: 875px)': {
      height: "30px",
      width: "30px",
    },
  },
})

export const rightArrow = style({
  gridArea: "rightArrow",
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-end",
  marginTop: "1em",
  marginRight: "3em",
  '@media': {
    'screen and (max-width: 875px)': {
      marginRight: "1em",
    },
  },
})

export const rightArrowIcon = style({
  height: "50px",
  width: "50px",
  ":hover": {
    cursor: "pointer",
  },
  '@media': {
    'screen and (max-width: 875px)': {
      height: "30px",
      width: "30px",
    },
  },
})