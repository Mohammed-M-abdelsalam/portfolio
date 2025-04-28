import { Link } from 'react-router-dom';
import './card-img.css';
import {FiLink} from 'react-icons/fi';
import {FaInfoCircle} from 'react-icons/fa';

function CardImg({id, name, description, img, link}) {
    return(
        <div data-id={id}>
            <div className='card-img card position-relative overflow-hidden shadow bg-transparent'>
                <img src={img} alt={description} style={{ aspectRatio: '2/1' }} />
                <div className="ovelay-card-img">
                    <h3 className='card-title text-white text-center fs-2 fw-bold'>{name}</h3>
                    <div className='d-flex gap-5'>
                        <a href={link} title='Link' target="_blank" className='text-decoration-none'> <FiLink /> </a>
                        <Link to={'/projects/' + id} title='More info' className='text-decoration-none'> <FaInfoCircle /> </Link>
                    </div>
                </div>
            </div>
        </div>
    )   
}

export default CardImg;