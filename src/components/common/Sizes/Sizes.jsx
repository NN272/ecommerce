import React, {useState} from 'react'

const Sizes = () => {

    const SIZES = ["XS", "S", "M", "L", "XL", "2X"];

    const [size, setSize] = useState(null);

    return (
        <div style={{marginTop: "1rem"}}>
            <p className="text-base tracking-wide text-gray-500">Size</p>
            <div className="mt-3 flex gap-2">
              {SIZES.map((s) => (
                <button
                  key={s}
                  onClick={() => setSize(s)}
                  className={`h-10 w-10 border text-[10px] transition ${
                    size === s
                      ? "border-neutral-900 bg-neutral-900 text-white"
                      : "border-gray-400 text-gray-700 hover:border-neutral-900"
                  }`}
                >
                  {s}
                </button>
              ))}
            </div>
        </div>
    )
}

export default Sizes;