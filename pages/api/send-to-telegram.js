export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { name, surname, phone, prodName, totalPrice } = req.body;

    if (!name || !surname || !phone || !prodName || !Array.isArray(prodName) || !totalPrice ) {
      return res.status(400).json({ error: 'All fields are required and prodName must be an array' });
    }

    const chatId = "-4213975968"; 
    const token = "7241524071:AAH-74VkN8UYepLxAsxuI37rfFpVxpmnyAQ"; 
    
    const message = `
      Нове замовлення:
      Повна вартість: ${totalPrice}
      Ім'я: ${name}
      По батькові: ${surname}
      Телефон: ${phone}
      Продукти:
    `;
    
    const inlineKeyboard = {
      inline_keyboard: prodName.map(product => [
        {
          text: product.name,
          callback_data: product.id.toString()
        }
      ])
    };

    try {
      const response = await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          chat_id: chatId,
          text: message,
          reply_markup: inlineKeyboard
        }),
      });

      if (!response.ok) {
        const errorText = await response.text();
        console.error('Error response from Telegram:', errorText);
        throw new Error('Error sending message');
      }

      return res.status(200).json({ message: 'Message sent successfully' });
    } catch (error) {
      console.error('Error:', error);
      return res.status(500).json({ error: error.message });
    }
  } else {
    return res.status(405).json({ error: 'Method not allowed' });
  }
}
