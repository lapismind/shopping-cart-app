<template>
    <div class="order-container">
      <h2>Menu</h2>
      <ul>
        <li v-for="item in items" :key="item.id" class="menu-item">
          <img :src="item.image" alt="Dish image" class="item-image" />
          <div class="item-details">
            <span class="item-name">{{ item.name }}</span>
            <span class="item-price">- ￥{{ item.price.toFixed(1) }}</span>
            <button @click="addToCart(item)">+</button>
          </div>
        </li>
      </ul>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        items: [
          { id: 1, name: 'Panda Donburi', price: 25.9, image: '/images/Orders/1.png' },
          { id: 2, name: 'WeiGong Curry Rice', price: 21.8, image: '/images/Orders/2.png'},
          { id: 3, name: 'JiaoLeZhi Fired Chicken', price: 20.8, image: '/images/Orders/3.png'},
          { id: 4, name: 'Shine Bok', price: 29.9, image: '/images/Orders/4.png'}
        ]
      }
    },
    methods: {
      addToCart(item) {
        this.$emit('add-to-cart', item);
      }
    }
  }
  </script>
  
  <style scoped>
  .order-container {
    position: absolute;
    top: 20px;
    left: 20px;
    padding: 20px;
    background-color: #f4f4f9;
    border-radius: 8px;
    box-shadow: 0 2px 5px rgba(0,0,0,0.1);
  }
  .menu-item {
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
  .item-price {
    margin-right: 10px;
  }
  button {
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
  button:hover {
    background-color: #87cefa; /* 浅蓝色 */
  }
  </style>
  
  