import React from 'react'
import "../stylesheets/LoginContainer.css"

function ShippingPage(props){

    return (
<div className="user-container"> 

<h2>Thank you for your order, {props.item.firstName} {props.item.lastName}!</h2>
<h3>Your items will be shipped to {props.item.address}, {props.item.city}, {props.item.state}, {props.item.zip}, within 2 business days.</h3>
{props.renderTotal()}

</div>

    )
}

export default ShippingPage