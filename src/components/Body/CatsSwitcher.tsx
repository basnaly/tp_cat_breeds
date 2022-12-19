import { useContext } from "react";
import { FiterStyled } from "../../styles/MuiStyles";
import { AppContext } from "../AppContext";
import CatsCarousel from "./CatsCarousel";
import CatsList from "./CatsList";
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

const CatsSwitcher = () => {
		
	const { setSwitcherChecked, switcherChecked, state } = useContext(AppContext);

	if (state.isLoading) {
		return (
			<Box className="mx-auto mt-4" sx={{ display: 'flex' }}>
			  <CircularProgress />
			</Box>
		  );
	}
	
	if (state.catsData.length === 0) {
		return <FiterStyled>Nothing found! Select another filter</FiterStyled>
	}

	return (
		<>
			{switcherChecked ? (
				<CatsCarousel fetchCatsData={state.catsData} />
			) : (
				<CatsList fetchCatsData={state.catsData} />
			)}
		</>
	);
};

export default CatsSwitcher;
