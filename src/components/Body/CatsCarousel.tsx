import axios from "axios";
import React, { useEffect } from "react";
import Carousel from "react-bootstrap/Carousel";
import { ArrowStyled, CarouselStyled, CatNameStyled, ImgStyled } from "../../styles/MuiStyles";
import { CatsCarouselProps } from '../../utils/Types'

const CatsCarousel = (props: CatsCarouselProps ) => {

	return (
		<CarouselStyled className="m-5"
			nextIcon={<ArrowStyled>→</ArrowStyled>}
			prevIcon={<ArrowStyled>←</ArrowStyled>}
		>
			{props.fetchCatsData.map((el) => (
				<Carousel.Item>
					<ImgStyled
						className="d-block mx-auto"
						src={el?.image?.url}
						alt={el.name}
					/>
					<Carousel.Caption>
						<CatNameStyled>The {el.name} cat.</CatNameStyled>
					</Carousel.Caption>
				</Carousel.Item>
			))}
		</CarouselStyled>
	);
};

export default CatsCarousel;
