import React from "react";
import images from "../exports/ImageSli";
import "../styles/Slider.css"
import { motion } from "framer-motion";

const Slider = () => {
    return (
        <motion.div className="slider-container">
            <motion.div className="slider" drag="x" 
            dragConstraints={{right: -100, left: -1070}}>
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