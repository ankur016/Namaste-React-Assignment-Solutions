import React from "react";
import  ReactDOM  from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import './index.css'
import booklogo from './bookLogo.jpg'

/*
Coding Assignment: Uncomment each one and subsequently change root.render all code is tested and running
*/


// Create a Nested header Element using React.createElement(h1,h2,h3 inside a div with class “title”)
/*const heading1 = React.createElement("h1", {
    id : "title1",
    key:'h1'
}, "Heading 1");
const heading2 = React.createElement("h2", {
    id : "title1",
    key:'h2'
}, "Heading 2");
const heading3 = React.createElement("h3", {
    id : "title1",
    key:'h3'
}, "Heading 3");

const div =  React.createElement("div", {
    class : "title",
    key:'title'
}, ["helloDiv",heading1,heading2,heading3]);*/


// Create the same element using JSX
/*const div = (<div className="class" key="div">
    Hello Div
    <h1 id="h1" key="h1">Heading 1</h1>
    <h2 id="h2" key="h2">Heading 2</h2>
    <h3 id="h3" key="h3">Heading 3</h3>
</div>);*/


// Create a functional component of the same with JSX
// Pass attributes into the tag in JSX
// Composition of Component(Add a component inside another)
// {TitleComponent} vs {<TitleComponent/>} vs {<TitleComponent></TitleComponent>} in JSX
/*const Div = ()=> (
    (<div className="class" key="div">
    Hello Div
    <h1 id="h1" key="h1" style={{color: "red"}}>Heading 1</h1>
    <h2 id="h2" key="h2" style={{color: "blue"}}>Heading 2</h2>
    <h3 id="h3" key="h3" style={{color: "yellow"}}>Heading 3</h3>
</div>)
);

const Header = ()=>((
    <div>
    <Div> </Div>
    <Div />
    {Div()}
    </div>
));
*/

//Assignment 2
// Create a Header Component from scratch using Functional Components with JSX
// Add a Logo on left
// Add a search bar in middle
// Add User icon on right
// Add CSS to make it look nice

const Header = () => (
    <div className="container">
     <div className="row">
        <div className="logo col-sm">
        <img src={ booklogo } alt="Book logo" className="img-thumbnail"/>
        </div>

        <div className="searchbar col-sm">
            <div className="input-group rounded">
            <input type="search" className="form-control rounded" placeholder="Search" aria-label="Search" aria-describedby="search-addon" />
            <span className="input-group-text border-0" id="search-addon">
                <i className="fas fa-search"></i>
            </span>
            </div>
        </div>

        <div className="user-icon col-sm">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-person" viewBox="0 0 16 16">
  <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6m2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0m4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4m-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664z"/>
</svg>
        </div>
    </div>
    </div>
)




const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<Header/>);
