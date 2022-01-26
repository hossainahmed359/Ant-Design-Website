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
