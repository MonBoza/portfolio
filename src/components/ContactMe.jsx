const Contact = () => {
  return(
    <div id="ContactMe" className="p-4 lg:p--20 flex flex-col items-center justify-center">
      <h1 className="text-[52px] font-semibold mb-20 leading-normal uppercase text-purple-800">Contact Me</h1>
      <form  action="" className="flex flex-col gap-2 lg:w-1/2 uppercase">   
      <div className="lg:flex gap-6">
      <input className="w-full my-3 rounded-lg bg-slate-700 text-lg p-4 border-2 border-blue-800 b_glow" type="text" placeholder="Name"  />
      <input  className="w-full my-3 rounded-lg bg-slate-700 p-4 text-lg border-2 border-blue-800 b_glow" type="email" placeholder="Email"  />
      </div>
      <textarea className="w-full my-3 rounded-lg bg-slate-700 p-4 border-2 border-blue-800 b_glow" name="" id="" cols="20" rows="10" placeholder="Message"></textarea>
      
      <button className="neno-button shadow-xl hover:shadow-purple-800/50" type="submit">Send</button>
      </form>
    </div>
  );
};

export default Contact;