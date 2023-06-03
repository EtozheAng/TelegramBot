const { Markup } = require('telegraf')

const comeback = Markup.inlineKeyboard([
  [Markup.button.callback('Назад', 'back')],
])
const selectSection = Markup.inlineKeyboard([
  [Markup.button.callback('Выбрать другую категорию', 'return')],
])
const inlineMessage = Markup.inlineKeyboard([
  [Markup.button.callback('Array', 'Array'), Markup.button.callback('String', 'String')],
  [Markup.button.callback('Objects', 'Objects'), Markup.button.callback('Numbers', 'Numbers')],
  [Markup.button.callback('ES6', 'ES6')]
])


module.exports = { comeback, selectSection, inlineMessage }