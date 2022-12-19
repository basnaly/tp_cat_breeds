import React, { useState } from "react";
import { CatButton, DialogTitleResultStyled, TodaySpanStyled } from "../../styles/MuiStyles";

import { Dialog, DialogContent } from "@mui/material";
import Slide from "@mui/material/Slide";
import { TransitionProps } from "@mui/material/transitions";
import moment from "moment";
import CatOfDayResult from "./CatOfDayResult";

const Transition = React.forwardRef(function Transition(
	props: TransitionProps & {
		children: React.ReactElement<any, any>;
	},
	ref: React.Ref<unknown>
) {
	return <Slide direction="up" ref={ref} {...props} />;
});

const CatOfDay = () => {

	const [isDialogOpen, setIsDialogOpen] = useState(false);

	const openDialog = () => setIsDialogOpen(true);
	const closeDialog = () => setIsDialogOpen(false);

    let day = new Date();
    let today = moment(day).format("ddd, MMM Do YYYY");

	return (
		<React.Fragment>
			<CatButton
				data-testid="delete-button-element"
				variant={"outlined"}
				// className="mx-3 mb-3"
				onClick={openDialog}
			>
				Cat of the Day
			</CatButton>

			<Dialog
				open={isDialogOpen}
				TransitionComponent={Transition}
				onClose={closeDialog}
			>
				<DialogTitleResultStyled
					// id="modal-modal-title"
					variant="h6"
					// component="h2"
					className="pb-1 m-1"
				>
					Today is: 
                    <TodaySpanStyled>{today}</TodaySpanStyled>
				</DialogTitleResultStyled>

				<hr className="mx-2 my-0" />

				<DialogContent>
					<CatOfDayResult />
				</DialogContent>
			</Dialog>
		</React.Fragment>
	);
};

export default CatOfDay;
