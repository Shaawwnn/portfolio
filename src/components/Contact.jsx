import React, { useRef } from "react";
import emailjs from "emailjs-com";
import styled from "styled-components";
import { Zoom } from "react-awesome-reveal";

const Contact = () => {
  const form = useRef();

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
        <Zoom triggerOnce>
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
        </Zoom>
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
    color: white;
    margin-bottom: 30px;
    span {
      color: #c6de41;
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
    background-color: transparent;

    border-radius: 20px;
    box-shadow: 4px 4px 16px rgba(0, 0, 0, 0.5),
      -4px -4px 16px rgba(255, 255, 255, 0.05);
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
    background-color: #0a1a1f;
    color: white;
    font-size: 16px;
    font-family: "Courier Prime", "monospace";
    border-radius: 10px;
    border: none;
    padding: 20px;
    box-shadow: inset 6px 6px 6px #08181d, inset -6px -6px 6px #0a242b;
  }

  .formBtn {
    display: flex;
    justify-content: flex-end;
    margin-top: 18px;

    input {
      font-family: "Courier Prime", monospace;
      border: 1px solid #153b44;
      border-radius: 2px;
      padding: 15px 40px;
      cursor: pointer;
      background-color: #c6de41;
      color: #153b44;
      text-decoration: none;
      transition: all 500ms ease;
      font-weight: 700;
      border-radius: 10px;

      &:hover {
        background-color: transparent;
        color: #c6de41;
      }
    }
  }

  @media screen and (max-width: 800px) {
    padding: 20px 10px;
  }
`;
