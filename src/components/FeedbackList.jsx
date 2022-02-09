import React from 'react'
import FeedbackItem from './FeedbackItem'
import FeedbackStats from './FeedbackStats'
import {motion , AnimatePresence} from 'framer-motion'


import {useContext} from 'react'
import FeedbackContext from '../context/FeedbackContext'
 
function FeedbackList() {
  
    const {feedback} = useContext(FeedbackContext)
    console.log(feedback)
  if(!feedback || feedback.length === 0){
      return <p>No FeedBack Yet</p>
  }


  return (
    <div className='feedback-list'>
        <FeedbackStats />
        <AnimatePresence>
            {feedback.map((item)=>(
                <motion.div 
                    key={item.id}
                    initial = {{opacity:0}}
                    animate = {{opacity:1}}
                    exit={{opacity:0.5}}
                >
                    <FeedbackItem key={item.id} item={item}/>
                </motion.div>
                ))
            }  
        </AnimatePresence>
       
    </div>
  )

//     return (
//     <div className='feedback-list'>
//         <FeedbackStats feedback={feedback}/>
//         {feedback.map((item)=>(
//             <FeedbackItem key={item.id} item={item} handleDel={(id)=>{
//                 return handleDel(id)
//             }}/>
//         ))}
//     </div>
//   )
}

export default FeedbackList
