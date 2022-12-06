import { Accordion } from 'react-bootstrap'
import { AccordionStyled, DescriptionSpanStyled, DescriptionStyled, ImgStyled } from '../../styles/MuiStyles'
import { CatsListProps } from '../../utils/Types'

const CatsList = (props: CatsListProps) => {

  return (
    <Accordion defaultActiveKey={['0']} alwaysOpen>
		{
			props.fetchCatsData.map((el, i) => (
				<Accordion.Item eventKey="0" 
					key={el.id}
					className='d-flex flex-column align-items-center'
				>
					<AccordionStyled>{el.name}</AccordionStyled>

					<Accordion.Body>
						<ImgStyled
						className="d-block mx-auto"
						src={el?.image?.url}
						alt={el.name}
						/>
						<DescriptionStyled>Description: 
							<DescriptionSpanStyled>{el?.description}</DescriptionSpanStyled>
						</DescriptionStyled>
						<DescriptionStyled>Temperament: 
							<DescriptionSpanStyled>{el?.temperament}</DescriptionSpanStyled>
						</DescriptionStyled>
					</Accordion.Body>
				
				</Accordion.Item>
			))
		}
      
    </Accordion>
  )
}

export default CatsList

{/* <div>{el.name}</div>
					<div>{el?.image?.url}</div>
					<div>Description: {el?.description}</div>
					<div>Temperament: {el?.temperament}</div>
					<div>Origin: {el?.origin}</div>
					<div>Weight: {el?.weight?.imperial} - {el?.weight?.metric}</div>
					<div>Life_span: {el?.life_span}</div>
					<div>Adaptability: {el?.adaptability}</div> */}
					
