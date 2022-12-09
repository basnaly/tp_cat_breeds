import { ThemeProvider } from "@mui/material";
import "bootstrap/dist/css/bootstrap.css";
import { AppContextProvider } from "./components/AppContext";
import CatsData from "./components/Body/CatsData";

import Header from "./components/Header/Header";
import { myTheme } from "./styles/MuiTheme";

function AppCatBreeds() {
	return (
		<AppContextProvider>
			<ThemeProvider theme={myTheme}>
				<Header />
				<CatsData />
			</ThemeProvider>
		</AppContextProvider>
	);
}

export default AppCatBreeds;
