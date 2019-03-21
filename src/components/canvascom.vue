<template>
    <div class="canvascom">
        <canvas :id="cvsId" class="drawframe"></canvas>
    </div>
</template>
<script>
export default {
    name: 'canvascom',
    data() {
        return {
            cvsId: this.$route.path + Math.floor(Math.random()*10000)
        };
    },
    methods: {},
    mounted() {}
}
</script>
<style lang="less" scoped>

</style>
