'use client';
import React from 'react';
export const metadata = {
    title: 'Contact',
    description: 'Contact Page'
}

export default function Contact()
{
    async function handleSubmit(event) {
      event.preventDefault();

      const data = {
        email: String(event.target.email.value),
        phone: String(event.target.phone.value),
        first: String(event.target.first.value),
        last: String(event.target.last.value),
        message: String(event.target.message.value),
      };
      alert('Thanks for contacting, I will get back to you soon!');

      const response = await fetch ("/api/contact", {
        method: "POST",
        headers:{
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if(response.ok){
        console.log("message sent");
        event.target.email.value = "";
        event.target.phone.value = "";
        event.target.first.value = "";
        event.target.last.value = "";
        event.target.message.value = "";
      }
      if(!response.ok){
        alert('Something went wrong, try again later?');
        console.log("error sending message");
      }
    }

    
    return (
        <form className="container" onSubmit={handleSubmit}>
          <h1>Get in touch</h1>
          <div className="email block">
            <label htmlFor="email">Email</label>
            <input className="text-black"
              id="email"
              type="email"
              name="email"
              autoComplete="email"
              required
            />
          </div>
          <div className="block phone">
            <label htmlFor="phone">Phone</label>
            <input className="text-black"
              id="phone"
              type="text"
              name="phone"
              autoComplete="tel"
              required
            />
          </div>
          <div className="name block">
            <div>
              <label htmlFor="first">First Name</label>
              <input className="text-black"
                id="first"
                type="text"
                name="first"
                autoComplete="given-name"
                required
              />
            </div>
            <div>
              <label htmlFor="last">Last Name</label>
              <input className="text-black"
                id="last"
                type="text"
                name="last"
                autoComplete="family-name"
                required
              />
            </div>
          </div>
          <div className="message block">
            <label htmlFor="message">Message</label>
            <textarea className="text-black" id="message" rows="6" name="message"></textarea>
          </div>
          <div className=" button block">
            <button className='text-black bg-gradient-to-r from-blue-500 to-teal-200' type="submit">Submit</button>
          </div>
        </form>
      );
}
