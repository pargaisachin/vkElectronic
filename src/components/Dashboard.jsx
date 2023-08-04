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
const { Header, Sider,Footer } = Layout;

const Dashboard= () => {
  const navigate = useNavigate();
  const[mobileStatus,setmobileStatus]=useState([]);
  const [data, setData] = useState([]);
  const [collapsed, setCollapsed] = useState(true);
  const[serachedText,setSearchedText]=useState("");
  const {
    token: { colorBgContainer },
  } = theme.useToken();
////

  // const fetchData = async () => {
  //   await axios.get("api/mobiles").then(
  //     res => {
  //       setData(
  //         res.data.map((row, index) => ({key: index,imei: row.imei,
  //         capacity: row.capacity,
  //         purchase_date: row.purchase_date,
  //         sale_date: row.sale_date,
  //         warranty_days: row.warranty_days,
  //         code_price: row.code_price,
  //         status: row.status,
  //         items: row.items,
  //         seller: row.seller,
  //         company: row.company,
  //         serial: row.serial,
  //       model: row.mdodel}))
  //       );
        
  //     }
  //   );

  // };


  useEffect(() => {
    fetchData();
  }, []);
     
const handleDelete=(imei)=>{
  const newdata = data.filter((item)=>item.imei !== imei)
  setData(newdata);
}

const handleEdit=(imei)=>{

  navigate('/EditMobile',{state:imei});
}

const handleSale=(imei)=>{

  navigate('/SellMobile',{state:imei});

}


  const fetchData = async () => {
    try {
      // Replace 'http://localhost:8080/api/mobiles' with the actual API endpoint to fetch mobile data.
      const res = await axios.get('api/mobiles');
      setData(
        res.data.map(row => ({imei: row.imei,
        capacity: row.capacity,
        purchase_date: row.purchase_date.substr(0,10),
        sale_date: row.sale_date.substr(0,10),
        code_price: row.code_price,
        status: [row.status],
        items: row.items,
        seller_id_details: row.seller.id_details,
        seller_mobileNumber:row.seller.mobileNumber,
        seller_name:row.seller.name,
        seller_address:row.seller.address,
        company: row.company,
        serial: row.serial,
        model: row.model})));
    } catch (error) {
      console.error('Error fetching data:', error);
    }

    const responsem = await axios.get('api/status');
    console.log(responsem.data)
    setmobileStatus(responsem.data); 


  };

  const columns = [
    {
      title: 'Purchase Date',
      dataIndex: 'purchase_date',
      key: 'purchase_date',
      filteredValue:[serachedText],
      onFilter:(value,record)=>{
        return ( String(record.sale_date)
          .toLowerCase()
        .includes(value.toLowerCase())
        || String(record.seller_name)
        .toLowerCase()
        .includes(value.toLowerCase()
         ) 
         ||String(record.imei)
         .toLowerCase()
         .includes(value.toLowerCase()
          ) 
          ||String(record.capacity)
          .toLowerCase()
          .includes(value.toLowerCase()
           )

        );
      }
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
      render: (status) => (
        <span>
          {status.map((status) => {
            let color = status ===1? "green" : 'geekblue';
            if(status ===3)
            color = "volcano"
            const status_health = ["0","Shelf", "Repair ", "Dead"]; 
            let tag = status_health[status];
            return (
              <Tag color={color} key={tag}>
                {tag.toUpperCase()}
              </Tag>
            );
          })}
        </span>
      ),
     
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
    render: (_, record) => (
      <Space size="middle">      
        <a onClick={()=>handleEdit(record.imei)}>Edit </a>     
        <a onClick={()=>handleSale(record.imei)}>Sell  </a>
        <Popconfirm title="Delete?" onConfirm={() => handleDelete(record.imei)}>
        <a>Delete </a>
        </Popconfirm>
      </Space>
    )
    },
  ];
  


  return (
    <Layout style={{ height:"100%"}}>
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className="demo-logo-vertical" />
        <Menu
        onClick={({key})=>{
          if(key === '2')
          {
            console.log(2);
            navigate('/add-new-mobile')
          }

          if(key === '1')
          {
            console.log(1);
            navigate('/Dashboard')
          }

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
        <Space direction="horizontal">
      <Card>
        <Space direction="horizontal">
        <ShoppingCartOutlined style={{
                color: "green",
                backgroundColor: "rgba(0,255,0,0.25)",
                borderRadius: 20,
                fontSize: 24,
                padding: 8,
              }}/>
          <Statistic title="Shelf"value={mobileStatus[0]}>
          </Statistic>
        </Space>
      </Card>

      <Card>
        <Space direction="horizontal">
        <ToolOutlined style={{
                color: "blue",
                backgroundColor: "rgba(0,0,255,0.25)",
                borderRadius: 20,
                fontSize: 24,
                padding: 8,
              }}/>
          <Statistic title="Repair" value={mobileStatus[1]}>
          </Statistic>
        </Space>
      </Card>


      <Card>
        <Space direction="horizontal">
        <CloseCircleOutlined style={{
                color: "red",
                backgroundColor: "rgba(255,0,0,0.25)",
                borderRadius: 20,
                fontSize: 24,
                padding: 8,
              }}/>
          <Statistic title="Dead" value={mobileStatus[2]}>
          </Statistic>
        </Space>
      </Card>
      </Space>    


        
    <>
      <Input.Search 
      placeholder='Search Here ...'
      style={{marginBottom:8}}
      onSearch={(e)=> {
        setSearchedText(e);

      }}
      onChange={(e)=>{
        setSearchedText(e.target.value);
      }}
      />
      <Table  columns={columns} dataSource={data} rowKey={"imei"}/>
    </>
        <Footer style={{ textAlign: 'center' }}>AvacadoBeans Design @2023</Footer>
      </Layout>
    </Layout>
  );
};

export default Dashboard;