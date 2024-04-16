import { Card } from 'react-bootstrap';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbTack, faFileLines, faLink } from '@fortawesome/free-solid-svg-icons';

import { Share } from '../Share/Share';
import { Star } from '../Star/Star'
import { Heart } from '../Heart/Heart'
import { Like } from '../Like/Like'

import './CardProducts.scss'

export function CardProducts () {
  return (
		<Card className="card card-products-wb mb-3 d-flex justify-content-center">
			<div className="row g-0 align-items-center">
					<div className="col-md-4 d-flex justify-content-center">
							<Card.Img src="https://picsum.photos/id/1/130/130" className="img-fluid" />
					</div>
					<div className="col-md-8">
							<Card.Body>
								<Card.Title><FontAwesomeIcon icon={faThumbTack} /> Camiseta Insider</Card.Title>
								<Card.Text><FontAwesomeIcon icon={ faFileLines} /> Preta, tamanho P, Gola V</Card.Text>
								<Card.Text><FontAwesomeIcon icon={faLink} /> <a href="#">https://www.insiderstore.com.br/products/tech-t-shirt?variant=43168998293653</a></Card.Text>
								<div className='card-products-wb__notification'>
									<div className='card-products-wb-tags'>
										<button type="button" className="btn m-1">Roupas</button>
										<button type="button" className="btn m-1">2024</button>
									</div>
									
									<div className='card-products-wb-buttons'>
										<Like />
										<Heart />
										<Star />
										<Share />
									</div>
								</div>
							</Card.Body>
					</div>
					<hr />
			</div>
	</Card>

  );
};
