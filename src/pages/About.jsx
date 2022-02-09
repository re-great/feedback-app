import React from 'react'
import Card from '../components/card'
import {Link} from 'react-router-dom'


function About() {
  return (
    <Card>
        <div className="about">
            <h1>About This project</h1>
            <p>SOme description dummy fool</p>
            <p>Version 1.0.0</p>
            <Link to='/'>Back to Home</Link>
        </div>
    </Card>
  )
}

export default About
