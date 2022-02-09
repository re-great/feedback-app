import { createContext, useState } from "react"
import { v4 as uuidv4 } from 'uuid'



const FeedbackContext = createContext()

export const FeedbackProvider = ({children}) => {


    const [feedback , setfeedback] = useState([
        {
            id : 1 ,
            text : 'Thid is a Demo review',
            rating : 8
        },
        {
            id : 2 ,
            text : 'Thid is also a Demo review',
            rating : 9
        },
        {
            id : 3 ,
            text : 'Thid is an actual review',
            rating : 10
        }
    ])

    const [editFeedback , seteditFeedback] = useState({
        item : {} ,
        edit : false
    })

    function delFeedback(id){
        setfeedback(feedback.filter((item)=>{
            return item.id !== id
        }))
    }

    const addFeedback = (item)=>{
        item.id = uuidv4()
        console.log(item)
        setfeedback([item , ...feedback])
    }

    const EditFeedback = (item)=>{
        seteditFeedback({
            item,
            edit : true
        })
    }
    const updateFeedback = (id , item)=>{
        console.log(id , item)
        setfeedback(feedback.map((Citem)=>{
            if(Citem.id === id){
                item.id = id
                return item
            }
            else{
                return Citem
            }
        }))

        seteditFeedback({
            item : {} ,
            edit : false
        })
    }


    return(
        <FeedbackContext.Provider value={{
            feedback,
            delFeedback,
            addFeedback,
            EditFeedback,
            editFeedback,
            updateFeedback,

        }}>
            {children}
        </FeedbackContext.Provider>
    )
}

export default FeedbackContext