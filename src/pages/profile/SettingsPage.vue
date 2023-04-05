<template lang="">
    <div class="index__profile">
        <div class="settings__items">
            <div class="settings__item">
                <h3 class="settings__item__title">ФИО</h3>
                <p class="settings__item__fio">
                    {{
                        `${getUser.first_name} ${getUser.second_name} ${getUser.last_name}`
                    }}
                </p>
                <a
                    href="#"
                    @click="changeFio.active = !changeFio.active"
                    class="btn btn-orange"
                    >Изменить</a
                >
                <div class="form__settings" :class="changeFio">
                    
                    <form class="form settings" @submit.prevent="changeFormFio">
                        <label for="firstname" class="form__label"
                            >Фамилия</label
                        >
                        <input
                            type="text"
                            v-model.trim="formFio.first_name"
                            id="firstname"
                            class="form__input change"
                            placeholder="Иванов"
                            :class="$v.formFio.first_name.$error ? 'is-invalid' : ''"
                        />

                        <!-- Ошибки ври валидации -->
                        <p v-if="$v.formFio.first_name.$dirty && !$v.formFio.first_name.required" class="invalid-feedback">Обязательное поле</p> 
                        <p v-if="$v.formFio.first_name.$dirty && !$v.formFio.first_name.minLength" class="invalid-feedback">Неверно указана Фамилия</p> 
                        <!-- === -->

                        <label for="secondname" class="form__label">Имя</label>
                        <input
                            type="text"
                            id="secondname"
                            v-model.trim="formFio.second_name"
                            class="form__input change"
                            placeholder="Иван"
                            :class="$v.formFio.second_name.$error ? 'is-invalid' : ''"
                        />

                        <!-- Ошибки ври валидации -->
                        <p v-if="$v.formFio.second_name.$dirty && !$v.formFio.second_name.required" class="invalid-feedback">Обязательное поле</p> 
                        <p v-if="$v.formFio.second_name.$dirty && !$v.formFio.second_name.minLength" class="invalid-feedback">Неверно указано Имя</p> 
                        <!-- === -->


                        <label for="lastname" class="form__label"
                            >Отчество</label
                        >
                        <input
                            type="text"
                            id="lastname"
                            v-model.trim="formFio.last_name"
                            class="form__input change"
                            placeholder="Иванович"
                            :class="$v.formFio.last_name.$error ? 'is-invalid' : ''"
                        />

                        <!-- Ошибки ври валидации -->
                        <p v-if="$v.formFio.last_name.$dirty && !$v.formFio.last_name.required" class="invalid-feedback">Обязательное поле</p> 
                        <p v-if="$v.formFio.last_name.$dirty && !$v.formFio.last_name.minLength" class="invalid-feedback">Неверно указано Отчество</p> 
                        <!-- === -->
                        <button class="btn btn-orange btn__change">
                            Изменить
                        </button>
                    </form>
                </div>
            </div>
            <div class="settings__item">
                <h3 class="settings__item__title">Электронная Почта</h3>
                <p class="settings__item__fio">{{ getUser.email }}</p>
                <a
                    href="#"
                    @click="changeEmail.active = !changeEmail.active"
                    class="btn btn-orange"
                    >Изменить</a
                >
                <div class="form__settings" :class="changeEmail">
                    <form class="form settings" @submit.prevent="changeFormEmail">
                        <label for="password" class="form__label"
                            >Введите пароль</label
                        >
                        <input
                            type="password"
                            id="password"
                            v-model="formEmail.password"
                            class="form__input change"
                            placeholder="123456789..."
                            :class="$v.formEmail.password.$error ? 'is-invalid' : ''"
                        />

                        <!-- Ошибки ври валидации -->
                        <p v-if="$v.formEmail.password.$dirty && !$v.formEmail.password.required" class="invalid-feedback">Обязательное поле</p> 
                        <!-- === -->

                        <label for="email" class="form__label">Почта</label>
                        <input
                            type="email"
                            id="email"
                            class="form__input change"
                            v-model="formEmail.email"
                            placeholder="1@snab.ru"
                            :class="$v.formEmail.$error ? 'is-invalid' : ''"
                        />
                        
                        <!-- Ошибки ври валидации -->
                        <p v-if="$v.formEmail.email.$dirty && !$v.formEmail.email.required" class="invalid-feedback">Обязательное поле</p> 
                        <p v-if="$v.formEmail.email.$dirty && !$v.formEmail.email.email" class="invalid-feedback">Неверно указан адрес электронной почты</p> 
                        <!-- === -->

                        <button class="btn btn-orange btn__change">
                            Изменить
                        </button>
                    </form>
                </div>
            </div>
            <div class="settings__item">
                <h3 class="settings__item__title">Номер телефона</h3>
                <p class="settings__item__fio">{{ getUser.phone }}</p>
                <a
                    href="#"
                    @click="changePhone.active = !changePhone.active"
                    class="btn btn-orange"
                    >Изменить</a
                >
                <div class="form__settings" :class="changePhone">
                    <form @submit.prevent="changeFormPhone" class="form settings">
                        <label for="password2" class="form__label"
                            >Введите пароль</label
                        >
                        <input
                            type="password"
                            v-model="formPhone.password"
                            id="password2"
                            class="form__input change"
                            placeholder="123456789..."
                            :class="$v.formPhone.password.$error ? 'is-invalid' : ''"
                        />

                        <!-- Ошибки ври валидации -->
                        <p v-if="$v.formPhone.password.$dirty && !$v.formPhone.password.required" class="invalid-feedback">Обязательное поле</p> 
                        <!-- === -->


                        <label for="tel" class="form__label"
                            >Номер телефона</label
                        >
                        <input
                            type="text"
                            id="tel"
                            v-model="formPhone.phone_number"
                            class="form__input change"
                            placeholder="+78885552222"
                            :class="$v.formPhone.phone_number.$error ? 'is-invalid' : ''"
                        />

                        <!-- Ошибки ври валидации -->
                        <p v-if="$v.formPhone.phone_number.$dirty && !$v.formPhone.phone_number.required" class="invalid-feedback">Обязательное поле</p> 
                        <p v-if="$v.formPhone.phone_number.$dirty && !$v.formPhone.phone_number.minLength" class="invalid-feedback">Неверно указан номер телефона</p> 
                        <!-- === -->

                        <button class="btn btn-orange btn__change">
                            Изменить
                        </button>
                    </form>
                </div>
            </div>
            <div class="settings__item">
                <h3 class="settings__item__title">Пароль</h3>
                <p class="settings__item__fio">*******</p>
                <a
                    href="#"
                    @click="changePassword.active = !changePassword.active"
                    class="btn btn-orange"
                    >Изменить</a
                >
                <div class="form__settings" :class="changePassword">
                    <form
                        @submit.prevent="changeFormPassword"
                        class="form settings"
                    >
                        <label for="lastpassword" class="form__label"
                            >Старый пароль</label
                        >
                        <input
                            type="password"
                            id="lastpassword"
                            v-model="formPassword.old_password"
                            class="form__input change"
                            placeholder="123456789..."
                            :class="$v.formPassword.old_password.$error ? 'is-invalid' : ''"
                        />

                        <!-- Ошибки ври валидации -->
                        <p v-if="$v.formPassword.old_password.$dirty && !$v.formPassword.old_password.required" class="invalid-feedback">Обязательное поле</p> 
                        <!-- === -->

                        <label for="newpassword" class="form__label"
                            >Новый пароль</label
                        >
                        <input
                            type="password"
                            id="newpassword"
                            v-model="formPassword.new_password"
                            class="form__input change"
                            placeholder="123456789..."
                            :class="$v.formPassword.new_password.$error ? 'is-invalid' : ''"
                        />

                        <!-- Ошибки ври валидации -->
                        <p v-if="$v.formPassword.new_password.$dirty && !$v.formPassword.new_password.required" class="invalid-feedback">Обязательное поле</p> 
                        <p v-if="$v.formPassword.new_password.$dirty && !$v.formPassword.new_password.minLength" class="invalid-feedback">Минимальная длина: 8 символов</p> 
                        <!-- === -->

                        <label for="repassword" class="form__label"
                            >Повторите пароль</label
                        >
                        <input
                            type="password"
                            id="repassword"
                            v-model="formPassword.c_password"
                            class="form__input change"
                            placeholder="123456789..."
                            :class="$v.formPassword.c_password.$error ? 'is-invalid' : ''"
                        />

                        <!-- Ошибки ври валидации -->
                        <p v-if="$v.formPassword.c_password.$dirty && !$v.formPassword.c_password.required" class="invalid-feedback">Обязательное поле</p> 
                        <p v-if="$v.formPassword.c_password.$dirty && !$v.formPassword.c_password.minLength" class="invalid-feedback">Минимальная длина: 8 символов</p> 
                        <!-- === -->

                        <button class="btn btn-orange btn__change">
                            Изменить
                        </button>
                    </form>
                </div>
            </div>
            <ToastMessage :class="isToasts" class="toast__message" @close="isToasts.active = false"
            :title = toastTitle
            :description = getStatus
            ></ToastMessage>
        </div>
    </div>
