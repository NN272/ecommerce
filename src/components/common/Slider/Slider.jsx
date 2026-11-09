import { useCallback, useEffect, useRef, useState } from "react";
import '../../../styles/App.css'
import SliderEl from "../SliderEl/SliderEl";

export default function ProductCardSlider({ items = [], onItemClick, onAdd }) {
  const trackRef = useRef(null);
  const [canPrev, setCanPrev] = useState(false);
  const [canNext, setCanNext] = useState(true);
 
  const updateButtons = useCallback(() => {
    const el = trackRef.current;
    if (!el) return;
    setCanPrev(el.scrollLeft > 1);
    setCanNext(el.scrollLeft + el.clientWidth < el.scrollWidth - 1);
  }, []);
 
  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;
    updateButtons();
    el.addEventListener("scroll", updateButtons, { passive: true });
    window.addEventListener("resize", updateButtons);
    return () => {
      el.removeEventListener("scroll", updateButtons);
      window.removeEventListener("resize", updateButtons);
    };
  }, [updateButtons, items.length]);
 
  // Scroll by exactly one card (card width + gap)
  const slide = (direction) => {
    const el = trackRef.current;
    const card = el?.querySelector(".pslider__item");
    if (!el || !card) return;
    const gap = parseFloat(getComputedStyle(el).columnGap) || 0;
    el.scrollBy({
      left: direction * (card.offsetWidth + gap),
      behavior: "smooth",
    });
  };
 
  return (
    <div className="pslider" style={{marginTop: "2rem"}}>
      <ul className="pslider__track" ref={trackRef}>
        {items.map((item) => <SliderEl 
            id={item.id} 
            moreColors={item.moreColors} 
            price={item.price} 
            image={item.image} 
            name={item.name} 
            category={item.category} 
            swatch={item.swatch}/>
        )}
      </ul>
 
      <div className="pslider__controls">
        <button
          type="button"
          className="pslider__btn"
          onClick={() => slide(-1)}
          disabled={!canPrev}
          aria-label="Previous"
        >
          <svg viewBox="0 0 24 24" width="16" height="16" aria-hidden="true">
            <path
              d="M15 5l-7 7 7 7"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
        <button
          type="button"
          className="pslider__btn"
          onClick={() => slide(1)}
          disabled={!canNext}
          aria-label="Next"
        >
          <svg viewBox="0 0 24 24" width="16" height="16" aria-hidden="true">
            <path
              d="M9 5l7 7-7 7"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}