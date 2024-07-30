const TelegramBot = require('node-telegram-bot-api');

// Замените токен на ваш токен бота от BotFather
const token = '7241524071:AAH-74VkN8UYepLxAsxuI37rfFpVxpmnyAQ';

// Создаем бота, который использует 'polling' для получения новых обновлений
const bot = new TelegramBot(token, { polling: true });

// Обработка команды "/echo [что угодно]"
bot.onText(/\/echo (.+)/, (msg, match) => {
  const chatId = msg.chat.id;
  const resp = match[1]; // захваченная "что угодно"

  // Отправка обратно захваченного "что угодно" в чат
  bot.sendMessage(chatId, resp);
});

// Прослушивание любого сообщения
bot.on('message', (msg) => {
  const chatId = msg.chat.id;

  // Отправка сообщения в чат, подтверждающего получение сообщения
  bot.sendMessage(chatId, 'Received your message');
});
