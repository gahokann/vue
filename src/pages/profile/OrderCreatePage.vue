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
                <div ref="dropzone" class="border zone__dropa rounded-2">
                    <div class="zona__drop__item">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-cloud-arrow-up" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M7.646 5.146a.5.5 0 0 1 .708 0l2 2a.5.5 0 0 1-.708.708L8.5 6.707V10.5a.5.5 0 0 1-1 0V6.707L6.354 7.854a.5.5 0 1 1-.708-.708l2-2z"/>
                        <path d="M4.406 3.342A5.53 5.53 0 0 1 8 2c2.69 0 4.923 2 5.166 4.579C14.758 6.804 16 8.137 16 9.773 16 11.569 14.502 13 12.687 13H3.781C1.708 13 0 11.366 0 9.318c0-1.763 1.266-3.223 2.942-3.593.143-.863.698-1.723 1.464-2.383zm.653.757c-.757.653-1.153 1.44-1.153 2.056v.448l-.445.049C2.064 6.805 1 7.952 1 9.318 1 10.785 2.23 12 3.781 12h8.906C13.98 12 15 10.988 15 9.773c0-1.216-1.02-2.228-2.313-2.228h-.5v-.5C12.188 4.825 10.328 3 8 3a4.53 4.53 0 0 0-2.941 1.1z"/>
                        </svg>
                        <p>Нажмите или поместите фотографию</p>
                    </div>

                </div>
                <p class="form__input-comment">Не обязательно</p>

                <button class="btn btn-orange auth__btn">Подтвердить</button>
            </form>
        </div>
        <ToastMessage :class="isToasts" class="toast__message" @close="isToasts.active = false"
            :title = toastTitle
            :description = getStatus
        ></ToastMessage>
    </div>
</template>
<script>
import { validationMixin } from 'vuelidate'
import { mapActions,mapGetters } from 'vuex'
import { required } from 'vuelidate/lib/validators'
import ToastMessage from '@/components/ToastMessage.vue';
import Dropzone from "dropzone";

export default {
    mixins: [validationMixin],
    components: {
        ToastMessage,
    },
    data() {
        return {
            form: {
                title: '',
                quantity: '',
                first_deleviryDate: '',
                photo: '',
                information: '',
            },
            isToasts: {
                active: false,
            },
            toastTitle: 'Оформление заказа',
            dropzone: null,
        }
    },
    computed: {
        ...mapGetters(['getStatus'])
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
                
                const formData = new FormData();
                const files = this.dropzone.getAcceptedFiles()
                files.forEach((file) => {
                    formData.append("file", file);
                });
                formData.append('title', this.form.title)
                formData.append('quantity', this.form.quantity)
                formData.append('first_deleviryDate', this.form.first_deleviryDate)

                this.createOrder(formData)
                setTimeout(() => {
                    this.isToasts.active = true
                }, 1500);
            }
        }
    },
    mounted() {
        this.dropzone = new Dropzone(this.$refs.dropzone, {
            url: "some",
            autoProcessQueue: false,
            createImageThumbnails: false,
            maxFiles: 1,
        });
    }
}
</script>
<style lang="">
    
</style>