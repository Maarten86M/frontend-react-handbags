import React from "react";

function Tile({ imgBig, textHead, textArticle, textArticleTwo , altText }) {
    return (
        <>
            <section>
                <img src={imgBig} alt={altText}/>
                <h2>{textHead}</h2>
                <p>{textArticle}</p>
                <p>{textArticleTwo}</p>
            </section>
        </>
    )
}

export default Tile;

