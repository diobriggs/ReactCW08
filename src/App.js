import React, { Component } from 'react';
import './App.css';
import HelloWorld from './HelloWorld';
import Counter from './Counter';
import FilteredList from './FilteredList';

const produceList = [
    {name: "Apple", type: "Fruit"},
    {name: "Pineapple", type: "Fruit"},
    {name: "Banana", type: "Fruit"},
    {name: "Pear", type: "Fruit"},
    {name: "Blueberry", type: "Fruit"},
    {name: "Mango", type: "Fruit"},
    {name: "Grapes", type: "Fruit"},
    {name: "Spinach", type: "Vegetable"},
    {name: "Strawberry", type: "Fruit"},
    {name: "Orange", type: "Fruit"},
    {name: "Lettuce", type: "Vegetable"},
    {name: "Cucumber", type: "Vegetable"},
    {name: "Broccoli", type: "Vegetable"},
    {name: "Carrot", type: "Vegetable"},
    {name: "Potato", type: "Vegetable"},
    {name: "Peach", type: "Fruit"},
    {name: "Eggplant", type: "Vegetable"},
    {name: "Squash", type: "Vegetable"},
    {name: "Bell pepper", type: "Vegetable"},
    {name: "Onion", type: "Vegetable"}
];

class App extends Component {
    render() {
        return (
            <div className="App">
                <div className="block">
                    <HelloWorld name={'Dio Briggs'}/>
                </div>
                <div className="block">
                    <Counter />
                </div>
                <div className="block">
                    <FilteredList items={produceList} />
                </div>
            </div>
        );
    }
}

export default App;