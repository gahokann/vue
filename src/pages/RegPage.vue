<template lang="">
    <div class="page">
        <header-pages />
        <div class="form__block">
            <img src="../assets/img/logo.png" alt="" class="form__img">
            <h3 class="form__title">Регистрация</h3>
            <form action="" class="form" @submit.prevent="formSubmit">
                <label for="first_name" class="form__label">Фамилия</label>
                <input type="text" id="first_name" class="form__input" placeholder="Иванов" v-model="first_name">

                <label for="second_name" class="form__label">Имя</label>
                <input type="text" id="second_name" class="form__input" placeholder="Иванов" v-model="second_name">

                <label for="last_name" class="form__label">Отчество</label>
                <input type="text" id="last_name" class="form__input" placeholder="Иванов" v-model="last_name">

                <label for="email" class="form__label">Электронная почта</label>
                <input type="text" id="email" class="form__input" placeholder="info@1snab.ru" v-model="email">

                <label for="date" class="form__label">Дата рождения</label>
                <input type="date" id="date" class="form__input" placeholder="" v-model="date">

                <label for="password" class="form__label">Пароль</label>
                <input type="password" id="password" class="form__input" placeholder="123456789..." v-model="password">
                <p class="form__input-comment">Длина пароля от 8 символов</p>

                <label for="c_password" class="form__label">Повторите пароль</label>
                <input type="password" id="c_password" class="form__input" placeholder="123456789..." v-model="c_password">
                
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
import { mapActions } from 'vuex';

export default {
    components: {
        HeaderPages,
        FooterPages
    },
    data() {
        return {
            first_name: '',
            second_name: '',
            last_name: '',
            email: '',
            date: '',
            password: '',
            c_password: ''
        }
    },
    methods: {
        ...mapActions(['setToken', 'setUser']),
        formSubmit() {
            if(this.password == this.c_password) {
                this.signUp()
            }
            else
            {
                console.error('Пароли не совпадают')
            }
        },
        async signUp() {
            this.$load(async() => {
                const data = (await this.$api.auth.reg({
                    email: this.email,
                    first_name: this.first_name,
                    second_name: this.second_name,
                    last_name: this.last_name,
                    date_birth: this.date,
                    password: this.password,
                    c_password: this.c_password
                })).data

                this.setUser(data.data.user)
                this.setToken(data.data.token)
                this.$router.push({name: 'profileMain'})
            })
        }
    }
}
</script>
<style lang="">
    
</style>