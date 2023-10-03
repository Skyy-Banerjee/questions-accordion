import React from 'react'
import SingleQuestion from './SingleQuestion';

function Questions({questions}) {
  return (
   <section className='container'>
    <h1>Questions-Accordion</h1>
    {questions.map(question =>{
        return <SingleQuestion {...question} key={question.id}/>
    })}
   </section>
  )
}

export default Questions
