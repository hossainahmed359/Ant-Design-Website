import { Col, Row } from 'antd';
import React from 'react';

const items = [
    {
        key: '1',
        icon: <i className='fas fa-chart-pie'></i>,
        title: 'High Performance',
        content: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eveniet provident delectus ipsum aut eligendi sapiente'
    },
    {
        key: '2',
        icon: <i className='fas fa-desktop'></i>,
        title: 'Flat Design',
        content: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eveniet provident delectus ipsum aut eligendi sapiente'
    },
    {
        key: '3',
        icon: <i className='fas fa-database'></i>,
        title: 'Simplified Workflow',
        content: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eveniet provident delectus ipsum aut eligendi sapiente'
    },
  
]

const AppAbout = () => {
    return (
    <div id='about' className='block aboutBlock'>
        <div className='container-fluid'>
            <div className='titleHolder'>
                <h2>About Us</h2>
                <p>There are many variations of passages of Lorem Ipsum available</p>
            </div>
            <div className='contentHolder'>
                <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here'.Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text. Contrary to popular belief, Lorem Ipsum is not simply random text.
                </p>
            </div>
            <Row gutter={[16, 16]}>
                {items.map((item ) => 
                    <Col md={{span: 8}} key={item.key}>
                        <div className='content'>
                            <div className='icon'>
                                {item.icon}
                            </div>
                            <h3>{item.title}</h3>
                            <p>{item.content}</p>
                        </div>
                    </Col>
                )}
            </Row>
        </div>
    </div>
    );
};

export default AppAbout;