import React, {useState,useEffect} from 'react'
import '../Styles/App.css';
import Banner from './Banner';
import Panier from './Panier';
import 'bootstrap/dist/css/bootstrap.min.css'
import ShoppingList from './ShoppingList';
import CarouselAcc from './CarouselAcc';
import Footer from './Footer';

function App() {
  const [panierOpen, setPanierOpen] = useState(false)
  const [carouselOpen, setCarouselOpen] = useState(true)
  const [activeCategory, setActiveCategory] = useState('')
  const savedCart = localStorage.getItem('cart')
  const [cart, updateCart] = useState(savedCart ? JSON.parse(savedCart) : [])
  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart),[cart])
  })
  return (
      <div className="App">
        <Banner panierOpen={panierOpen} setPanierOpen={setPanierOpen} cart={cart} activeCategory={activeCategory} setActiveCategory={setActiveCategory} carouselOpen={carouselOpen} setCarouselOpen={setCarouselOpen}/>
        <CarouselAcc panierOpen={panierOpen} activeCategory={activeCategory} />
        <Panier cart={cart} updateCart={updateCart} panierOpen={panierOpen} setPanierOpen={setPanierOpen} activeCategory={activeCategory}/>
        <ShoppingList cart={cart} updateCart={updateCart} panierOpen={panierOpen} setPanierOpen={setPanierOpen} activeCategory={activeCategory}setActiveCategory={setActiveCategory}/>
        <Footer />
      </div>

  );
}

export default App;

