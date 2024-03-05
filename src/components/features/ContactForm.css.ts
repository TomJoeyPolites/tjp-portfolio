import { style } from "@vanilla-extract/css";
import { vars } from '../../styles/theme.css';

export const form = style({
  display: "flex",
  flexDirection: "column",
  margin: "auto"
})

export const input = style({
  paddingLeft: "10px",
  border: `1px solid ${vars.colors.complementary}`,
  borderTop: `1px solid ${vars.colors.complementary}`,
  marginBottom: "1em"
})

export const textarea = style({
  paddingLeft: "10px",
  border: `1px solid ${vars.colors.complementary}`,
  marginBottom: "1em",
  minHeight: "10em",
})

export const formButton = style({
  margin: "auto",
  padding: "6px 24px",
  border: `1px solid ${vars.colors.complementary}`,
  background: vars.colors.primary,
  borderRadius: "10px",
  ":hover":{
    background: vars.colors.complementary,
    color: vars.colors.primary,
  }
})

export const formSubmitted = style({
  display: "flex",
  justifyContent: "center",
  margin: "12vw 0 0 0",
  ':first-of-type': {
    fontSize: vars.fontSizes.body.md,
    textAlign: "center"
  },
})