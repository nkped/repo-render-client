import React from 'react'

const Header = () => {
    const today = new Date()

  return (
    
    <div>Copyright {today.getFullYear()} &copy;</div>
  )
}

export default Header