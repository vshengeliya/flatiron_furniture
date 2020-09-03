import React from 'react'
import Item from '../Components/Item'
import {Route} from 'react-router-dom'

 class ItemContainer extends React.Component {

    renderItems =()=> {
        console.log(this.props.listOfItems)
        return this.props.listOfItems.map((item) => <Item key={item.id} item={item}/>)
    }

     
     render(){   
         
        // console.log(this.props.listOfItems.length)
         
         return(
             <div>
                 {this.props.listOfItems.length===0? <h3>Loading items</h3> :
                //  <Route path='/items' render={()=>{
                     
                     this.renderItems()

                    //  return(
                    //      <>
                    //         {/* {this.props.listOfItems.length === 0? <h1>Loading Items</h1>: {this.renderItems}} */}
                    //     </>
                    //     )            
                //   }}/>
                }  
              
             </div>
          )
        }
    }  
export default ItemContainer