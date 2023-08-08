import { useNavigate } from "react-router-dom";
import React, {useState,useEffect } from 'react';
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  ShoppingCartOutlined,
  ToolOutlined,
  CloseCircleOutlined,
  MobileOutlined,
  AppstoreAddOutlined,
} from '@ant-design/icons';
import { Layout, Menu, Button, Tag,theme,Popconfirm,Space,Table,Input, Card, Statistic, } from 'antd';
import axios from 'axios';
import HeaderComponent from "./HeaderComponent";
import BodyComponent from "./BodyComponent";
const { Header, Sider,Footer } = Layout;

const Dashboard= () => {
  const navigate = useNavigate();

  const [data, setData] = useState([]);
  const [collapsed, setCollapsed] = useState(true);
  

  useEffect(() => {
    fetchData();
  }, []);
     






  const fetchData =  () => {

    setData([
      {
          
        imei: 123456789012345,
        capacity: 1,
        purchase_date:"2022-10-10",
        sale_date: "2022-10-10",
        code_price:232323,
        status: "In Stock",
        items: "NA",
        seller_id_details:"12345",
        seller_mobileNumber:"1234567890",
        seller_name:"Donald Trump",
        seller_address:"Purani Gali, Newyork City",
        company: "Oppo",
        serial: "Reno",
        model:"RE_12345",
      
    },
    {
          
      imei: 123456789012345,
      capacity: 1,
      purchase_date:"2022-10-10",
      sale_date: "2022-10-10",
      code_price:232323,
      status: "In Stock",
      items: "NA",
      seller_id_details:"12345",
      seller_mobileNumber:"1234567890",
      seller_name:"Donald Trump",
      seller_address:"Purani Gali, Newyork City",
      company: "Oppo",
      serial: "Reno",
      model:"RE_12345",
    
  },
  {
          
    imei: 123456789012345,
    capacity: 1,
    purchase_date:"2022-10-10",
    sale_date: "2022-10-10",
    code_price:232323,
    status: "In Stock",
    items: "NA",
    seller_id_details:"12345",
    seller_mobileNumber:"1234567890",
    seller_name:"Donald Trump",
    seller_address:"Purani Gali, Newyork City",
    company: "Oppo",
    serial: "Reno",
    model:"RE_12345",
  
}
  
  ])

    


  };

  const columns = [
    {
      title: 'Purchase Date',
      dataIndex: 'purchase_date',
      key: 'purchase_date',
      
    },
    {
      title: 'Sale Date',
      dataIndex: 'sale_date',
      key: 'sale_date',
    },
    
    {
      title: 'Code Price',
      dataIndex: 'code_price',
      key: 'code_price',
    },
    {
      title: 'Status',
      dataIndex: 'status',
      key: 'status',
    },
    {
      title: 'Capacity',
      dataIndex: 'capacity',
      key: 'capacity',
      
    },
    {
      title: 'Items',
      dataIndex: 'items',
      key: 'items',
    },
    {
      title: 'Seller ID Details',
      dataIndex: 'seller_id_details',
      key: 'seller_id_details',
    },
    {
      title: 'Seller Mobile Number',
      dataIndex: 'seller_mobileNumber',
      key: 'seller_mobileNumber',
    },
    {
      title: 'Seller Name',
      dataIndex: 'seller_name',
      key: 'seller_name',
    },
    {
      title: 'Seller Address',
      dataIndex: 'seller_address',
      key: 'seller_address',
    },
    {
      title: 'Model',
      dataIndex: 'model',
      key: 'model',
    },
    {
      title: 'Serial',
      dataIndex: 'serial',
      key: 'serial',
    },
    {
      title: 'Company',
      dataIndex: 'company',
      key: 'company',
    },
    {
      title: 'IMEI',
      dataIndex: 'imei',
      key: 'imei',
    },
    {
    title: 'Action',
    key: 'action',
    fixed: 'right',
    width: 100,
   
    },
  ];
  


  return (
    <>
          <HeaderComponent/>
          <BodyComponent/>
    </>



    // <Layout style={{ height:"100%"}}>
    //   <Sider trigger={null} collapsible collapsed={collapsed}>
    //     <div className="demo-logo-vertical" />
    //     <Menu
    //     onClick={({key})=>{
    //       if(key === '2')
    //       {
    //         console.log(2);
    //         navigate('/add-new-mobile')
    //       }

    //       if(key === '1')
    //       {
    //         console.log(1);
    //         navigate('/Dashboard')
    //       }

    //     }}
    //       theme="dark"
    //       mode="inline"
    //       defaultSelectedKeys={['1']}
    //       items={[
    //         {
    //           key: '1',
    //           icon: <MobileOutlined />,
    //           label: 'View Mobile',
    //         },
          
    //         {
    //           key: '2',
    //           icon: <AppstoreAddOutlined />,
    //           label: 'Add Mobile',
    //         },
    //       ]}
    //     />
    //   </Sider>
    //   <Layout>
    //     <Header style={{ padding: 0 }}>
    //       <Button
    //         type="text"
    //         icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
    //         onClick={() => setCollapsed(!collapsed)}
    //         style={{
    //           fontSize: '16px',
    //           width: 64,
    //           height: 64,
    //         }}
    //       />
    //     </Header>
    //     <Space direction="horizontal">
    //   <Card>
    //     <Space direction="horizontal">
    //     <ShoppingCartOutlined style={{
    //             color: "green",
    //             backgroundColor: "rgba(0,255,0,0.25)",
    //             borderRadius: 20,
    //             fontSize: 24,
    //             padding: 8,
    //           }}/>
    //       <Statistic title="Shelf"value={"1"}>
    //       </Statistic>
    //     </Space>
    //   </Card>

    //   <Card>
    //     <Space direction="horizontal">
    //     <ToolOutlined style={{
    //             color: "blue",
    //             backgroundColor: "rgba(0,0,255,0.25)",
    //             borderRadius: 20,
    //             fontSize: 24,
    //             padding: 8,
    //           }}/>
    //       <Statistic title="Repair" value={"1"}>
    //       </Statistic>
    //     </Space>
    //   </Card>


    //   <Card>
    //     <Space direction="horizontal">
    //     <CloseCircleOutlined style={{
    //             color: "red",
    //             backgroundColor: "rgba(255,0,0,0.25)",
    //             borderRadius: 20,
    //             fontSize: 24,
    //             padding: 8,
    //           }}/>
    //       <Statistic title="Dead" value={"1"}>
    //       </Statistic>
    //     </Space>
    //   </Card>
    //   </Space>    


        
    // <>
    //   <Input.Search 
    //   placeholder='Search Here ...'
    //   style={{marginBottom:8}}
      
    //   />
    //   <Table  columns={columns} dataSource={data} rowKey={"imei"}/>
    // </>
    //     <Footer style={{ textAlign: 'center' }}>AvacadoBeans Design @2023</Footer>
    //   </Layout>
    // </Layout>
  );
};

export default Dashboard;