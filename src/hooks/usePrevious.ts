import { useEffect, useRef } from "react";

export function usePrevious<T>(value :any) : T | undefined {
  const ref = useRef<T>();
  useEffect(() => {
    ref.current = value;
  });
  return ref.current;
}