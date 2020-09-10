import React from "react"
import Search from "../Components/Search";
import Item from "../Components/Item";
import ItemDetails from "../Components/ItemDetails"
import "../stylesheets/LoginContainer.css"

class SearchContainer extends  React.Component {

    state = {
        searchResults: []
    }

    onSubmitHandler = (searchTerm) => {

        fetch("http://localhost:3000/search?q=" + searchTerm)
        .then(res => res.json())
        .then(results => this.setState({searchResults: results}))
    }


    renderSearchItems =()=>{

        if (this.props.showItem === null){

            return this.state.searchResults.map(item => <Item
                 
                 id={item.id} 
                title={item.title} 
                image_url={item.image_url} 
                price={item.price} 
                description={item.description}
                showItemDetails={this.props.showItemDetails}
                 
                 />)
        } else {

            if (this.props.itemDetailsPage===true){

                return <ItemDetails 
                id={this.props.showItem.id}
                image={this.props.showItem.image_url}
                title={this.props.showItem.title}
                price={this.props.showItem.price}
                description={this.props.showItem.description}
                goBackToItems={this.props.goBackToItems}
                addItemtoCart={this.props.addItemtoCart}
                itemDetailsPage={this.props.itemDetailsPage}/>
            } else{
                return null
            } 
        }

    }

    render() {
        return(
            <div className="user-container">
                <h3>Search Results</h3>
                <Search onSubmitHandler={this.onSubmitHandler}/>
                <div>{ this.renderSearchItems()}</div>
            </div>
        )
    }
}

export default SearchContainer