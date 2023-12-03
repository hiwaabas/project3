import './MostPopular.css'
import MostPopularData from '../../Data/MostPopularData'
import { Card,SectionHeader,SectionWrapper } from '../../component'
const MostPopular = () => {
const cards = MostPopularData.map (card=>{
  return <Card key={card.id} image={card.image}  title={card.title} category={card.category} rate={card.rate} download={card.rate}/>
})


  return (
    <>
  <SectionWrapper>
   <SectionHeader> most popular</SectionHeader>
    <div className="most-popular-items">
  {cards}
    </div>
    </SectionWrapper>
    </>
  )
}

export default MostPopular
