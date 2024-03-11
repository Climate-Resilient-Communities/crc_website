"use client"

import {useState} from "react";

export default function Contact() {
    const [result, setResult] = useState("");
  
    const onSubmit = async (event:any) => {
      event.preventDefault();
      setResult("Sending....");
      const formData = new FormData(event.target);
  
      formData.append("access_key", "YOUR_ACCESS_KEY_HERE");
  
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });
  
      const data = await response.json();
  
      if (data.success) {
        setResult("Form Submitted Successfully");
        event.target.reset();
        window.location.href = "https://web3forms.com/success";
      } else {
        console.log("Error", data);
        setResult(data.message);
      }
    };
  
    return (
      <div className="p-2">
        <form onSubmit={onSubmit} className="flex flex-col w-full">
        <div className='grid grid-cols-1 lg:grid-cols-[100px_1fr] gap-4 w-full'>

          <label className='flex items-center uppercase text-sm'>Name</label>
          <input className="border-2 rounded-lg p-3 flex border-gray-300 text-black" type="text" name="name" placeholder='Name' required/>

          <label className='flex items-center uppercase text-sm'>Email</label>
          <input className="border-2 rounded-lg p-3 flex border-gray-300 text-black" type="email" name="email" placeholder='Email' required/>

           <label className='flex items-center uppercase text-sm'>Subject</label>
           <input className='border-2 rounded-lg p-3 flex border-gray-300 text-black' type="text" name='subject' placeholder='Subject' />

          <label className='flex items-center uppercase text-sm'>Message</label>
          <textarea rows={4} className='border-2 rounded-lg p-3 border-gray-300 text-black' name='message' placeholder='Message' required></textarea>
        </div>
        <div className="flex justify-center items-center">
          <button type="submit" className='items-center justify-center w-full p-4 border-2 rounded-lg flex border-gray-300 hover:bg-gray-100 hover:text-black text-gray-100 mt-4 max-w-[600px]'>Submit Form</button>
        </div>
        </form>
        {/* Optional Success Message on Same Page */}
        {/* <div className="justify-center text-center py-4">{result}</div> */}
  
      </div>
    );
  }