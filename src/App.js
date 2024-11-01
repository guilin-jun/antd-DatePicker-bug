
import { useEffect,useState } from 'react';
import { Drawer,DatePicker, Space,Form } from 'antd';
import moment from 'moment';
import locale from 'antd/es/date-picker/locale/zh_CN'; 
import './App.css';

function App() {
  const [form] = Form.useForm();
  const [open, setOpen] = useState(true);
  const time = "2024-10-30"
  const onClose = () => {
		setOpen(true);
	};
  const onChange = (e) => {
		console.log(e)
	};
  const onFinish = (e) => {
		console.log(e)
	};

  useEffect(()=>{
    form.setFieldsValue({
      createTime: moment(time).isValid() ? moment(time) : null
    })
  },[])
  return (
    <div className="App">
      <Drawer
				width={640}
				placement='right'
				closable={false}
				onClose={onClose}
				open={open}>
				<Form
						name='basic'
						labelCol={{
							span: 6,
						}}
						wrapperCol={{
							span: 16,
						}}
						style={{
							maxWidth: 600,
						}}
						form={form}
						onFinish={onFinish}
						autoComplete='off'>
						<Form.Item hasFeedback name='createTime' label='日期'>
							<DatePicker  format='YYYY-MM-DD HH:mm:ss' locale={locale} />
						</Form.Item>
					</Form>
			</Drawer>
    </div>
  );
}

export default App;
