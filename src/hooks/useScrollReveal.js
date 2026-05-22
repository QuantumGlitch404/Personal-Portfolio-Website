import { useRef } from 'react';
import { useInView } from 'framer-motion';

export function useScrollReveal(options = { once: true, margin: "-20% 0px" }) {
  const ref = useRef(null);
  const isInView = useInView(ref, options);
  
  return [ref, isInView];
}
