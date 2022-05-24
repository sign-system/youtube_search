import { Button, Form, Input } from "antd";
import "antd/dist/antd.css";
import ReactGoogleAuth from "../ReactGoogleAuth/ReactGoogleAuth";
import s from "./AuthPage.module.css";

const AuthPage = () => {
  const onFinish = (values) => {
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <div className={s.main_form_wrapper}>
      <div className={s.form_wrapper}>
        <Form
          className={s.form}
          layout="vertical"
          size="small"
          name="basic"
          labelCol={{
            span: 0,
          }}
          wrapperCol={{
            span: 0,
          }}
          initialValues={{
            remember: true,
          }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <p className={s.form_title}>Вход</p>
          <p>Для теста - login: Admin, password: Admin</p>
          <Form.Item
            label="Username"
            name="username"
            rules={[
              {
                required: true,
                message: "Please input your username!",
              },
            ]}
          >
            <Input className={s.form_item} />
          </Form.Item>

          <Form.Item
            label="Password"
            name="password"
            rules={[
              {
                required: true,
                message: "Please input your password!",
              },
            ]}
          >
            <Input.Password className={s.form_item} />
          </Form.Item>

          {/* <Form.Item
            name="remember"
            valuePropName="checked"
            wrapperCol={{
              offset: 8,
              span: 16,
            }}
          >
            <Checkbox>Remember me</Checkbox>
          </Form.Item> */}

          <Form.Item
            wrapperCol={{
              offset: 0,
              span: 0,
            }}
          >
            <Button
              type="primary"
              htmlType="submit"
              size="middle"
              className={s.form_button}
            >
              Войти
            </Button>
          </Form.Item>
          <ReactGoogleAuth />
        </Form>
      </div>
    </div>
  );
};

export default AuthPage;
