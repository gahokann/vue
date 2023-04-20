<template lang="">
    <div class="page">
        <header-pages />
        <div class="form__block">
            <img src="../assets/img/logo.png" alt="" class="form__img" />
            <h3 class="form__title">Регистрация</h3>
            <form action="" class="form" @submit.prevent="formSubmit">
                <label for="first_name" class="form__label">Фамилия</label>
                <input
                    type="text"
                    id="first_name"
                    class="form__input"
                    placeholder="Иванов"
                    v-model="form.first_name"
                    :class="$v.form.first_name.$error ? 'is-invalid' : ''"
                />
                <!-- Ошибки ври валидации -->
                <p v-if="$v.form.first_name.$dirty && !$v.form.first_name.required" class="invalid-feedback">Обязательное поле</p> 
                <p v-if="$v.form.first_name.$dirty && !$v.form.first_name.minLength" class="invalid-feedback">Фамилия указана неверно</p> 
                <!-- === -->
                <label for="second_name" class="form__label">Имя</label>
                <input
                    type="text"
                    id="second_name"
                    class="form__input"
                    placeholder="Иванов"
                    v-model="form.second_name"
                    :class="$v.form.second_name.$error ? 'is-invalid' : ''"
                />

                <!-- Ошибки ври валидации -->
                <p v-if="$v.form.second_name.$dirty && !$v.form.second_name.required" class="invalid-feedback">Обязательное поле</p> 
                <p v-if="$v.form.second_name.$dirty && !$v.form.second_name.minLength" class="invalid-feedback">Имя указано неверно</p> 
                <!-- === -->

                <label for="last_name" class="form__label">Отчество</label>
                <input
                    type="text"
                    id="last_name"
                    class="form__input"
                    placeholder="Иванов"
                    v-model="form.last_name"
                    :class="$v.form.last_name.$error ? 'is-invalid' : ''"
                />

                <!-- Ошибки ври валидации -->
                <p v-if="$v.form.last_name.$dirty && !$v.form.last_name.required" class="invalid-feedback">Обязательное поле</p> 
                <p v-if="$v.form.last_name.$dirty && !$v.form.last_name.minLength" class="invalid-feedback">Отчество указано неверно</p> 
                <!-- === -->

                <label for="email" class="form__label">Электронная почта</label>
                <input
                    type="text"
                    id="email"
                    class="form__input"
                    placeholder="info@1snab.ru"
                    v-model="form.email"
                    :class="$v.form.email.$error ? 'is-invalid' : ''"
                />

                <!-- Ошибки ври валидации -->
                <p v-if="$v.form.email.$dirty && !$v.form.email.required" class="invalid-feedback">Обязательное поле</p> 
                <p v-if="$v.form.email.$dirty && !$v.form.email.email" class="invalid-feedback">Неверно указан адрес электронной почты</p> 
                <!-- === -->


                <label for="email" class="form__label">Номер телефона</label>
                <input
                    type="text"
                    id="phone"
                    class="form__input"
                    placeholder="+79998885522"
                    v-model="form.phone_number"
                    :class="$v.form.phone_number.$error ? 'is-invalid' : ''"
                />

                <!-- Ошибки ври валидации -->
                <p v-if="$v.form.phone_number.$dirty && !$v.form.phone_number.required" class="invalid-feedback">Обязательное поле</p> 
                <p v-if="$v.form.phone_number.$dirty && !$v.form.phone_number.minLength" class="invalid-feedback">Неверно указан номер телефона</p> 
                <p v-if="$v.form.phone_number.$dirty && !$v.form.phone_number.maxLength" class="invalid-feedback">Неверно указан номер телефона</p> 
                <!-- === -->

                <label for="date" class="form__label">Дата рождения</label>
                <input
                    type="date"
                    id="date"
                    class="form__input"
                    placeholder=""
                    v-model="form.date"
                    :class="$v.form.date.$error ? 'is-invalid' : ''"
                />

                <!-- Ошибки ври валидации -->
                <p v-if="$v.form.date.$dirty && !$v.form.date.required" class="invalid-feedback">Обязательное поле</p> 
                <!-- === -->

                <label for="password" class="form__label">Пароль</label>
                <input
                    type="password"
                    id="password"
                    class="form__input"
                    placeholder="123456789..."
                    v-model="form.password"
                    :class="$v.form.password.$error ? 'is-invalid' : ''"
                />
                <p class="form__input-comment">Длина пароля от 8 символов</p>

                <!-- Ошибки ври валидации -->
                <p v-if="$v.form.password.$dirty && !$v.form.password.required" class="invalid-feedback">Обязательное поле</p> 
                <p v-if="$v.form.password.$dirty && !$v.form.password.minLength" class="invalid-feedback">Минимальная длина: 8 символов</p> 
                <!-- === -->

                <label for="c_password" class="form__label"
                    >Повторите пароль</label
                >
                <input
                    type="password"
                    id="c_password"
                    class="form__input"
                    placeholder="123456789..."
                    v-model="form.c_password"
                    :class="$v.form.c_password.$error ? 'is-invalid' : ''"
                />

                <!-- Ошибки ври валидации -->
                <p v-if="$v.form.c_password.$dirty && !$v.form.c_password.required" class="invalid-feedback">Обязательное поле</p> 
                <p v-if="$v.form.c_password.$dirty && !$v.form.c_password.minLength" class="invalid-feedback">Минимальная длина: 8 символов</p> 
                <!-- === -->

                <button class="btn btn-orange auth__btn">Регистрация</button>
            </form>
            <div class="form__links regPage">
                <router-link :to="{ name: 'auth' }" class="form__link">
                    Авторизация
                </router-link>
            </div>
            <ToastMessage :class="isToasts" class="toast__message" @close="isToasts.active = false"
            :title = toastTitle
            :description = getStatus
            ></ToastMessage>
        </div>
        <footer-pages />
    </div>
</template>
<script>
import HeaderPages from "@/components/HeaderPages.vue";
import FooterPages from "@/components/FooterPages.vue";
import ToastMessage from '@/components/ToastMessage.vue';
import { mapActions, mapGetters } from "vuex";

import { validationMixin } from "vuelidate";
import { required, email, minLength, maxLength } from 'vuelidate/lib/validators'
export default {
    components: {
        HeaderPages,
        FooterPages,
        ToastMessage,
    },
    mixins: [validationMixin],
    data() {
        return {
            form: {
                first_name: "",
                second_name: "",
                last_name: "",
                email: "",
                phone_number: "",
                date: "",
                password: "",
                c_password: "",
            },
            error: '',
            isToasts: {
                active: false,
            },
            toastTitle: 'Регистрация',
        };
    },
    validations: {
        form: {
            first_name: {required, minLength: minLength(2)},
            second_name: {required, minLength: minLength(2)},
            last_name: {required, minLength: minLength(2)},
            email: {required, email},
            phone_number: {required, minLength: minLength(11), maxLength: maxLength(12)},
            date: {required},
            password: {required, minLength: minLength(8)},
            c_password: {required, minLength: minLength(8)},
        },
    },
    computed: {
        ...mapGetters(['getStatus'])
    },
    methods: {
        ...mapActions(['regUser']),
        formSubmit() {
            this.$v.form.$touch()
            if (!this.$v.form.$error) {
            if (this.form.password == this.form.c_password) {
                    this.regUser(this.form)
                    setTimeout(() => {
                        this.isToasts.active = true
                    }, 1000);
                }
            }

        },
        
    },
};
</script>
<style lang=""></style>
