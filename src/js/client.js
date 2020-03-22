import React from "react";
import ReactDOM from "react-dom";
import Layout from "./components/Layout";

/*
class Layout extends React.Component {
    constructor(){
        super();
        this.name = "ここに名前";
    }

    render() {
        return (
            <dev>
                <h1>Hello, World!</h1>
                <h1>Hello, {this.name}!</h1>
            </dev>
        );
    }
}
// */
const app = document.getElementById('app');
ReactDOM.render(<Layout/>, app);