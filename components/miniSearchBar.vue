<template lang="pug">
  form.header-search(@submit.prevent="processSearch")
    input.search-field(type='text', name='q'
      placeholder='search site'
      autocomplete='off'
      autofocus='')
    button.search_button(type='submit')
      i.icon-search
</template>
<script>
export default {
  name: 'miniSearch',
  data: function(){
    return {
      query: ''
    }  
  },
  methods: {
    processSearch() {
      let input = document.querySelector('.search-field').value;
      this.$router.push({ name: 'search-id', params: { id: input }});
    },
  }
}
</script>
<style lang="scss" scoped>
.header-search { 
  position: absolute;
  right: 78px;
  top: 4px;
}
.search-field {
    cursor: text;
    width: 285px;
    color: black;
    display: inline-block;
    border: 1px solid #d9d6d6;
    border-radius: 2rem;
    font-size: .9rem;
    line-height: 2rem;
    padding: 0 .5rem 0 1rem;
    outline: none;
    transition: all .2s ease;
    position: relative;
    bottom: 1px;
    right: 30px;
}
::placeholder { /* Chrome, Firefox, Opera, Safari 10.1+ */
  color: lightgrey;
  opacity: 1; /* Firefox */
}

:-ms-input-placeholder { /* Internet Explorer 10-11 */
  color: lightgrey;
}
.search_button {
  border: 2px solid transparent;
  background: transparent;
  color: #d9d6d6;
  cursor: pointer;
  position: absolute;
  right: 30px;
  top: 3px;
  font-size: 1.1rem;
}
</style>
