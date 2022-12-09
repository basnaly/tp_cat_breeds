import React, { useContext } from "react";
import Switch from "@mui/material/Switch";
import { FormGroup, Stack } from "@mui/material";
import { TypographyStyled } from "../../styles/MuiStyles";
import { AppContext } from "../AppContext";

export default function Switcher() {

	const {setSwitcherChecked, switcherChecked} = useContext(AppContext)

	const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setSwitcherChecked(event.target.checked);
	};

	return (
		<FormGroup className="me-5">
			<Stack direction="row" spacing={1} alignItems="center">
				<TypographyStyled>Cats List</TypographyStyled>
				<Switch 
					checked={switcherChecked}
					onChange={handleChange}
					inputProps={{ "aria-label": "controlled" }}
				/>
				<TypographyStyled>Cats Carousel</TypographyStyled>
			</Stack>
		</FormGroup>
	);
}
