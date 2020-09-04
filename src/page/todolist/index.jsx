import React, { Component } from 'react'
import Todoitem from './item'

export default class Todolist extends Component {
    constructor(props) {
        super(props);
        this.state = {
            inputVal: '2',
            list: []
        }
    }

    setInputVal = (event) => {
        console.log(event.target.value);
        this.setState({inputVal:event.target.value})
    };

    addInputVal = () => {
        const {list, inputVal} = this.state;
        // this.setState(()=> ({
        //     list: [...list,inputVal],
        //     inputVal: ''
        // }));
        // console.log(this.state.list);
        this.setState({
            list: [...list,inputVal],
            inputVal: ''
        });
    }

    delItem = (index) => {
        console.log(index);
        const list = Array.prototype.slice.call(this.state.list);
        list.splice(index, 1);
        this.setState({
            list
        });
    }

    render(){
        const {inputVal,list} = this.state;
        return (
            <div>
                <input onChange={this.setInputVal} value={inputVal} type="text" /> <button type="button" onClick={this.addInputVal}>添加</button>
                <ul>
                    <Todoitem list={list} delItem={this.delItem} />
                    {/* {
                        list.map((item,index) => {
                            return (<li key={index}>{item}</li>)
                        })
                    } */}
                </ul>
            </div>
        );
    }
}