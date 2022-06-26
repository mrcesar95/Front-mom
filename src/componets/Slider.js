import React from "react";
import images from "../exports/Images";
import "../styles/Slider.css"
import { motion } from "framer-motion";

const Slider = () => {
    return (
        <motion.div className="slider-container">
            <motion.div className="slider" drag="x" 
            dragConstraints={{right: 0, left: -1472}}>
                {images.map(image => (
                    <motion.div className="item">
                    <img src={image} />
                    </motion.div>
                ))}
            </motion.div>
        </motion.div>
    )
}
export default Slider