<template lang="pug">
  .search-wrapper
    h3.heading.main-heading Search site
    form.main-search(@submit.prevent="processSearch")
      input.search-field.main-search-field(type='text', name='q'
        placeholder='search site'
        autocomplete='off'
        autofocus='')
      button.search_button.main-search-button(type='submit')
        i.icon-search

</template>
<script>
export default {   
}
</script>
<style lang="scss" scoped>
.search-wrapper {
  position: relative;
}
.main-search {
  position: relative;
  display: block;
}
.main-search-field {
  width: 90%;
  display: block;
  margin: 20px 5%;
}
.main-search-button {
  right: 19px;
}
</style>
