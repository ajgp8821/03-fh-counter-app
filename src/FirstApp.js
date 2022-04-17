// import React from 'react';
// import React, { Fragment } from 'react';
import PropTypes from "prop-types";

const FirstApp = ({ greetings, subtitle }) => {

    // const greetings = 'Hello World';
    // const greetings = {
    //     name: 'John',
    //     age: 50
    // }

    // console.log(props);
    // const { greetings } = props;

    return (
        <>
            <h1>{ greetings }</h1>
            {/* <pre>{JSON.stringify(greetings, null, 3)}</pre> */}
            <p>{ subtitle }</p>
        </>
        
    )
}

FirstApp.propTypes = {
    greetings: PropTypes.string.isRequired,
}

FirstApp.defaultProps = {
    subtitle: 'I´m subtitle'
}

export default FirstApp;
