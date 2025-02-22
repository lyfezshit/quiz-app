import { useState, useEffect } from "react";

const quizData = [
    {
        question: "which is your favourite season?",
        options: ["Winter", "Summer", "Spring", "Autumn", "Rainy"],
        answer: "Rainy",
    },
    {
        question: "What is your age?",
        options: ["18", "21", "19 turning 20", "48"],
        answer: "19 turning 20",
    },
    {
        question: "What is your favourite color?",
        options: ["red", "white", "pink", "she doesn't know"],
        answer: "she doesn't know",
    },
    {
        question: "What is her favourite makeup product?",
        options: ["Lipstick", "Blush", "Mascara", "Eyeshadow"],
        answer: "Lipstick",
    },
    {
        question: "What is she scared of ?",
        options: ["Losing people she loves", "Getting old", "Everything", "nothing, everyone else is scared of her"],
        answer: "Everything",
    },
    {
        question: "Which one does she likes more :Ice-cream or Chocolate?",
        options: ["Ice-cream", "Chocolate", "Why would she choose when she could have both?", "Chocolate"],
        answer: "Why would she choose when she could have both?",
    },
    {
        question: "Which do you think is the life she wanna live?",
        options: ["Busy, the city life ", "Typical nepali life", " kinda peacefull life gardening and keeping animals"],
        answer: "kinda peacefull life gardening and keeping animals",
    },
    {
        question: "What is her comfort food?",
        options: ["MOMO", "Dal Bhat aalu fry", "chatpate"],
        answer: "Dal Bhat aalu fry",
    },
];

export default function Quiz() {
   
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [score, setScore] = useState(0);
    const [showResult, setShowResult] = useState(false);
    const [timeLeft, setTimeLeft] = useState(10);
   
    useEffect(() => {
        if (timeLeft > 0) {
            const timer = setTimeout(() => setTimeLeft(timeleft - 1), 1000);
            return () => clearTimeout(timer);
           
        }
        else {
            handleAnswer(null);
        }
       
    }, [timeLeft]);
    

    const handleAnswer = (selectedOption) => {
        if (selectedOption === quizData[currentQuestion].answer) {
            setScore(score + 1);
        }
        const nextQuestion = currentQuestion + 1;
        if (nextQuestion < quizData.length) {
            setCurrentQuestion(nextQuestion);
            setTimeLeft(10);
        } else {
            setShowResult(true);
        }
    };
        
    

   

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
            <div className="bg-purple-500 p-6 rounded-lg shadow-lg max-w-md w-full text-center">
                {showResult ? (
                    <div>
                        <h1 className="text-2xl font-bold mb-4">Quiz Finished!</h1>
                        <p className="text-lg">Your Score: {score} / {quizData.length}</p>
                        <button
                            onClick={() => {
                                setCurrentQuestion(0);
                                setScore(0);
                                setShowResult(false);
                                setTimeLeft(10);
                            }}
                            className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-lg"
                        >
                            Restart Quiz
                        </button>
                    </div>
                ) : (
                    <div>
                        <h2 className="text-xl font-bold mb-4">{quizData[currentQuestion].question}</h2>
                        <p className="text-red-500 font-bold mb-2">Time left: {timeLeft}s</p>
                        <div className="flex flex-col gap-2">
                            {quizData[currentQuestion].options.map((option, index) => (
                                <button
                                    key={index}
                                    onClick={() => handleAnswer(option)}
                                    className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
                                >
                                    {option}
                                </button>
                            ))}
                        </div>
                    </div>
                
                )}
            </div>
        </div>
    );
}
