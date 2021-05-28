import { Layout , Affix} from 'antd';
import './App.css';
import { AntDesignOutlined } from '@ant-design/icons';
import { Main } from '../src/components/Main'
import { useState } from 'react';


const { Header, Footer, Content } = Layout;
function App() {
  const [header, setHeader] = useState(0)
  return (
    <div className="App">
    <Layout>
      <Affix offsetTop={header}>
      <Header>
        <h1 className="title"> <AntDesignOutlined className="icon_title"/> Componentes Ant Design </h1>
      </Header>
      </Affix>
      <Content>
        <Main setHeader={setHeader} header={header}/>
      </Content>
      <Footer>Footer</Footer>
    </Layout>
    </div>
  );
}

export default App;
