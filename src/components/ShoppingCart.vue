<template>
  <div class="cart-container">
    <h2>Shopping Cart</h2>
    <ul>
      <li v-for="item in cartItems" :key="item.id" class="cart-item">
        <img :src="item.image" alt="Dish image" class="item-image" />
        <div class="item-details">
          <span class="item-name">{{ item.name }}</span>
          <span class="item-quantity">x{{ item.quantity }}</span>
          <span class="item-price">- ￥{{ (item.price * item.quantity).toFixed(1) }}</span>
          <div class="item-buttons">
            <button @click="addToCart(item)">+</button>
            <button @click="removeFromCart(item)">-</button>
          </div>
        </div>
      </li>
    </ul>
    <div class="total">
      Total: ￥{{ totalPrice.toFixed(1) }}
    </div>
    <button @click="checkout" class="checkout-button">Checkout</button>
  </div>
</template>

<script>
export default {
  props: ['cartItems'],
  computed: {
    totalPrice() {
      return this.cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
    }
  },
  methods: {
    addToCart(item) {
      this.$emit('add-to-cart', item);
    },
    removeFromCart(item) {
      this.$emit('remove-from-cart', item);
    },
    checkout() {
      alert('Proceeding to checkout. Total: ￥' + this.totalPrice.toFixed(1));
      // 这里可以添加实际的支付逻辑
    }
  }
}
</script>

<style scoped>
.cart-container {
  position: absolute;
  top: 20px;
  right: 20px;
  padding: 20px;
  background-color: #f4f4f9;
  border-radius: 8px;
  box-shadow: 0 2px 5px rgba(0,0,0,0.1);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 80vh;
}
.cart-item {
  display: flex;
  align-items: center;
  margin-bottom: 10px;
}
.item-image {
  width: 50px;
  height: 50px;
  margin-right: 10px;
}
.item-details {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
}
.item-name {
  font-weight: bold;
  margin-right: 10px;
}
.item-quantity {
  margin-right: 10px;
}
.item-price {
  margin-right: 10px;
}
.item-buttons button {
  padding: 5px;
  background-color: #add8e6; /* 淡蓝色 */
  color: white;
  border: none;
  border-radius: 50%;
  width: 30px;
  height: 30px;
  text-align: center;
  line-height: 20px;
  cursor: pointer;
  margin-left: 5px;
}
.item-buttons button:hover {
  background-color: #87cefa; /* 浅蓝色 */
}
.total {
  margin-top: 10px;
  font-weight: bold;
}
.checkout-button {
  align-self: flex-end;
  margin-top: auto;
  padding: 10px 20px;
  background-color: #4CAF50; /* 绿色 */
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}
.checkout-button:hover {
  background-color: #45a049; /* 深绿色 */
}
</style>
