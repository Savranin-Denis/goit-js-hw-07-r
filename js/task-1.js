console.log('Завдання 1');
// HTML містить список категорій ul#categories.
// З використанням властивостей і методів DOM-елементів, напиши скрипт, який:

// Порахує й виведе в консоль кількість категорій в ul#categories, тобто елементів li.item.
// Для кожного елемента li.item у списку ul#categories знайде й виведе в консоль текст заголовка елемента (тегу <h2>) і кількість елементів у категорії (усіх <li>, вкладених у нього).

const numberOfCategories = document.querySelectorAll('#categories .item');

console.log(`Number of categories: ${numberOfCategories.length}`);

numberOfCategories.forEach(el => {
  const categoryTitle = el.querySelector('h2').textContent;
  const categoryCount = el.querySelectorAll('li');

  console.log(`Category: ${categoryTitle}`);
  console.log(`Elements: ${categoryCount}`);
});
