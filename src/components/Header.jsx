import React from 'react'
import { Link, useLocation } from 'react-router-dom'

const Header = () => {
  const location = useLocation()

  return (
    <header className="header">
      {/* Main Navigation */}
      <nav className="main-nav">
        <div className="container">
          <div className="nav-content">
            <div className="logo">
              <span className="logo-icon">🐄</span>
              <span className="logo-text">PashuAI</span>
            </div>
            
            <div className="nav-links">
              <Link 
                to="/" 
                className={`nav-link ${location.pathname === '/' ? 'active' : ''}`}
              >
                HOME
              </Link>
              <Link 
                to="/about" 
                className={`nav-link ${location.pathname === '/about' ? 'active' : ''}`}
              >
                ABOUT
              </Link>
              <Link 
                to="/breed-database" 
                className={`nav-link ${location.pathname === '/breed-database' ? 'active' : ''}`}
              >
                BREED DATABASE
              </Link>
              <div className="nav-dropdown">
                <Link 
                  to="/upload" 
                  className={`nav-link ${location.pathname === '/upload' ? 'active' : ''}`}
                >
                  UPLOAD IMAGE
                </Link>
              </div>
              <Link 
                to="/contact" 
                className={`nav-link ${location.pathname === '/contact' ? 'active' : ''}`}
              >
                CONTACT
              </Link>
            </div>

            <div className="nav-cta">
              <Link to="/upload" className="cta-button">
                Identify Breed
                <span className="arrow">→</span>
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Header
