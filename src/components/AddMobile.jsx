import React, { useRef, useState } from 'react';
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UploadOutlined,
  MobileOutlined,
  EditOutlined,
  AppstoreAddOutlined,
} from '@ant-design/icons';
import {  Layout, Menu, theme,Alert,message,Space  } from 'antd';
import {  Button,DatePicker,Radio,  Form,  Input,  Select,} from 'antd';
import moment from 'moment';
import { BrowserMultiFormatReader } from '@zxing/library';

const { Header, Sider, Content,Footer } = Layout;
const { Option } = Select;
const formItemLayout = {  labelCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 8,
    },
  },
  wrapperCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 16,
    },
  },
};
const tailFormItemLayout = {
  wrapperCol: {
    xs: {
      span: 24,
      offset: 0,
    },
    sm: {
      span: 16,
      offset: 8,
    },
  },
};

const checkNumber =(number) =>{
  var result = false;
  var numbers = [];
  var length, newNumber, sum, nearestMultipleOfTen, difference;

  length = newNumber = sum = nearestMultipleOfTen = difference = 0;

  while (number) {
      numbers.push(number % 10);
      number = Math.floor(number / 10);
  }

  numbers.reverse();

  length = numbers.length;

  if (length !== 15)
      return result;

  for (var i = 0; i < 15; i++) {
      if (i % 2 !== 0) {
          // eslint-disable-next-line default-case
          switch (numbers[i]) {
              case 0:
                  // 0 * 2 = 0
                  newNumber = 0;
                  break;
              case 1:
                  // 1 * 2 = 2
                  newNumber = 2;
                  break;
              case 2:
                  // 2 * 2 = 4
                  newNumber = 4;
                  break;
              case 3:
                  // 3 * 2 = 6
                  newNumber = 6;
                  break;
              case 4:
                  // 4 * 2 = 8
                  newNumber = 8;
                  break;
              case 5:
                  // 5 * 2 = 10
                  // 1 + 0 = 1
                  newNumber = 1;
                  break;
              case 6:
                  // 6 * 2 = 12
                  // 1 + 2 = 3
                  newNumber = 3;
                  break;
              case 7:
                  // 7 * 2 = 14
                  // 1 + 4 = 5
                  newNumber = 5;
                  break;
              case 8:
                  // 8 * 2 = 16
                  // 1 + 6 = 7
                  newNumber = 7;
                  break;
              case 9:
                  // 9 * 2 = 18
                  // 1 + 8 = 9
                  newNumber = 9;
                  break;
          }
          numbers.splice(i, 1, newNumber);
      }
  }

  for (let i = 0; i < 14; i++) {
      sum += numbers[i];
  }

  nearestMultipleOfTen = Math.ceil(sum / 10) * 10;
  difference = nearestMultipleOfTen - sum;

  if (difference === numbers[14])
      result = true;

  return result;
}

