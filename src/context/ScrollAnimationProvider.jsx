import { createContext, useContext, useMemo } from "react";

const AnimationContext = createContext(null);

export function ScrollAnimationProvider({ children }) {
  // returns a ref-callback you can pass directly to any element
  const registerOnce = useMemo(() => {
    return (node) => {
      if (!node) return; // ref cleared on unmount
      const observer = new IntersectionObserver(
        ([entry], obs) => {
          if (entry.isIntersecting) {
            node.classList.add("in-view-once");
            obs.unobserve(node); // one-and-done
          }
        },
        { threshold: 0.3 }
      );
      observer.observe(node);
    };
  }, []);

  return (
    <AnimationContext.Provider value={{ registerOnce }}>
      {children}
    </AnimationContext.Provider>
  );
}

export function useAnimation() {
  const ctx = useContext(AnimationContext);
  if (!ctx)
    throw new Error("useAnimation must be used within ScrollAnimationProvider");
  return ctx;
}
