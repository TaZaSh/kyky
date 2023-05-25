let result = document.getElementById('result');
let weight = document.getElementById('weight');
let height = document.getElementById('height');

// Объявление функции calculate() для расчета ИМТ
function calculate() {
  // Получаем значение веса и роста пользователя
  const weightValue = Number(weight.value);
  const heightValue = Number(height.value) / 100;

  // Проверяем наличие введенных значений меньше нуля
  if (weightValue < 0 || heightValue < 0) {
    result.innerHTML = "Ошибка: введены значения меньше нуля";
  } else if (weightValue > 544 || heightValue > 251) { 
    result.innerHTML = "Ошибка: введены слишком большие значения";
  } else {
    // Рассчитываем BMI
    const bmi = weightValue / (heightValue * heightValue);
    // Выводим результат с округлением до 2-х знаков после запятой
    result.innerHTML = bmi.toFixed(2);
  }
}

    // объявление фунции clearFields() для расчета ИМТ
     function clearFields() {
   var height = document.getElementById("height").value = "";
   var weight = document.getElementById("weight").value = "";
  var result = document.getElementById("result").textContent = "";
  }
