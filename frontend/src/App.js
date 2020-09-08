import React from 'react';
import './App.css';
import ShopContainer from "./Containers/ShopContainer"
import HeaderContainer from "./Containers/HeaderContainer";
import { Route } from 'react-router-dom'
import LoginContainer from "./Containers/LoginContainer";
import CartContainer from "./Containers/CartContainer";
import CreatAccountContainer from "./Containers/CreatAccountContainer";


class App extends React.Component {

    state = {
        user: {},
        token: null,
        listOfItems:[],
        // userItems:[],
        itemDetailsPage: true,
        showItem:null 
    }

    setUserState = (data) => {
        
        if (data === "logout") {
            this.setState({
                user: {},
                token: null
            })
        } else {
            this.setState({
                user: data.user,
                token: data.jwt
            })
        }
    }


    showItemDetails =(obj)=>{  
  
        this.setState({showItem:obj})
    }
    
    goBackToItems =()=>{
        this.setState({showItem:null})
        this.setState({itemDetailsPage:true})
        this.setState({renderButtons:false})
    }
    
    componentDidMount(){
        fetch("http://localhost:3000/items/")
            .then(resp => resp.json())
            .then(data=> this.setState({listOfItems:data}))

    }

    addItemtoCart=(obj)=>{

        console.log(obj)
    
        // let newArray=[...this.state.cartItems, obj]
        // this.setState({cartItems:newArray})
        // this.setState({itemDetailsPage:false})

        let user_id= this.state.user.id
        let obj_id = obj.id

        // console.log(user_id, obj_id)

        let options={
    
         method: "POST",
         headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            Authorization: `Bearer ${this.state.token}`
        },
         body: JSON.stringify({user_id: user_id, item_id:obj_id})     
        }
        fetch("http://localhost:3000/carts", options)
        // .then(resp=>resp.json())
        // .then(data=>{ 
        //     // console.log(data)

        //     fetch("http://localhost:3000/api/v1/users/" + data.id)
        //         .then(res => res.json())
        //         .then(user => this.setState({userItems: user.items}))
        // }
        // )
    
    }

    

    render() {
        // console.log("from app", this.state.showItem)
        return (
            <div>

                <HeaderContainer user={this.state.user} token={this.state.token} setUserState={this.setUserState}/>
                <Route exact path="/" render={ () => 
                <ShopContainer 
                user={this.state.user} 
                token={this.state.token}
                showItemDetails={this.showItemDetails}
                listOfItems={this.state.listOfItems}
                itemDetailsPage={this.state.itemDetailsPage}
                showItem={this.state.showItem}
                showItemDetails={this.showItemDetails}
                goBackToItems={this.goBackToItems}
                addItemtoCart={this.addItemtoCart}
                /> 
                
                } />

                <Route path="/login" render={ () => <LoginContainer user={this.state.user} token={this.state.token} setUserState={this.setUserState}/> } />
                <Route path="/cart" render={ () => 
                <CartContainer 
                user={this.state.user} 
                token={this.state.token}
                // userItems={this.state.userItems}
                itemDetailsPage={this.state.itemDetailsPage}
                goBackToItems={this.goBackToItems}
                 /> } />
                <Route path="/create-account" render={ () => <CreatAccountContainer /> } />

            </div>
        )
    }

}
          export default App;
