import React from 'react';
import './App.css';
import ShopContainer from "./Containers/ShopContainer"
import Header from "./Containers/Header";


class App extends React.Component {

    render() {
        return (
            <div>
                <Header />
                <ShopContainer/>
            </div>
        )
    }

}
          export default App;
