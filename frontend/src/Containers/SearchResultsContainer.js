import React from "react"
import Search from "../Components/Search";

class SearchResultsContainer extends  React.Component {

    state = {
        search: ''
    }

    onSubmitHandler = (searchTerm) => {
        console.log(searchTerm)
        fetch("http://localhost:3000/search?q=" + searchTerm)
            .then(res => res.json())
            .then(console.log)
    }


    render() {
        return(
            <div>
                <h3>Search Results</h3>
                <Search onSubmitHandler={this.onSubmitHandler}/>
                {this.props.searchTerm ? <div>Search Results for {this.props.searchTerm}</div> : null }
            </div>
        )
    }
}

export default SearchResultsContainer