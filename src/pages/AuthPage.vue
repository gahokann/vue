<template lang="">
    <div class="page">
        <header-pages class="container" />
        <div class="form__block">
            <img src="../assets/img/logo.png" alt="" class="form__img">
            <h3 class="form__title">Авторизация</h3>
            <p v-if="getError" class=invalid__text>{{ getError }}</p>
            <form class="form" @submit.prevent="formSubmit">
                <label for="email" class="form__label">Электронная почта</label>
                <input type="text" id="email"  class="form__input " :class="$v.form.email.$error ? 'is-invalid' : ''" v-model="form.email" placeholder="info@1snab.ru">

                <!-- Ошибки ври валидации -->
                <p v-if="$v.form.email.$dirty && !$v.form.email.required" class="invalid-feedback">Обязательное поле</p> 
                <p v-if="$v.form.email.$dirty && !$v.form.email.email" class="invalid-feedback">Неверно указан адрес электронной почты</p> 
                <!-- === -->

                <label for="password" class="form__label">Пароль</label>
                <input type="password" id="password" :class="$v.form.password.$error ? 'is-invalid' : ''" v-model="form.password" class="form__input" placeholder="123456789...">
                <p class="form__input-comment">Длина пароля от 8 символов</p>

                <!-- Ошибки ври валидации -->
                <p v-if="$v.form.password.$dirty && !$v.form.password.required" class="invalid-feedback">Обязательное поле</p> 
                <p v-if="$v.form.password.$dirty && !$v.form.password.minLength" class="invalid-feedback">Минимальная длина: 8 символов</p> 
                <!-- === -->
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
import { mapActions, mapGetters } from 'vuex';
import { validationMixin } from 'vuelidate'
import { required, email, minLength } from 'vuelidate/lib/validators'
export default {
    components: {
        HeaderPages,
        FooterPages
    },
    mixins: [validationMixin],
    data() {
        return {
            form: {
                email: '',
                password: '',
            },
            errors: ''
        }
    },
    validations: {
        form: {
            email: { required, email },
            password: { required, minLength: minLength(8) }
        }
    },
    computed: {
        ...mapGetters(["getError"]),
    },
    methods: {
        ...mapActions(['authUser']),
        formSubmit() {
            this.$v.form.$touch()
            if (!this.$v.form.$error) {
                this.signIn()
            }

        },
        signIn() {
            let email = this.form.email
            let password = this.form.password
            this.authUser({email, password})
        }
    },
    
}
</script>
<style lang="">
    
</style>