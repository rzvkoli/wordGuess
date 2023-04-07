import React , { useEffect , useRef , useState } from 'react';
import Field from './Field';
import words from '../data/words';
import { useNavigate } from 'react-router-dom';

export default function Game() {

    const [level , setLevel] = useState(1);

    const [data , setData] = useState(words);

    const[firstLetter , setFirstLetter] = useState('');
    const[secondLetter , setSecondLetter] = useState('');
    const[thirdLetter , setThirdLetter] = useState('');
    const[fourthLetter , setFourthLetter] = useState('');
    const[fifthLetter , setFifthLetter] = useState('');

    const firstHouse = useRef('');
    const secondHouse = useRef('');
    const thirdHouse = useRef('');
    const fourthHouse = useRef('');
    const fifthHouse = useRef('');

    const [renderedLetters, setRenderedLetters] = useState([]);

    const [word , setWord] = useState('');

    const navigate = useNavigate();

    useEffect(() => {
        
        if(data.length === 0){
            navigate('/endgame', { replace: true });
        }else{
            const arrayLength = data.length
            const random = Math.random()
            const randomIndex = Math.floor(random * arrayLength)
            const randomWord = data[randomIndex]
            setWord(randomWord)
        }
    },[data])

    useEffect(() => {
        
        let lettersWord = word.split("");

        const messUpLettersWord = lettersWord.sort(() => {
            return Math.random() - 0.5
        })

        if(messUpLettersWord.length !== 0){
            const renderLettersWord = messUpLettersWord.map((index) => {
                return (
                    <div className='rounded w-1/12 h-3/6 flex flex-row justify-center items-center backdrop-blur bg-white/10'>
                        <p key={index} className='text-2xl text-white'>
                            {index}
                        </p>
                    </div>
                );
            })
            setRenderedLetters(renderLettersWord);
        }
        
    },[word])

    useEffect(() => {

        firstHouse.current.focus();

        firstLetter.length === 1 && secondHouse.current.focus();
        secondLetter.length === 1 && thirdHouse.current.focus();
        thirdLetter.length === 1 && fourthHouse.current.focus();
        fourthLetter.length === 1 && fifthHouse.current.focus();

        const result = firstLetter + secondLetter + thirdLetter + fourthLetter + fifthLetter

        if(fifthLetter.length === 1){

            // console.log('User guess'+' >> '+result)
            // console.log('Selected word'+' >> '+word)

            if(result === word){

                // console.log('Your guess is correct');

                const newData = data.filter((value) => value !== word);
                setData(newData)

                var levelNumber  = 5 - data.length + 2
                setLevel(levelNumber)
            
                setFirstLetter('');
                setSecondLetter('');
                setThirdLetter('');
                setFourthLetter('');
                setFifthLetter('');

            }else{

                // console.log('Your guess is not correct');

                setFirstLetter('');
                setSecondLetter('');
                setThirdLetter('');
                setFourthLetter('');
                setFifthLetter('');

                firstHouse.current.focus()
            }

        }

    },[firstLetter,secondLetter,thirdLetter,fourthLetter,fifthLetter])

    const handleClick = (e) => {
        e.preventDefault();
    }

  return (
    <div onMouseDown={handleClick} className='h-screen w-full flex flex-col justify-items-start items-center font-Fredoka uppercase bg-cyan-950'>
        <div className='flex flex-row justify-center items-center text-white w-full h-1/3'>
            <p className='text-5xl font-extrabold text-whiteaaa'>
                level {level}
            </p>
        </div>
        <div className='flex flex-row justify-center items-center gap-1 w-full h-1/3'>
            <Field
            inputRef={firstHouse}
            value={firstLetter}
            onChange={(e) => {
                const result = e.target.value.replace(/[^a-z]/gi, '').toUpperCase();
                setFirstLetter(result)
            }}
            />
            <Field
            inputRef={secondHouse}
            value={secondLetter}
            onChange={(e) => {
                const result = e.target.value.replace(/[^a-z]/gi, '').toUpperCase();
                setSecondLetter(result)
            }}
            />
            <Field
            inputRef={thirdHouse}
            value={thirdLetter}
            onChange={(e) => {
                const result = e.target.value.replace(/[^a-z]/gi, '').toUpperCase();
                setThirdLetter(result)

            }}
            />
            <Field
            inputRef={fourthHouse}
            value={fourthLetter}
            onChange={(e) => {
                const result = e.target.value.replace(/[^a-z]/gi, '').toUpperCase();
                setFourthLetter(result)
            }}
            />
            <Field
            inputRef={fifthHouse}
            value={fifthLetter}
            onChange={(e) => {
                const result = e.target.value.replace(/[^a-z]/gi, '').toUpperCase();
                setFifthLetter(result)
            }}
            />
        </div>
        <div className='flex flex-row justify-center items-start gap-1 h-1/3 w-full'>
            {
                renderedLetters
            }
        </div>
    </div>
  );
}
