import '../Styles/ParfumItem.css'

function ParfumItem({id, nom, maison, cover}){
    return (
        <li key={id} className='mp-parfum-item'>
            <img src={cover} alt={`${nom} cover`} className='mp-parfum-item-cover' />
            <div className='parfum-desc'>
                <h2>{maison}</h2>
                <p>{nom}</p>
            </div>
        </li>
    )
}

export default ParfumItem;