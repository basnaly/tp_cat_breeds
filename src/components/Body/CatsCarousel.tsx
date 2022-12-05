import React from "react";
import Carousel from "react-bootstrap/Carousel";

const CatsCarousel = () => {

	return (
		
		<Carousel className="m-5">
			<Carousel.Item>
				<img
					className="d-block w-100"
					src="https://cdn2.thecatapi.com/images/0XYvRd7oD.jpg"
					alt="Abyssinian"
				/>
				<Carousel.Caption>
					<h3>The Abyssinian cat.</h3>	
				</Carousel.Caption>
			</Carousel.Item>

			<Carousel.Item>
				<img
					className="d-block w-100"
					src="https://cdn2.thecatapi.com/images/ozEvzdVM-.jpg"
					alt="Aegean"
				/>
				<Carousel.Caption>
					<h3>The Aegean cat.</h3>
				</Carousel.Caption>
			</Carousel.Item>

			<Carousel.Item>
				<img
					className="d-block w-100"
					src="https://cdn2.thecatapi.com/images/hBXicehMA.jpg"
					alt="American Bobtail"
				/>
				<Carousel.Caption>
					<h3>The American Bobtail cat.</h3>
				</Carousel.Caption>
			</Carousel.Item>
		</Carousel>
	);
};

export default CatsCarousel;
