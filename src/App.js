import AppHeader from './components/common/AppHeader';
import AppHome from './views/home';
import AppFooter from './components/common/AppFooter';


import './App.css';
import 'antd/dist/antd.css';
import { Layout } from 'antd';
const { Header, Content, Footer } = Layout;



function App() {
  return (
    <div className="App">
      <Layout className="mainLayout">
        <Header >
          <AppHeader />
        </Header>
        <Content>
          <AppHome />
        </Content>
        <Footer>
          <AppFooter/>
        </Footer>
      </Layout>
    </div>
  );
}

export default App;


/* 

Website with ant design:

Project link: https://ant-design-website-template.netlify.app/

Description:
**** Usage of Ant Design components ***
-  <App.js/>       ||   Layout, Header, Content, Footer.
-  <AppHeader.js/> ||   Anchor, Link and Button.	
-  <AppAbout/>     ||   Row, Col. >> Responsiveness
-  <AppFeature/>   ||   Row, Col, Card, Meta. >> Responsiveness
-  <AppFaq/>       ||   Collapse, Panel, Button.
-  <AppPricing/>   ||   List, List.Item, Card.
-  <AppContact/>   ||   Form, Input Field.
-  <AppFooter/>    ||   BackTop

*/