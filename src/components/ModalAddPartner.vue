<template lang="">
    <div class="modal" tabindex="-1">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title">Добавление партнера</h5>
                    <button @click="closeModal" type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <form @submit.prevent='formSubmit'>
                        <div class="mb-3">
                            <label for="name" class="form-label">Название компании</label>
                            <input v-model="form.title" :class="$v.form.title.$error ? 'is-invalid' : ''" type="text" class="form-control" id="name">

                            <!-- Ошибки ври валидации -->
                            <p v-if="$v.form.title.$dirty && !$v.form.title.required" class="invalid-feedback">Обязательное поле</p> 
                            <!-- === -->
                        </div>
                        <div class="mb-3">
                            <label for="desc" class="form-label">Информация (кратко)</label>
                            <textarea :class="$v.form.description.$error ? 'is-invalid' : ''"  v-model="form.description" type="text" class="form-control" id="desc" style="max-height: 200px"></textarea>

                            <!-- Ошибки ври валидации -->
                            <p v-if="$v.form.description.$dirty && !$v.form.description.required" class="invalid-feedback">Обязательное поле</p> 
                            <p v-if="$v.form.description.$dirty && !$v.form.description.maxLength" class="invalid-feedback">Максимальное количество символов: 80</p> 
                            <!-- === -->
                        </div>
                        <div class="mb-3">
                            <label for="name" class="form-label">Логотип компании</label>
                            <input type="file" class="form-control" id="name">
                        </div>
                        <div class="modal-footer" style="padding: 10px 0 0 0">
                            <button @click="closeModal" type="button" class="btn btn-secondary" data-bs-dismiss="modal">Закрыть</button>
                            <button type="submit" class="btn btn-primary">Сохранить</button>
                        </div>
                    </form>
                </div>
                
            </div>
        </div>
    </div>
</template>
<script>
import { validationMixin } from 'vuelidate';
import { maxLength, required } from 'vuelidate/lib/validators';
import { mapActions } from 'vuex';

export default {
    mixins: [validationMixin],
    data() {
        return {
            form: {
                title: '',
                description: '',
            }
        }
    },
    validations: {
        form: {
            title: { required },
            description: { required, maxLength: maxLength(80) }
        }
    },
    methods: {
        ...mapActions(['partnerAdd']),
        closeModal() {
            this.$emit('close')
        },

        formSubmit() {
            this.$v.form.$touch()
            if (!this.$v.form.$error) {
                this.partnerAdd(this.form)
                this.$emit('close')
                setTimeout(() => {
                    this.$emit('toast')
                }, 1500);
            }
        }
        
    },

}
</script>
<style lang="">
    
</style>