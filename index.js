const { composer, arrayOutput } = require('./modules/content.js')
const {
  arrayNode,
  stringNode,
  objectsNode,
  numberNode,
  es6Node,
} = require('./database/dataBase.js')

const { Telegraf } = require('telegraf')
const { TOKEN } = require('./modules/config.js')

const bot = new Telegraf(TOKEN)

const start = require('./modules/start.js')

bot.start(start)
bot.use(composer)

// кнопка для возврата на выбор метода
bot.action('back', start)

// кнопка для возврата на главный экран
bot.action('return', start)

// кнопки внизу экрана (сообщения)
bot.hears('Array', arrayOutput(0, arrayNode))
bot.hears('String', arrayOutput(1, stringNode))
bot.hears('Objects', arrayOutput(2, objectsNode))
bot.hears('Numbers', arrayOutput(3, numberNode))
bot.hears('ES6', arrayOutput(4, es6Node))

bot.telegram.setMyCommands([
  { command: '/start', description: 'Стартовая страница' },
])

bot.launch().then(console.log('Запуск'))
