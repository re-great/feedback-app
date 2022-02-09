import React from 'react'
import {useContext} from 'react'
import FeedbackContext from '../context/FeedbackContext'

function FeedbackStats() {
    const {feedback} = useContext(FeedbackContext)
    let average = feedback.reduce((acc , item) =>{
       return acc = acc +  item.rating
    },0) / feedback.length

    average = average.toFixed(1)
  
  
    return (
    <div className='feedback-stats'>
      <h3>{feedback.length} Reviews</h3>
      <h3>{isNaN(average) ? 0 : average}</h3>
    </div>
  )
}

export default FeedbackStats
