import React from "react";
import { motion } from "framer-motion";

import "./style.css";

export const Box = (props) => (
    <motion.div
        className="drag-box"
        drag
        dragConstraints={{
            top: 25,
            left: 25,
            right: 25,
            bottom: 25
        }}
        whileTap={{
            scale: [1, 1.7, 1.7, 1, 1],
            rotate: [0, 0, 270, 270, 0],
            borderRadius: ["20%", "20%", "50%", "50%", "20%"],
        }}
        transition={{
            duration: 2,
            times: [0, 0.2, 0.5, 0.8, 1],
        }}
    />
);