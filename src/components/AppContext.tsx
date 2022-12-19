import axios from "axios";
import { createContext, useEffect, useReducer, useState } from "react";
import { ReducerState, ReducerAction } from "../utils/Types";

type AppContextType = {
    switcherChecked: boolean, 
    setSwitcherChecked: React.Dispatch<React.SetStateAction<boolean>>
    state: ReducerState,
	query: string,
	setQuery: React.Dispatch<React.SetStateAction<string>>,
}

type AppContextProviderProps = {
    children: React.ReactNode
}

const initialState: ReducerState = {
	isLoading: true,
	error: "",
	catsData: [],
	unfilteredData: [],
};

export const AppContext = createContext<AppContextType>({
    switcherChecked: true, 
    setSwitcherChecked: () => {},
    state: initialState,
	query: '',
	setQuery: () => {},
})

const reducer = (state: ReducerState, action: ReducerAction) => {
	switch (action.type) {
		case "IS_LOADING":
			return {
				...state,
				isLoading: true,
			};
		case "FETCH_SUCCESS":
			return {
				...state,
				isLoading: false,
				catsData: action.payload,
				error: "",
			};
		case "FETCH_UNFILTERED_DATA":
			return {
				...state,
				unfilteredData: action.payload,
			};
		case "FETCH_ERROR":
			return {
				isLoading: false,
				catsData: [],
				error: action.payload,
				unfilteredData: []
			};
		default:
			return state;
	}
};

export const AppContextProvider = ({ children}: AppContextProviderProps ) => {

    const [state, dispatch] = useReducer(reducer, initialState);

    const [switcherChecked, setSwitcherChecked] = useState<boolean>(false);

	const [query, setQuery] = useState<string>('')

    useEffect(() => {

		axios
			.get("http://localhost:4051/cat_breeds" + query, )
			.then((response) => {
				// console.log(response.data);
				if (!query) {
					dispatch({ type: "FETCH_UNFILTERED_DATA", payload: response.data });
				}
				dispatch({ type: "FETCH_SUCCESS", payload: response.data });
			})
			.catch((error) => {
				console.log(error);
				dispatch({
					type: "FETCH_ERROR",
					payload: "Something went wrong",
				});
			});
	}, [query]);
	
    return (
        <AppContext.Provider value={{ switcherChecked, setSwitcherChecked, state, query, setQuery }}>
            {children}
        </AppContext.Provider>
    )
}