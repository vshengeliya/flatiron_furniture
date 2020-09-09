import React from 'react'


 class CheckoutForm extends React.Component{


    state={
        firstName: "",
        lastName: "", 
        creditCard: "",
        expDate: "",
        csv: "",
        address: "",
        city: "",
        state: "",
        zip: ""

    }

    changeHandler=(e)=>{

        this.setState({[e.target.name]: e.target.value})
    }
     render(){
         return(

            <>

            <h4>Please enter your information: </h4>
            
            <form name="myForm" 
            onSubmit={(e)=>{
                e.preventDefault()
                this.props.submitHandler(this.state)
                }}>
            <br/>
            <input type="text" name="firstName" placeholder="First name" value={this.state.firstName} onChange={this.changeHandler}/>
            <br/>
            <input type="text" name="lastName" placeholder="Last name" value={this.state.lastName} onChange={this.changeHandler}/>
            <br/>
            <input type="number" name="creditCard" placeholder="enter credit card number" value={this.state.creditCard} onChange={this.changeHandler}/>
            <br/>
            <input type="text" name="expDate" placeholder="enter expDate" value={this.state.expDate} onChange={this.changeHandler}/>
            <br/>
            <input type="number" name="csv" placeholder="enter CSV Number" value={this.state.csv} onChange={this.changeHandler}/>
            <br/>
            <input type="text" name="address" placeholder="enter address" value={this.state.address} onChange={this.changeHandler}/>
            <br/>
            <input type="text" name="city" placeholder="enter city" value={this.state.city} onChange={this.changeHandler}/>
            <br/>
            <input type="text" name="state" placeholder="enter state" value={this.state.state} onChange={this.changeHandler}/>
            <br/>
            <input type="text" name="zip" placeholder="enter zip" value={this.state.zip} onChange={this.changeHandler}/>
            <br/>
            <br/>
            {this.props.renderTotal()}
            <input type="submit" value="submit order" />
            </form>
            </>
            
         )
        }
    }
    
    
export default CheckoutForm

