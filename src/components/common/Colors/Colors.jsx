import React, {useState} from 'react'

const Colors = () => {
    
    const COLORS = [
      { name: "Light Gray", value: "bg-gray-300" },
      { name: "Gray", value: "bg-gray-400" },
      { name: "Black", value: "bg-neutral-900" },
      { name: "Mint", value: "bg-emerald-200" },
      { name: "White", value: "bg-white border border-gray-200" },
      { name: "Lavender", value: "bg-indigo-200" },
    ];

    const [color, setColor] = useState(2);

    return (
        <div className="mt-14">
            <p className="text-xs tracking-wide text-gray-500">Color</p>
            <div className="mt-3 flex gap-2">
              {COLORS.map((c, i) => (
                <button
                  key={c.name}
                  aria-label={c.name}
                  onClick={() => setColor(i)}
                  className={`h-8 w-8 ${c.value} ${
                    color === i ? "ring-2 ring-neutral-900 ring-offset-2" : ""
                  }`}
                />
              ))}
            </div>
          </div>

    )
}

export default Colors;
