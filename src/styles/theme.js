import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  typography: {
    allVariants: {
      fontFamily: "Roboto",
    },
  },
  palette: {
    neutral: {
      main: "#64748B",
      contrastText: "#fff",
    },
  },
});
