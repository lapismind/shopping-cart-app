<template>
  <div>
    <h1>Welcome to My Shop</h1>
    <ShoppingCart />
  </div>
</template>

<script>
import ShoppingCart from '@/components/ShoppingCart'

export default {
    name: 'Home',
  components: {
    ShoppingCart
  }
}
</script>

<style>
/* 基本样式 */
body {
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  background-color: #f5f5f5;
  color: #333;
}

/* 容器样式 */
#app {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  padding: 20px;
}

/* 标题样式 */
h1 {
  font-size: 2rem;
  margin-bottom: 20px;
}

/* 购物车样式 */
.shopping-cart {
  background-color: #fff;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

/* 按钮样式 */
button {
  background-color: #007bff;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 4px;
  cursor: pointer;
}

button:hover {
  background-color: #0056b3;
}
</style>