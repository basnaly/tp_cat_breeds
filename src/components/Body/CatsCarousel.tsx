import Carousel from "react-bootstrap/Carousel";
import { ArrowStyled, CarouselStyled, ImgStyled } from "../../styles/MuiStyles";
import { CatsCarouselProps } from '../../utils/Types'
import CatDialog from "./CatDialog";

const CatsCarousel = (props: CatsCarouselProps ) => {

	return (
		<CarouselStyled className="m-5"
			nextIcon={<ArrowStyled>→</ArrowStyled>}
			prevIcon={<ArrowStyled>←</ArrowStyled>}
		>
			{props.fetchCatsData.map((el) => (
				<Carousel.Item key={el.id}>
					<ImgStyled
						className="d-block mx-auto"
						src={el?.image?.url}
						alt={el.name}
					/>
					<Carousel.Caption>
						<CatDialog cat={el} />
					</Carousel.Caption>
				</Carousel.Item>
			))}
			
		</CarouselStyled>
	);
};

export default CatsCarousel;
