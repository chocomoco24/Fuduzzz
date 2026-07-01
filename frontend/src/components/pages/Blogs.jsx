import React from 'react'
import Header from '../common/Header'
import Footer from '../common/Footer'
import SmallHero from '../common/SmallHero'
import BlogImg from '../../assets/images/construction3.jpg'


const Blogs = () => {
    return (
        <>
            <Header />
            <main>
                <SmallHero preHeading='Quality . Creativity . Innovation'
                    heading='Our Projects'
                    text='We excel at delivering exceptional web solutions
                <br/> that captivate users and drive business success.'
                />

                <section className="section-6 py-5 bg-light">
                    <div className="container py-5">
                        <div className="section-header text-center">
                            <span>blog & news</span>
                            <h2>Articles & blog posts</h2>
                            <p>We specialize in a wide range of services, including web development, mobile app development, frontend development,<br /> backend development, graphic design, and more.</p>
                        </div>
                        <div className="row pt-3">
                            <div className="col-md-4">
                                <div className="card shadow">
                                    <div className="card-img-top">
                                        <img src={BlogImg} alt="" className='w-100' />
                                    </div>
                                    <div className="card-body">
                                        <div className="card-title">
                                            <a>Dummy Blog Title</a>
                                        </div>
                                        <a href="" className="btn btn-secondary">Read More</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="card shadow">
                                    <div className="card-img-top">
                                        <img src={BlogImg} alt="" className='w-100' />
                                    </div>
                                    <div className="card-body">
                                        <div className="card-title">
                                            <a>Dummy Blog Title</a>
                                        </div>
                                        <a href="" className="btn btn-secondary">Read More</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="card shadow">
                                    <div className="card-img-top">
                                        <img src={BlogImg} alt="" className='w-100' />
                                    </div>
                                    <div className="card-body">
                                        <div className="card-title">
                                            <a>Dummy Blog Title</a>
                                        </div>
                                        <a href="" className="btn btn-secondary">Read More</a>
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

export default Blogs
