import '../Styles/Banner.css'
import Categories from './Categories';
import logo from '../assets/logo.png';
import person from '../assets/person.svg';
import bag from '../assets/bag.svg';
import heart from '../assets/heart.svg';

function Banner({cart,panierOpen,setPanierOpen, activeCategory, setActiveCategory,carouselOpen, setCarouselOpen}){
    const nombreProduits = cart.reduce((acc, parfum) =>acc +1,0);
    const total = cart.reduce((acc, parfum) =>acc +parfum.amount*parfum.prix,0)
    return (
        <div className='section-header'>
            <div className='navbar navbar-dark navbar-expand p-0 bg-dark'>
                <div className='container-fluid'>
                    <ul className='navbar-nav d-done d-md-flex mr-auto'>
                        <li className='nav-item'><a className='nav-link' href='/' data-abc="true">+212 64 00 70 538</a></li>
                        <li className='nav-item'><a className='nav-link' href='/' data-abc="true">Paiement à la livraison</a></li>
                        <li className='nav-item'><a className='nav-link' href='/' data-abc="true">Livraison gratuite</a></li>
                    </ul>
                    <ul className='navbar-nav d-flex align-items-center'>
                        <li className='nav-item'>
                            <div className='d-flex flex-row'><img src={"https://i.imgur.com/EYFtR83.jpg"} className="rounded-circle" width="30"/></div>
                        </li>
                        <li className='nav-item'><a href='/' className='nav-link d-flex align-items-center' data-abc="trur"><span>text</span><i className='bx bxs-chevron-down'></i></a></li>
                    </ul>
                </div>
            </div>
            <div className='header-main border-bottom bg-white'>
            <div className='container-fluid pb-4'>
                    <div className='row pl-1 d-flex align-items-center'>
                        <div className='col-md-2'>
                            <div><a className="navbar-brand d-md-none d-md-flex" href="/">BEAUTY BAY</a></div>
                        </div>
                        <div className='col-md-8 pt-4'>
                            <div className="col-md-12 mx-auto">
                                <div className="input-group">
                                    <input className="form-control border-end-0 border" type="search" placeholder="Rechercher un produit, une marque..." id="example-search-input"/>
                                    <span className="input-group-append">
                                    <button className="btn btn-outline-secondary bg-white border-start-0 border ms-n5" type="button">
                                        <i className="fa fa-search"></i>
                                    </button>
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className='col-md-2'>
                            <div className='row'>
                                <div className='col align-self-start pt-4'><img src={person} alt="compte" width="30" height="30" /></div>
                                <div className='col align-self-center pt-3'><img src={heart} alt="heart" width="25" height="25" /></div>           
                                <div className='col align-self-end pt-3'><button className='panier-button' onClick={() => setPanierOpen(true)}><img src={bag} alt="bag" width="25" height="25" /></button></div>
                           </div>            
                        </div>
                    </div>
                </div>
            </div>
            <Categories setActiveCategory={setActiveCategory} setPanierOpen={setPanierOpen}/>
        </div>
    )
}

export default Banner;