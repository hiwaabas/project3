import { PrimaryButtons } from '../../component'
import './Hero.css'

const Hero = () => {
  return (
    <div className='hero-main'>
        <div className="hero-text">
            <h6 className='hero-subtitle'>welcome to acorn</h6>
            <h4 className='hero-title'><em>Browse</em> our popular task here </h4>
        </div>
      {/* <div className="main-button">
        <a href="browse.html">Browse Now</a>
      </div> */}
      <PrimaryButtons>Browse Now</PrimaryButtons >
    </div>
  )
}

export default Hero
