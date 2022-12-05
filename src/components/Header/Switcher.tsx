import React, { useState } from "react";
import Switch from "@mui/material/Switch";
import { FormGroup, Stack } from "@mui/material";
import { TypographyStyled } from "../../styles/MuiStyles";

export default function Switcher() {

	const [checked, setChecked] = useState(true);

	const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setChecked(event.target.checked);
	};

	return (
		<FormGroup className="me-5">
			<Stack direction="row" spacing={1} alignItems="center">
				<TypographyStyled>Off</TypographyStyled>
				<Switch 
					checked={checked}
					onChange={handleChange}
					inputProps={{ "aria-label": "controlled" }}
				/>
				<TypographyStyled>Cats Carousel</TypographyStyled>
			</Stack>
		</FormGroup>
	);
}
