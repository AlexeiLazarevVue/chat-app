<template>
  <div class="message-page">
    <aside class="message-page__sidebar">
      <Suspense>
        <user-list></user-list>
      </Suspense>
    </aside>
    <div class="message-page__chat"></div>
  </div>
</template>

<script>
import UserList from "../widgets/UserList/";
export default {
  components: { UserList },
};
</script>

<style lang="less" scoped>
</style>