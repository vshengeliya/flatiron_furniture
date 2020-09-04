import React from 'react'


 class CheckoutForm extends React.Component{
     render(){
         return(
            
            <form name="myForm">
            <input type="text" name="firstName" placeholder="First name" value={''} onChange={this.changeHandler}/>
            <input type="text" name="lastName" placeholder="Last name" value={''} onChange={this.changeHandler}/>
            <input type="number" name="creditCard" placeholder="enter credit card number" value={''} onChange={this.changeHandler}/>
            <input type="text" name="expDate" placeholder="enter expDate" value={''} onChange={this.changeHandler}/>
            <input type="number" name="csv" placeholder="enter CSV Number" value={''} onChange={this.changeHandler}/>
            <input type="text" name="address" placeholder="enter address" value={''} onChange={this.changeHandler}/>
            <input type="text" name="city" placeholder="enter city" value={''} onChange={this.changeHandler}/>
            <input type="text" name="state" placeholder="enter state" value={''} onChange={this.changeHandler}/>
            <input type="text" name="zip" placeholder="enter zip" value={''} onChange={this.changeHandler}/>
            <input type="text" value="create instructor" />
            </form>
            
         )
        }
    }
    
    
export default CheckoutForm

