export default async function handler(req, res) {
    if (req.method === "POST") {
      const { name, surname, phone } = req.body;
  
      const chatId = "-4213975968"; // Замените на ваш Chat ID
      const token = "7241524071:AAH-74VkN8UYepLxAsxuI37rfFpVxpmnyAQ"; 
      const message = `
        Замовлення отримано:
        Ім'я: ${name}
        По батькові: ${surname}
        Телефон: ${phone}
      `;
  
      const url = `https://api.telegram.org/bot${token}/sendMessage`;
      const body = {
        chat_id: chatId,
        text: message,
        parse_mode: "HTML",
      };
  
      try {
        const response = await fetch(url, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(body),
        });
  
        const result = await response.json();
  
        if (result.ok) {
          res.status(200).json({ message: "Message sent successfully" });
        } else {
          res.status(500).json({ error: "Failed to send message" });
        }
      } catch (error) {
        res.status(500).json({ error: "Internal server error" });
      }
    } else {
      res.setHeader("Allow", ["POST"]);
      res.status(405).end(`Method ${req.method} Not Allowed`);
    }
  }
  