import React from 'react';
import './IntroText.css';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

function IntroText() {
  return (
    <div className="intro-text">
      <h1 className="title">Hi, I'm Margarita</h1>
      <p className="subtitle">I Can Build Your Custom LLM Application... Really Fast</p>
      <motion.button
  initial={{ opacity: 0.6 }}
  whileHover={{
    scale: 1.2,
    transition: { duration: 1 },
  }}
  whileTap={{ scale: 0.9 }}
  whileInView={{ opacity: 1 }}
>
  <Link to="/projects" className="see-more">See More</Link>
</motion.button>
    </div>
  );
}

export default IntroText;