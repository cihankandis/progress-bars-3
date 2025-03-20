import { useState } from "react";
import { ProgressBar } from "./ProgressBar";

const MAX_ACTIVE_BARS = 3;

export const Container = () => {
  const [progressBars, setProgressBars] = useState<number[]>([]);
  const [activeIndex, setActiveIndex] = useState<number>(0);

  const handleAdd = () => {
    setProgressBars((prev) => [...prev, prev.length]);
  };

  return (
    <div className="p-20">
      <button className="bg-gray-300 p-2 rounded" onClick={handleAdd}>
        Add
      </button>

      <div className="flex flex-col gap-2 mt-4">
        {progressBars.map((_, index) => (
          <ProgressBar
            key={index}
            isActive={index < activeIndex + MAX_ACTIVE_BARS}
            onComplete={() => setActiveIndex(index + 1)}
          />
        ))}
      </div>
    </div>
  );
};
