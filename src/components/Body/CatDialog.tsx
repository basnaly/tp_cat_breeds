import * as React from "react";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Slide from "@mui/material/Slide";
import { TransitionProps } from "@mui/material/transitions";
import {
	CatNameDialogStyled,
	CatNameStyled,
	CloseButton,
	OriginDialogStyled,
} from "../../styles/MuiStyles";
import { CatDialogProps } from "../../utils/Types";
import CatTable from "./CatTable";
import { AppContext } from "../AppContext";

const Transition = React.forwardRef(function Transition(
	props: TransitionProps & {
		children: React.ReactElement<any, any>;
	},
	ref: React.Ref<unknown>
) {
	return <Slide direction="up" ref={ref} {...props} />;
});

const CatDialog = (props: CatDialogProps) => {
	const [open, setOpen] = React.useState(false);

	const { setSwitcherChecked, switcherChecked } =
		React.useContext(AppContext);

	const handleClickOpen = () => {
		setOpen(true);
	};

	const handleClose = () => {
		setOpen(false);
	};

	return (
		<div className="d-flex justify-content-center"> 
			{switcherChecked ? (
				<CatNameStyled onClick={handleClickOpen}>
					The {props.cat.name} cat.
					<span className="ms-3">🙋🏻‍♂️</span>
				</CatNameStyled>
			) : (
				<CloseButton onClick={handleClickOpen}
					className="my-3 mx-auto"
				>
					More details
					<span className="ms-3">🙋🏻‍♂️</span>
				</CloseButton>
			)}

			<Dialog
				open={open}
				TransitionComponent={Transition}
				keepMounted
				onClose={handleClose}
				aria-describedby="alert-dialog-slide-description"
			>
				<DialogTitle className="d-flex flex-column align-items-center">
					<a href={props.cat?.wikipedia_url} target="_blank">
						<CatNameDialogStyled>
							{props.cat?.name} cat
						</CatNameDialogStyled>
					</a>

					<OriginDialogStyled>
						origin: {props.cat?.origin}
					</OriginDialogStyled>
				</DialogTitle>

				<DialogContent>
					<DialogContentText id="alert-dialog-slide-description">
						<CatTable cat={props.cat} />
					</DialogContentText>
				</DialogContent>

				<DialogActions>
					<CloseButton onClick={handleClose}>
						Close
					</CloseButton>
				</DialogActions>
			</Dialog>
		</div>
	);
};

export default CatDialog;
