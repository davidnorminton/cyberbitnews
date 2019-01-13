<template lang="pug">
  .allsites
    h1.heading.main-heading All sites indexed so far ..
    .list-wrap
      ol.alllist
        li
          router-link(to="/website/freecodecamp") freecodecamp (developer)
        li
          router-link(to="/website/smashingmagazine") smashingmagazine (developer)              
        li
          router-link(to="/website/thehackernews") thehackernews (infosec)
        li
          router-link(to="/website/offensive-security") offensive-security (infosec)
        li
          router-link(to="/website/hackread") hackread (infosec)                   
        li
          router-link(to="/website/welivesecurity") welivesecurity (infosec)
        li
          router-link(to="/website/rapid7") rapid7 (infosec)
        li
          router-link(to="/website/latesthackingnews") latesthackingnews (infosec)
        li
          router-link(to="/website/threatpost") threatpost (infosec)
        li
          router-link(to="/website/securityledger") securityledger (infosec)
        li
          router-link(to="/website/scmagazine") scmagazine (infosec)
        li
          router-link(to="/website/tecmint") tecmint (linux)
        li
          router-link(to="/website/omgubuntu") omgubuntu (linux)
        li
          router-link(to="/website/arstechnica") arstechnica (tech)
</template>
<script>
export default {
  name: 'allsites'
}
</script>
<style>
</style>