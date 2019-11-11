import React from 'react';

const GenerateQuote = ({selectQuote}) => {
    return (
            <button onClick={selectQuote} >Get another quote</button>
    );
};

export default GenerateQuote;