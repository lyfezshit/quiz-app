import { useState, useEffect } from "react";

export default function Quiz() {
    const [quizData, setQuizData] = useState([]);
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [score, setScore] = useState(0);
    const [showResult, setShowResult] = useState(false);
    const [timeLeft, setTimeLeft] = useState(10);
    const [newQuestion, setNewQuestion] = useState("");
    const [newOptions, setNewOptions] = useState(["", "", "", ""]);
    const [newAnswer, setNewAnswer] = useState("");

    useEffect(() => {
        if (timeLeft === 0 && quizData.length >5 ) {
            handleNextQuestion();
        }
        const timer = setInterval(() => {
            setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0));
        }, 1000);
        return () => clearInterval(timer);
    }, [timeLeft, quizData]);

    const handleAnswer = (selectedOption) => {
        if (selectedOption === quizData[currentQuestion].answer) {
            setScore(score + 1);
        }
        handleNextQuestion();
    };

    const handleNextQuestion = () => {
        const nextQuestion = currentQuestion + 1;
        if (nextQuestion < quizData.length) {
            setCurrentQuestion(nextQuestion);
            setTimeLeft(10);
        } else {
            setShowResult(true);
        }
    };

    const addNewQuestion = () => {
        if (!newQuestion || newOptions.some(opt => !opt) || !newAnswer) return;
        setQuizData([...quizData, { question: newQuestion, options: newOptions, answer: newAnswer }]);
        setNewQuestion("");
        setNewOptions(["", "", "", ""]);
        setNewAnswer("");
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
                ) : quizData.length > 0 ? (
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
                ) : (
                    <div>
                        <h2 className="text-xl font-bold mb-4">Add Your Own Question</h2>
                        <input
                            type="text"
                            placeholder="Enter your question"
                            value={newQuestion}
                            onChange={(e) => setNewQuestion(e.target.value)}
                            className="border p-2 w-full mb-2"
                        />
                        {newOptions.map((option, index) => (
                            <input
                                key={index}
                                type="text"
                                placeholder={`Option ${index + 1}`}
                                value={option}
                                onChange={(e) => {
                                    const updatedOptions = [...newOptions];
                                    updatedOptions[index] = e.target.value;
                                    setNewOptions(updatedOptions);
                                }}
                                className="border p-2 w-full mb-2"
                            />
                        ))}
                        <input
                            type="text"
                            placeholder="Enter correct answer"
                            value={newAnswer}
                            onChange={(e) => setNewAnswer(e.target.value)}
                            className="border p-2 w-full mb-2"
                        />
                        <button
                            onClick={addNewQuestion}
                            className="mt-2 bg-green-500 text-white px-4 py-2 rounded-lg"
                        >
                            Add Question
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
}