const AddMobile= () => {
  const dateFormat = 'DD/MM/YYYY';
  const navigate = useNavigate();

  //
  const video = useRef(null);
//  const canvas = useRef(null);
  const [barcode,setBarcode]=useState(null);
  const openCam =() => {
    // navigator.mediaDevices.getUserMedia({video:{width:600, height:600}})
    // .then(stream => {
    //   video.current.srcObject = stream;
    //   video.current.play();

    //   const ctx = canvas.current.getContext('2d');
    //   const barcodeDetector = new BrowserMultiFormatReader();
    //     setInterval(()=>{
    //     canvas.current.width = video.current.videoWidth;
    //     canvas.current.height=video.current.videoHeight;

    //     ctx.drawImage(video.current,0,0,video.current.videoWidth,video.current.videoHeight);
    //     barcodeDetector.decodeFromVideo(null,video)
    //     .then((data)=> {
    //       if(data){
    //         setBarcode(data.rawValue);
    //       }
    //     })
    //     .catch(err=> console.log(err))
    //   },100)

    //   })
    //   .catch(err=>console.log(err))

  const barcodeDetector = new BrowserMultiFormatReader();
  let firstDeviceId;

  barcodeDetector
  .listVideoInputDevices()
  .then(videoInputDevices => {
    videoInputDevices.forEach(device =>
      console.log(`${device.label}, ${device.deviceId}`)
    );

     firstDeviceId = videoInputDevices[0].deviceId;
     })
  .catch(err => console.error(err));

  
  barcodeDetector.decodeOnceFromVideoDevice(firstDeviceId, video.current)
  .then((result) => {
    
    form.setFieldsValue({ imei: result.text });
    console.log(result.text);
    barcodeDetector.reset();

  })
  .catch(err => console.error(err));
  // const ctx = canvas.current.getContext('2d');
  //   setInterval(()=>{
  //       canvas.current.width = video.current.videoWidth;
  //       canvas.current.height=video.current.videoHeight;

  //       ctx.drawImage(video.current,0,0,video.current.videoWidth,video.current.videoHeight);
  //     },100)

      
    } 


  const config = {
    rules: [
      {
        type: 'object',
        required: true,
        message: 'Please select Date!',
      },
    ],
  };
  const [collapsed, setCollapsed] = useState(true);
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  const [form] = Form.useForm();
  const onFinish = async (values) => { 
    const json_data = {...values, sale_date:values.saledate, purchase_date:values.purchasedate , seller:{id_details:values.seller_id,mobileNumber:values.phone,name:values.seller_name,address:values.seller_address}}
    console.log('Received values of form: ', json_data);

    const resultx = await axios.post('/api/create', json_data);
    if(resultx.status===200)
    navigate('/Dashboard');
    else 
    message.error('Unable to Add Data. Please Try Again');
  };

  const prefixSelector = (
    <Form.Item name="prefix" noStyle>
      <Select
        style={{
          width: 70,
        }}
      >
        <Option value="1">+1</Option>
        <Option value="91">+91</Option>
      </Select>
    </Form.Item>
  );
 


  return (

 

    <Layout>
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
        <Content
          style={{
            margin: '24px 16px',
            padding: 24,
            minHeight: 280,
            background: colorBgContainer,
          }}
        >
     
    <Form
      {...formItemLayout}
      form={form}
      name="Add Data"
      onFinish={onFinish}
    
      initialValues={{
        prefix: '91',
        capacity:'64gb',
        status:'1',
        saledate:moment(),
       
      }}
      style={{
        maxWidth: 850,
      }}
      
      scrollToFirstError
    >
      <Form.Item
        name="imei"
        label="IMEI"
        
        hasFeedback
        rules={[
          {
            required: true, 
            message: 'Please input 15 digit imei or Serial.',
          },
          
          {
            validator(rule,value){
              return new Promise((resolve,reject)=>{
                if(value.length ===15)
                {
                if(checkNumber(value))
                resolve()
                else
                reject("The input is not valid IMEI!")
                }
                else
                resolve()
                

              })
              
            }
            
          }
          
        ]}
      >
        <Input value={barcode}
        onChange={(e)=>{
          setBarcode(e.target.value)}
      }
        />

        </Form.Item>


        <Form.Item {...tailFormItemLayout}>
         <Button name="cam_button" onClick={openCam} type="primary">
          Scan IMEI
        </Button>
        <div>
          <video ref={video} muted />
          {/* <canvas ref = {canvas}/> */}
        </div>
      </Form.Item>

      <Form.Item
        name="serial"
        label="Serial Number"
        hasFeedback
        rules={[
          {
            required: false,
            message: 'Please Enter Serial',
          },
          
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        name="company"
        label="Company"
        hasFeedback
        rules={[
          {
            required: false,
            message: 'Please confirm !',
          },
          
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        name="model"
        label="Model"
        rules={[
          {
            required: false,
            message: 'Please input your Model!',
          },
        ]}
        hasFeedback
      >
        <Input />
      </Form.Item>
    
      <Form.Item name="purchasedate" label="Purchase Date" {...config}
      rules={[
        {
          required: false,
        },
      ]}>
      <DatePicker />
      </Form.Item>

      <Form.Item name="saledate" label="Sale Date" {...config}  rules={[
        {
          required: false,
        },
      ]}>
      <DatePicker  format={dateFormat} />
      </Form.Item>

      <Form.Item
        name="seller_name"
        label="Seller Name"
        tooltip="Whom did you purchases the device?"
        rules={[
          {
            required: false,
            message: 'Please input your Seller Name!',
            whitespace: true,
          },
        ]}
     
        hasFeedback>
        <Input />
      </Form.Item>

      <Form.Item
        name="seller_address"
        label="Seller Address"
        rules={[
          {
            required: false,
            message: 'Please input your Seller Address!',
            whitespace: true,
          },
        ]}
        hasFeedback>
        <Input />
      </Form.Item>    
      <Form.Item
        name="seller_id"
        label="Seller ID"
        rules={[
          {
            required: false,
            message: 'Please input your Seller ID!',
            whitespace: true,
          },
        ]}
        hasFeedback>
        <Input />
      </Form.Item> 

      <Form.Item
        name="phone"
        label="Phone Number"
        rules={[
          {
            required: false,
            message: 'Please input  phone number!',
          },
        ]}
        hasFeedback>
        <Input
          addonBefore={prefixSelector}
          style={{
            width: '100%',
          }}
        />
      </Form.Item>

      <Form.Item label="Capacity" name="capacity">
        <Radio.Group>
          <Radio.Button value="16gb">16 GB</Radio.Button>
          <Radio.Button value="32gb">32 GB</Radio.Button>
          <Radio.Button value="64gb">64 GB</Radio.Button>
          <Radio.Button value="128gb">128 GB</Radio.Button>
          <Radio.Button value="256gb">256 GB</Radio.Button>
          <Radio.Button value="512gb">512 GB</Radio.Button>
          <Radio.Button value="1tb">1 TB</Radio.Button>
          <Radio.Button value="2tb">2 TB</Radio.Button>

        </Radio.Group>
      </Form.Item>

      <Form.Item label="Status" name="status">
        <Radio.Group>
          <Radio.Button value="1">Shelf</Radio.Button>
          <Radio.Button value="2">Repair</Radio.Button>
          <Radio.Button value="3">Dead</Radio.Button>
          </Radio.Group>
      </Form.Item>

      <Form.Item
        name="items"
        label="Items Recieved"
        rules={[
          {
            required: false,
            message: 'Please Items Recieved',
          },
        ]}
        hasFeedback  >
        <Input.TextArea showCount maxLength={100} />
      </Form.Item>
   
      <Form.Item {...tailFormItemLayout}>
        <Button block type="primary" htmlType="submit" >
          Add
        </Button>
      </Form.Item>
    </Form>
  
     
    
        </Content>
        <Footer style={{ textAlign: 'center' }}>AvacadoBeans Design @2023</Footer>
      </Layout>
    </Layout>
  );
};

export default AddMobile;