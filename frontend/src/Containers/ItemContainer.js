import React from 'react'
import Item from '../Components/Item'
import {Route, Switch} from 'react-router-dom'

 class ItemContainer extends React.Component {
     
     render(){     
         
         return(
             <div>
                 {this.props.listOfItems.length===0? <h3>Loading items</h3> :
                 <Route path='/items' render={()=>{
                     
                     let renderItems = this.props.listOfItems.map((item) => <Item key={item.id} item={item}/>)
                     return(
                         <>
                    
                            {this.props.listOfItems.length === 0? <h1>Loading Items</h1>: {renderItems}}

                            </>
                        )            
                  }}/>
                }  
              
             </div>
          )
        }
    }  
export default ItemContainer