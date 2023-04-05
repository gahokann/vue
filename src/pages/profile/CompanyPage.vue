<template lang="">
    <div class="index__profile">
        <div v-if="getUser.company == null" class="form__block">
            <img src="../../assets/img/logo.png" alt="" class="form__img">
            <h3 class="form__title company">Подтверждение компании</h3>
            <form class="form" @submit.prevent="formCompany">
                <label for="name" class="form__label">Название компании</label>
                <input v-model="form.name" type="text" id="name" class="form__input" placeholder="ООО 'ПСК'" :class="$v.form.name.$error ? 'is-invalid' : ''">
                
                <!-- Ошибки ври валидации -->
                <p v-if="$v.form.name.$dirty && !$v.form.name.required" class="invalid-feedback">Обязательное поле</p> 
                <!-- === -->

                <label for="job" class="form__label">Деятельность компании</label>
                <textarea v-model="form.job" type="text" id="job" class="form__input text__area" placeholder="Компания занимается..." :class="$v.form.job.$error ? 'is-invalid' : ''" />

                <!-- Ошибки ври валидации -->
                <p v-if="$v.form.job.$dirty && !$v.form.job.required" class="invalid-feedback">Обязательное поле</p> 
                <!-- === -->

                <label for="portal" class="form__label">Интернет портал</label>
                <input v-model="form.portal" type="text" id="portal" class="form__input" placeholder="https://1snab.ru" :class="$v.form.portal.$error ? 'is-invalid' : ''">

                <!-- Ошибки ври валидации -->
                <p v-if="$v.form.portal.$dirty && !$v.form.portal.required" class="invalid-feedback">Обязательное поле</p> 
                <!-- === -->

                <p class="form__input-comment">Не обязательно</p>
                <button class="btn btn-orange auth__btn">Подтвердить</button>
            </form>
        </div>
        <div v-if="getUser.company != null">
            <div v-if="getUser.company.status_id == 1" class="form__block">
                <img src="../../assets/img/logo.png" alt="" class="form__img">
                <h3 class="form__title company">Подтверждение компании</h3>
                <p class="form__text">Ожидайте проверки вашей компании и ёё подветрждения.
    После подтверждения вы получите уведомление</p>
            </div>
            <div v-if="getUser.company.status_id == 2" class="form__block">
                <img src="../../assets/img/logo.png" alt="" class="form__img">
                <h3 class="form__title company">Подтверждение компании</h3>
                <p class="form__text">Ваша компания успешно подтверждена!</p>
            </div>
            <div v-if="getUser.company.status_id == 3" class="form__block">
                <img src="../../assets/img/logo.png" alt="" class="form__img">
                <h3 class="form__title company">Подтверждение компании</h3>
                <p class="form__text">Ваша компания отклонена!</p>
            </div>
            <div v-if="getUser.company.status_id == 4" class="form__block">
                <img src="../../assets/img/logo.png" alt="" class="form__img">
                <h3 class="form__title company">Подтверждение компании</h3>
                <p class="form__text">Ваша компания заблокирована!</p>
            </div>
        </div>
        <ToastMessage :class="isToasts" class="toast__message" @close="isToasts.active = false"
            :title = toastTitle
            :description = getStatus
        ></ToastMessage>
    </div>
</template>
<script>
import { validationMixin } from "vuelidate";
import { required } from "vuelidate/lib/validators";
import { mapActions, mapGetters } from "vuex";
import ToastMessage from '@/components/ToastMessage.vue';

export default {
    data() {
        return {
            form: {
                name: '',
                job: '',
                portal: '',
            },
            isToasts: {
                active: false,
            },
            toastTitle: 'Подтверждение компании',
        }
    },
    components: {
        ToastMessage,
    },
    computed: {
        ...mapGetters(['getUser', 'getStatus'])
    },
    mixins: [validationMixin],
    validations: {
        form: {
            name: { required },
            job: { required },
            portal: { required },
        },
    },
    methods: {
        ...mapActions(['companyAdd']),
        formCompany() {
            this.$v.form.$touch()
            if(!this.$v.form.$error) {
                this.companyAdd(this.form)
                setTimeout(() => {
                        this.isToasts.active = true
                }, 1200);
            }
        }
    }
}
</script>
<style lang="">
    
</style>