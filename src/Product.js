import React from "react";

function Product({bestSeller, newCollection, img, articleName, price}) {

    return (
        <>
            <article>
                <span>
                    {bestSeller ? "Best seller" : ""}
                    {newCollection ? "New collection" : ""}
                </span>
                <img src={img} alt={articleName}/>
                <p>{articleName}</p>
                <h4>€{price},-</h4>
            </article>
        </>
    )
}

export default Product;