import React from "react";
import '../App.css';
import { Link } from "react-router-dom";


const Category = () => {
    return (
        <div className="Category">
            <h1 className='title'>MOVIEFINDER</h1>
            <div className="linkContainer">
                <Link to="/profile">Kids</Link>
                <Link to="/profile">New Release</Link>
                <Link to="/profile">Trending Movies</Link>
                <Link to="/profile">High Rating</Link>
            </div>
            <span>Select category</span>
            <div className='buttonhome'> <Link to="/">Back to Home</Link></div>
        </div>
    );
}


export default Category;