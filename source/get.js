"use strict";

// Если передавать только путь, то необходимо,
// чтобы переменная была глобальная,
// но это не факт, поэтому заодно передаём и объект
function get(object, path) {
    // Разбиваем строку на свойства по точкам
    // (Не будет работать, если свойство
    // задано в таком виде: ["first_word second_word"])
    let keys = path.split('.');
    let obj = object;
    while (keys.length) {
        const key = keys.shift();
        // Если имя текущего свойства
        // есть в объекте, то всё ок
        if (key in obj) {
            obj = obj[key];
        } else {
            return undefined;
        }
    }
    return obj;
}
