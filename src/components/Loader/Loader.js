import React from 'react';
// import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import { Oval } from 'react-loader-spinner';

const Loader = () => {
    return (
        <div className='loaderWrap'>
            <Oval color="#00BFFF" height={60} width={60} />
        </div>
    )
}

export default Loader;