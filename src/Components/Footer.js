import '../Styles/Footer.css'

function Footer(){
    return(<footer className="page-footer fs-6 blue pt-4 text-white bg-dark">
    <div className="container-fluid text-center text-md-left">
        <div className="row">
            <hr className="clearfix w-100 d-md-none pb-0"/>
            <div className="col-md-3 mb-md-0 mb-3">
            <h5 className="text-uppercase">SERVICE CLIENTS</h5>
                <ul className="list-unstyled">
                    <li><a href="#!">Aide</a></li>
                    <li><a href="#!">Moyens de paiement acceptés</a></li>
                    <li><a href="#!">Mon compte</a></li>
                    <li><a href="#!">✉ Recevez notre Newsletter</a></li>
                    <li><a href="#!">Conditions de nos offres</a></li>
                    <li><a href="#!">Exclusion des promotions</a></li>
                </ul>
            </div>
            <div className="col-md-3 mb-md-0 mb-3">
            <h5 className="text-uppercase">COMMANDE</h5>
                <ul className="list-unstyled">
                    <li><a href="#!">Magasins</a></li>
                    <li><a href="#!">Conditions de livraison</a></li>
                    <li><a href="#!">Retourner un produit</a></li>
                </ul>
            </div>
            <div className="col-md-3 mb-md-0 mb-3">
            <h5 className="text-uppercase">A PROPOS</h5>
                <ul className="list-unstyled">
                    <li><a href="#!">A propos de Sephora</a></li>
                    <li><a href="#!">Carrières</a></li>
                    <li><a href="#!">Nos engagements</a></li>
                    <li><a href="#!">International</a></li>
                    <li><a href="#!">Découvrir BEAUTY BAY</a></li>
                </ul>
            </div>
            <div className="col-md-3 mb-md-0 mb-3">
            <h5 className="text-uppercase">LÉGAL</h5>
                <ul className="list-unstyled">
                    <li><a href="#!">Données personnelles et cookies</a></li>
                    <li><a href="#!">Préférence cookies</a></li>
                    <li><a href="#!">Mentions légales et CGU</a></li>
                    <li><a href="#!">Conditions générales de vente</a></li>
                    <li><a href="#!">Programme de fidélité</a></li>
                    <li><a href="#!">CGU The Beauty Board</a></li>
                </ul>
            </div>
            <div className="col-md-6 mt-md-0 mt-3">
                <div><a>Vous pouvez consulter la liste des marques exclues de nos promotions ici.</a></div>
                <div><a>*Voir conditions de nos offres promotionnelles sur la page Bons Plans Beauté.</a></div>
                <div><a>*Exclusivité dans le réseau de parfumeries nationales.</a></div>
            </div>
        </div>
    </div>

    <div className="footer-copyright text-center py-3">© 2020 Copyright:
        <a href="https://mdbootstrap.com/"> MDBootstrap.com</a>
    </div>

</footer>)
}

export default Footer;