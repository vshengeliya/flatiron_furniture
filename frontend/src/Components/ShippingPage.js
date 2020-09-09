import React from 'react'

function ShippingPage(props){

    return (
<div> 

<h2>Thank you for your order, {props.item.firstName} {props.item.lastName}!</h2>
<h3>Your items will be shipped to {props.item.address}, {props.item.city}, {props.item.state}, {props.item.zip}, within 2 business days.</h3>
<h3>Your items total: $2000</h3>

</div>

    )
}

export default ShippingPage