import React from 'react'
import './footer.css'
function Footer() {
  return (
    <footer id="footer" className='footer'>
      <div className="copyright">
        &copy; Copyright{''}
        <strong>
          <span>. All Rights Reversed</span>
        </strong>
        <div className="credits">
          Design by <a href="/">Azid</a>
        </div>
      </div>
    </footer>
  )
}

export default Footer;