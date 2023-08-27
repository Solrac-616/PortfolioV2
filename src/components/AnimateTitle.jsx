import { motion } from 'framer-motion';
import { textContainer, textVariant2, textVariant3 } from '../utils/motion';

export const TypingText = ({ title, textStyles }) => (
  <motion.p
    variants={textContainer}
    className={`${textStyles}`}
  >
    {Array.from(title).map((letter, index) => (
      <motion.span variants={textVariant2} key={index}>
        {letter === ' ' ? '\u00A0' : letter}
      </motion.span>
    ))}
  </motion.p>
);

export const AnimateH2 = ({ title, textStyles }) => (
  <h2 className='animate-h2 font-raleway'>
    <motion.div
      variants={textContainer}
      className={`${textStyles}`}
      style={{
        overflow: "hidden",
        display: "inline-block"
      }}
    >
      {Array.from(title).map((letter, index) => (
        <motion.span style={{ display: "inline-block" }} variants={textVariant3} key={index}>
          {letter === ' ' ? '\u00A0' : letter}
        </motion.span>
      ))}
    </motion.div>
  </h2>
);

export const TitleText = ({ title, textStyles }) => (
  <motion.h2
    variants={textVariant2}
    initial="hidden"
    whileInView="show"
    className={`${textStyles}`}
  >
    {title}
  </motion.h2>
);