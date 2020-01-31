import React from 'react';
import { Link } from 'react-router-dom';

export default function Header(props) {

    return (
        <header>
            <nav className="navbar navbar-expand-lg navbar-light bg-dark">
                <div className="container">
                    <Link to="/" className="navbar-brand text-white">
                        <h1 className="display-4">My Book Collection</h1>
                    </Link>
                    <Link to="/books/create">
                        <button className="btn btn-success" type="submit">
                        Create new Book
                        </button>
                    </Link>
                </div>
            </nav>
        </header>
    );
}
