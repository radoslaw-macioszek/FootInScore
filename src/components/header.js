import React from 'react';
import { Link } from 'react-router-dom';
const Header = () => {
    return (
        <div>
            <h2 className="table-container ui aligned header">
                <div className="lefts">
                    <Link to={`/`}>
                        <i className="futbol outline icon" /> FootInScore
                    </Link>{' '}
                    <br />
                    <p>Get the latest news from the World of Football!</p>
                </div>
                <div className="center">
                    <h4 />
                </div>
            </h2>
        </div>
    );
};

export default Header;
