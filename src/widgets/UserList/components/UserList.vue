<template>
  <div class="user-list">
    <div v-for="user in users" :key="user.id" class="user-list__item">
      <h1>{{ user.username }}</h1>
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

<style>
  
</style>