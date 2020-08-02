// import React from "react"
import Layout from "../components/layout"
import Menu from "../components/Menu"
import Footer from "../components/Footer"
import MenuBottom from "../components/MenuBottom"
import SEO from "../components/seo"
import { Form, Button, Container, Card } from "react-bootstrap"
import emailjs from "emailjs-com"

import React, { Component } from "react"

import style from "../styles/Mail.module.css"
const formControlClasses = ["formControl", style.formControl].join(" ")

export default class MailForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      carModel: "",
      name: "",
      phoneNumber: "",
      address: "",
      errorVisible: false,
      activeForm: true,
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.sendEmail = this.sendEmail.bind(this)
    this.checkPhoneNumer = this.checkPhoneNumer.bind(this)
  }

  handleChange(event) {
    const valueEvent = event.target.value
    const nameEvent = event.target.name
    // this.setState({value: event.target.value});
    // alert('Your favorite flavor is: ' + valueEvent+nameEvent);
    switch (nameEvent) {
      case "carModel":
        this.setState({ carModel: valueEvent })
        break
      case "name":
        this.setState({ name: valueEvent })
        break
      case "phone":
        this.setState({ phoneNumber: valueEvent })
        break
      case "address":
        this.setState({ address: valueEvent })
        break
    }
    event.preventDefault()
  }

  checkPhoneNumer(phoneNumber) {
    console.log("phoneNumer ", phoneNumber)
    if (isNaN(phoneNumber) || phoneNumber.length > 11) return false
    return true
  }
  handleSubmit(event) {
    // const isValid = this.checkPhoneNumer(this.state.phoneNumber);
    const phoneNumer = this.state.phoneNumber
    console.log("this.state.phoneNumber ", phoneNumer)
    const isValid = this.checkPhoneNumer(phoneNumer)
    // this.checkPhoneNumer(phoneNumer);
    console.log("isValid ", isValid)

    if (isValid) {
      this.sendEmail(event, this.state)
      // this.setState({ errorVisible: false });
      this.setState({ activeForm: false })
    } else {
      this.setState({ errorVisible: true })
    }
    event.preventDefault()
  }

  sendEmail(event, data) {
    // var templateParams = {
    //     name: 'James',
    //     notes: 'Check this out!'
    // };
    console.log("data ", data)
    event.preventDefault() //This is important, i'm not sure why, but the email won't send without it
    // emailjs.init("user_8rbLwMZRm6NZGTHWHd4FX");
    console.log("user id", "user_8rbLwMZRm6NZGTHWHd4FX")
    emailjs
      .send("gmail", "fordvinhcontact", data, "user_8rbLwMZRm6NZGTHWHd4FX")
      .then(
        function (response) {
          console.log("SUCCESS!", response.status, response.text)
        },
        function (error) {
          console.log("FAILED...", error)
        }
      )
  }
  
  render() {
    if (this.state.activeForm) {
      return (
        <div>
          <SEO title="Báo giá xe Ford Vinh"/>
          <Menu enableBackgroundImage={false} />
          <div className={["container", style.container].join(" ")}>
            <form onSubmit={this.handleSubmit} className={style.form}>
              <h3 className={style.title}>Nhận báo giá với Ford Vinh</h3>
              <div className={formControlClasses}>
                <label className={style.label}>Chọn mẫu xe</label>
                <select
                  name="carModel"
                  value={this.state.carModel}
                  onChange={this.handleChange}
                  className={style.input}
                  defaultValue="Ford Ecosport"
                  required
                >
                  <option value="" selected hidden>Mẫu xe...</option>
                  <option value="Ford Ecosport">Ford Ecosport</option>
                  <option value="Ford Ranger">Ford Ranger</option>
                  <option value="Ford Everest">Ford Everest</option>
                  <option value="Ford Transit">Ford Transit</option>
                </select>
                {/* <small>Error message</small> */}
              </div>
              <div className={formControlClasses}>
                <label className={style.label}>Tên:</label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  value={this.state.name}
                  onChange={this.handleChange}
                  placeholder="Họ tên"
                  className={style.input}
                  required
                />
                {/* <small className={style.error}>Error message</small> */}
              </div>
              <div className={formControlClasses}>
                <label className={style.label}>Điện thoại:</label>
                <input
                  name="phone"
                  type="text"
                  value={this.state.phoneNumber}
                  onChange={this.handleChange}
                  placeholder="Điện thoại"
                  className={style.input}
                  required
                />
                {/* <small>Error message</small> */}
              </div>
              <div className={formControlClasses}>
                <label className={style.label}>Địa chỉ:</label>
                <input
                  name="address"
                  type="text"
                  value={this.state.address}
                  onChange={this.handleChange}
                  placeholder="Địa chỉ"
                  className={style.input}
                  required
                />
              </div>
              <button
                type="submit"
                className="btn btn-primary"
                style={{ width: "100%", marginTop: '10px' }}
              >
                Đăng ký{" "}
              </button>
              {/* <button type="submit" class="btn btn-primary">Đăng ký</button> */}
              <small
                className={style.error}
                style={{
                  visibility: this.state.errorVisible ? "visible" : "hidden",
                }}
              >
                Xin vui lòng nhập đúng số  điện thoại
              </small>
            </form>
          </div>
          <MenuBottom />
        </div>
      )
    } else {
      return (
        <div>
        <SEO title="Báo giá xe Ford Vinh"/>
    <Menu enableBackgroundImage={false}/>
    <div className={["container"].join(" ")}>
        <Card>
          <Card.Body>
            <Card.Title>Thông báo</Card.Title>
            <Card.Text>
              Chúng tôi đã tiếp nhận yêu cầu báo giá. Xin vui lòng đợi trong
              giây lát.
            </Card.Text>
            <Button variant="primary" href="/">
              Trang chủ
            </Button>
          </Card.Body>
        </Card>
        </div>
        <MenuBottom />
        </div>
      )
    }
  }
}
