import React from 'react'
import Header from '../common/Header'
import Footer from '../common/Footer'
import SmallHero from '../common/SmallHero'
import ServiceImg from '../../assets/images/construction1.jpg'


const Services = () => {
    return (
        <>
            <Header />
            <SmallHero preHeading='Quality . Creativity . Innovation'
                heading='Services'
                text='We excel at delivering exceptional web solutions
                <br/> that captivate users and drive business success.'
            />

            <section className="section-3 bg-light py-5">
                <div className="container py-5">
                    <div className="section-header text-center">
                        <span>our services</span>
                        <h2>Our Development Services</h2>
                        <p>We offer a diverse array of development services, spanning residential, commercial, and industrial projects.</p>
                    </div>
                    <div className="row pt-4">
                        <div className="col-md-6 col-lg-4">
                            <div className="item">
                                <div className="service-image">
                                    <img src={ServiceImg} className='w-100' alt="construction Image" />
                                </div>
                                <div className="service-body">
                                    <div className="service-title">
                                        <h3>Web Development</h3>
                                    </div>
                                    <div className="service-content">
                                        <p>Web Development is a niche sector within the construction industry that focuses on projects requiring specialized skills, materials, and techniques.</p>
                                    </div>
                                    <a href="/" className='btn btn-secondary'>Read More</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-4">
                            <div className="item">
                                <div className="service-image">
                                    <img src={ServiceImg} className='w-100' alt="construction Image" />
                                </div>
                                <div className="service-body">
                                    <div className="service-title">
                                        <h3>App Development</h3>
                                    </div>
                                    <div className="service-content">
                                        <p>Web Development is a niche sector within the construction industry that focuses on projects requiring specialized skills, materials, and techniques.</p>
                                    </div>
                                    <a href="/" className='btn btn-secondary'>Read More</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-4">
                            <div className="item">
                                <div className="service-image">
                                    <img src={ServiceImg} className='w-100' alt="construction Image" />
                                </div>
                                <div className="service-body">
                                    <div className="service-title">
                                        <h3>Frontend Development</h3>
                                    </div>
                                    <div className="service-content">
                                        <p>Web Development is a niche sector within the construction industry that focuses on projects requiring specialized skills, materials, and techniques.</p>
                                    </div>
                                    <a href="/" className='btn btn-secondary'>Read More</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-4">
                            <div className="item">
                                <div className="service-image">
                                    <img src={ServiceImg} className='w-100' alt="construction Image" />
                                </div>
                                <div className="service-body">
                                    <div className="service-title">
                                        <h3>Backend Development</h3>
                                    </div>
                                    <div className="service-content">
                                        <p>Web Development is a niche sector within the construction industry that focuses on projects requiring specialized skills, materials, and techniques.</p>
                                    </div>
                                    <a href="/" className='btn btn-secondary'>Read More</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section> 
            <Footer />
        </>
    )
}

export default Services
