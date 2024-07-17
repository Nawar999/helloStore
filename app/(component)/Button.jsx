"use client";

import { useCatogryNav } from "../(stateStore)/useCatogryNav";

export default function ButtonIcon({ title, action }) {
  const activeCatogry = useCatogryNav((state) => state.catogry);

  return (
    <div>
      <button
        className={`
      bg-secandry p-2 text-xl rounded `}
        onClick={action}
      >
        <p>{title}</p>
      </button>
      {activeCatogry === title.toLowerCase() && (
        <div className="bg-orange h-1 w-full mt-3 rounded-xl "> </div>
      )}
    </div>
  );
}
