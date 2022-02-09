'use strict';

QUnit.module('Тестируем функцию get', function () {
    let obj = {
        name: "Vasa",
        age: 47,
        mother: {
            name: "Luda ot verbluda",
            age: 105,
        },
    }
    QUnit.test('Возвращает свойство первого уровня', function (assert) {
         assert.strictEqual(get(obj, "age"), 47, 'First level!');
    });
    QUnit.test('Возвращает свойство второго уровня', function (assert) {
        assert.strictEqual(get(obj, "mother.name"), "Luda ot verbluda", 'Second level!');
    });
    QUnit.test('Возвращает undefined', function (assert) {
        assert.strictEqual(get(obj, "father.name"), undefined, 'Undefined!');
    });
});