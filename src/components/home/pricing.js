import React from 'react';
import { List, Card, Button } from 'antd';

const data = [
  {
    title: 'Basic',
    content: [
        {
            price: '$29.99',
            space: '1 GB of space',
            user: '1 users',
            support: '20/7 support',
            backup: 'Safe, reliable backup',
            access: 'Access from anywhere',
        }
    ]
  },
  {
    title: 'Premium',
    content: [
        {
            price: '$59.99',
            space: '5 GB of space',
            user: '5 users',
            support: '20/7 support',
            backup: 'Safe, reliable backup',
            access: 'Access from anywhere',
        }
    ]
  },
  {
    title: 'Enterprise',
    content: [
        {
            price: '$99.99',
            space: '9 GB of space',
            user: '9 users',
            support: '20/7 support',
            backup: 'Safe, reliable backup',
            access: 'Access from anywhere',
        }
    ]
  },
];


const AppPricing = () => {
    return (
        <div className='block pricingBlock bgGray' >
            <div className='container-fluid'>
                <List
                     grid={{
                        gutter: 16,
                        xs: 1,
                        sm: 2,
                        md: 4,
                        lg: 4,
                        xl: 6,
                        xxl: 3, 
                      }}
                    dataSource={data}
                    renderItem={item => (
                        <List.Item>
                        <Card title={item.title}>
                            <p className='large'>{item.content[0].price}</p>
                            <p>{item.content[0].space}</p>
                            <p>{item.content[0].user}</p>
                            <p>{item.content[0].support}</p>
                            <p>{item.content[0].backup}</p>
                            <p>{item.content[0].access}</p>
                            <Button type='primary' size='large'><i className='fab fa-telegram-plane'></i> Get Started</Button>
                        </Card>
                    </List.Item>
                    )}
                />
            </div>
        </div>
    );
};

export default AppPricing;