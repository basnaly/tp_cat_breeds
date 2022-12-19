import { useContext, useEffect, useState } from "react";
import { CatSpanStyled, ImgDialogStyled, TitleResultStyled } from "../../styles/MuiStyles";
import { AppContext } from "../AppContext";

const CatOfDayResult = () => {
	const [showCatOfDay, setShowCatOfDay] = useState(false);

	const { state } = useContext(AppContext);

	let catNumber = Math.floor(Math.random() * state.catsData.length);
	let catOfDay = state.catsData[catNumber]?.name;

	console.log(state.catsData);

	useEffect(() => {
		const timer = setTimeout(() => setShowCatOfDay(true), 5000);

		return () => {
			clearTimeout(timer);
		};
	}, []);

	return (
		<div className="d-flex flex-column">
			{!showCatOfDay ? (
				<TitleResultStyled>
					We are selecting the Cat ...
				</TitleResultStyled>
			) : (
				<>
					<TitleResultStyled>
						The cat is:
						<CatSpanStyled>{catOfDay}</CatSpanStyled>
					</TitleResultStyled>
                    <ImgDialogStyled src={state.catsData[catNumber]?.image?.url} />
				</>
			)}
		</div>
	);
};

export default CatOfDayResult;
