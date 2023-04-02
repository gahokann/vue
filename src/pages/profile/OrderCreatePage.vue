<template lang="">
    <div class="index__profile">
        <div class="form__block">
            <img src="../../assets/img/logo.png" alt="" class="form__img">
            <h3 class="form__title company">Оформление заказа</h3>
            <form action="" class="form " @submit.prevent="formSubmit">
                <label for="name" class="form__label">Название товара</label>
                <input v-model="form.title" type="text" id="name" class="form__input" placeholder="Диски отрезные" :class="$v.form.title.$error ? 'is-invalid' : ''">

                <!-- Ошибки ври валидации -->
                <p v-if="$v.form.title.$dirty && !$v.form.title.required" class="invalid-feedback">Обязательное поле</p> 
                <!-- === -->

                <label for="number" class="form__label">Количество товара</label>
                <input v-model="form.quantity" type="number" id="number" class="form__input" placeholder="0" min="0" :class="$v.form.quantity.$error ? 'is-invalid' : ''">

                <!-- Ошибки ври валидации -->
                <p v-if="$v.form.quantity.$dirty && !$v.form.quantity.required" class="invalid-feedback">Обязательное поле</p> 
                <!-- === -->

                <label for="date" class="form__label">Предварительная дата доставки</label>
                <input v-model="form.first_deleviryDate" type="date" id="date" class="form__input" placeholder="01.01.2023" :class="$v.form.first_deleviryDate.$error ? 'is-invalid' : ''"/>

                <!-- Ошибки ври валидации -->
                <p v-if="$v.form.first_deleviryDate.$dirty && !$v.form.first_deleviryDate.required" class="invalid-feedback">Обязательное поле</p> 
                <!-- === -->

                <label for="text" class="form__label">Дополнительная информация</label>
                <textarea v-model="form.information" type="number" id="text" class="form__input textarea" placeholder="..." />

                <label for="file" class="form__label">Изображение</label>
                <input type="file" class="form-control" id="name">
                <p class="form__input-comment">Не обязательно</p>

                <button class="btn btn-orange auth__btn">Подтвердить</button>
            </form>
        </div>
    </div>
</template>
<script>
import { validationMixin } from 'vuelidate'
import { mapActions } from 'vuex'
import { required } from 'vuelidate/lib/validators'

export default {
    mixins: [validationMixin],
    data() {
        return {
            form: {
                title: '',
                quantity: '',
                first_deleviryDate: '',
                photo: '',
                information: '',
            }
        }
    },
    validations: {
        form: {
            title: {required},
            quantity: {required},
            first_deleviryDate: {required},
        }
    },
    methods: {
        ...mapActions(['createOrder']),
        formSubmit() {
            this.$v.form.$touch()
            if(!this.$v.form.$error) {
                this.createOrder(this.form)
            }
        }
    }
}
</script>
<style lang="">
    
</style>