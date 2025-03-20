import { useState } from "react";
import { ProgressBar } from "./ProgressBar";

const MAX_ACTIVE_BARS = 3;

export const Container = () => {
  const [progressBars, setProgressBars] = useState<number[]>([]);
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [isPaused, setIsPaused] = useState<boolean>(false);

  const handleAdd = () => {
    setProgressBars((prev) => [...prev, prev.length]);
  };

  const handlePause = () => {
    setIsPaused(!isPaused);
  };

  const handleReset = () => {
    setActiveIndex(0);
    setIsPaused(false);
    setProgressBars([]);
  };

  return (
    <div className="p-20">
      <button className="bg-gray-300 p-2 rounded" onClick={handleAdd}>
        Add
      </button>
      <button className="bg-gray-300 p-2 rounded" onClick={handlePause}>
        {isPaused ? "Resume" : "Pause"}
      </button>
      <button className="bg-gray-300 p-2 rounded" onClick={handleReset}>
        Reset
      </button>

      <div className="flex flex-col gap-2 mt-4">
        {progressBars.map((_, index) => (
          <ProgressBar
            key={index}
            isPaused={isPaused}
            isActive={index < activeIndex + MAX_ACTIVE_BARS}
            onComplete={() => setActiveIndex(index + 1)}
          />
        ))}
      </div>
    </div>
  );
};
