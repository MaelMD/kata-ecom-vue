import { ref, reactive } from "vue";

export function useProducts() {
  const products = ref([]);
  const loading = ref(false);
  const error = ref(null);
  const cart = reactive({});

  const fetchProducts = async () => {
    loading.value = true;
    try {
      const response = await fetch("https://fakestoreapi.com/products");
      products.value = await response.json();
    } catch (err) {
      error.value = err;
    } finally {
      loading.value = false;
    }
  };

  const addToCart = (product) => {
    let productToAdd = cart[product.id];
    if (productToAdd) {
      productToAdd.quantity++;
    } else {
      productToAdd = {
        ...product,
        quantity: 1,
      };
    }
    cart[product.id] = productToAdd; // Directly assign the product to the cart
  };

  const getCartItems = () => {
    return Object.values(cart);
  };

  const removeFromCart = (productId) => {
    delete cart[productId];
  };

  const updateCart = (product) => {
    if (cart[product.id]) {
      cart[product.id] = product;
    }
  };

  const calculateTotal = () => {
    return Object.values(cart).reduce((total, product) => {
      return total + product.price * product.quantity;
    }, 0);
  };

  fetchProducts();

  return {
    products,
    loading,
    error,
    addToCart,
    getCartItems,
    removeFromCart,
    updateCart,
    calculateTotal,
  };
}
