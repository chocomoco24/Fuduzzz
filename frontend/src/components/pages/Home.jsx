import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

import Header from '../common/Header';
import Footer from '../common/Footer';

import AboutImg from '../../assets/images/About-us.jpg'
import ServiceImg from '../../assets/images/construction1.jpg'
import ConstImg from '../../assets/images/construction2.jpg'
import BlogImg from '../../assets/images/construction3.jpg'
import Icon1 from '../../assets/images/icon-1.svg'
import Icon2 from '../../assets/images/icon-2.svg'
import Icon3 from '../../assets/images/icon-3.svg'
import Star from '../icons/Star';
import AvatarImg from '../../assets/images/author-2.jpg'

const Home = () => {
    return (
        <>
            <Header />
            <main>
                {/* Hero Section */}
                <section className="section-1">
                    <div className="hero d-flex align-items-center">
                        <div className="container-fluid">
                            <div className="text-center">
                                <span>Welcome Aspiring Developer</span>
                                <h1>Building The Future<br />with creativity and innovation</h1>
                                <p>We excel at delivering exceptional web solutions that captivate users and drive business success.</p>
                                <div className="mt-4">
                                    <button className='btn btn-primary'>Contact Now</button>
                                    <button className='btn btn-primary ms-2'>View Projects</button>
                                </div>
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

                {/* Our Services Section */}
                <section className="section-3 bg-light py-5">
                    <div className="container-fluid py-5">
                        <div className="section-header text-center">
                            <span>our services</span>
                            <h2>Our Development Services</h2>
                            <p>We offer a diverse array of development services, spanning residential, commercial, and industrial projects.</p>
                        </div>
                        <div className="row pt-4">
                            <div className="col-md-3 col-lg-3">
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
                            <div className="col-md-3 col-lg-3">
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
                            <div className="col-md-3 col-lg-3">
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
                            <div className="col-md-3 col-lg-3">
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

                {/* Why Choose Us Section */}
                <section className="section-4 py-5">
                    <div className="container py-5">
                        <div className="section-header text-center">
                            <span>why choose us</span>
                            <h2>Discover our wide variety of projects</h2>
                            <p>We offer a diverse array of development services, spanning residential, commercial, and industrial projects.</p>
                        </div>
                        <div className="row pt-4">
                            <div className="col-md-4">
                                <div className="card shadow">
                                    <div className="header">
                                        <div className="card-icon me-3">
                                            <img src={Icon1} alt="" width={50} />

                                        </div>
                                        <div className="card-title mb-0 mt-2">
                                            <h3>Modern Designs</h3>
                                        </div>
                                    </div>
                                    <div className="card-content">
                                        <p>Web Development is a niche sector within the construction industry that focuses on projects requiring specialized skills, materials, and techniques.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="card shadow">
                                    <div className="header">
                                        <div className="card-icon me-3">
                                            <img src={Icon2} alt="" width={50} />

                                        </div>
                                        <div className="card-title mb-0 mt-2">
                                            <h3>Modern Designs</h3>
                                        </div>
                                    </div>
                                    <div className="card-content">
                                        <p>Web Development is a niche sector within the construction industry that focuses on projects requiring specialized skills, materials, and techniques.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="card shadow">
                                    <div className="header">
                                        <div className="card-icon me-3">
                                            <img src={Icon3} alt="" width={50} />

                                        </div>
                                        <div className="card-title mb-0 mt-2">
                                            <h3>Modern Designs</h3>
                                        </div>
                                    </div>
                                    <div className="card-content">
                                        <p>Web Development is a niche sector within the construction industry that focuses on projects requiring specialized skills, materials, and techniques.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Our Project Section*/}
                <section className="section-3 bg-light py-5">
                    <div className="container-fluid py-5">
                        <div className="section-header text-center">
                            <span>our projects</span>
                            <h2>Our Development Projects</h2>
                            <p>We offer a diverse array of development services, spanning residential, commercial, and industrial projects.</p>
                        </div>
                        <div className="row pt-4">
                            <div className="col-md-3 col-lg-3">
                                <div className="item">
                                    <div className="service-image">
                                        <img src={ConstImg} className='w-100' alt="construction Image" />
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
                            <div className="col-md-3 col-lg-3">
                                <div className="item">
                                    <div className="service-image">
                                        <img src={ConstImg} className='w-100' alt="construction Image" />
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
                            <div className="col-md-3 col-lg-3">
                                <div className="item">
                                    <div className="service-image">
                                        <img src={ConstImg} className='w-100' alt="construction Image" />
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
                            <div className="col-md-3 col-lg-3">
                                <div className="item">
                                    <div className="service-image">
                                        <img src={ConstImg} className='w-100' alt="construction Image" />
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

                {/* Testimonials Section */}
                <section className="section-5 py-5">
                    <div className="container py-5">
                        <div className="section-header text-center">
                            <span>Testimonials</span>
                            <h2>What people are saying about us</h2>
                            <p>We offer a diverse array of development services, spanning residential, commercial, and industrial projects.</p>
                        </div>
                        <Swiper
                            spaceBetween={50}
                            slidesPerView={3}
                            modules={[Pagination]}
                            pagination={{ clickable: true }}

                        >
                            <SwiperSlide>
                                <div className="card shadow">
                                    <div className="card-body">
                                        <div className="rating">
                                            <Star />
                                            <Star />
                                            <Star />
                                            <Star />
                                            <Star />
                                        </div>
                                        <div className="content">
                                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptas aliquam nesciunt molestias iusto neque porro voluptate earum, consectetur sunt enim quae soluta corporis reiciendis nobis ad alias cum! Doloribus, vitae.</p>
                                        </div>
                                        <hr />
                                        <div className="person">
                                            <div>
                                                <img src={AvatarImg} alt="face" />
                                            </div>
                                            <div className='person-info'>
                                                <div className="name">John Atma</div>
                                                <div className="role">CEO</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="card shadow">
                                    <div className="card-body">
                                        <div className="rating">
                                            <Star />
                                            <Star />
                                            <Star />
                                            <Star />
                                            <Star />
                                        </div>
                                        <div className="content">
                                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptas aliquam nesciunt molestias iusto neque porro voluptate earum, consectetur sunt enim quae soluta corporis reiciendis nobis ad alias cum! Doloribus, vitae.</p>
                                        </div>
                                        <hr />
                                        <div className="person">
                                            <div>
                                                <img src={AvatarImg} alt="face" />
                                            </div>
                                            <div className='person-info'>
                                                <div className="name">John Atma</div>
                                                <div className="role">CEO</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="card shadow">
                                    <div className="card-body">
                                        <div className="rating">
                                            <Star />
                                            <Star />
                                            <Star />
                                            <Star />
                                            <Star />
                                        </div>
                                        <div className="content">
                                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptas aliquam nesciunt molestias iusto neque porro voluptate earum, consectetur sunt enim quae soluta corporis reiciendis nobis ad alias cum! Doloribus, vitae.</p>
                                        </div>
                                        <hr />
                                        <div className="person">
                                            <div>
                                                <img src={AvatarImg} alt="face" />
                                            </div>
                                            <div className='person-info'>
                                                <div className="name">John Atma</div>
                                                <div className="role">CEO</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="card shadow">
                                    <div className="card-body">
                                        <div className="rating">
                                            <Star />
                                            <Star />
                                            <Star />
                                            <Star />
                                            <Star />
                                        </div>
                                        <div className="content">
                                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptas aliquam nesciunt molestias iusto neque porro voluptate earum, consectetur sunt enim quae soluta corporis reiciendis nobis ad alias cum! Doloribus, vitae.</p>
                                        </div>
                                        <hr />
                                        <div className="person">
                                            <div>
                                                <img src={AvatarImg} alt="face" />
                                            </div>
                                            <div className='person-info'>
                                                <div className="name">John Atma</div>
                                                <div className="role">CEO</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="card shadow">
                                    <div className="card-body">
                                        <div className="rating">
                                            <Star />
                                            <Star />
                                            <Star />
                                            <Star />
                                            <Star />
                                        </div>
                                        <div className="content">
                                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptas aliquam nesciunt molestias iusto neque porro voluptate earum, consectetur sunt enim quae soluta corporis reiciendis nobis ad alias cum! Doloribus, vitae.</p>
                                        </div>
                                        <hr />
                                        <div className="person">
                                            <div>
                                                <img src={AvatarImg} alt="face" />
                                            </div>
                                            <div className='person-info'>
                                                <div className="name">John Atma</div>
                                                <div className="role">CEO</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                        </Swiper>
                    </div>
                </section>
                
                {/* Blog & news section */}
                <section className="section-6 py-5 bg-light">
                    <div className="container py-5">
                        <div className="section-header text-center">
                            <span>blog & news</span>
                            <h2>Articles & blog posts</h2>
                            <p>We specialize in a wide range of services, including web development, mobile app development, frontend development,<br/> backend development, graphic design, and more.</p>
                        </div>
                        <div className="row pt-3">
                            <div className="col-md-4">
                                <div className="card shadow">
                                    <div className="card-img-top">
                                        <img src={BlogImg} alt="" className='w-100'/>
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
                                        <img src={BlogImg} alt="" className='w-100'/>
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
                                        <img src={BlogImg} alt="" className='w-100'/>
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

export default Home
