import React from 'react';

const SampleQuote = ({ randomQuote }) => {
    return (
        <div className="DisplayQuote">
            {
                randomQuote.name!==undefined &&
                    <div>
                        {randomQuote.quote}
                        {randomQuote.character}
                        <img className="Simpsons" src={randomQuote.image.medium} alt=""/>
                    </div>
            }
        </div>
    );
};

export default SampleQuote;