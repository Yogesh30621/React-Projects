import "./Nav.css"


function Nav() {
  return(
    <>
    <div className='Navbar'>
          <h1>PortFolio</h1>
          <div className='navbar_list'>
             <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">Skills</a></li>
                <li><a href="#">Education</a></li>
                <li><a href="#">Project</a></li>
                <li><a href="#">Experiance</a></li>
             </ul>
          </div>
    </div>
    </>
  ) ;
}

export default Nav;