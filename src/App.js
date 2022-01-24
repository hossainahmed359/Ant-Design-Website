import 'antd/dist/antd.css';
import './App.css';

import AppHeader from './components/common/AppHeader';
import { Layout } from 'antd';
import AppHome from './views/home';


const { Header, Content } = Layout;

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
      </Layout>
    </div>
  );
}

export default App;
