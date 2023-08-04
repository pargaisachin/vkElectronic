import React, { useState } from 'react';

import { Button, Space, Table } from 'antd';
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UploadOutlined,
  MobileOutlined,
  EditOutlined,
  AppstoreAddOutlined,
} from '@ant-design/icons';
import { Layout, Menu, Button, theme,  } from 'antd';

const { Header, Sider, Content,Footer } = Layout;

const Dashboard= () => {

  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  return (
    <Layout>
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className="demo-logo-vertical" />
        <Menu
        onClick={({key})=>{
          if(key === '1')
          console.log(1);

        }}
          theme="dark"
          mode="inline"
          defaultSelectedKeys={['1']}
          items={[
            {
              key: '1',
              icon: <MobileOutlined />,
              label: 'View Mobile',
            },
            {
              key: '2',
              icon: <EditOutlined />,
              label: 'Edit Mobile',
            },
            {
              key: '3',
              icon: <UploadOutlined />,
              label: 'Sell Mobile',
            },
            {
              key: '4',
              icon: <AppstoreAddOutlined />,
              label: 'Add Mobile',
            },
          ]}
        />
      </Sider>
      <Layout>
        <Header style={{ padding: 0, background: colorBgContainer }}>
          <Button
            type="text"
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={() => setCollapsed(!collapsed)}
            style={{
              fontSize: '16px',
              width: 64,
              height: 64,
            }}
          />
        </Header>
        <Content
          style={{
            margin: '24px 16px',
            padding: 24,
            minHeight: 280,
            background: colorBgContainer,
          }}
        >
            <>
      <Space style={{ marginBottom: 16 }}>
        <Button onClick={setAgeSort}>Sort age</Button>
        <Button onClick={clearFilters}>Clear filters</Button>
        <Button onClick={clearAll}>Clear filters and sorters</Button>
      </Space>
      <Table columns={columns} dataSource={data} onChange={handleChange} />
    </>
        </Content>
        <Footer style={{ textAlign: 'center' }}>AvacadoBeans Design @2023</Footer>
      </Layout>
    </Layout>
  );
};

export default Dashboard;