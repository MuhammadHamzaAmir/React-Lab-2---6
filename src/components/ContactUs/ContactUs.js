import React, { Component } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";
import { useForm } from "react-hook-form";

const ContactForm = () => {
  const { register,formState: { errors }, handleSubmit, reset } = useForm();

 

  const onSubmit = async (data) => {
    alert("Form Submitted");
    
  };

  return (
    <div className="ContactForm">
      <div className="container">
        <div className="row">
          <div className="col-12 text-center">
            <div className="contactForm">
              <form
                id="contact-form"
                onSubmit={handleSubmit(onSubmit)}
                noValidate
              >
                {/* Row 1 of form */}
                <div className="row formRow">
                  <div className="col-6">
                    <input
                      type="text"
                      name="name"
                      {...register("name", {
                        required: true,
                        minLength: {
                          value: 1,
                        },
                      })}
                      className="form-control formInput"
                      placeholder="Name"
                    ></input>
                    {errors.name && <p style={{color:"white"}}> Name required</p>}
                  </div>
                  <div className="col-6">
                    <input
                      type="text"
                      name="phonenumber"
                      {...register("phonenumber", {
                        required: true,
                        minLength: {
                          value: 1,
                        },
                      })}
                      className="form-control formInput"
                      placeholder="Phone Number"
                    ></input>
                    {errors.phonenumber && <p style={{color:"white"}}> Phone Number required</p>}
                  </div>
                  <div className="col-6">
                    <input
                      type="email"
                      name="email"
                      {...register("email", {
                        required: true,
                        minLength: {
                          value: 1,
                        },
                      })}
                      className="form-control formInput"
                      placeholder="Email address"
                    ></input>
                    {errors.email && <p style={{color:"white"}}> Email required</p>}
                  </div>
                </div>
                {/* Row 2 of form */}
                <div className="row formRow">
                  <div className="col">
                    <input
                      type="text"
                      name="subject"
                      {...register("subject", {
                        required: true,
                        minLength: {
                          value: 1,
                        },
                      })}
                      className="form-control formInput"
                      placeholder="Subject"
                    ></input>
                    {errors.subject && <p style={{color:"white"}}> Subject required</p>}
                  </div>
                </div>
                {/* Row 3 of form */}
                <div className="row formRow">
                  <div className="col">
                    <textarea
                      rows={3}
                      name="message"
                      {...register("message", {
                        required: true,
                        minLength: {
                          value: 1,
                        },
                      })}
                      className="form-control formInput"
                      placeholder="Message"
                    ></textarea>
                    {errors.message && <p style={{color:"white"}}> Message required</p>}
                  </div>
                </div>
                <button className="submit-btn" type="submit">
                  Submit
                </button>
              </form>
            </div>
            <ToastContainer />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;