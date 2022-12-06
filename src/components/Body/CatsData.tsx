import axios from "axios";
import { useEffect, useReducer } from "react";
import { ReducerState, ReducerAction } from "../../utils/Types";
import CatsCarousel from "./CatsCarousel";
import CatsList from "./CatsList";

const initialState = {
	isLoading: true,
	error: "",
	catsData: [],
};

const reducer = (state: ReducerState, action: ReducerAction) => {
	switch (action.type) {
		case "FETCH_SUCCESS":
			return {
				isLoading: false,
				catsData: action.payload,
				error: "",
			};
		case "FETCH_ERROR":
			return {
				isLoading: false,
				catsData: [],
				error: action.payload,
			};
		default:
			return state;
	}
};

const CatsData = () => {
	
	const [state, dispatch] = useReducer(reducer, initialState);

	useEffect(() => {
		axios
			.get("http://localhost:4051/cat_breeds")
			.then((response) => {
				console.log(response.data);
				dispatch({ type: "FETCH_SUCCESS", payload: response.data });
			})
			.catch((error) => {
				console.log(error);
				dispatch({
					type: "FETCH_ERROR",
					payload: "Something went wrong",
				});
			});
	}, []);

	return (
		<>
            <CatsCarousel fetchCatsData={state.catsData}/>
            <CatsList fetchCatsData={state.catsData}/>
        </>
	);
};

export default CatsData;
