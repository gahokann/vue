<template lang="">
    <header class="header">
        <router-link :to="{ name: 'main' }" class="header__link__logo">
                <div class="header__logo">
                    <img class="header__img" src="../assets/img/logo.png" alt="">
                    <h1 class="header__title">Первая Снабженческая Компания</h1>
                </div>
        </router-link>
        
        <div class="header__burger">
            <span></span>
        </div>
        <nav class="header__nav">
            <a href="#" class="header__nav__link">Главная</a>
            <a href="#" class="header__nav__link">Партнеры</a>
            <a href="#" class="header__nav__link">Информация</a>
            <a href="#" class="header__nav__link btn btn-orange">Личный кабинет</a>
        </nav>
    </header>
</template>
<script>
export default {
    
}
</script>
<style lang="">
    
</style>