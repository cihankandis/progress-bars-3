import { useEffect, useState } from "react";

export const ProgressBar = ({
  isActive,
  onComplete,
}: {
  isActive: boolean;
  onComplete: () => void;
}) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (isActive && progress < 100) {
      const interval = setInterval(() => {
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
  }, [isActive, onComplete]);

  return (
    <div className="h-2 bg-gray-300 rounded relative">
      <div
        className="h-2 bg-green-500 absolute rounded"
        style={{ width: `${progress}%` }}
      ></div>
    </div>
  );
};
