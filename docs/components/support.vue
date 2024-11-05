<script>
    import { Crisp } from "crisp-sdk-web";

    // 自动加载
    // Crisp.configure('0fb53ae3-615a-4ee3-8c89-728177c7d57e');

    //关闭自动加载
    Crisp.configure('0fb53ae3-615a-4ee3-8c89-728177c7d57e', {
    autoload: false
    });
    export default {
        mounted() {
            setTimeout(() => {
                Crisp.load()
            }, 2000)
        }
    }
</script>
<template></template>
<style scoped></style>

