<template lang="">
    <div class="page">
        <div class="container">
            <HeaderPages />
            <main class="intro">
                <h1 class="intro__title">Первая Снабженческая Компания</h1>
                <p class="intro__subtitle">Снабжение строительных компаний</p>
                <a href="#" class="btn btn-orange btn-lg" style="margin-top: 15px">Партнеры</a>
            </main>
        </div>
        <footer class="footer main">
            <div class="container">
                <div class="footer__info main">
                    <h1 class="footer__title main">Первая Снабженческая Компания</h1>
                    <a href="#" class="footer__mail main">info@1snab.ru</a>
                    <a href="" class="footer__tel main">+74998885522</a>
                    <div class="footer__copyright main">
                        <p>Copyright © 2023 ПСК</p>
                        <p>All rights reserved</p>
                    </div>
                </div>
                <nav class="footer__nav main">
                    <h1 class="footer__nav__title main">Начать</h1>
                    <a href="#" class="footer__nav__link main">Главная</a>
                    <a href="#" class="footer__nav__link main">Личный кабинет</a>
                    <a href="#" class="footer__nav__link main">Каталог</a>
                </nav>

                <nav class="footer__nav main">
                    <h1 class="footer__nav__title main">О нас</h1>
                    <a href="#" class="footer__nav__link main">Информация</a>
                    <a href="#" class="footer__nav__link main">Связь с нами</a>
                </nav>
            </div>
        </footer>
    </div>
</template>
<script>
import HeaderPages from '@/components/HeaderPages.vue';

export default {
    name: 'MainPage',
    components: {
        HeaderPages
    }
    
}
</script>
<style lang="">
    
</style>