import '../Styles/Panier.css'
import { FiPlus } from "react-icons/fi";
import pluslg from '../assets/plus-lg.svg';

function Panier({activeCategory,cart,updateCart,panierOpen, setPanierOpen}){
    const total = cart.reduce((acc, parfum) =>acc +parfum.amount*parfum.prix,0)
	function deleteFromCart(nom){
		const newCart = cart.filter((item) => item.nom !== nom);
		updateCart(newCart);
	}
    return panierOpen ? ( 
        <div className='shopping-cart section'>
            <div className="container">
                <div className='row'>
                    <div className="col-12">
                    <table className="table shopping-summery">
                    <thead>
							<tr className="main-hading">
								<td>PRODUIT</td>
								<td>NOM</td>
								<td className="text-center">PRIX</td>
								<td className="text-center">QUANTITE</td>
								<td className="text-center">TOTAL</td> 
								<td className="text-center"><i className="ti-trash remove-icon"></i></td>
							</tr>
						</thead>
                        <tbody>
                            {cart.map(({nom,prix,amount,cover},index) => (
                                <tr key={`${nom}-${index}`}>
                                    <td className="image" data-title="No"><img src={cover} alt="/" className='produit-panier-cover'/></td>
								    <td className="product-des" data-title="Description">
									   <p className="product-name"><a href="/">{nom}</a></p>
									   <p className="product-des">{nom}</p>
								   </td>
                                   <td className="price" data-title="Price"><span>{prix}</span></td>
								<td className="qty" data-title="Qty">
									<div className="input-group">
										<div className="button minus">
											<button type="button" className="btn btn-outline-secondary bg-white border-start-0 border ms-n5" disabled="disabled" data-type="minus" data-field="quant[1]">
												<i className="ti-minus"></i>
											</button>
										</div>
										<div className="input-group">
										<input type="text" name="quant[1]" className="input-number border-end-0 border"  data-min="1" data-max="100" defaultValue="1"/>
										<div className="button plus">
											<button className="btn btn-outline-secondary bg-white border-start-0 border ms-n5"  type="number" data-type="plus" data-field="quant[1]">
											     <img src={pluslg} alt="plus-icon"/>
											</button>
										</div>
										</div>
									</div>
								</td>
								<td className="total-amount" data-title="Total"><span>$220.88</span></td>
								<td className="action" data-title="Remove"><a href="/"><i className="ti-trash remove-icon"></i></a></td>
								<td><button onClick={() =>deleteFromCart(nom)}>Supprimer</button></td>
                               </tr>
                        ))}
                            </tbody>
                    </table>
                    </div>
                </div>
            </div>
            <h3>Total : {total}€</h3>
            <button onClick={() => updateCart([])}>Vider le panier</button>
        </div>
    ): (<div>
        
    </div>
    )
}

export default Panier;