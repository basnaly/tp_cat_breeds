import { styled, Button, Typography, DialogTitle } from "@mui/material";
import { Carousel, Accordion } from "react-bootstrap";

export const MainStyled = styled("div")({
	display: 'flex',
    flexDirection: 'column',
    overflow: 'auto',
    height: '100vh',
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
	overflow: 'hidden',
	maxWidth: '100%',
});

export const ArrowStyled = styled('div')({
	color: 'steelblue',
});

export const DescriptionStyled = styled('div')({

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

export const FilterButton = styled(Button)({
	textTransform: "none",
	color: 'steelblue', 
	border: "1px solid dimgray",
	fontSize: "18px",
	fontWeight: 'bold',
	backgroundColor: "chartreuse",
	padding: "3px 8px",
	'&:hover': {
		backgroundColor: "white",
	}
});

export const DialogTitleStyled = styled(DialogTitle)({
	fontSize: '24px',
});

export const FiterStyled = styled('div')({
	color: '#0f87eb',
	fontSize: '28px',
	fontWeight: 'bold',
	textAlign: 'center',
	margin: '20px',
});

export const CatButton = styled(Button)({
	textTransform: "none",
	color: 'red', 
	border: "1px solid dimgray",
	fontSize: "18px",
	fontWeight: 'bold',
	backgroundColor: "chartreuse",
	padding: "3px 8px",
	'&:hover': {
		backgroundColor: "white",
	}
});

export const TodaySpanStyled = styled('span')({
	color: '#0f87eb',
	fontSize: '24px',
	fontWeight: 'bold',
	paddingLeft: '10px',
});

export const DialogTitleResultStyled = styled(DialogTitle)({
	fontSize: '20px',
	fontWeight: 'bold',
	textAlign: 'center',
});

export const CatSpanStyled = styled('span')({
	color: 'red',
	fontSize: '24px',
	fontWeight: 'bold',
	paddingLeft: '10px',
});

export const TitleResultStyled = styled('div')({
	fontSize: '20px',
	fontWeight: 'bold',
	textAlign: 'center',
	marginBottom: '20px',
});

export const ImgDialogStyled = styled('img')({
	maxHeight: '400px',
	overflow: 'hidden',
	maxWidth: '100%',
	margin: 'auto',
});