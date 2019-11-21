<template>
    <div class="not-found">
        <h2 class="font-weight-bold">This page could not be found</h2>
        <h5 class="font-weight-bold">Go back or start over from <router-link to="/">Home</router-link> page</h5>
    </div>
</template>

<script>
export default {
}
</script>

<style>
  .not-found {
      padding: 150px;
      text-align: center;
  }
@media only screen and (max-width: 767px) {
  .not-found {
      padding: 150px 15px;
  }
}
</style>