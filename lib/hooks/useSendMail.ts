import { useState } from "react";

export const useSendMail = () => {
  const [loading, setLoading] = useState(false);

  const sendMail = async (fromEmail: string, subject: string, message: string) => {
    setLoading(true);
    try {
      const response = await fetch("/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          to: "eliatranquil@gmail.com",
          subject: subject,
          text: `This message is from ${fromEmail}\n\n${message}`,
        }),
      });

      const data = await response.json();
      setLoading(false);

      if (response.ok) {
        console.log(data.message);
        return true;
      } else {
        console.error(`Error: ${data.message}`);
        return false;
      }
    } catch (error) {
      console.error("An error occurred while sending the email.");
      console.error(error);
      setLoading(false);
      return false;
    }
  };

  return { sendMail, loading };
};
