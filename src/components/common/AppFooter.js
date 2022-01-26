import React from 'react';
import { BackTop } from 'antd';

const AppFooter = () => {
    return (
        <div className='container-fluid'>
            <div className='footer'>
                <div className='logo'>
                    <i className='fas fa-bolt'></i>
                    <a target={'_blank'} href='http://www.google.com'>Tech</a>
                </div>
                <ul className='socials'>
                    <li>
                        <a target={'_blank'} href='http://www.google.com'>
                            <i className='fab fa-facebook-f'></i>
                        </a>
                    </li>
                    <li>
                        <a target={'_blank'} href='http://www.google.com'>
                            <i className='fab fa-twitter'></i>
                        </a>
                    </li>
                    <li>
                        <a target={'_blank'} href='http://www.google.com'>
                            <i className='fab fa-linkedin-in'></i>
                        </a>
                    </li>
                    <li>
                        <a target={'_blank'} href='http://www.google.com'>
                            <i className='fab fa-pinterest-p'></i>
                        </a>
                    </li>
                    <li>
                        <a target={'_blank'} href='http://www.google.com'>
                            <i className='fab fa-instagram'></i>
                        </a>
                    </li>
                </ul>
                <div className='copyright'>Copyright &copy; 2022 Tech</div>
                <BackTop>
                    <div className='goTop'><i className='fas fa-arrow-circle-up'></i></div>
                </BackTop>
            </div>
        </div>
    );
};

export default AppFooter;