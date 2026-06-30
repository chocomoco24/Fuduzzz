import React from 'react'

const SmallHero = ({preHeading,heading,text}) => {
    return (
        <section className="about-section-1">
            <div className="hero d-flex align-items-center">
                <div className="container">
                    <div className="text-left">
                        <span>{preHeading}</span>
                        <h1>{heading}</h1>
                        <p dangerouslySetInnerHTML={{__html:text}}></p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default SmallHero