import React from 'react'
import CheckoutForm from '../Components/CheckoutForm'
import ShippingPage from '../Components/ShippingPage'


 class Checkout extends React.Component{

    state={
        submittedForm: null
    }

    submitHandler=(obj)=>{
      this.setState({submittedForm: obj})
    }

     render(){
         return(

             <>{ this.state.submittedForm !== null?  <ShippingPage item={this.state.submittedForm} renderTotal={this.props.renderTotal}/>
             : 
             <CheckoutForm submitHandler={this.submitHandler} renderTotal={this.props.renderTotal}/>
             }
               
             </>
         )
        }
    }
    
    
export default Checkout