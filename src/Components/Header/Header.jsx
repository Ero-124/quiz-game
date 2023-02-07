import React from 'react'
import './Header.scss'

const Header = ({step, questionsLength}) => {
  return (
    <header className='header'>
      <div>
      {step} &nbsp; /  &nbsp; {questionsLength}
      </div>
      
    </header>
  )
}

export default Header