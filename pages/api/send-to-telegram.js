
export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { name, surname, phone } = req.body;

    if (!name || !surname || !phone) {
      return res.status(400).json({ error: 'All fields are required' });
    }

    const chatId = "-4213975968"; 
    const token = "7241524071:AAH-74VkN8UYepLxAsxuI37rfFpVxpmnyAQ"; 

    const message = `
      Нове замовлення:
      Ім'я: ${name}
      По батькові: ${surname}
      Телефон: ${phone}
    `;

    try {
      const response = await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          chat_id: chatId,
          text: message,
        }),
      });

      if (!response.ok) {
        throw new Error('Error sending message');
      }

      return res.status(200).json({ message: 'Message sent successfully' });
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  } else {
    return res.status(405).json({ error: 'Method not allowed' });
  }
}
