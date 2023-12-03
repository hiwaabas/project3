import './Header.css'
import logo from '../../assets/images/logo.png'
import NavItem,{NavItemDropDown} from '../../component/NavItem/NavItem'


const Header = (props) => {
    return (
        <>
   <div className="navbar navbar-expand-md navbar-dark text-white cyber-navbar">
      <div className="container ">
        <a href="#" className="navbar-brand"> 
            <img src={logo} alt="" />
        </a>

        <button
          className="navbar-toggler"
          type="button" 
          data-bs-toggle="collapse"
          data-bs-target="#mainmenu"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="mainmenu">
          <ul className="navbar-nav ms-auto text-white">
          <NavItem><a href="#next" className="nav-link">NEXT</a></NavItem>
            <NavItem><a href="#question" className="nav-link">QUESTION</a></NavItem>
    
            <NavItemDropDown><a href="" className="nav-link" data-bs-toggle="collapse" data-bs-target="#hh">DROPDOWN</a>
            <ul className="dropdown-menu bg-info" id="hh">
              <li><a href="#learn" className="dropdown-item rounded">learn</a></li>
              <li><a href="#footer" className="dropdown-item rounded">footer</a></li>
            </ul>
            </NavItemDropDown>
            <NavItem><a href="#next" className="nav-link">NEXT</a></NavItem>
            <NavItem><a href="#question" className="nav-link">QUESTION</a></NavItem>

          </ul>
        </div>
      </div>
    </div>

        </>
    )
}
export default Header;