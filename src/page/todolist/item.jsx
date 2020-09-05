import React, { Component } from 'react'

// const itemComponent = (props) => {
//     const delItem = (index) => {
//         console.log(props);
//         props.delItem(index);
//     }
//     return (
//         props.list.map((item,index) => {
//             return (<li key={index}>{item}  <span onClick={() => {delItem(index);}} style={{marginLeft:'60px'}}>×</span></li> )
//         })
//     )
// }



// export default itemComponent;

export default class ItemComponent extends Component{
    constructor(props) {
        super(props);
    }

    delItem = (index) => {
        console.log(this.props);
        this.props.delItem(index);
    }

    render(){
        return (
            this.props.list.map((item,index) => {
                return (<li key={index}>{item}  <span onClick={() => {this.delItem(index)}} style={{marginLeft:'60px'}}>×</span></li> )
            })
        )
    }
}
