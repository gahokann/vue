<template lang="">
    <main class="main">
        <div class="main__info">
            <h1 class="main__info__title">Мой кабинет</h1>
            <a href="#" class="btn btn-orange btn-lg">Сделать заказ</a>
        </div>
        <div class="main__items">
            <nav-profile />
            <div class="main__item">
                <div class="main__item__logo">
                    <img src="../../assets/img/1.jpg" alt="" class="main__item__logo__img">
                </div>
                <div class="main__item__info">
                    <h3 class="main__item__title">Демошенков Сергей Михайлович</h3>
                    <p class="main__item__email">1@1snab.ru</p>
                    <p class="main__item__tel">Номер телефона не указан</p>
                    <div class="authority">
                        <h4 class="authority__title">Уровень Доступа: Пользователь</h4>
                        <p class="authority__text">Простой пользователь с ограниченными правами</p>
                        <a href="#" class="authority__link">Представляете компанию?</a>
                    </div>
                </div>
            </div>
        </div>

    </main>
</template>
<script>
import NavProfile from '@/components/NavProfile.vue';
export default {
    components: {
        NavProfile,
    }
}
</script>
<style lang="">
    
</style>