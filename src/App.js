import React from "react"
import './App.css';

function App() {
  const Questions = [
    {
			questionText: 'What is the capital of France?',
			answerOptions: [
				{ answerText: 'New York', isCorrect: false },
				{ answerText: 'London', isCorrect: false },
				{ answerText: 'Paris', isCorrect: true },
				{ answerText: 'Dublin', isCorrect: false },
			],
		},
		{
			questionText: 'Who is CEO of Tesla?',
			answerOptions: [
				{ answerText: 'Jeff Bezos', isCorrect: false },
				{ answerText: 'Elon Musk', isCorrect: true },
				{ answerText: 'Bill Gates', isCorrect: false },
				{ answerText: 'Tony Stark', isCorrect: false },
			],
		},
		{
			questionText: 'The iPhone was created by which company?',
			answerOptions: [
				{ answerText: 'Apple', isCorrect: true },
				{ answerText: 'Intel', isCorrect: false },
				{ answerText: 'Amazon', isCorrect: false },
				{ answerText: 'Microsoft', isCorrect: false },
			],
		},
		{
			questionText: 'How many Harry Potter books are there?',
			answerOptions: [
				{ answerText: '1', isCorrect: false },
				{ answerText: '4', isCorrect: false },
				{ answerText: '6', isCorrect: false },
				{ answerText: '7', isCorrect: true },
			],
		},]

    const [currentQuestion, setCurrentQuestion] = React.useState(0)
    const [score, setScore] = React.useState(0)
    const [success, setSuccess] = React.useState(false)

    function handleAnswerButton(isCorrect) {
      if(isCorrect) {
        setScore(prevScore => prevScore + 1)
      }
      if(currentQuestion < Questions.length - 1 ) {
        setCurrentQuestion(prevques => prevques + 1)
      } else {
        setSuccess(true)
      }
    }
    console.log("You scored " + score + " out of " + Questions.length)
  return (
    <div className='app-container'>
      {success && <div className="scoreboard"><h3>You scored {score} out of {Questions.length}</h3></div>}
        {!success && <div className="questionBoard"><div className='question-container'>
          <h2>Question {currentQuestion + 1}<small>/{Questions.length}</small></h2>
          <p>{Questions[currentQuestion].questionText}</p>
        </div>
        <div className='options-container'>
          {Questions[currentQuestion].answerOptions.map(answer => {
            return <button className='option-button' onClick = {() => handleAnswerButton(answer.isCorrect) }>{answer.answerText}</button>
          })}
        </div></div>}
    </div>  
  );
}

export default App;
