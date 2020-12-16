import React from 'react';

const Footer = () => {
    return (
        <div className='col-12 text-center p-4'>
            <h3>Be part of The Hood!</h3>
            <input className='email' type='email' placeholder='user@email.com'></input>
            <input className='submit' type='submit'></input>
            <div className='row'>
                <div className='col-12 d-flex flex-row justify-content-around align-items-center social-container'>
                    <a><i className="fab fa-instagram fa-2x"></i></a>
                    <a><i class="fab fa-facebook-f fa-2x"></i></a>
                    <a><i class="fab fa-twitter fa-2x"></i></a>
                    <a><i class="fab fa-tiktok fa-2x"></i></a>
                </div>
            </div>
        </div>
    );
}

export default Footer;