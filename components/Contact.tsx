import React from "react";

export default function Contact() {
    const [result, setResult] = React.useState("");
  
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
      } else {
        console.log("Error", data);
        setResult(data.message);
      }
    };
  
    return (
      <div className="p-4">
        <form onSubmit={onSubmit} className="flex flex-col max-w-[600px] w-full">
        <div className='grid gap-4 w-full py-2'>
          <label className='uppercase text-sm py-2'>Name</label>
          <input className="border-2 rounded-lg p-3 flex border-gray-300 text-black" type="text" name="name" placeholder='Name' required/>

          <label className='uppercase text-sm py-2'>Email</label>
          <input className="border-2 rounded-lg p-3 flex border-gray-300 text-black" type="email" name="email" placeholder='Email' required/>

           <label className='uppercase text-sm py-2'>Subject</label>
           <input className='border-2 rounded-lg p-3 flex border-gray-300 text-black' type="text" name='subject' placeholder='Subject' />

          <label className='uppercase text-sm py-2'>Message</label>
          <textarea rows={4} className='border-2 rounded-lg p-3 border-gray-300 text-black' name='message' placeholder='Message' required></textarea>
        </div>
  
          <button type="submit" className='items-center justify-center w-full p-4 border-2 rounded-lg flex border-gray-300 hover:bg-gray-100 hover:text-black text-gray-100 mt-4'>Submit Form</button>
  
        </form>
        <div className="justify-center text-center py-4">{result}</div>
  
      </div>
    );
  }



// import React from 'react';

// const Contact = () => {

//   return (
//     <div>
//     <div className='p-4'>
//         <form onSubmit={handleSubmit} className='flex flex-col max-w-[600px] w-full'>
//         <input type="hidden" name="access_key" value="YOUR_ACCESS_KEY_HERE"></input>
//             <div className='grid md:grid-cols-2 gap-4 w-full py-2'>
//                 <div className='flex flex-col'>
//                     <label className='uppercase text-sm py-2'>Name</label>
//                     <input className='border-2 rounded-lg p-3 flex border-gray-300 text-black' type="text" name='name' placeholder='Name' />
//                 </div>
//             </div>
            
//             <div className='flex flex-col py-2'>
//                     <label className='uppercase text-sm py-2'>Email</label>
//                     <input className='border-2 rounded-lg p-3 flex border-gray-300 text-black' type="email" name='email' placeholder='Email'/>
//             </div>
//             <div className='flex flex-col py-2'>
//                     <label className='uppercase text-sm py-2'>Subject</label>
//                     <input className='border-2 rounded-lg p-3 flex border-gray-300 text-black' type="text" name='subject' placeholder='Subject' />
//             </div>
//             <div className='flex flex-col py-2'>
//                     <label className='uppercase text-sm py-2'>Message</label>
//                     <textarea rows={4} className='border-2 rounded-lg p-3 border-gray-300 text-black' name='message' placeholder='Message'></textarea>
//             </div>
//             <div>
//                 <button className='items-center justify-center w-full p-4 border-2 rounded-lg flex border-gray-300 hover:bg-gray-100 hover:text-black text-gray-100 mt-4'>Send Message</button>
//             </div>
//         </form>
//     </div>
//     </div>
//   );
// };

// export default Contact;