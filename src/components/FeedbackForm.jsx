import React from 'react'
import { useState , useContext , useEffect} from 'react'
import FeedbackContext from '../context/FeedbackContext'


import Card from './card'
import RatingSelect from './RatingSelect'

function FeedbackForm() {
  
    const [text , setText] = useState('')
    const [isDisabled , setisDisabled] = useState(true)
    const [messsage , setMessage] = useState('')
    const [rating , setRating] = useState(10)

    const {addFeedback , editFeedback ,  updateFeedback} = useContext(FeedbackContext)

    useEffect(()=>{
        if(editFeedback.edit === true){
            setText(editFeedback.item.text)
            document.getElementById('inputField').value = editFeedback.item.text;
            setRating(editFeedback.item.rating)
            setisDisabled(false)
        }
        else{
            setText('')
            document.getElementById('inputField').value = '';
            setisDisabled(true)
        }
    },[editFeedback])

    const changeText = (t)=>{
        
        if(t.target.value === ''){
            setisDisabled(true)
            setMessage(null)
        }
        else if(t.target.value.length <= 10){
            setisDisabled(true) 
            setMessage('Review must be more than 10 characters')
        }
        else{
            setisDisabled(false)
            setMessage(null)
        }
        
        return setText(t.target.value)
    }


    const handelSubmit = (e)=>{
        
        e.preventDefault()


        if(text.length > 10){
            const newFeedback = {
                text,
                rating
            }

            if(editFeedback.edit === false){
                addFeedback(newFeedback)
                console.log(rating)
                document.getElementById('inputField').value = ''
                setisDisabled(1)
                setText('')
            }
            else{
                updateFeedback(editFeedback.item.id , newFeedback)
            }
            

        }     
    }



    return (
    <Card reverse={true}>
        <form onSubmit={handelSubmit}>
            <h2>How would you rate our service ?</h2>
           <RatingSelect ratingSelected = {(currRat)=>{
             console.log('FF ' + typeof currRat)
             setRating(currRat)
           }}/>
            <div className="input-group">
                <input type="text" id = 'inputField' onChange={changeText} placeholder='write a review'/>
                <button type='submit' className='btn btn-secondary' disabled={isDisabled}>Post</button>
            </div>
        </form>
        {messsage !== '' && <div style={{color : 'red'}}>{messsage}</div>}
    </Card>
  )
}


export default FeedbackForm
