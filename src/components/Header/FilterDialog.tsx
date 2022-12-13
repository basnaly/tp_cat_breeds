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

const Transition = React.forwardRef(function Transition(
	props: TransitionProps & {
		children: React.ReactElement<any, any>;
	},
	ref: React.Ref<unknown>
) {
	return <Slide direction="up" ref={ref} {...props} />;
});

const FilterDialog = () => {
	const {
		setSwitcherChecked,
		switcherChecked,
		state,
		query,
		setQuery,
	} = useContext(AppContext);

	// const originRef: React.RefObject<HTMLInputElement> | null | undefined = createRef();

	const [property, setProperty] = useState("");
	const [detail, setDetail] = useState("");

	const valueOfProperty = FILTERABLE_CATS_PROPERTIES.find(
		(el) => el.key === property
	);

	const countries = state.originOptions.filter((el, index) => {
		return state.originOptions.indexOf(el) === index
	});

	let options = valueOfProperty?.options

	if (property === 'origin') {
		options = countries.map(el => ({key: el, text: el}))
	}

	const [isDialogOpen, setIsDialogOpen] = useState(false);

	const openDialog = () => {
		setIsDialogOpen(true);
	};

	const closeDialog = () => {
		setIsDialogOpen(false);
	};

	const saveFilter = () => {
		const query =`?${property}=${detail}`
		setQuery(query);
		setProperty('')
		setDetail('')
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
						onChange={(e) => setProperty(e.target.value)}
					>
						{FILTERABLE_CATS_PROPERTIES.map((el, index) => (
							<MenuItem key={index} value={el.key}>
								{el.text}
							</MenuItem>
						))}
					</TextField>

					{valueOfProperty && (
						<TextField
							// autoFocus
							className="mb-3"
							select
							margin="dense"
							id="details"
							label="Detail's properties"
							type="text"
							variant="outlined"
							sx={{ width: "320px" }}
							// inputRef={originRef}
							value={detail}
							onChange={(e) => setDetail(e.target.value)}
						>
							{options?.map((el, index) => (
								<MenuItem key={index} value={el.key}>
									{el.text}
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
					>
						Save
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
