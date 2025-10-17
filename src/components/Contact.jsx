import React, { useRef, useState } from "react";
import emailjs from "emailjs-com";
import styled from "styled-components";
import { Slide, Zoom } from "react-awesome-reveal";
import TaskAltIcon from "@mui/icons-material/TaskAlt";

const Contact = () => {
  const form = useRef();
  const [sent, setSent] = useState(false);

  const sendEmail = e => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_kwqxkor",
        "template_lv8ggha",
        form.current,
        "4vn5ouhLJAjnZ8luB"
      )
      .then(
        result => {
          console.log(result.text);
          setSent(true);
          setTimeout(() => {
            setSent(false);
          }, 5000);
        },
        error => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };

  return (
    <ContactContainer id="contact">
      <Zoom triggerOnce>
        <h1 className="projectHeader">
          <span>&lt;</span> Contact <span>&#x2f;&gt;</span>
        </h1>
      </Zoom>

      <div className="msgForm">
        <form ref={form} onSubmit={sendEmail}>
          <div className="user">
            <input
              type="text"
              name="name"
              placeholder="Name"
              className="inputForm"
            />

            <input
              type="email"
              name="email"
              placeholder="Email"
              className="inputForm"
            />
          </div>
          <div className="msg">
            <textarea
              name="message"
              placeholder="Message"
              className="inputForm"
            />
          </div>
          <div className="formBtn">
            <input type="submit" value="Send" />
          </div>
        </form>
        {sent && (
          <div className="notif">
            <Slide>
              <TaskAltIcon />
              <span> Sent</span>
            </Slide>
          </div>
        )}
      </div>
    </ContactContainer>
  );
};

export default Contact;

const ContactContainer = styled.div`
  max-width: 1100px;
  margin: auto;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  gap: 50px;

  h1 {
    text-align: center;

    font-size: 50px;
    color: #FFFFFF;
    margin-bottom: 30px;
    span {
      color: #00D9FF;
      text-shadow: 0 0 20px rgba(0, 217, 255, 0.5);
    }

    @media screen and (max-width: 800px) {
      font-size: 35px;
    }
  }

  .msgForm {
    width: 96%;
    max-width: 700px;
    background-color: #fff;
    padding: 20px 25px;
    background: rgba(30, 39, 73, 0.5);
    backdrop-filter: blur(10px);
    position: relative;
    border-radius: 20px;
    border: 1px solid rgba(0, 217, 255, 0.2);
    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.4);

    .notif {
      position: absolute;
      bottom: 35px;
      display: flex;
      gap: 5px;
      color: #10B981;
    }
  }
  .user {
    display: flex;
    margin-bottom: 20px;
    gap: 20px;
    input {
      flex: 1;
      padding: 15px;
    }

    @media screen and (max-width: 800px) {
      flex-direction: column;
    }
  }

  .msg {
    textarea {
      width: 100%;
      resize: none;
      padding: 15px;
      height: 200px;
    }
  }

  .inputForm {
    outline: none;
    line-height: 25px;
    background-color: rgba(10, 14, 39, 0.6);
    color: #E4E9F2;
    font-size: 16px;
    font-family: "Courier Prime", "monospace";
    border-radius: 10px;
    border: 1px solid rgba(0, 217, 255, 0.2);
    padding: 20px;
    transition: all 300ms ease;

    &:focus {
      border-color: #00D9FF;
      box-shadow: 0 0 15px rgba(0, 217, 255, 0.3);
    }
  }

  .formBtn {
    display: flex;
    justify-content: flex-end;
    margin-top: 18px;

    input {
      font-family: "Courier Prime", monospace;
      border: 2px solid #00D9FF;
      border-radius: 10px;
      padding: 15px 40px;
      cursor: pointer;
      background: linear-gradient(135deg, #00D9FF 0%, #00A8CC 100%);
      color: #0A0E27;
      text-decoration: none;
      transition: all 300ms ease;
      font-weight: 700;
      box-shadow: 0 0 20px rgba(0, 217, 255, 0.3);

      &:hover {
        background: transparent;
        color: #00D9FF;
        box-shadow: 0 0 30px rgba(0, 217, 255, 0.5);
        transform: translateY(-2px);
      }
    }
  }

  @media screen and (max-width: 800px) {
    padding: 20px 10px;
  }
`;
