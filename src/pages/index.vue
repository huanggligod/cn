<template>
    <div class="home">
        <div class="index"></div>
    </div>
</template>

<script>
export default {
    data () {
        return {
        }
    },
    mounted () {
        setTimeout(() => {
            this.$router.push({path: 'list'})
        }, 2000)
    }
}

</script>

<style lang='scss' scoped>
    @import '../assets/scss/common/common.scss';
    @import '../assets/scss/iconfont/iconfont.css';
    .home {
        width: 100%;
        height: 100%;
    }
    .index {
        height: 100%;
        width: 100%;
        // font-size: 14px;
        // color: #313131;
        overflow-x: hidden;
        // line-height: 1;
        background: url('../assets/images/loading.gif') no-repeat center 250px;
    }
</style>
