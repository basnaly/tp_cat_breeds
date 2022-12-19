import { HeaderTitleStyled } from "../../styles/MuiStyles";
import CatOfDay from "./CatOfDay";
import FilterDialog from "./FilterDialog";
import Switcher from "./Switcher";

export const Header = () => {

	return (
		
		<HeaderTitleStyled className="d-flex align-items-center justify-content-between">
			<div className="d-flex align-items-center p-2">
				<div className="mx-3">CatBreeds</div>

				<img src="/Cat.jpg" height={"60px"} />
			</div>

			<FilterDialog />

			<CatOfDay />

			<Switcher />
		
		</HeaderTitleStyled>
	);
};

export default Header;
