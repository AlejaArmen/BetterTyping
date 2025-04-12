'use client'

import {useState} from 'react';


export default function TypePractice() {

    const wordListTemp = ['gato', 'perro', 'libro', 'ventana', 'pajaro'];

    const [currentIndex, setCurrentIndex] = useState(0);
    const [inputValue, setInputValue] = useState('');
    const [feedBack, setFeedBack] = useState('');

    const currentWord = wordListTemp[currentIndex];

    const handleChange = (e) => {
        const value = e.target.value;
        setInputValue(value);

        if(value === currentWord){
            setFeedBack('¡Correcto!');
            setTimeout(() => {
                if(currentIndex < wordListTemp.length -1){
                    setCurrentIndex(currentIndex + 1);
                    setInputValue('');
                    setFeedBack('');
                }else{
                    setFeedBack('¡Terminaste la práctica!');
                    setInputValue('');
                }
            }, 700);
        }else if(!currentWord.startsWith(value)){
            setFeedBack('Error');
        }else{
            setFeedBack('');
        }
    }

    return (
    <div className="flex flex-col items-center justify-center gap-6 mt-20 px-4">
      <h1 className="text-3xl font-bold text-center">Practica tu escritura</h1>

      {/* Aqui va el progreso */}
      <div className="text-sm text-gray-500">
        Palabra <span className="font-semibold">{currentIndex + 1 }</span>de<span className="font-semibold">{wordListTemp.length}</span>
      </div>
      <div className={`text-sm font-medium h-6 transition-all ${feedBack === '¡Correcto!' ? 'text-green-600' : 'text-red-600'}`}>Feed Back</div>

      <div className="text-4xl font-bold text-gray-800">{currentWord}</div>

      {/* Input del usuario, probablemente cambiar al mismo input del texto */}
      <input type="text" value={inputValue} placeholder="Empieza a escribir aqui..." onChange={handleChange} autoFocus className={`border px-6 py-3 rounded text-xl text-center max-w-md w-full outline-none transition-all ${inputValue === '' ? '' : feedBack === '¡Correcto!' ? 'border-forest-green-500' : feedBack ? 'border-red-500' : 'border-gray-300'}`} />
    </div>
  );
}
