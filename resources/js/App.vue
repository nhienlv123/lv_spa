<template>
    <div>
        <HeaderComponent></HeaderComponent>
        <router-view></router-view>
    </div>
</template>

<style lang="scss" scoped>

</style>

<script>
    import HeaderComponent from './components/HeaderComponent.vue'
    export default {
        components: {
            HeaderComponent,
        }
    }
</script>