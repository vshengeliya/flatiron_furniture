import React from "react"

class SearchItem extends React.Component {

    render() {
        return(
            <div>
                <div className="cart-image-url">
                    <table>
                        <tbody>
                        <tr>
                            <td rowSpan={3}><img src={this.props.item.image_url} alt={this.props.item.title}/></td>
                            <td className = "item-header"><h3>{this.props.item.title}</h3></td>
                        </tr>
                        <tr>
                            <td className="item-text">Category: {this.props.item.category}</td>
                        </tr>
                        <tr>
                            <td className="item-text">Description: {this.props.item.description}</td>
                        </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}

export default SearchItem