// import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Form, Button, Container } from "react-bootstrap"
import emailjs from "emailjs-com"

import React, { Component } from "react"

export default class MailForm extends Component {
  constructor(props) {
    super(props)
    this.state = {carModel: '', name:'', phoneNumber:'', address:''};
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.sendEmail = this.sendEmail.bind(this);
  }


  handleChange(event) {
    const valueEvent = event.target.value;
    const nameEvent = event.target.name;
    // this.setState({value: event.target.value});
    // alert('Your favorite flavor is: ' + valueEvent+nameEvent);
    switch(nameEvent){
        case "carModel": this.setState({carModel: valueEvent});break;
        case "name": this.setState({name: valueEvent});break;
        case "phone": this.setState({phoneNumber: valueEvent});break;
        case "address": this.setState({address: valueEvent});break;
    }
    event.preventDefault();
  }

  handleSubmit(event) {
    // console.log(...this.state)
    this.sendEmail(event,this.state)
    event.preventDefault();
  }

  sendEmail(event, data) {
    // var templateParams = {
    //     name: 'James',
    //     notes: 'Check this out!'
    // };
    console.log('data ',data)
    event.preventDefault() //This is important, i'm not sure why, but the email won't send without it
    // emailjs.init("user_8rbLwMZRm6NZGTHWHd4FX");
    console.log("user id", "user_8rbLwMZRm6NZGTHWHd4FX")
    emailjs
      .send(
        "gmail",
        "fordvinhcontact",
        data,
        "user_8rbLwMZRm6NZGTHWHd4FX"
      )
      .then(function(response) {
        console.log('SUCCESS!', response.status, response.text);
     }, function(error) {
        console.log('FAILED...', error);
     });
  }

  //   return (
  //     <form className="contact-form" onSubmit={sendEmail}>
  //       <input type="hidden" name="contact_number" />
  //       <label>Name</label>
  //       <input type="text" name="from_name" />
  //       <label>Email</label>
  //       <input type="email" name="from_email" />
  //       <label>Subject</label>
  //       <input type="text" name="subject" />
  //       <label>Message</label>
  //       <textarea name="html_message" />
  //       <input type="submit" value="Send" />
  //     </form>
  //   );
  render() {
    return (
    //   <Layout>
    //     <Container>
    //       <Form onSubmit={this.handleSubmit}>
    //         <Form.Group controlId="exampleForm.ControlSelect1">
    //           <Form.Label>Chọn mẫu xe</Form.Label>
    //           <Form.Control as="select" onChange={this.handleChange}>
    //             <option>Ford 1</option>
    //             <option>Ford 2</option>
    //             <option>Ford 3</option>
    //             <option>Ford 4</option>
    //             <option>Ford 5</option>
    //           </Form.Control>
    //         </Form.Group>
    //         <Form.Control placeholder="Họ tên " />
    //         <Form.Control placeholder="Điện thoại " />
    //         <Form.Control placeholder="Địa chỉ " />
    //         <Button variant="primary" type="submit">
    //           Gửi yêu cầu ngay
    //         </Button>
    //       </Form>
    //     </Container>
    //   </Layout>
    <form onSubmit={this.handleSubmit}>
        <label>
          Chọn mẫu xe
          <select name='carModel' value={this.state.carModel} onChange={this.handleChange}>
            <option value="Ford Ecosport">Ford Ecosport</option>
            <option value="Ford Ranger">Ford Ranger</option>
            <option value="Ford Everest">Ford Everest</option>
            <option value="Ford Transit">Ford Transit</option>
          </select>
        </label>
        <label>
          Tên:
          <input name='name' type="text" value={this.state.name} onChange={this.handleChange} />
        </label>
        <label>
          Điện thoại:
          <input name='phone' type="text" value={this.state.phoneNumber} onChange={this.handleChange} />
        </label>
        <label>
          Địa chỉ:
          <input name='address' type="text" value={this.state.address} onChange={this.handleChange} />
        </label>
        <input type="submit" value="Gửi" />
      </form>
    )
  }
}
