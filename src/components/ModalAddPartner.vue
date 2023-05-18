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

                            <!-- <input v-model="form.file" type="file" class="form-control" name="file" id="name"> -->

                            <div ref="dropzone" class="border zone__dropa">
                                <div class="zona__drop__item">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-cloud-arrow-up" viewBox="0 0 16 16">
                                    <path fill-rule="evenodd" d="M7.646 5.146a.5.5 0 0 1 .708 0l2 2a.5.5 0 0 1-.708.708L8.5 6.707V10.5a.5.5 0 0 1-1 0V6.707L6.354 7.854a.5.5 0 1 1-.708-.708l2-2z"/>
                                    <path d="M4.406 3.342A5.53 5.53 0 0 1 8 2c2.69 0 4.923 2 5.166 4.579C14.758 6.804 16 8.137 16 9.773 16 11.569 14.502 13 12.687 13H3.781C1.708 13 0 11.366 0 9.318c0-1.763 1.266-3.223 2.942-3.593.143-.863.698-1.723 1.464-2.383zm.653.757c-.757.653-1.153 1.44-1.153 2.056v.448l-.445.049C2.064 6.805 1 7.952 1 9.318 1 10.785 2.23 12 3.781 12h8.906C13.98 12 15 10.988 15 9.773c0-1.216-1.02-2.228-2.313-2.228h-.5v-.5C12.188 4.825 10.328 3 8 3a4.53 4.53 0 0 0-2.941 1.1z"/>
                                    </svg>
                                    <p>Нажмите или поместите фотографию</p>
                                </div>

                            </div>

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
import Dropzone from "dropzone";

export default {
    mixins: [validationMixin],
    data() {
        return {
            form: {
                title: '',
                description: '',
            },
            dropzone: null,
        }
    },
    validations: {
        form: {
            title: { required },
            description: { required, maxLength: maxLength(80) },
        }
    },
    methods: {
        ...mapActions(['partnerAdd']),
        closeModal() {
            this.$emit('close')
        },

        formSubmit() {
            // console.log()
            this.$v.form.$touch()

            if (!this.$v.form.$error) {

                
                const formData = new FormData();
                const files = this.dropzone.getAcceptedFiles()

                files.forEach((file) => {
                    formData.append("file", file);
                });
                formData.append('title', this.form.title)
                formData.append('description', this.form.description)

                this.partnerAdd(formData)

                
                this.$emit('close')

                setTimeout(() => {
                    this.$emit('toast')
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