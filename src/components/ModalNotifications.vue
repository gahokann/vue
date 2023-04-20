<template lang="">
    <div class="modal" tabindex="-1">
        <div class="modal-dialog modal-dialog-centered modal-lg">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title">Уведомление</h5>
                    <button @click="closeModal" type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <p class="modal__company__name"><span class="bold">Статус</span>: {{ status_name }}</p>
                    <p class="modal__company__date"><span class="bold">Дата</span>: {{ date }}</p>
                    <p class="modal__company__fio"><span class="bold">Содержание</span>: {{ description }}</p>
                    <p class="modal__company__fio"><span class="bold">Инициатор</span>: {{ initiator }}</p>
                    <div v-if="order != null">
                        <p class="modal__company__fio"><span class="bold">Товар:</span> {{ order.title }}</p>
                        <p class="modal__company__fio"><span class="bold">Компания:</span> {{ order.company.name }}</p>
                        <p class="modal__company__fio"><span class="bold">Заказ:</span>
                            <router-link
                                        :to="{
                                            name: 'order',
                                            params: { id: order.id },
                                        }"
                                        class="not__link__order"
                                        style="color: #000; text-decoration: none"
                                    >
                                        Открыть
                            </router-link>
                        </p>
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
        status_name: {
            type: String,
        },
        date: {
            type: String
        },
        description: {
            type: String
        },
        initiator: {
            type: String
        },
        order: {
            type: Object,
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