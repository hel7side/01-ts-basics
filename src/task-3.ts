// 1. Інтерфейс для об'єкта продукту
interface Product {
  id: number;
  title: string;
}

// 2. Масив рядків (імена користувачів)
const usernames: string[] = ["alice", "bob", "charlie"];

// 3. Масив чисел (рейтинги)
const ratings: number[] = [4.5, 3.8, 5];

// 4. Масив обʼєктів (продукти)
const products: Product[] = [
  { id: 1, title: "Phone" },
  { id: 2, title: "Laptop" },
];

// 5. Виведення в консоль
console.log(`Usernames: ${JSON.stringify(usernames)}`);
console.log(`Ratings: ${JSON.stringify(ratings)}`);
console.log(`Products: ${JSON.stringify(products)}`);
