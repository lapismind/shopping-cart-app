<template>
  <div id="app">
    <Order @add-to-cart="addToCart" />
    <ShoppingCart :cartItems="cartItems" @remove-from-cart="removeFromCart" @add-to-cart="addToCart" />
  </div>
</template>

<script>
import Order from './components/Order.vue'
import ShoppingCart from './components/ShoppingCart.vue'

export default {
  components: {
    Order,
    ShoppingCart
  },
  data() {
    return {
      cartItems: []
    }
  },
  methods: {
    addToCart(item) {
      const existingItem = this.cartItems.find(cartItem => cartItem.id === item.id);
      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        this.cartItems.push({ ...item, quantity: 1 });
      }
    },
    removeFromCart(item) {
      const existingItem = this.cartItems.find(cartItem => cartItem.id === item.id);
      if (existingItem.quantity > 1) {
        existingItem.quantity -= 1;
      } else {
        const index = this.cartItems.findIndex(cartItem => cartItem.id === item.id);
        if (index !== -1) {
          this.cartItems.splice(index, 1);
        }
      }
    }
  }
}
</script>

<style>
#app {
  display: flex;
  justify-content: space-between;
  padding: 20px;
}
</style>


