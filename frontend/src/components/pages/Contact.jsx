import React from 'react'
import Header from '../common/Header'
import Footer from '../common/Footer'
import SmallHero from '../common/SmallHero'

const Contact = () => {
    return (
        <>
            <Header />
            <main>
                <SmallHero preHeading='Quality . Creativity . Innovation'
                    heading='Contact Us'
                    text='We excel at delivering exceptional web solutions
                <br/> that captivate users and drive business success.'
                />

                <section className="contact-section-1 py-5">
                    <div className="container py-5">
                        <div className="section-header text-center">
                            <span></span>
                            <h2>Contact Us</h2>
                            <p>Our dedicated experts are here to help you with any of your questions, contact us by <br />filling out the form below and we will be in touch shortly.</p>
                        </div>
                        <div>
                            <div className="row mt-5">
                                <div className="col-md-3">
                                    <div className="card shadow mb-4">
                                        <div className="card-body">
                                            <h3>You can call Us</h3>
                                            <div><a href="#">(888-000-8887)</a></div>
                                            <div><a href="#">(222-122-4445)</a></div>

                                            <h3 className='mt-5'>You can write us</h3>
                                            <div><a href="#">example@example.com</a></div>
                                            <div><a href="#">example@support.com</a></div>

                                            <h3 className='mt-5'>You can find us</h3>
                                            <div className='pe-5'><a href="#">M.B.Tilla, A.D.Nagar, Agartala, Tripura, 799003</a></div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-9">
                                    <div className="card shadow">
                                        <div className="card-body-form p-4">
                                            <form action="">
                                                <div className="row">
                                                    <div className="col-md-6 mb-4">
                                                        <label htmlFor="" className='form-label'>Name</label>
                                                        <input type="text" className='form-control form-control-lg' placeholder='Enter Your Name' />
                                                    </div>
                                                    <div className="col-md-6 mb-4">
                                                        <label htmlFor="" className='form-label'>Email</label>
                                                        <input type="email" className='form-control form-control-lg' placeholder='Enter Your Email' />
                                                    </div>
                                                </div>

                                                <div className="row">
                                                    <div className="col-md-6 mb-4">
                                                        <label htmlFor="" className='form-label'>Phone No.</label>
                                                        <input type="text" className='form-control form-control-lg' placeholder='Enter Your Phone No.' />
                                                    </div>
                                                    <div className="col-md-6 mb-4">
                                                        <label htmlFor="" className='form-label'>Subject</label>
                                                        <input type="email" className='form-control form-control-lg' placeholder='Enter Your subject' />
                                                    </div>
                                                </div>

                                                <div>
                                                    <label htmlFor="" className='form-label'>Message</label>
                                                    <textarea name="" rows={7} id="" className='form-control form-control-lg' placeholder='Enter Message'></textarea>
                                                </div>

                                                <button className="btn btn-primary px-4 py-3 mt-4">Send</button>

                                            </form>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    )
}

export default Contact
