<template lang="">
    <div class="page">
        <header-pages />
        <div class="form__block">
            <img src="../assets/img/logo.png" alt="" class="form__img">
            <h3 class="form__title">Регистрация</h3>
            <form action="" class="form">
                <label for="first_name" class="form__label">Фамилия</label>
                <input type="text" id="first_name" class="form__input" placeholder="Иванов">

                <label for="second_name" class="form__label">Имя</label>
                <input type="text" id="second_name" class="form__input" placeholder="Иванов">

                <label for="last_name" class="form__label">Отчество</label>
                <input type="text" id="last_name" class="form__input" placeholder="Иванов">

                <label for="email" class="form__label">Электронная почта</label>
                <input type="text" id="email" class="form__input" placeholder="info@1snab.ru">

                <label for="password" class="form__label">Пароль</label>
                <input type="password" id="password" class="form__input" placeholder="123456789...">
                <p class="form__input-comment">Длина пароля от 8 символов</p>

                <label for="c_password" class="form__label">Повторите пароль</label>
                <input type="password" id="c_password" class="form__input" placeholder="123456789...">
                
                <button class="btn btn-orange auth__btn">Регистрация</button>
            </form>
            <div class="form__links regPage">
                <router-link :to="{ name: 'auth' }" class="form__link">
                    Авторизация
                </router-link>
            </div>
        </div>
        <footer-pages />
    </div>
</template>
<script>
import HeaderPages from '@/components/HeaderPages.vue';
import FooterPages from '@/components/FooterPages.vue';

export default {
    components: {
        HeaderPages,
        FooterPages
    }
}
</script>
<style lang="">
    
</style>