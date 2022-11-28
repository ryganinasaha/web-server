import TelegramBot from 'node-telegram-bot-api'
import dotenv from 'dotenv'

dotenv.config()

const token = process.env.TELEGRAM_TOKEN;
const chartId = +process.env.TELEGRAM_CHAT_ID;


const bot = new TelegramBot(token, {polling: true});

export default {
  sendToPrivateChat(text) {
    return bot.sendMessage(chartId, text, {
      parse_mode: 'HTML'
    });
  }
}
