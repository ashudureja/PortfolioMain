import React, { useRef, useState, useLayoutEffect } from 'react';
import { motion } from 'framer-motion';

const Bracket = ({ text, className }) => {
  const textRef = useRef(null);
  // Initialize width as 0. The conditional render will handle the rest.
  const [textWidth, setTextWidth] = useState(0);

  // useLayoutEffect is correct here because it runs synchronously after the DOM
  // is updated but before the browser paints, preventing any visual flicker.
  useLayoutEffect(() => {
    if (textRef.current) {
      setTextWidth(textRef.current.offsetWidth);
    }
  }, [text]); // Re-run if the text prop changes

  return (
    <div className={`flex overflow-hidden ${className}`}>
      <span>(</span>
      {/* The text itself needs to be in a container with overflow: hidden for its own animation */}
      <div style={{ overflow: 'hidden' }}>
        <motion.span
          ref={textRef}
          initial={{ y: '100%' }}
          whileInView={{ y: 0 }}
          viewport={{ once: true }} // Ensures the animation runs only once
          transition={{ delay: 0.4, duration: 0.5, ease: 'easeOut' }}
          style={{ display: 'inline-block' }} // inline-block is necessary for the ref to measure width
        >
          {text}
        </motion.span>
      </div>
      
     
      {textWidth > 0 && (
        <motion.span
          initial={{ x: -textWidth }}
          whileInView={{ x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: 'circOut' }}
        >
          )
        </motion.span>
      )}
    </div>
  );
};

export default Bracket;