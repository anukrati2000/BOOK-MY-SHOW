import React from 'react';
import MovieNavbar from '../components/Navbar/MovieNavbar.Component';

const MovieLayoutHOC = (Component) => ({ ...props }) => {

    return (
        <div>
            <div>
                <MovieNavbar />
                <Component {...props} />
                <div>Footer</div>
            </div>
        </div>
    )
}

export default MovieLayoutHOC;