import React from 'react'
import Image from './Image/Notes.png'
export default function Footer() {
  return (
    <>
      {/* <footer>
        <p>copyright © - 2023</p>
     </footer> */}
      <footer>
        <div className="container">
          <div className="footer-content">
            <div className="footer-section">
              <h3>About Us</h3>
              <p>Lorem ipsum dolor sit amet, consectetur elit. Veritati incidunt dolorum earum deleniti obcaecati molestias enim repellat vero minus, perferendis amet error qua sunt repellendus necessitatibus laborum? Aspernatur ex dolorum incidunt quam voluptatibus non dolorem.</p>
            </div>
            <div className="footer-section">
              <h3>Contact</h3>
              <ul>
                <li>Name: Bulbul Islam</li>
                <li>Email: googlekeep63@gmail.com</li>
                <li>Phone: 123-456-7890</li>
                <li>Address: 123 Banani, Dhaka, Bangaldesh</li>
              </ul>
            </div>
            <div className="footer-section">
              <h3>Follow Us</h3>
              <ul className="social-media">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias alias voluptate vero veritatis, sint iure cupiditate voluptatibus illo unde nisi libero explicabo quia quo fugit laudantium fugiat</p>
                <li><a href="https://www.facebook.com/"><i className="fab fa-facebook"></i></a></li>
                <li><a href="https://www.twitter.com/"><i className="fab fa-twitter"></i></a></li>
                <li><a href="https://www.instagram.com/"><i className="fab fa-instagram"></i></a></li>
                <li><a href="https://www.linkedin.com/"><i className="fab fa-linkedin"></i></a></li>
                <li><a href="https://www.tiktok.com/"><i className="fab fa-tiktok"></i></a></li>
                <li><a href="https://www.pinterest.com/"><i className="fab fa-pinterest"></i></a></li>
              </ul>
            </div>
          </div>
          <div className="footer-bottom">
            <p>&copy;copyright  2023 <span>GoogleKeep</span>. All rights reserved.</p>
            <ul className="footer-links">
              <li><a href="#">Privacy Policy</a></li>
              <li><a href="#">Terms of Service</a></li>
              <li><a href="#">Cookie Policy</a></li>
            </ul>
          </div>
        </div>
      </footer>



    </>
  )
}
