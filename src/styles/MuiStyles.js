import { styled, Button, Typography } from "@mui/material";
import { Carousel, Accordion } from "react-bootstrap";

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

export const CatNameStyled = styled("h2")({
	backgroundColor: "steelblue",
	color: 'chartreuse',
	padding: '5px 0',
	cursor: 'pointer', 
});

export const CarouselStyled = styled(Carousel)({
	maxHeight: "calc(100vh - 172px)",
	overflow: 'hidden',
	// backgroundColor: "#4682b490", // steelblue
	color: 'chartreuse',
	fontSize: '40px',
	fontWeight: 'bold',
	// textShadow: '2px 2px black',
	"& a": {
		textDecoration: 'none',
		opacity: 1
	}
});

export const ImgStyled = styled('img')({
	maxHeight: "calc(100vh - 172px)",
	overflow: 'hidden'
});

export const ArrowStyled = styled('div')({
	color: 'steelblue',
});

export const DescriptionStyled = styled('div')({
	// backgroundColor: "steelblue",
	// color: 'chartreuse',
	color: '#0f87eb',
	fontSize: '20px',
	fontWeight: 'bold',
	margin: '10px 0'
});

export const DescriptionSpanStyled = styled('span')({
	color: 'black',
	fontSize: '20px',
	fontWeight: 'bold',
	marginLeft: '10px'
});

export const AccordionStyled = styled(Accordion.Header)({
	'& .accordion-button': {
	color: '#0f87eb',
	fontSize: '20px',
	fontWeight: 'bold',
	marginLeft: '10px',
	}
});

export const CatNameDialogStyled = styled('div')({
	color: '#0f87eb',
	fontSize: '24px',
	fontWeight: 'bold',
	textAlign: 'center',
	textDecoration: 'underline',
});

export const OriginDialogStyled = styled('div')({
	color: '#0f87eb',
	fontSize: '20px',
	fontWeight: 'bold',
	textAlign: 'center',
	//textDecoration: 'underline',
});


export const CloseButton = styled(Button)({
	textTransform: "none",
	color: 'white', //'chartreuse',
	border: "1px solid dimgray",
	fontSize: "18px",
	fontWeight: 'bold',
	backgroundColor: "#0f87eb",
	padding: "3px 8px",
});

