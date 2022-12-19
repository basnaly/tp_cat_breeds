export type Cat = {
	weight: { imperial: string; metric: string };
	weight_metric: { max: number, min: number };
	id: string;
	name: string;
	cfa_url: string;
	vetstreet_url: string;
	vcahospitals_url: string;
	temperament: string;
	origin: string;
	country_codes: string;
	country_code: string;
	description: string;
	life_span: { max: number; min: number };
	indoor: number;
	lap: number;
	alt_names: string;
	adaptability: number;
	affection_level: number;
	child_friendly: number;
	dog_friendly: number;
	energy_level: number;
	grooming: number;
	health_issues: number;
	intelligence: number;
	shedding_level: number;
	social_needs: number;
	stranger_friendly: number;
	vocalisation: number;
	experimental: number;
	hairless: number;
	natural: number;
	rare: number;
	rex: number;
	suppressed_tail: number;
	short_legs: number;
	wikipedia_url: string;
	hypoallergenic: number;
	reference_image_id: string;
	image: {
		id: string;
		width: number;
		height: number;
		url: string;
	};
};

export type ReducerState = {
	isLoading: boolean;
	error: string;
	catsData: Cat[];
	unfilteredData: Cat[]
};

export type ReducerAction = IsLoadingAction | SuccessAction | SuccessUnfilteredDataAction | ErrorAction;

export type IsLoadingAction = {
	type: "IS_LOADING";
	payload: boolean;
};

export type SuccessAction = {
	type: "FETCH_SUCCESS";
	payload: Cat[];
};

export type SuccessUnfilteredDataAction = {
	type: "FETCH_UNFILTERED_DATA";
	payload: Cat[];
};

export type ErrorAction = {
	type: "FETCH_ERROR";
	payload: string;
};

export type CatsCarouselProps = {
    fetchCatsData: Cat[]
}

export type CatsListProps = {
    fetchCatsData: Cat[]
}

export type CatDialogProps = {
	cat: Cat
}

export type CatTableProps = {
	cat: Cat
}