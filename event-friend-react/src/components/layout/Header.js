import React from 'react'
import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <div>
      <header style={headerStyle}>
        <h1>EVENT FRIEND</h1>
        <Link style={linkStyle} to="/">Etkinlikleri Gör</Link> | <Link style={linkStyle} to="/postevent">Etkinlik Oluştur</Link>
      </header>
    </div>
  )
}

const headerStyle = {
  background: '#333',
  color: '#fff',
  textAlign: 'center',
  padding: '10px'
}

const linkStyle = {
  color: '#fff',
  textDecoration: 'none'
}


