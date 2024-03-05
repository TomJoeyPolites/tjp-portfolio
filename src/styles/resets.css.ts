import { globalStyle } from '@vanilla-extract/css';

// Box-sizing rules
globalStyle("*, *::before, *::after", {
  boxSizing: "border-box"
})

// Remove default margin
globalStyle("body, h1, h2, h3, h4, p, figure, blockquote, dl, dd", {
  margin: 0
})

// Set core root defaults
globalStyle("html:focus-within", {
  scrollBehavior: "smooth"
})

// Set core body defaults
globalStyle("body", {
  minHeight: "100vh",
  textRendering: "optimizeSpeed",
  lineHeight: 1.5
});

// Set core anchor settings
globalStyle("a", {
  textDecoration: "none",
  color: "inherit",
});

// Make images easier to work with
globalStyle("img, picture", {
  maxWidth: "100%",
  display: "block"
});

// Inherit fonts for inputs and buttons
globalStyle("input, button, textarea, select", {
  font: "inherit"
})

globalStyle("h1",{
  fontFamily: `'Tinos', serif`,
  fontSize: "5.5em",
  fontWeight: "bold",
  '@media': {
    'screen and (max-width: 1080px)': {
      fontSize: "4em",
    },
    'screen and (max-width: 700px)': {
      fontSize: "3em"
    },
  },
})

globalStyle("h2",{
  fontFamily: `'Arimo', sans-serif`,
  fontSize: "3em",
  fontWeight: "normal",
  letterSpacing: "0.25em",
  marginBottom: "0.25em",
})

globalStyle("h3",{
  fontFamily: `'Roboto', sans-serif`,
  fontSize: "1.5em",
  fontWeight: "normal"
})

globalStyle("p, label, input, textarea",{
  fontFamily: `'Roboto', sans-serif`,
  fontSize: "1.25em",
  lineHeight: "2em"
})


