import axios from "axios";

// 1. Описуємо тип для поста
interface Post {
  id: number;
  title: string;
  body: string;
}

// 2. Типізована async-функція
async function fetchPosts(): Promise<Post[]> {
  const response = await axios.get<Post[]>("https://jsonplaceholder.typicode.com/posts");
  return response.data;
}

// 3. Використання
fetchPosts().then((posts) => {
  console.log(posts[0].title); // Title першого поста
});
