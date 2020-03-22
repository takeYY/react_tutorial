import React from "react";
import Header from "./Header";
import Footer from "./Footer";

export default class Layout extends React.Component {
    ///*
    constructor() {
        super();
        this.state = {title:"Welcome"};
    }

    changeTitle(title){
        this.setState({title});
    }

    // */
    render() {
        /*
        setTimeout(
            () => {this.setState({title:"Welcome takeYY!!"})},2000
        )
        // */
        //let components = [<Header />,<Footer />];
        //const title = "Welcom takeYY!!";
        return (
            //<h1>Hello, {this.name}</h1>
            <div>
                <Header changeTitle={this.changeTitle.bind(this)} title={this.state.title} />
                <Footer />
            </div>
        );
    }
}