import { Card, Col, Row } from 'antd';
import Meta from 'antd/lib/card/Meta';
import React from 'react';

// Images
import image1 from '../../assets/images/modern-design.jpg';
import image2 from '../../assets/images/clean-design.jpg';
import image3 from '../../assets/images/great-support.jpg';
import image4 from '../../assets/images/easy-customise.jpg';
import image5 from '../../assets/images/unlimited-features.jpg';
import image6 from '../../assets/images/advanced-option.jpg';

const items = [
    {
        key: "1",
        image: image1,
        title: 'Modern Design'
    },
    {
        key: "2",
        image: image2,
        title: 'Clean and Elegant'
    },
    {
        key: "3",
        image: image3,
        title: 'Great Support'
    },
    {
        key: "4",
        image: image4,
        title: 'Easy to customize'
    },
    {
        key: "5",
        image: image5,
        title: 'Unlimited Features'
    },
    {
        key: "6",
        image: image6,
        title: 'Advanced Options'
    },
]


const AppFeature = () => {
    return (
        <div id='feature' className='block featureBlock bgGray'>
            <div className='container-fluid'>
                <div className='titleHolder'>
                    <h2>Key Features and Benefits</h2>
                    <p>The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested.</p>
                </div>
            <Row gutter={[16, 16]}>
                {items.map((item) => 
                    <Col key={item.key} span={8} >
                        <Card
                        hoverable
                        cover={<img alt={item.title} src={item.image} />}
                        >
                            <Meta title={item.title} />
                        </Card>
                    </Col>
                )}
            </Row>
            </div>
        </div>
    );
};

export default AppFeature;