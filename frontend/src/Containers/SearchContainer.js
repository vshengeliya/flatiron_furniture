import React from "react"
import Search from "../Components/Search";
import SearchItem from "../Components/SearchItem";

class SearchContainer extends  React.Component {

    state = {
        searchResults: []
    }

    onSubmitHandler = (searchTerm) => {
        fetch("http://localhost:3000/search?q=" + searchTerm)
            .then(res => res.json())
            .then(results => this.setState({searchResults: results}))
    }

    renderSearchItems = () => {
        return this.state.searchResults.map(item => <SearchItem key={item.id} item={item}/>)
    }


    render() {
        console.log(this.state.searchResults)
        return(
            <div>
                <h3>Search Results</h3>
                <Search onSubmitHandler={this.onSubmitHandler}/>
                <div>{this.renderSearchItems()}</div>

            </div>
        )
    }
}

export default SearchContainer