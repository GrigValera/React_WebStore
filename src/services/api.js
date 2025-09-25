// services/api.js
const DUMMY_BASE = "https://dummyjson.com";

// Для POST-запроса (submitQuestion) используем jsonplaceholder как эмулятор сервера
const POSTFAKE = "https://jsonplaceholder.typicode.com";

export const productAPI = {
  // получает весь объект товара (DummyJSON)
  getProduct: (productId) =>
    fetch(`${DUMMY_BASE}/products/${productId}`).then((res) => {
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      return res.json();
    }),

  // если интерфейс ожидает getPrice — возвращаем объект { price }
  getPrice: async (productId) => {
    const product = await fetch(`${DUMMY_BASE}/products/${productId}`).then(
      (res) => {
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        return res.json();
      }
    );
    return { price: product.price };
  },

  // эмулируем отправку вопроса: POST к jsonplaceholder (или можно к httpbin)
  submitQuestion: (productId, question) =>
    fetch(`${POSTFAKE}/posts`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ productId, question }),
    }).then((res) => {
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      return res.json();
    }),
};
