const { Composer } = require('telegraf')
const composer = new Composer()

const { comeback, selectSection } = require('./button.js')
const { methodDescription, arrayNode, stringNode, objectsNode, numberNode, es6Node } = require('../database/dataBase.js')

// функция создания методов массива
function outputNameOrDescr(a) {
  let newArray = ''
  for (let method of a) {
    newArray += method.name + ' - ' + method.description + '\n\n'
  }
  return newArray
}
// функция вывода информации о методах массива
function arrayOutput(num, database) {
  try {
    return (ctx) => {
     ctx.replyWithHTML(`${methodDescription[num]}${outputNameOrDescr(database)}`, selectSection)
  }
  } catch(e) {
    console.error('хюстон. у нас проблемы', e);
  }
}
// функция вывода выбранного метода
function arrayMethod(index,array) {
  composer.command(array[index].name, ctx => {
    ctx.replyWithHTML(`
<b>Описание</b>
${array[index].description}

<b>Синтаксис</b>
<i>${array[index].syntax}</i>
${cheackParameter(index, array)}
<b>Return Value</b>
${array[index].return}`, comeback)
  })
}
// проверка на наличие аргуменов
function cheackParameter(index, array) {
  const parameter = array[index].parameter
  let parameterDetails = '\n<b>Сведения о параметрах</b>\n'
  if (parameter) {
    for (let item of parameter) {
      parameterDetails += item + '\n'
    }
  } else {
    parameterDetails = ''
  }
  return parameterDetails
}
// проверка колличества всех методов массива
function valueOutput(array) {
  for (let i = 0; i < array.length; i++) {
    arrayMethod(i, array)
  }
}
valueOutput(arrayNode)
valueOutput(stringNode)
valueOutput(objectsNode)
valueOutput(numberNode)
valueOutput(es6Node)

// кнопки на сообщениях
composer.action('Array', arrayOutput(0, arrayNode))
composer.action('String', arrayOutput(1, stringNode))
composer.action('Objects', arrayOutput(2, objectsNode))
composer.action('Numbers', arrayOutput(3, numberNode))
composer.action('ES6', arrayOutput(4, es6Node))


module.exports = { composer, arrayOutput}