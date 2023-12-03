import { SecondaryButtons } from '../Buttons/Buttons'
import './GamingLibraryCard.css'

const GamingLibraryCard = (props) => {
  return (
    <div className='gaming-library-card'>
    <ul>
      <li>
     <img src={props.image} alt="" />
      </li>
      <li>
        <h4>{props.title}</h4>
        <span>{props.category}</span>
      </li>
      <li>
        <h4>data added</h4>
        <span>{props.data_added}</span>
      </li>
      <li>
        <h4>hours played</h4>
        <span>{props.hour_played}</span>
      </li>
      <li>
        <h4>currently</h4>
        <span>{props.downloaded}</span>
      </li>
      {/* <div className="main-button"> */}
        {/* <a href="/">DOWNLOAD</a> */}
        <SecondaryButtons>DOWNLOAD</SecondaryButtons>
      {/* </div> */}
    </ul>
    </div>
  )
}

export default GamingLibraryCard
