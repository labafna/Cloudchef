import { useEffect } from "react";

const useBodyScrollStop = (shouldStop: boolean) => {
  useEffect(() => {
    if (shouldStop) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [shouldStop]);
};

export { useBodyScrollStop };
