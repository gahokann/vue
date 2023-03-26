<template lang="">
    <header class="header">
        <div class="header__inner container">
            <router-link :to="{ name: 'main' }" class="header__link__logo">
                <div class="header__logo">
                    <img class="header__img" src="../assets/img/logo.png" alt="">
                    <h1 class="header__title">Первая Снабженческая Компания</h1>
                </div>
            </router-link>

            <div class="header__burger" :class="burgerMain" @click="burgerMain.active = !burgerMain.active">
                <span></span>
            </div>
            <nav class="header__nav" :class="burgerMain">
                <router-link :to="{ name: 'main' }" class="header__nav__link">
                Главная
                </router-link>
                <router-link :to="{ name: 'partners' }" class="header__nav__link">
                Партнеры
                </router-link>
                <router-link :to="{ name: 'main' }" class="header__nav__link">
                Информация
                </router-link>

                <router-link v-if="!isAuthenticated" :to="{ name: 'auth' }" class="header__nav__link btn btn-orange">
                Личный кабинет
                </router-link>
                <router-link v-if="isAuthenticated" :to="{ name: 'profileMain' }" class="header__nav__link btn btn-orange">
                Личный кабинет
                </router-link>
            </nav>
        </div>
    </header>
</template>
<script>
import { mapGetters } from 'vuex';
export default {
    data() {
        return {
            burgerMain: {
                active: false,
            }
        }
    },
    computed: {
        ...mapGetters(['isAuthenticated'])
    },
}
</script>
<style lang="">
    
</style>