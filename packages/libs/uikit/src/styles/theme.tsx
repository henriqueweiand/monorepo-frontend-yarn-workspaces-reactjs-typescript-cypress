import { createMuiTheme, ThemeOptions } from "@material-ui/core/styles";

import { colors } from "./colors";

const theme = createMuiTheme({
  custom: {
    leftMenu: {
      width: 240,
    },
  },
  palette: {
    primary: {
      main: colors.orange,
    },
    secondary: {
      main: colors.darkBlue,
    },
    background: {
      default: colors.whiteSmoke,
    },
    text: {
      secondary: colors.lightGray,
    },
  },
  props: {
    MuiDialog: {
      TransitionProps: {
        onEnter: (e: any) => e.removeAttribute("tabindex"),
      },
    },
  },
  typography: {
    fontFamily: ["Open Sans", "Roboto", "sans-serif"].join(","),
    button: {
      textTransform: "none",
      fontSize: "14px",
      fontStyle: "normal",
      lineHeight: "25px",
    },
  },
  overrides: {
    MuiDialog: {
      root: {},
      container: {},
    },
    MuiFilledInput: {
      root: {
        backgroundColor: colors.inputBackground,
        "&.Mui-focused": {
          backgroundColor: colors.inputBackground,
        },
        "&:hover": {
          backgroundColor: colors.inputBackground,
        },
      },
      underline: {
        "&$error:after": {
          borderBottom: "2px solid red",
        },
        "&:after": {
          borderBottom: "2px solid",
        },
        "&:before": {
          content: "1px solid blue",
        },
      },
    },
    MuiPaper: {
      root: {
        "&.MuiPaper-elevation1": {
          boxShadow: "0 3px 6px 0 rgba(0, 0, 0, 0.16);",
        },
        "&.MuiPaper-elevation2": {
          boxShadow: "0 3px 6px 0 rgba(0, 0, 0, 0.16);",
        },
        "&.MuiPaper-elevation3": {
          boxShadow: "0 3px 6px 0 rgba(0, 0, 0, 0.16);",
        },
      },
    },
  },
} as ThemeOptions);

export { theme };
