function Categories({setPanierOpen,setActiveCategory}){
    return (
        <nav className='navbar navbar-expand-lg navbar-light bg-light'>
                <div className='container-fluid'>
                    <div className='collapse navbar-collapse' id="navbarNavDropdown">
                    <ul className='navbar-nav'>
                        <li className="dropdown"> 
                            <button className="nav-link dropdown-toggle bg-light"  id="navbarDropdownMenuLink" onClick={() => {setActiveCategory("maquillage");setPanierOpen(false)}}> MAQUILLAGE </button>
                            <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                <li><a className="dropdown-item" href="/">Smart Phones</a></li>
                                <li><a className="dropdown-item" href="/">Feature Phones</a></li>
                                <li><a className="dropdown-item" href="/">Mobile Covers</a></li>
                            </ul>
                        </li>
                            <li className="nav-item dropdown"> <button className="nav-link dropdown-toggle bg-light"  id="navbarDropdownMenuLink" onClick={() => {setActiveCategory("parfum");setPanierOpen(false)}}> PARFUM </button>
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                   <li><a className="dropdown-item" href="/">Smart Phones</a></li>
                                   <li><a className="dropdown-item" href="/">Feature Phones</a></li>
                                   <li><a className="dropdown-item" href="/">Mobile Covers</a></li>
                                </ul>
                            </li>
                            <li className="nav-item dropdown"> <button className="nav-link dropdown-toggle bg-light"  id="navbarDropdownMenuLink" onClick={() => {setActiveCategory("soinVisage");setPanierOpen(false)}}> SOIN VISAGE </button>
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                   <li><a className="dropdown-item" href="/">Smart Phones</a></li>
                                   <li><a className="dropdown-item" href="/">Feature Phones</a></li>
                                   <li><a className="dropdown-item" href="/">Mobile Covers</a></li>
                                </ul>
                            </li>
                            <li className="nav-item dropdown"> <button className="nav-link dropdown-toggle bg-light"  id="navbarDropdownMenuLink" onClick={() => {setActiveCategory("coprsBain");setPanierOpen(false)}}> CORPS & BAIN </button>
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                   <li><a className="dropdown-item" href="/">Smart Phones</a></li>
                                   <li><a className="dropdown-item" href="/">Feature Phones</a></li>
                                   <li><a className="dropdown-item" href="/">Mobile Covers</a></li>
                                </ul>
                            </li>
                            <li className="nav-item dropdown"><button className="nav-link dropdown-toggle bg-light"  id="navbarDropdownMenuLink" onClick={() => {setActiveCategory("cheveux");setPanierOpen(false)}}> CHEVEUX </button>
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                   <li><a className="dropdown-item" href="/">Smart Phones</a></li>
                                   <li><a className="dropdown-item" href="/">Feature Phones</a></li>
                                   <li><a className="dropdown-item" href="/">Mobile Covers</a></li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
    )
}

export default Categories;