import { useForm, ValidationError } from '@formspree/react';
import React from "react";
  
const Contact = () => {
  const [state, handleSubmit] = useForm("mayrjvgk");
  if (state.succeeded) {
    if (state.succeeded) {
      return <p data-aos="flip-left" className="text-[40px] text-base text-yellow-500 font-semibold mb-20 leading-normal uppercase justify-center text-center">Thanks for reaching out!</p>;
  }
  }
  return(
    <div id="ContactMe" className="p-4  lg:p--20 flex flex-col items-center justify-center">
      <h1 className="text-[52px] font-semibold mb-20 leading-normal uppercase text-purple-800">Contact Me</h1>
      <form  action="" className="flex flex-col gap-2 lg:w-1/2 uppercase" onSubmit={handleSubmit}>   
      <div className="lg:flex gap-9">
      <input data-aos="fade-right" className="w-full my-3 rounded-lg bg-slate-700 text-lg p-4 border-2 border-blue-800 b_glow" id="name" name="name"type="text" placeholder="Name"  /> <ValidationError 
        prefix="name" 
        field="name"
        errors={state.errors}
      />
      <input  data-aos="fade-left" className="w-full my-3 rounded-lg bg-slate-700 p-4 text-lg border-2 border-blue-800 b_glow" type="email" name="email" id="email" placeholder="Email"/> <ValidationError 
        prefix="email" 
        field="email"
        errors={state.errors}
      />
      </div>
      <textarea data-aos="fade-up" className="w-full my-3 rounded-lg bg-slate-700 p-4 border-2 border-blue-800 b_glow" name="Message" id="Message" cols="20" rows="10" placeholder="Message"></textarea> <ValidationError 
        prefix="Message" 
        field="message"
        errors={state.errors}
      />
   
      <button className="neno-button shadow-xl hover:shadow-purple-800/50 text-white border-2 bg-blue-800 hover:bg-slate-900 rounded-lg py-4 px-8 uppercase relative overflow-hidden b_glow text-xl text-bold mb-10" type="submit" >Submit</button>
      </form>
    </div>
  );
};

export default Contact;