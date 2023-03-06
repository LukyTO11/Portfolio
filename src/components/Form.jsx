import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import emailjs from '@emailjs/browser';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark, faPaperPlane } from '@fortawesome/free-solid-svg-icons'

const Form = ({ handleShowmodal }) => {
  const schema = yup
    .object({
      name: yup
        .string()
        .max(50)
        .required('Please enter your name'),
      email: yup
        .string()
        .email('Please enter a valid email')
        .max(255)
        .required('Please enter an email address'),
      message: yup
        .string()
        .required('Please fill a message'),
    })
    .required();

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data, r) => {
    alert('Thanks for your message !');
    const templateId = 'template_x2zw4lj';
    const serviceId = 'service_86w02ch';
    sendFeedback(serviceId, templateId, {
      name: data.name,
      email: data.email,
      message: data.message,
      reply_to: r.target.reset(),
    });
    handleShowmodal()
  };

  const sendFeedback = (serviceId, templateId, variables) => {
    emailjs
      .send(serviceId, templateId, variables, 'bUBolQKJcwqqhX-mk')
      .then((res) => {
        console.log('succes');
      })
      .catch((err) => console.error('There is a mistake!'));
  };

  return (
    <div>

      <form className="contact-form" onSubmit={handleSubmit(onSubmit)}>
        <div className="modal">
          <div className="modal-content">
            <h2>Contact me</h2>
            <form onSubmit={handleSubmit(onSubmit)} className="content">
              <label htmlfor="name">
                <input
                  className="label-name"
                  placeholder="name"
                  id="name"
                  type="name"
                  name="name"
                  {...register('name')}
                />
              </label>
              <label htmlfor="email">
                <input
                  className="label-email"
                  placeholder="example@gmail.com"
                  id="email"
                  type="email"
                  name="user_email"
                  {...register('email')}
                />
              </label>
              <label hmtlfor="message">
                <textarea
                  className="label-message"
                  placeholder="message"
                  id="message"
                  type="message"
                  name="message"
                  {...register('message')}
                >
                </textarea>
              </label>
            </form>
            <button className="btn-send" type="Submit" value="Send" onSubmit={handleSubmit(onSubmit)}>
              <FontAwesomeIcon icon={faPaperPlane} className="fa-paper" />
            </button>
            <div className="close-icon" onClick={() => handleShowmodal()}>
              <FontAwesomeIcon icon={faXmark} className="fa-xmark" />
            </div>
          </div>
        </div>
      </form >
    </div >
  );
};

export default Form;
