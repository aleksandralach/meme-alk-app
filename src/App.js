import "../src/styles/styles.css";
import { ThemeProvider } from "@mui/material/styles";
import { theme } from "../src/styles/theme";
import { Navigate } from "react-router-dom";
import { Layout } from "../src/components/Layout";
import { Hot } from "../src/routes/Hot";
import { Regular } from "../src/routes/Regular";
import { ErrorPage } from "../src/components/ErrorPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MemeGenerator from "./routes/MemeGenerator";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Routes>
          <Route path="/" element={<Navigate to="/regular" />} />
          <Route path="/" element={<Layout />}>
            <Route path="hot" element={<Hot />} />
            <Route path="regular" element={<Regular />} />
            <Route path="memegenerator" element={<MemeGenerator />} />
            <Route path="*" element={<ErrorPage />} />
          </Route>
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
