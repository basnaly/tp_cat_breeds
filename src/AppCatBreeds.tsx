// import "./App.css";
import { ThemeProvider } from "@mui/material";
import "bootstrap/dist/css/bootstrap.css";
import CatsCarousel from "./components/Body/CatsCarousel";

import Header from "./components/Header/Header";
import { myTheme } from "./styles/MuiTheme";

function App() {
	return (
		<ThemeProvider theme={myTheme}>
			<Header />
			<CatsCarousel />
		</ThemeProvider>
	);
}

export default App;
