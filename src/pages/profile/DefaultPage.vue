<template lang="">
    <div class="page">
        <header-pages />
        <router-view class="container"/>
        <footer-pages />
    </div>
</template>
<script>
import HeaderPages from '@/components/HeaderPages.vue';
import FooterPages from '@/components/FooterPages.vue';

export default {
    components: {
        HeaderPages,
        FooterPages,
    },
    props: {
        title: {
            type: String,
        }
    }
}
</script>
<style lang="">
    
</style>