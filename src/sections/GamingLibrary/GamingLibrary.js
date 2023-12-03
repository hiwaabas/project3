import  './GamingLibrary.css'
import {SectionHeader,SectionWrapper,GamingLibraryCard } from '../../component'
import GamingLibraryData from '../../Data/GamingLibraryData'

const GamingLibrary = () => {
    const games = GamingLibraryData.map(game => {
        return  <GamingLibraryCard key={game.id} image={game.image}  title={game.title} category={game.category}  data_added={game.data_added}  hour_played={game.hour_played} downloaded={game.downloaded}/>
    })
  return (

    <>
    <SectionWrapper>
    <SectionHeader> GAMING LIBRARY</SectionHeader>
     <div className="gaming-library-cards">
        
 {games} 
     </div>
     </SectionWrapper>
     </>
  )
}

export default GamingLibrary
