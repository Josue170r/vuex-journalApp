<template>
    <NavBar />
    <div class="d-flex">
        <div class="col-4">
            <EntryList />
        </div>
        <div class="col">
            <router-view />
        </div>
    </div>

</template>

<script>
import NavBar from '@/modules/daybook/components/NavBar'
import EntryList from '@/modules/daybook/components/EntryList.vue'

export default {
    components: {
        NavBar,
        EntryList
    }
}
</script>