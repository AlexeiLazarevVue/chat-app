<template>
  <div class="user-list">
    <div @click="$router.push('/#')" v-for="user in users" :key="user.id" class="user">
      <img src="https://i.pngimg.me/thumb/f/350/comdlpng6952232.jpg" class="user__image" alt="">
      <div class="user__text-data">
        <p>{{ user.username }}</p>
        <p class="user__last-message">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Id excepturi officia debitis, dolor veritatis illum.</p>
      </div>
    </div>
  </div>
</template>

<script>
import { getUserList } from '../api/getUserList'
export default {
  async setup() {
    const { users } = getUserList()

    return {
      users
    }
  }
}
</script>

<style lang="less" scoped>
  .user-list {
    height: 100vh;
    width: 100%;
    background: #17212b;
    .user {
      display: flex;
      height: 70px;
      padding: 10px;
      overflow: hidden;
      cursor: pointer;
      transition: 0.2s;
      &:hover {
        background: #2b5278;
      }
      &__image {
        width: 50px;
        border-radius: 100%;
      }
      &__text-data {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        padding: 3px 10px;
      }
      &__last-message {
        white-space: nowrap;
        font-size: 14px;
        color: #e9e8e876;
        font-weight: 300;
      }
    }
  }
</style>