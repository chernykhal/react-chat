import React from "react";
import { Form, Input } from "antd";
import { Link } from "react-router-dom";

import { Block, Button } from "../../components";

const LoginForm = () => {
  return (
    <section className={"auth"}>
      <div className="auth__content">
        <div className="auth__top">
          <h2>Войти в аккаунт</h2>
          <p>Пожалуйста, войдите в свой аккаунт</p>
        </div>
        <Block>
          <Form
            name="normal_login"
            className="login-form"
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
              name="password"
              rules={[
                {
                  required: true,
                  message: "Пожалуйста, введите корректный пароль",
                },
              ]}
            >
              <Input size={"large"} type="password" placeholder="Пароль" />
            </Form.Item>
            <Form.Item>
              <Button type={"primary"} size={"large"} htmlType={"submit"}>
                Войти в аккаунт
              </Button>{" "}
            </Form.Item>
            <Link to="/register" className={"auth__footer-link"}>
              Зарегистрироваться
            </Link>
          </Form>
        </Block>
      </div>
    </section>
  );
};

export default LoginForm;
