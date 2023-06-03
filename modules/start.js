const { inlineMessage } = require('./button.js')

async function start(ctx) {
  // добавление кнопок
  await ctx.reply('Привет! 🤚', {
    reply_markup: {
      keyboard: [
        [{ text: 'Array' }, { text: 'String' }],
        [{ text: 'Objects' }, { text: 'Numbers' }],
        [{ text: 'ES6' }],
      ],
      resize_keyboard: true,
    },
  })
  await ctx.reply(
    'Добро пожаловать.\nЭто мой первый Telegram bot.\nЗдесь представленны основные методы Js.\nВыбирите метод, чтобы узнать о нем подробнее.\n\n',
    inlineMessage
  )
}
module.exports = start
