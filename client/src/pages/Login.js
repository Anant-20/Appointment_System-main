import { Button, Form, Input } from "antd";
import "../login.css"
import React from "react";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { hideLoading, showLoading } from "../redux/alertsSlice";

function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const onFinish = async (values) => {
    try {
      dispatch(showLoading());
      const response = await axios.post("/api/user/login", values);
      dispatch(hideLoading());
      if (response.data.success) {
        toast.success(response.data.message);
        localStorage.setItem("token", response.data.data);
        navigate("/home");
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      dispatch(hideLoading());
      toast.error("Something went wrong");
    }
  };

  return (
    <div className="login">
      <div className="login_text">
        <div className="authentication">
          <div className="authentication-form card p-3">
            <div style={{ textAlign: "right", marginBottom: "10px" }}>
              <Link to="/" style={{ color: "black", textDecoration: "underline"}}>Home Page</Link>
            </div>
            <Form layout="vertical" onFinish={onFinish}>
              <Form.Item label="Email" name="email">
                <Input placeholder="Email" />
              </Form.Item>
              <Form.Item label="Password" name="password">
                <Input placeholder="Password" type="password" />
              </Form.Item>


              <Button className="primary-button my-2 full-width-button" htmlType="submit">
                LOGIN
              </Button>

              <Link to="/register" className="anchor mt-2">
                CLICK HERE TO REGISTER
              </Link>

            </Form>
          </div>
        </div>
      </div>
      <div className="login_image">
        <img src="images/Doctors/login_page_image.png" alt="image_not_found" />
      </div>
    </div>
  );
}

export default Login;
