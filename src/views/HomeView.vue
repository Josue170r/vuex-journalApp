<template>
  <div class="">
    <img alt="Vue logo" src="../assets/logo.png">
    <h1 class=" mx-4">Hola mundo</h1>
    <button @click="goToDayBook" class="btn btn-primary mx-4">Primary</button>
    <button @click="goToDayBook" class="btn btn-secondary mx-4 ">Secundary</button>
    <button @click="goToDayBook" class="btn btn-success mx-4">Success</button>
</div>
</template>

<script>
export default {
  methods: {
    goToDayBook() {
      this.$router.push({name: 'no-entry'})
    }
  }
}
</script>


