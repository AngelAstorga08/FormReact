import { Layout, Menu } from 'antd';
import {Routes, Route, useNavigate, useLocation } from 'react-router-dom';
import HomePage from './Features/Home/HomePage';      
import CreateUserPage from './Features/User/Pages/UserPage';
import { UserAddOutlined, UserOutlined, HomeOutlined } from '@ant-design/icons';
const { Sider, Content } = Layout;
function App() {
  
  const navigate = useNavigate();
  const location = useLocation();
  
  const menuItems = [
    {
      key: '/',
      icon: <HomeOutlined />,
      label: 'Home',
      onClick: () => navigate('/')
    },
    {
      key: 'user-submenu',
      icon: <UserOutlined />,
      label: 'User',
      children: [
        {
          key: '/create-user',
          icon: <UserAddOutlined />,
          label: 'Create User',
          onClick: () => navigate('/create-user')
        }
      ]
    }
  ];

  return (
      <Layout style={{ minHeight: '100vh' }}> 
        <Sider width={200} theme="light" style={{ padding: '24px 0' }}>
          <Menu
            theme="light"
            mode="inline"
            selectedKeys={[location.pathname]}
            items={menuItems}
          />
        </Sider>

        <Layout>
          <Content style={{ padding: '24px', width: '100%' }}>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/create-user" element={<CreateUserPage />} />
            </Routes>
          </Content>
        </Layout>
      </Layout>
  );
}

export default App;
