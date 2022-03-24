import '../Styles/ShoppingList.css'
import ParfumItem from './ParfumItem';
import { parfumList } from '../Datas/parfumList'
import { maquillageList } from '../Datas/maquillageList'
import { soinVisageList } from '../Datas/soinVisageList';
import React from "react";


function ShoppingList({cart, updateCart,panierOpen,setPanierOpen,activeCategory, setActiveCategory}){
    function addToCart(nom,prix,cover){
        const currentParfumAdded = cart.find((parfum) =>  parfum.nom=== nom)
        if(currentParfumAdded){
            const cartFiltered = cart.filter((parfum) => parfum.nom !== nom)
            updateCart([...cartFiltered,{nom,prix,amount:currentParfumAdded.amount+1,cover}])
        }
        else{
            updateCart([...cart,{nom,prix,amount:1,cover}])
        }
    }
    if(activeCategory==="maquillage" && !panierOpen){
    setPanierOpen(false)
    return (
        <ul className='mp-shopping-list'>
            {maquillageList.map(({id, nom, maison, cover,prix,category}) => 
            !activeCategory || activeCategory === category ?(
            <div key={id} className='mp-parfum-item'>
                <ParfumItem id={id} nom={nom} maison={maison} cover={cover}/>
                <button className='mp-add-button' onClick={() => addToCart(nom,prix,cover)}>Ajouter au panier</button>
            </div>
            ): null)}
        </ul>
    )
    }
    else if(activeCategory==="parfum" && !panierOpen){
        setPanierOpen(false)
        return (
            <ul className='mp-shopping-list'>
                {parfumList.map(({id, nom, maison, cover,prix,category}) => 
                !activeCategory || activeCategory === category ?(
                <div key={id} className='mp-parfum-item'>
                    <ParfumItem id={id} nom={nom} maison={maison} cover={cover}/>
                    <button className='mp-add-button' onClick={() => addToCart(nom,prix,cover)}>Ajouter au panier</button>
                </div>
                ): null)}
            </ul>
        )

    }
    else if(activeCategory==="soinVisage" && !panierOpen){
        setPanierOpen(false)
        return (
            <ul className='mp-shopping-list'>
                {soinVisageList.map(({id, nom, maison, cover,prix,category}) => 
                !activeCategory || activeCategory === category ?(
                <div key={id} className='mp-parfum-item'>
                    <ParfumItem id={id} nom={nom} maison={maison} cover={cover}/>
                    <button className='mp-add-button' onClick={() => addToCart(nom,prix,cover)}>Ajouter au panier</button>
                </div>
                ): null)}
            </ul>
        )

    }
    return (<div></div>)
}

export default ShoppingList;