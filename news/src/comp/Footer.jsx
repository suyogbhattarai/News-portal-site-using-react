import React from 'react'
import "./footer.scss"

function Footer() {
  return (
    <footer> 
        <div className="container">
            <div className="row p-5 ">
                <div className="col-lg-3 ">
                    <img src="https://english.onlinekhabar.com/wp-content/themes/onlinekhabar-english-2020/img/logo-footer.png" alt="" />
                    <p>The English Edition of Nepal's No 1 News Portal Onlinekhabar.com</p>
                    <p>Phone +977-1-4780076, +977-1-4786489</p>
                    <p>Email: english@onlinekhabar.com</p>
                    <div className="d-flex gap-3 ">
                    <i class="fa fa-facebook text-light" aria-hidden="true"></i>
                    <i class="fa fa-twitter text-light" aria-hidden="true"></i>
                    </div>
                </div>
                <div className="col-lg-3">
                    <h5>News</h5>
                    <ul>
                        <li>Main News</li>
                        <li>Politics</li>
                        <li>Entertainment</li>
                        <li>Lifestyle</li>
                        <li>Business</li>
                        <li>Society</li>
                    </ul>
                </div>
                <div className="col-lg-3">
                    <h5>Heritage</h5>
                    <ul>
                        <li>Festival</li>
                        <li>Folklores</li>
                        <li>Local Eats</li>
                        <li>Preservation</li>
                        <li>Things to do</li>
                    </ul>
                </div>
                <div className="col-lg-3">
                    <h5>Lifestyle</h5>
                    <ul>
                        <li>Main News</li>
                        <li>Lifestyle News</li>
                        <li>Art</li>
                        <li>Diet</li>
                        <li>Health & Fitness</li>
                        <li>People</li>
                    </ul>
                </div>
            </div>
        
        </div>

        <div className="bg-primary">
            <div className="container">
            <div class="row ">
                <div className="text-center pt-3">
                    <p>© 2006-2020 Onlinekhabar.com, All Rights Reserved.</p>
                </div>
                
            </div>
            </div>
        </div>
        


    </footer>
  )
}

export default Footer