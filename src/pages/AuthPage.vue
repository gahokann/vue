<template lang="">
    <div class="page">
        <header-pages class="container" />
        <div class="form__block">
            <img src="../assets/img/logo.png" alt="" class="form__img">
            <h3 class="form__title">Авторизация</h3>
            <form class="form" @submit.prevent="formSubmit">
                <label for="email" class="form__label">Электронная почта</label>
                <input type="text" id="email" class="form__input" v-model="form.email" placeholder="info@1snab.ru">
                
                <label for="password" class="form__label">Пароль</label>
                <input type="password" id="password" v-model="form.password" class="form__input" placeholder="123456789...">
                <p class="form__input-comment">Длина пароля от 8 символов</p>
                <button type="submit" class="btn btn-orange auth__btn">Авторизация</button>
            </form>
            <div class="form__links">
                <router-link :to="{ name: 'reg' }" class="form__link">
                    Регистрация
                </router-link>
                <a href="#" class="form__link">Забыли пароль?</a>
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
            form: {
                email: '',
                password: '',
            },
            errors: []
        }
    },
    methods: {
        ...mapActions(['setToken', 'setUser']),
        formSubmit() {
            this.signIn()
        },
        async signIn() {
            this.$load(async() => {
                const data = (await this.$api.auth.auth({
                    email: this.form.email,
                    password: this.form.password
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