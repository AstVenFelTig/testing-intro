function notImplemented() {
  throw new Error("Корзина ещё не реализована. Сначала прочитайте тесты.");
}

function addToCart(cart, product, quantity = 1) {
  if (quantity === 0) {
    throw new RangeError("Количество должно быть положительным");
  }
  if (product.stock < quantity) {
    throw new RangeError("Количество на складе должно быть больше");
  }

  const arrProductDubl = cart.find((item) => item.id === product.id);

  if (arrProductDubl) {
    return cart.map((item) => {
      if (item.id === product.id) {
        const update = {
          ...item,
          quantity: item.quantity + quantity,
        };

        return update;
      } else {
        return item;
      }
    });
  }
  return [...cart, { ...product, quantity }];
}

function changeQuantity() {
  return notImplemented();
}
function removeFromCart(cart, id) {
  return cart.filter((item) => item.id !== id);
}
function calculateCartSubtotal(cart) {
  if (cart.length === 0) {
    return 0;
  } else {
    return cart.reduce((acc, elem) => acc + elem.price * elem.quantity, 0);
  }
}

function calculateOrderTotal() {
  return notImplemented();
}

const cartApi = {
  addToCart,
  changeQuantity,
  removeFromCart,
  calculateCartSubtotal,
  calculateOrderTotal,
};

if (typeof module !== "undefined") module.exports = cartApi;
if (typeof window !== "undefined") window.cartApi = cartApi;
