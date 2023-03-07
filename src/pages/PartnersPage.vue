<template lang="">
    <div class="page">
        <header-pages />

        <main class="intro container">
            <partner-card />
        </main>

        <footer-pages />
    </div>
</template>
<script>
import HeaderPages from '@/components/HeaderPages.vue';
import PartnerCard from '@/components/PartnerCard.vue';
import FooterPages from '@/components/FooterPages.vue';

export default {
    components: {
        HeaderPages,
        FooterPages,
        PartnerCard
    }
}
</script>
<style lang="">
    
</style>