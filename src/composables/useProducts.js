import { ref, reactive } from "vue";

export function useProducts() {
  const products = ref([]);
  const loading = ref(false);
  const error = ref(null);
  const cart = reactive(new Map());

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
    if (cart.has(product.id)) {
      const existingProduct = cart.get(product.id);
      existingProduct.quantity++;
    } else {
      const productToAdd = {
        ...product,
        quantity: 1,
      };
      cart.set(product.id, productToAdd);
    }
  };

  const getCartItems = () => {
    return Array.from(cart.values());
  };

  fetchProducts();

  const removeFromCart = (productId) => {
    cart.delete(productId);
  };

  const updateCart = (product) => {
    if (cart.has(product.id)) {
      cart.set(product.id, product);
    }
  };

  const calculateTotal = () => {
    return Array.from(cart.values()).reduce((total, product) => {
      return total + product.price * product.quantity;
    }, 0);
  };

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
