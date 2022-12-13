import { useContext } from "react";
import { FiterStyled } from "../../styles/MuiStyles";
import { AppContext } from "../AppContext";
import CatsCarousel from "./CatsCarousel";
import CatsList from "./CatsList";

const CatsSwitcher = () => {
		
	const { setSwitcherChecked, switcherChecked, state } = useContext(AppContext);
	
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