</template>
<script>
import { mapGetters, mapActions } from "vuex";
import { validationMixin } from "vuelidate";
import { required, email, minLength } from "vuelidate/lib/validators";
import ToastMessage from "@/components/ToastMessage.vue";
export default {
    computed: {
        ...mapGetters(["getUser", "getStatus"]),
    },
    components: {
        ToastMessage
    },
    mixins: [validationMixin],
    data() {
        return {
            changeFio: {
                active: false,
            },
            changeEmail: {
                active: false,
            },
            changePhone: {
                active: false,
            },
            changePassword: {
                active: false,
            },

            formFio: {
                first_name: "",
                second_name: "",
                last_name: "",
            },
            formEmail: {
                password: "",
                email: "",
            },
            formPhone: {
                password: "",
                phone_number: "",
            },
            formPassword: {
                old_password: "",
                new_password: "",
                c_password: "",
            },
            isToasts: {
                active: false,
            },
            toastTitle: 'Настройки'
        };
    },
    validations: {
        formFio: {
            first_name: { required, minLength: minLength(2) },
            second_name: { required, minLength: minLength(2) },
            last_name: { required, minLength: minLength(2) },
        },

        formEmail: {
            password: { required },
            email: { required, email },
        },

        formPhone: {
            password: { required },
            phone_number: { required, minLength: minLength(12) },
        },

        formPassword: {
            old_password: { required },
            new_password: { required, minLength: minLength(8) },
            c_password: { required, minLength: minLength(8) },
        },
    },
    methods: {
        ...mapActions(['fioChange', 'emailChange', 'phoneChange', 'passwordChange']),

        changeFormFio() {
            this.$v.formFio.$touch()
            if (!this.$v.formFio.$error) {
                this.fioChange(this.formFio)
                setTimeout(() => {
                    this.isToasts.active = true
                }, 1500);
            }
        },

        changeFormEmail() {
            this.$v.formEmail.$touch()
            if (!this.$v.formEmail.$error) {
                this.emailChange(this.formEmail)
                setTimeout(() => {
                    this.isToasts.active = true
                }, 1500);
            }
        },

        changeFormPhone() {
            this.$v.formPhone.$touch()
            if (!this.$v.formPhone.$error) {
                this.phoneChange(this.formPhone)
                setTimeout(() => {
                    this.isToasts.active = true
                }, 1500);
            }
        },

        changeFormPassword() {
            this.$v.formPassword.$touch()
            if (!this.$v.formPassword.$error) {
                this.passwordChange(this.formPassword)
                setTimeout(() => {
                    this.isToasts.active = true
                }, 1500);
            }
        },
        
    },
};
</script>
<style lang=""></style>
