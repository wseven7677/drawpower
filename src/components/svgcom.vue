<template>
    <div class="svgcom">
        <svg class="drawframe" v-html="content" version="1.1" xmlns="http://www.w3.org/2000/svg"></svg>
    </div>
</template>
<script>
    export default {
        name: 'svgcom',
        data() {
            return {
                content: '<circle cx="100" cy="50" r="40" stroke="black" stroke-width="2" fill="red" />'
            };
        },
        methods: {},
        mounted() {}
    }
</script>
<style lang="less">

</style>