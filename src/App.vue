<template>
    <transition name="fade">
        <div class="container">
            <router-view></router-view>
        </div>
    </transition>
</template>


<script>

    export default {}
</script>

<style>
    .fade-enter-active, .fade-leave-active {
        transition: opacity .5s
    }

    .fade-enter, .fade-leave-active {
        opacity: 0
    }
</style>
