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