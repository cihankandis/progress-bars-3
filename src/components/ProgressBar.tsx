import { clear } from "console";
import { useEffect, useState } from "react";

export const ProgressBar = ({
  isActive,
  onComplete,
  isPaused,
}: {
  isActive: boolean;
  onComplete: () => void;
  isPaused: boolean;
}) => {
  const [progress, setProgress] = useState(0);
  const [timerId, setTimerId] = useState<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (isPaused && timerId) {
      clearInterval(timerId);
      return;
    }
    if (isActive && !isPaused && progress < 100) {
      const interval = setInterval(() => {
        setTimerId(interval);
        setProgress((prev) => {
          if (prev >= 100) {
            clearInterval(interval);
            onComplete();
            return 100;
          }
          return prev + 1;
        });
      }, 20);
      return () => clearInterval(interval);
    }
  }, [isActive, onComplete, isPaused]);

  return (
    <div className="h-2 bg-gray-300 rounded relative">
      <div
        className="h-2 bg-green-500 absolute rounded"
        style={{ width: `${progress}%` }}
      ></div>
    </div>
  );
};
