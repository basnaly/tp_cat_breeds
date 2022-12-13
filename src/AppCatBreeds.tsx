import { ThemeProvider } from "@mui/material";
import "bootstrap/dist/css/bootstrap.css";
import { AppContextProvider } from "./components/AppContext";
import CatsSwitcher from "./components/Body/CatsSwitcher";

import Header from "./components/Header/Header";
import { MainStyled } from "./styles/MuiStyles";
import { myTheme } from "./styles/MuiTheme";

function AppCatBreeds() {
	return (
		<AppContextProvider>
			<ThemeProvider theme={myTheme}>
				<MainStyled>
					<Header />
					<CatsSwitcher />
				</MainStyled>
			</ThemeProvider>
		</AppContextProvider>
	);
}

export default AppCatBreeds;
