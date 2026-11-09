import React from 'react'
import '../../../styles/ProductCard.css'

const ProductCard = (props) => {
    return (
        <article className="product-card">
            <div className="product-card__media">
                <img
                className="product-card__image"
                src={props.image}
                alt={props.name}
                />
                <button
                type="button"
                className="product-card__add"
                aria-label="Add Item"
                >
                +
                </button>
            </div>
        
            <p className="product-card__category">{props.category}</p>
        
            <div className="product-card__info">
                <h3 className="product-card__name">{props.name}</h3>
                <span className="product-card__price">{props.price}</span>
            </div>
        </article>
    )
}

export default ProductCard;