import React from 'react';

const HelloWorld = () => {

    function helloPrompt(){
        alert('Hello World!');
    }

    return (

        <button onClick={helloPrompt} >Click me!</button>
    );
};

export default HelloWorld;