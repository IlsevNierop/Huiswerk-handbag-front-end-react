import React from 'react';

function Article({label, image, subTitle, price }) {
    return (
        <>
            <article>
                <span>{label}</span>
                <img src={image} alt={subTitle}/>
                <p>{subTitle}</p>
                <h4>€{price},-</h4>
            </article>

        </>
    );
}

export default Article;