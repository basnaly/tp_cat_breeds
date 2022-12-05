import { Snackbar, styled, TableRow } from "@mui/material";
import { Button, Box, DialogTitle, Paper, Badge, Typography } from "@mui/material";

export const MainStyled = styled("div")({
	// fontFamily: "'Spinnaker', sans-serif",
	// fontSize: "30px",
	// backgroundColor: "gray",
});

export const HeaderTitleStyled = styled("div")({
	backgroundColor: "steelblue",
	fontSize: "34px",
	fontWeight: "bold",
	color: 'chartreuse',
});

export const TypographyStyled = styled(Typography)({
	fontSize: "22px",
	fontWeight: "bold",
});



export const LightYellowButton = styled(Button)({
	textTransform: "none",
	color: "yellow",
	border: "1px solid dimgray",
	fontSize: "18px",
	backgroundColor: "lightgray",
	padding: "1px 5px",
});

