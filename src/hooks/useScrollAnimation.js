// hooks/useScrollAnimation.js
import { useEffect } from "react";

export default function useScrollAnimation(
  selector = ".animate-on-scroll",
  className = "animate",
) {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(className);
            // Optional optimization: Stop observing after it has animated once
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 },
    );

    const elements = document.querySelectorAll(selector);
    elements.forEach((el) => observer.observe(el));

    // Cleanup: Disconnect the observer completely when component unmounts
    return () => {
      elements.forEach((el) => observer.unobserve(el));
      observer.disconnect();
    };
  }, [selector, className]); // Re-run only if selectors change
}
