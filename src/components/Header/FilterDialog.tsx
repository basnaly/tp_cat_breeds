import React, { useContext, useState } from "react";
import { AppContext } from "../AppContext";

import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import Slide from "@mui/material/Slide";
import { MenuItem, TextField } from "@mui/material";
import {
	CloseButton,
	DialogTitleStyled,
	FilterButton,
} from "../../styles/MuiStyles";
import { TransitionProps } from "@mui/material/transitions";

import { FILTERABLE_CATS_PROPERTIES } from "../../utils/constants";
import { Cat } from "../../utils/Types";

const Transition = React.forwardRef(function Transition(
	props: TransitionProps & {
		children: React.ReactElement<any, any>;
	},
	ref: React.Ref<unknown>
) {
	return <Slide direction="up" ref={ref} {...props} />;
});

const FilterDialog = () => {
	const { setSwitcherChecked, switcherChecked, state, query, setQuery } =
		useContext(AppContext);

	// const originRef: React.RefObject<HTMLInputElement> | null | undefined = createRef();

	const [property, setProperty] = useState<keyof Cat>("origin");
	const [detail, setDetail] = useState("");

	// const valueOfProperty = FILTERABLE_CATS_PROPERTIES.find(
	// 	(el) => el.key === property
	// );

	let inputLabel = "";
		if (property === "life_span") {
			inputLabel = "Fill cat's life span";
		} else if (property === "weight_metric") {
			inputLabel = "Fill cat's weight";
		} else {
			inputLabel = "Detail's properties";
		}

	const detailOptions = state?.unfilteredData.map(
		(el) => el?.[property] as string | number
	);

	const options = detailOptions
		.filter((el, index) => {
			// remove duplicates
			return detailOptions.indexOf(el) === index;
		})
		.sort();

	const [isDialogOpen, setIsDialogOpen] = useState(false);

	const openDialog = () => {
		setIsDialogOpen(true);
	};

	const closeDialog = () => {
		setIsDialogOpen(false);
	};

	const saveFilter = () => {
		let query = "";
		if (property === "life_span") {
			query = `?life_span.min_lte=${detail}&life_span.max_gte=${detail}`;
		} else if (property === "weight_metric") {
			query = `?weight_metric.min_lte=${detail}&weight_metric.max_gte=${detail}`;
		} else {
			query = `?${property}=${detail}`;
		}
		setQuery(query);
		setSwitcherChecked(false);
		setIsDialogOpen(false);
	};

	const removeFilter = () => {
		const query = "";
		setQuery(query);
		setProperty("origin");
		setDetail("");
		setIsDialogOpen(false);
	};

	return (
		<React.Fragment>
			<FilterButton
				variant={"outlined"}
				className="mx-2"
				onClick={openDialog}
			>
				Filter details
			</FilterButton>

			<Dialog
				open={isDialogOpen}
				TransitionComponent={Transition}
				keepMounted
				onClose={closeDialog}
				aria-labelledby="alert-dialog-title"
				aria-describedby="alert-dialog-description"
				maxWidth="lg"
			>
				<DialogTitleStyled
					id="modal-modal-title"
					variant="h6"
					className="pb-1 m-1"
				>
					Select the filter details:
				</DialogTitleStyled>

				<hr className="mx-2 my-0" />

				<DialogContent className="d-flex flex-column align-items-center">
					<TextField
						// autoFocus
						className="mb-3"
						select
						margin="dense"
						id="properties"
						label="Cat's properties"
						type="text"
						variant="outlined"
						sx={{ width: "320px" }}
						// inputRef={originRef}
						value={property}
						onChange={(e) => {
							setProperty(e.target.value as keyof Cat);
							setDetail("");
						}}
					>
						{FILTERABLE_CATS_PROPERTIES.map((el, index) => (
							<MenuItem key={index} value={el.key}>
								{el.text}
							</MenuItem>
						))}
					</TextField>

					{detailOptions.length > 0 && (
						<TextField
							// autoFocus
							className="mb-3"
							select={ property !== "life_span" && property !== "weight_metric" }
							margin="dense"
							id="details"
							label={inputLabel} 
							type={ (property !== "life_span" && property !== "weight_metric") 
								? "text" : "number" }
							variant="outlined"
							sx={{ width: "320px" }}
							// inputRef={originRef}
							value={detail}
							onChange={(e) => setDetail(e.target.value)}
						>
							{options?.map((el, index, arr) => (
								<MenuItem key={index} value={el}>
									{options?.includes(0)
										? (!!el).toString()
										: typeof el === "number"
										? "⭐️".repeat(el)
										: el}
								</MenuItem>
							))}
						</TextField>
					)}
				</DialogContent>

				<DialogActions className="d-flex align-items-center justify-content-center mb-3">
					<CloseButton
						onClick={saveFilter}
						data-testid="cancel-button-element"
						variant={"outlined"}
						className=" mx-3"
						disabled={!property || detail === ""}
					>
						Save
					</CloseButton>

					<CloseButton
						onClick={removeFilter}
						data-testid="cancel-button-element"
						variant={"outlined"}
						className=" mx-3"
						disabled={query === ""}
					>
						Remove filter
					</CloseButton>

					<CloseButton
						onClick={closeDialog}
						data-testid="cancel-button-element"
						variant={"outlined"}
						className=" mx-3"
					>
						Cancel
					</CloseButton>
				</DialogActions>
			</Dialog>
		</React.Fragment>
	);
};

export default FilterDialog;
