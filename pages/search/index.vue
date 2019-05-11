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
<style scoped>
.search-wrapper {
  position: relative;
}
.main-search {
  position: relative;
  display: block;
}
.main-search-field {
  width: 100%;
  cursor: text;
  color: black;
  display: inline-block;
  border: 1px solid #d9d6d6;
  border-radius: 2rem;
  font-size: .9rem;
  line-height: 2rem;
  padding: 2px 0 2px 20px;
  outline: none;
  transition: all .2s ease;
  position: relative;
  bottom: 1px;
  box-sizing: border-box;
}
.main-search-button {
  border: 2px solid transparent;
  background: transparent;
  color: #d9d6d6;
  cursor: pointer;
  position: absolute;
  top: 2px !important;
  font-size: 1.4rem;
  right: 5px;
}
</style>
