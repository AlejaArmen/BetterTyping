'use client';
import { Swiper, SwiperSlide } from 'swiper/react';
import { useRef, useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import 'swiper/css';

const words = ['gato', 'perro', 'tren'];

const ExplodingLetter = ({ letter, isCorrect }) => (
  <motion.span
    initial={{ scale: 1, opacity: 1 }}
    animate={
      isCorrect ? { scale: [1.3, 1.6, 0], opacity: [1, 0.5, 0] } : {}
    }
    transition={{ duration: 0.4 }}
    className="text-4xl font-bold mx-1 text-gray-800"
  >
    {letter}
  </motion.span>
);

const TypingSlide = ({ word, onComplete }) => {
  const [input, setInput] = useState('');

  useEffect(() => {
    if (input === word) {
      setTimeout(() => {
        onComplete();
        setInput('');
      }, 500);
    }
  }, [input]);

  const handleKeyDown = (e) => {
    if (e.key.length === 1) {
      setInput((prev) => prev + e.key);
    } else if (e.key === 'Backspace') {
      setInput((prev) => prev.slice(0, -1));
    }
  };

  return (
    <div
      tabIndex={0}
      onKeyDown={handleKeyDown}
      className="outline-none w-full h-64 flex items-center justify-center"
    >
      {word.split('').map((char, i) => (
        <ExplodingLetter key={i} letter={char} isCorrect={input[i] === char} />
      ))}
    </div>
  );
};

export default function Home() {
  const swiperRef = useRef(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  const goToNextSlide = () => {
    if (swiperRef.current && currentSlide < words.length - 1) {
      swiperRef.current.slideNext();
      setCurrentSlide((prev) => prev + 1);
    }
  };

  return (
    <main className="w-full h-screen flex items-center justify-center bg-gray-100">
      <Swiper
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        allowTouchMove={false}
        slidesPerView={1}
        className="w-full max-w-xl"
      >
        {words.map((word, i) => (
          <SwiperSlide key={i}>
            <TypingSlide word={word} onComplete={goToNextSlide} />
          </SwiperSlide>
        ))}
      </Swiper>
    </main>
  );
}
