import React from 'react'
import Header from '../common/Header'
import Footer from '../common/Footer'

import AboutImg from '../../assets/images/About-us.jpg'

const About = () => {
    return (
        <>
            <Header />
            <main>
                {/* Hero Section */}
                <section className="about-section-1">
                    <div className="hero d-flex align-items-center">
                        <div className="container">
                            <div className="text-left">
                                <span>Quality . Creativity . Innovation</span>
                                <h1>About Us</h1>
                                <p>We excel at delivering exceptional web solutions <br />that captivate users and drive business success.</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* About Us Section */}
                <section className="section-2 py-5">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-6">
                                <img src={AboutImg} className='w-100' />
                            </div>

                            <div className="col-md-6">
                                <span>about us</span>
                                <h2>Building Software that makes a difference</h2>
                                <p>Building enduring software requires a comprehensive approach that combines advanced materials, resilient design, routine maintainance, and sustainable practices. By drawing on historiacal insights and utilizing modern technology.</p>

                                <p>Building enduring software requires a comprehensive approach that combines advanced materials, resilient design, routine maintainance, and sustainable practices. By drawing on historiacal insights and utilizing modern technology.</p>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    )
}

export default About
