// На счету пользователя есть 23580 кредитов, значение хранится в переменной credits (создай и присвой). Пользователь решает купить ремонтных дроидов, которые стоят по 3000 кредитов за штуку. Цена одного дроида хранится в переменной pricePerDroid (создай и присвой).

// При посещении страницы, используя prompt, необходимо спросить количество дроидов которые пользователь хочет купить и сохранить в переменную.

// Напиши скрипт который:

// Если в prompt была нажата кнопка Cancel, выводит в консоль сообщение 'Отменено пользователем!'.
// В противном случае, рассчитывает общую цену заказа и сохраняет в переменной totalPrice.
// Проверяет сможет ли пользователь оплатить заказ:
// если сумма к оплате превышает количество кредитов на счету, выводи в консоль сообщение 'Недостаточно средств на счету!'.
// в противном случае необходимо посчитать остаток кредитов на счету и вывести сообщение 'Вы купили [число] дроидов, на счету осталось [число] кредитов.'.

const credits = 23580;
const pricePerDroid = 3000;

const CANCELED_BY_USER = 'Отменено пользователем!';
const PROMPT_MESSAGE =
  'Сколько дроидов Вы хотите приобрести? (введите целое число большее чем ноль)';
const PROMPT_INVALID =
  'Введенное количество, не является целым числом большим нуля! Обновите страницу и попробуйте заново.';
const ACCESS_DENIED = 'Недостаточно средств на счету!';

let quantityDroids = 0;
let totalPrice = 0;

quantityDroids = prompt(PROMPT_MESSAGE);

if (quantityDroids === null) {
  console.log(CANCELED_BY_USER);
} else {
  quantityDroids = Number.parseInt(quantityDroids);

  if (!(quantityDroids > 0)) {
    console.log(PROMPT_INVALID);
  } else {
    totalPrice = pricePerDroid * quantityDroids;
    console.log('Заказ на сумму: ', totalPrice, 'кредитов');

    console.log(
      credits < totalPrice
        ? ACCESS_DENIED
        : `Вы купили ${quantityDroids} дроидов, на счету осталось ${
            credits - totalPrice
          } кредитов.`,
    );
  }
}
