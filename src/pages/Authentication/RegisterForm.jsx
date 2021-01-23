import React from "react";
import { Form, Input } from "antd";
import { InfoCircleTwoTone } from "@ant-design/icons";

import { Block, Button } from "../../components";

import "./Authentication.scss";
import { Link } from "react-router-dom";

const RegisterForm = () => {
  const [isRegistered, setRegistered] = React.useState(true);
  return (
    <React.Fragment>
      <div className="auth__top">
        <h2>Регистрация</h2>
        <p>Для входа в чат, вам нужно зарегистрироваться</p>
      </div>
      <Block>
        {!isRegistered ? (
          <Form
            name="normal_register"
            className="register-form"
            initialValues={{ remember: true }}
          >
            <Form.Item
              hasFeedback
              name="email"
              rules={[
                {
                  required: true,
                  message: "Пожалуйста, введите корректный E-mail",
                },
                {
                  type: "email",
                  message: "Пожалуйста, введите корректный E-mail",
                },
              ]}
            >
              <Input size={"large"} placeholder="E-mail" />
            </Form.Item>
            <Form.Item
              hasFeedback
              name="name"
              rules={[
                {
                  required: true,
                  message: "Пожалуйста, введите как вас зовут",
                },
              ]}
            >
              <Input size={"large"} placeholder="Ваше имя" />
            </Form.Item>
            <Form.Item
              hasFeedback
              name="password"
              rules={[
                {
                  required: true,
                  message: "Пожалуйста, введите корректный пароль",
                },
                {
                  pattern: new RegExp(
                    "^(((?=.*[a-z])(?=.*[A-Z]))((?=.*[a-z])(?=.*[0-9]))((?=.*[A-Z])(?=.*[0-9])))(?=.{6,})"
                  ),
                  message:
                    "Пароль должен состоять из шести или более символов латинского алфавита, содержать заглавные и строчные буквы, цифры",
                },
              ]}
            >
              <Input size={"large"} type="password" placeholder="Пароль" />
            </Form.Item>
            <Form.Item
              name="confirm"
              dependencies={["password"]}
              hasFeedback
              rules={[
                {
                  required: true,
                  message: "Пожалуйста, подтвердите пароль",
                },
                ({ getFieldValue }) => ({
                  validator(_, value) {
                    if (!value || getFieldValue("password") === value) {
                      return Promise.resolve();
                    }
                    return Promise.reject("Пароли не совпадают");
                  },
                }),
              ]}
            >
              <Input.Password
                size={"large"}
                type="password"
                placeholder="Повторите пароль"
              />
            </Form.Item>
            <Form.Item>
              <Button type={"primary"} size={"large"} htmlType={"submit"}>
                Зарегистрироваться
              </Button>{" "}
            </Form.Item>
            <Link to="/login" className={"auth__footer-link"}>
              Войти в аккаунт
            </Link>
          </Form>
        ) : (
          <div className={"auth__confirmation"}>
            <div>
              <InfoCircleTwoTone style={{ fontSize: "50px" }} />
            </div>
            <h3>Подтвердите свой аккаунт</h3>
            <p>
              На Вашу почту отправлено письмо с ссылкой на подтверждение
              аккаунта.
            </p>
          </div>
        )}
      </Block>
    </React.Fragment>
  );
};

export default RegisterForm;
