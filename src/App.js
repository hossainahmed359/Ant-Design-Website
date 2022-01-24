import 'antd/dist/antd.css';
import './App.css';

import AppHeader from './components/common/AppHeader';
import { Layout } from 'antd';

const { Header } = Layout;

function App() {
  return (
    <div className="App">
      <Layout className="mainLayout">
        <Header >
          <AppHeader />
        </Header>
      </Layout>
    </div>
  );
}

export default App;
