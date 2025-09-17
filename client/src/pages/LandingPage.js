import React from 'react'
import { Link } from 'react-router-dom'
import "../landing_page.css"

function Landing_page() {
    return (
        <div>
            <nav className='navbar1'>
                <div className="nav-wrapper">
                    <div className='logo'>
                        <h4>Stay Healthy</h4>
                    </div>
                    <div>
                        <ul>
                            <li><a href="#carouselReview">Services</a></li>
                            <li><Link to="/login">
                                Login
                            </Link></li>
                            <li><Link to="/register">
                                Signup
                            </Link></li>
                            <li><a href="#footer">Contact</a></li>
                        </ul>
                    </div>
                </div>
            </nav>
            <div id="hero">
                <div classNameName="hero_text">
                    <div className="main_text">
                        {/* <h1>Your Health is <br> Our Priority</br></h1> */}
                        <h2>Your Health is our Priority <br /> Find a Doctor & <br />Book Appointment</h2>
                        <div className="main_text_para">
                            <p>Request appointments based on slots ,date and mode of appointment. Know your Doctor to
                                confirmed doctor Appointment
                                effortlessly with clinic details.</p>
                        </div>

                        <Link to="/login"><button className="book_appo_button" type="button" data-bs-toggle="modal" data-bs-target="#myModal">Book an appointment</button></Link>

                        <div style={{ marginTop: '30px' }}>
                            <ul>
                                <li>Make a Appoinment</li>
                                <li>Advanced Technology</li>
                                <li>24/7 Availability</li>
                                <li>Best Doctors</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <div className='video_call'>
                <div className='video_call_image'>
                    <img src='images/Doctors/video_call_image3.jpg' alt="image_not_found" />
                </div>
                <div className='video_call_msg'>
                    <h2>Make Online and Live consultation <br /> with Top Doctors</h2>
                    <p>Access video consultation with India’s top doctors on our website. Connect with doctors online, from the comfort of your home.</p>
                </div>
            </div>

            <div id="carouselReview" className="carousel slide" data-bs-ride="carousel">
                <h3>Services for you & your family</h3>
                <div className="carousel-inner">
                    <div className="row">
                        <div className="col-md-4">
                            <div className="single-box">
                                <div className="img-area"><img src="images/services/nutrient.webp" alt="Person 1" />
                                </div>
                                <div className="img-text">
                                    <h4>Nutritional Advice</h4>
                                    <p>Proper Nutrition advice plays a crucial role in health and agree that providing
                                        nutrition advice is
                                        part of Doctors role.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="single-box">
                                <div className="img-area"><img src="images/services/aged_assessment.jpg" alt="Person2" />
                                </div>
                                <div className="img-text">
                                    <h4>Aged Assessments and care</h4>
                                    <p>Assessors visit the older person's home or hospital to: understand the person's care
                                        needs. Create a support plan based on their care needs.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="single-box">
                                <div className="img-area"><img src="images/services/travel_medicine.avif" alt="Person3" />
                                </div>
                                <div className="img-text">
                                    <h4>Travel Medicine</h4>
                                    <p>Taking correct medicine while travelling helps to prevent disease early without any
                                        futher problems.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="single-box">
                                <div className="img-area"><img src="images/services/weight_control.png" alt="Person4" />
                                </div>
                                <div className="img-text">
                                    <h4>Weight Control Management</h4>
                                    <p>Weight management strategies most often focus on achieving healthy weights through slow
                                        but steady weight loss, followed
                                        by maintenance of an ideal body</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="single-box">
                                <div className="img-area"><img src="images/services/annual_health_checkup.png" alt="Person 5" />
                                </div>
                                <div className="img-text">
                                    <h4>Health Insurance</h4>
                                    <p>Health insurance that covers medical expenses that arise due to an
                                        illness. These expenses could
                                        be related to hospitalisation costs, cost of medicines or doctor consultation fees.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="single-box">
                                <div className="img-area"><img src="images/services/Diabielties.png" alt="Person 6" />
                                </div>
                                <div className="img-text">
                                    <h4>Diabetes Management</h4>
                                    <p>Managing diabetes means managing blood glucose, blood pressure, and cholesterol.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div id="doctors">
                <h3>Our Best Doctors</h3>
                <div className="row-1">
                    <div className="doctors-div">
                        <img src="images/Doctors/female_doctor1-.png" alt="Doctor 2" />
                        <p>Dr.Priti Devadiga</p>
                        <p className="Type">Dentist</p>
                    </div>
                    <div className="doctors-div">
                        <img src="images/Doctors/male_doctor2-.png" alt="Doctor 3" />
                        <p>Dr. Ashok Tandra</p>
                        <p className="Type">Cardiologist</p>
                    </div>
                    <div className="doctors-div">
                        <img src="images/Doctors/male_doctor3-.png" alt="Doctor 4" />
                        <p>Dr. Varun Pandey</p>
                        <p className="Type">Orthopedic</p>
                    </div>
                    <div className="doctors-div">
                        <img src="images/Doctors/female_doctor2-.png" alt="Doctor 6" />
                        <p>Dr. Trupti Lande</p>
                        <p className="Type">Gynecologist</p>
                    </div>
                    <div className="doctors-div">
                        <img src="images/Doctors/male_doctor4-.png" alt="Doctor 5" />
                        <p>Dr. Abhijit Kulkarni</p>
                        <p className="Type">Neurologist</p>
                    </div>
                </div>

            </div>
            <footer id='footer'>
                <div className="footer_form">
                    <h4 className='footer_header_text'>Have some questions?</h4>
                    <h3 className='footer_header_text'>Fill the form below, we will get back to you.</h3>
                    <form className="row g-3">
                        <div className="col-md-6">
                            <label for="inputFirstName" className="form-label">First Name</label>
                            <input type="text" className="form-control" id="inputFirstName" />
                        </div>
                        <div className="col-md-6">
                            <label for="inputLastName" className="form-label">Last Name</label>
                            <input type="text" className="form-control" id="inputLastName" />
                        </div>
                        <div className="col-12">
                            <label for="inputEmail" className="form-label">Email</label>
                            <input type="email" className="form-control" id="inputEmail" />
                        </div>
                        <div className="col-12">
                            <label for="inputMobile" className="form-label">Mobile No</label>
                            <input type="text" className="form-control" id="inputMobile" />
                        </div>
                        <div className="col-md-6">
                            <label for="inputCity" className="form-label">Ask your query here</label>
                            <textarea className="form-control"></textarea>
                        </div>
                        <div className="col-12">
                            <button htmltype="submit" className="btn" style={{ backgroundColor: 'white', color: 'black', }}>Submit</button>
                        </div>
                    </form>
                </div>
                <div className="footer_text">
                    <h6>2024-2025 Copyright.All Rights Reserved. </h6>
                </div>
            </footer >
        </div >

    )
}

export default Landing_page