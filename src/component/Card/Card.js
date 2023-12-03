import './Card.css'
// import popular_01 from '../../assets/images/popular-01.jpg'
import { FaStar,FaDownload } from "react-icons/fa";
const Card = (props) => {
  return (
    <div className="most-popular-item">
    <div className="card-wrapper">
        <img className='most-popular-item-image' src={props.image} alt=''/>
        <div className="most-popular-item-content">
            <h4 className="most-popular-item-title">{props.title} <br /><span>{props.category}</span></h4>
            <ul>
                <li><span style={{color:'var(--color-icons'}}><FaStar /></span><span>{props.rate}</span></li>
                <li><span style={{color:'var(--color-icons'}}><FaDownload /></span><span>{props.download}</span></li>
            </ul>
        </div>
    </div>
</div>
  )
}
export default Card
