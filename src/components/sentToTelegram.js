"use client"
import React, { useState } from 'react';



const SendToTelegram = ({ name, surname, phone, prodName, totalPrice, onSuccess }) => {    
  
 

    const handleSubmit = async (e) => {
      e.preventDefault();
  
      const formData = {
        name,
        surname,
        phone,
        prodName,
        totalPrice
      };

    try {
      const response = await fetch("/api/send-to-telegram", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      console.log(response)

      if (!response.ok) {
       
        throw new Error("Network response was not ok");
      }

      const result = await response.json();   
      console.log(result);
      if (onSuccess) {
        onSuccess();
      }       
     
    } catch (error) {
      console.error("Error:", error);
    }
  };
  

  return (
    <button onClick={handleSubmit} className="flex sm:px-4 sm:py-2 px-8 py-3 border-0 rounded-md bg-btmBg mx-auto">
      Замовити
    </button>
  );
};

export default SendToTelegram;
