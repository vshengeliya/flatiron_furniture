import React from 'react'

class Search extends React.Component {

    state = {
        search: ''
    }

    onChangeHandler = (e) => {
        this.setState({
            search: e.target.value
        })
    }

    onSubmitHandler = (e) => {
        e.preventDefault()
        this.props.onSubmitHandler(this.state.search)
    }

    render() {
        return(
            <div>
                <form onSubmit={this.onSubmitHandler}>
                    <input type="text" name="search" placeholder="Search Products" onChange={this.onChangeHandler}  />
                    <input type="submit" value="Search" />
                </form>
            </div>
        )
    }
}

export default Search