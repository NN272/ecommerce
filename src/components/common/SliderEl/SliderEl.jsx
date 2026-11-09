import React from 'react'

const SliderEl = (props) => {
    return (
        <li key={props.id} className="pslider__item">
            <div
              className="pslider__media"
              onClick={() => onItemClick?.(item)}
            >
              <img src={props.image} alt={props.name} draggable="false" />
              <button
                type="button"
                className="pslider__add"
                aria-label={`Add ${props.name}`}
                onClick={(e) => {
                  e.stopPropagation();
                  onAdd?.(item);
                }}
              >
                +
              </button>
            </div>
 
            <div className="pslider__meta">
              <span className="pslider__category">{props.category}</span>
              {props.swatch && (
                <span
                  className="pslider__swatch"
                  style={{ backgroundColor: props.swatch }}
                />
              )}
              {props.moreColors > 0 && (
                <span className="pslider__more">+{props.moreColors}</span>
              )}
            </div>
 
            <div className="pslider__info">
              <h3
                className="pslider__name"
                onClick={() => onItemClick?.(item)}
              >
                {props.name}
              </h3>
              <span className="pslider__price">{props.price}</span>
            </div>
          </li>
    )
}

export default SliderEl;