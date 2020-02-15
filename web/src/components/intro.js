import React from 'react'
import Info from './info'
import './intro.css'

const Intro = () => {
    return (
        <div className='container'>
            <div className="card card-cascade">
                <div className="view view-cascade overlay">
                    <img className="card-img-top" src="https://mdbootstrap.com/img/Photos/Others/men.jpg" alt="Card image cap" />
                    <a><div className="mask rgba-white-slight" /></a>
                </div>
                <div className="card-body card-body-cascade text-center">
                    <h4 className="card-title"><strong>Bùi Hữu Nghĩa</strong></h4>
                    <h5 className="font-weight-bold indigo-text py-2">Web developer</h5>
                    <h6 className='intro'>I'm a programmer working on Web development. My job is to build your website so that it is functional and user-friendly but at the same time attractive.</h6>
                </div>

                <Info/>

            </div>
        </div>
    )
}

export default Intro