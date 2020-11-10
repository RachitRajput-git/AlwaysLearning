import React from 'react';
import '../assests/css/card.css'

function CompanyCard(props) {
    return (

        <div className="card card_size p-3 d-flex align-items-center justify-content-center" >
            <img src={props.imageUrl} className="card-img-top card_image  " alt="Comapany_Image" />
        </div>

    )
}

export default CompanyCard
