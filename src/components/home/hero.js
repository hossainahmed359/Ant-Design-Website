import React from 'react';
import { Button, Carousel } from 'antd';

const items = [
    {
        key: '1',
        title: 'Web and mobile payment built for developers',
        content: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eveniet provident delectus ipsum aut eligendi sapiente, consequuntur distinctio ut facere perspiciatis. Incidunt ducimus cumque fugit laboriosam repellat corporis quidem reiciendis modi!'
    },
    {
        key: '2',
        title: 'Work better together. Schedule meetings',
        content: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eveniet provident delectus ipsum aut eligendi sapiente, consequuntur distinctio ut facere perspiciatis. Incidunt ducimus cumque fugit laboriosam repellat corporis quidem reiciendis modi!'
    },
    {
        key: '3',
        title: 'The best app to increase your productivity',
        content: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eveniet provident delectus ipsum aut eligendi sapiente, consequuntur distinctio ut facere perspiciatis. Incidunt ducimus cumque fugit laboriosam repellat corporis quidem reiciendis modi!'
    }
]


const AppHero = () => {
    return (
        <div id='hero' className='heroBlock'>
            <Carousel>
                {items.map(item => {
                    return (
                        <div key={`${item.key}`} className='container-fluid'>
                            <div className='content'>
                                <h3>{item.title}</h3>
                                <p>{item.content}</p>
                                <div className='btnHolder'>
                                    <Button type='primary' size='large'>Learn More</Button>
                                    <Button size='large'><i className='fas fa-desktop'></i> Watch a demo</Button>
                                </div>
                            </div>

                        </div>
                    )
                })}

            </Carousel>
        </div>
    );
};

export default AppHero;