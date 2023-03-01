<template lang="">
    <div class="page">
        <div class="container">
            <header-pages />
            <main class="intro">
                <h1 class="intro__title">Первая Снабженческая Компания</h1>
                <p class="intro__subtitle">Снабжение строительных компаний</p>
                <a href="#" class="btn btn-orange btn-lg" style="margin-top: 15px">Партнеры</a>
            </main>
        </div>
        <footer class="footer">
            <div class="container">
                <div class="footer__info">
                    <h1 class="footer__title">Первая Снабженческая Компания</h1>
                    <a href="#" class="footer__mail">info@1snab.ru</a>
                    <a href="" class="footer__tel">+74998885522</a>
                    <div class="footer__copyright">
                        <p>Copyright © 2023 ПСК</p>
                        <p>All rights reserved</p>
                    </div>
                </div>
                <nav class="footer__nav">
                    <h1 class="footer__nav__title">Начать</h1>
                    <a href="#" class="footer__nav__link">Главная</a>
                    <a href="#" class="footer__nav__link">Личный кабинет</a>
                    <a href="#" class="footer__nav__link">Каталог</a>
                </nav>

                <nav class="footer__nav">
                    <h1 class="footer__nav__title">О нас</h1>
                    <a href="#" class="footer__nav__link">Информация</a>
                    <a href="#" class="footer__nav__link">Связь с нами</a>
                </nav>
            </div>
        </footer>
    </div>
</template>
<script>

import HeaderPages from '../components/HeaderPages.vue'

export default {
    name: 'MainPage',
    components: {
        HeaderPages
    }
}
</script>
<style lang="">
    
</style>