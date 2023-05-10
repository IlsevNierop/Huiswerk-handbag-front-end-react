import React from 'react';

function Article({tag, image, subTitle, price }) {
    return (
        <>
            <article>
                <span>{tag}</span>
                <img src={image} alt="Bag"/>
                <p>{subTitle}</p>
                <h4>{price}</h4>
            </article>

        </>
    );
}

export default Article;