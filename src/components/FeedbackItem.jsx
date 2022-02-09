import React from 'react'
import {useContext} from 'react'
import PropTypes from 'prop-types'

import Card from './card'
import {FaTimes , FaEdit} from 'react-icons/fa'
import FeedbackContext from '../context/FeedbackContext'


function FeedbackItem({item }) {

    const {delFeedback , EditFeedback} = useContext(FeedbackContext)

    return (
    <>
        <Card reverse = {true}>
            <div className="num-display">{item.rating}</div>
            <button className='close' onClick={()=>{
                delFeedback(item.id )
            }}>
                <FaTimes color = 'purple' />
            </button>
            <div className="button edit" onClick={()=>{EditFeedback(item)}}><FaEdit color='purple'/></div>
            <div className="text-display">{item.text}</div>
        </Card>
    </>
  )
}

FeedbackItem.propTypes = {
    propRat : PropTypes.number,
    propText : PropTypes.string,
}

export default FeedbackItem

