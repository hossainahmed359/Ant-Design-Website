import React, { useState } from 'react';
import { Modal, Button } from 'antd';

const AppWorks = () => {

    const [isModalVisible, setIsModalVisible] = useState(false);

    const showModal = () => {
      setIsModalVisible(true);
    };
  
    const handleCancel = () => {
      setIsModalVisible(false);
    };

    return (
        <div className='block worksBlock'>
            <div className='container-fluid'>
                <div className='titleHolder'>
                    <h2>How it works</h2>
                    <p>The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested.</p>
                </div>
                <div className='contentHolder'>
                <Button onClick={showModal}>
                    <i className='fas fa-play'></i>
                </Button>
                </div>
                <Modal title="Watch video" footer={null} visible={isModalVisible}  onCancel={handleCancel}>
                    <iframe 
                        title="Video link" 
                        width='100%'  
                        height='350'
                        src="https://www.youtube.com/embed/BNB-Q5yI-_o"
                        />
                </Modal>
            </div>
        </div>
    );
};

export default AppWorks;