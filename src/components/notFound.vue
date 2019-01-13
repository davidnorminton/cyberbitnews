<template lang="pug">
  transition(name='outIn', mode='in-out')
    template
      .notFound
        h1 404 page not found!
        p
        | sorry page not found
</template>

<script>
export default {
  name: 'notFound',
  data() {
    return {

    } 
  }
}
</script>

<style lang="scss" scoped>
  h1 {
    color: red;
    font-size: 28px;
  }
  .notFound {
    text-align: center;
  }
</style>