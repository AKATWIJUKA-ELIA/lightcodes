import { useState } from "react";


export const  useSendMail = async (fromEmail: any,subject: any,message: any,) => {

    try {
      const response = await fetch('/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          to: 'eliatranquil@gmail.com',
          subject: subject,
          text:  ` This Message is from ${fromEmail}  \n  ${message}`
        }),
      });

      const data = await response.json();
      if (response.ok) {
        console.log(data.message);
        return true
      } else {
        console.log(`Error: ${data.message}`);
        return false;
      }
     
    } catch (error) {
      console.error('An error occurred while sending the email.');
      console.error(error);
    }
  };