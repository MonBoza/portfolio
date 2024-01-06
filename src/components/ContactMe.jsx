const Contact = () => {
  return(
    <div id="ContactMe" className="p-4  lg:p--20 flex flex-col items-center justify-center">
      <h1 className="text-[52px] font-semibold mb-20 leading-normal uppercase text-purple-800">Contact Me</h1>
      <form  action="" className="flex flex-col gap-2 lg:w-1/2 uppercase">   
      <div className="lg:flex gap-9">
      <input data-aos="fade-right" className="w-full my-3 rounded-lg bg-slate-700 text-lg p-4 border-2 border-blue-800 b_glow" type="text" placeholder="Name"  />
      <input  data-aos="fade-left" className="w-full my-3 rounded-lg bg-slate-700 p-4 text-lg border-2 border-blue-800 b_glow" type="email" placeholder="Email"  />
      </div>
      <textarea data-aos="fade-up" className="w-full my-3 rounded-lg bg-slate-700 p-4 border-2 border-blue-800 b_glow" name="" id="" cols="20" rows="10" placeholder="Message"></textarea>
   
      <button className="neno-button shadow-xl hover:shadow-purple-800/50 text-white border-2 bg-blue-800 hover:bg-slate-900 rounded-lg py-4 px-8 uppercase relative overflow-hidden b_glow text-xl text-bold mb-10" type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Contact;