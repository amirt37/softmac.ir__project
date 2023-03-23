<template>
  <div class="apps-show">
    <div class="container">
      <h1>dfasdsdfdf</h1>
      {{ $route.params.id }}
    </div>

  </div>
</template>

<script>

export default {
  data(){
    return{
      
    }
  },
mounted(){
  let route = this.$route
  console.log(route.params.id);
}
}
</script>

<style>
.apps-show{
  margin-top: 7rem;
}
</style>