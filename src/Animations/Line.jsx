import React from 'react'
import { circOut, motion } from "framer-motion";

const Line = () => {
  return (
    <motion.div
        className="h-[1px] bg-gray-200 rounded-full"
        initial={{ width: 0 }}
        whileInView={{ width: "100%" }}
        transition={{
          duration: 1,
          delay: 0.1,
          ease: circOut,
        }}
        viewport={{ once: true }}
      />
  )
}

export default Line