<template>
  <div class="entry-list-container">
    <div class="px-2 pt-4"> 
      <input
        type="text" 
        class="form-control"
        placeholder="Buscar Entrada"
        />
    </div>

    <div class="entry-scrollarea">
      <EntryComponent
        v-for="item in 100" :key="item"
      >
      </EntryComponent>
    </div>
  </div>
</template>


<script>
import EntryComponent from '@/modules/daybook/components/EntryComponent'


export default {
  components: {
    EntryComponent
  }
}
</script>


<style lang="scss" scoped>
input {
  height: 55px;
}

.entry-list-container{
  border-right: 1px solid #2c3e50;
  height: calc( 100vh - 56px );
}

.entry-scrollarea {
  height: calc( 100vh - 120px );
  overflow: scroll;
}

</style>