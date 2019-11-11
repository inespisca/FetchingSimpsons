import React from 'react';

const DisplayQuote = ({randomQuote}) => {
    return (
        <div>
            <h3>{randomQuote.quote}</h3>
            <h2>{randomQuote.character}</h2>
            <img src={randomQuote.image} alt=""/>

        </div>
    );
};

export default DisplayQuote;