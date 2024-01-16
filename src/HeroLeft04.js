import * as React from 'react';
import Box from '@mui/joy/Box';
import Button from '@mui/joy/Button';
import Chip from '@mui/joy/Chip';
import Typography from '@mui/joy/Typography';
import ArrowForward from '@mui/icons-material/ArrowForward';
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';
import TwoSidedLayout from './TwoSidedLayout';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import ChatBot from './ChatBot';

export default function HeroLeft04() {
  return (
    <TwoSidedLayout>
                <motion.div
  initial={{ opacity: 0, y: -50 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.5 }}
>
      <Chip size="lg" variant="outlined" color="neutral">
        Let's solve hard problems together
      </Chip>
      <Typography
        level="h1"
        fontWeight="xl"
        fontSize="clamp(1.875rem, 1.3636rem + 2.1818vw, 3rem)"
      >
        Hi, I'm Margarita
      </Typography>
      <Typography fontSize="lg" textColor="text.secondary" lineHeight="lg">
      I Can Build Your Custom LLM Application... Really Fast
      </Typography>
      <Box
        sx={{
          display: 'flex',
          gap: 2,
          my: 2,
          flexWrap: 'wrap',
          '& > *': { flex: 'auto' },
        }}
      >
        
        <motion.div
  whileHover={{
    scale: 1.2,
    transition: { duration: .2 },
  }}
  whileTap={{ scale: 0.9 }}
>
  <Link to="/projects">
    <Button size="lg" style={{ backgroundColor: 'black', color: 'white' }} endDecorator={<ArrowForward fontSize="xl" />}>
      Learn More
    </Button>
  </Link>
</motion.div>

<motion.div
  whileHover={{
    scale: 1.2,
    transition: { duration: .2 },
  }}
  whileTap={{ scale: 0.9 }}
>

        <a href="https://calendar.app.google/fGNgmU4X3b3vBwzb9" target="_blank" rel="noopener noreferrer">
  <button className="book-me">Book Me Here</button>
</a>

</motion.div>
      </Box>
      <Typography
        level="body-xs"
        sx={{
          position: 'absolute',
          top: '2rem',
          left: '50%',
          transform: 'translateX(-50%)',
        }}
      >
      </Typography>
      </motion.div>
      <ChatBot />
    </TwoSidedLayout>
  );
}
