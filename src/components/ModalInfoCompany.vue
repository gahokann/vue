<template lang="">
    <div class="modal" tabindex="-1">
        <div class="modal-dialog modal-dialog-centered modal-lg">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title">Компания: {{ nameCompany }}</h5>
                    <button @click="closeModal" type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                        <p class="modal__company__name"><span class="bold">Название компании</span>: {{ nameCompany }}</p>
                        <p class="modal__company__date"><span class="bold">Дата регистрации</span>: {{ dataReg }}</p>
                        <p class="modal__company__fio"><span class="bold">Представитель компании</span>: {{ `${first_name} ${second_name} ${last_name}` }}</p>
                        <p class="modal__company__fio"><span class="bold">Номер телефона</span>: {{ phone }}</p>
                        <p class="modal__company__fio"><span class="bold">ИНН</span>: {{ inn }}</p>
                        <p class="modal__company__status"><span class="bold">Статус</span>: {{ status }}</p>
                        <p class="modal__company__portal"><span class="bold">Интернет-портал</span>: {{ portal }}</p>
                        <p class="modal__company__desc"><span class="bold">Деятельность компании</span>: {{ job }}</p>
                        <div v-if="isChief" class="btns__company__status">
                            <button @click="statusCompany(cid, 2)" v-if="status_id == 1 || status_id == 3" class="btn btn-success">Одобрить</button>
                            <button @click="statusCompany(cid, 3)" v-if="status_id == 1" class="btn btn-danger" style="margin-left: 10px">Отклонить</button>
                            <button @click="statusCompany(cid, 4)" v-if="status_id == 2" class="btn btn-danger" style="margin-left: 10px">Заблокировать</button>
                            <button @click="statusCompany(cid, 2)" v-if="status_id == 4" class="btn btn-success" style="margin-left: 10px">Разблокировать</button>
                        </div>
                </div>
                <div class="modal-footer">
                    <button @click="closeModal" type="button" class="btn btn-secondary" data-bs-dismiss="modal">Закрыть</button>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import { mapActions, mapGetters } from 'vuex';

export default {
    props: {
        cid: {
            type: Number
        },
        nameCompany: {
            type: String,
        },
        dataReg: {
            type: String
        },
        first_name: {
            type: String,
        },
        second_name: {
            type: String,
        },
        last_name: {
            type: String,
        },
        phone: {
            type: String,
        },
        status: {
            type: String
        },
        portal: {
            type: String,
        },
        job: {
            type: String
        },
        status_id: {
            type: Number
        },
        inn: {
            type: String,
        }
    },
    computed: {
        ...mapGetters(['isChief'])
    },
    methods: {
        closeModal() {
            this.$emit('close')
        },

        ...mapActions(['companyStatus']),

        statusCompany(id, status) {
            this.companyStatus({ id, status })
            this.$emit('close')
            setTimeout(() => {
                this.$emit('toast')
            }, 1500);
            
        }
    }
}
</script>
<style lang="">
    
</style>