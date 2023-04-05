<template lang="">
    <div class="index__profile">
        <div class="user__table__admin allOrderPage">
            <div class="index__profile__orders__info">
                <h3 class="index__profile__order__title">
                    Заказ: #{{ getOrderUser.id }}
                </h3>
            </div>
            <div class="order__block">
                <div class="order__block__info__items">
                    <div class="order__block__info__item">
                        <h3 class="info__item__title">{{ getOrderUser.title }}</h3>
                        <p class="info__item__date">{{ getOrderUser.created_at }}</p>
                        <p class="order__block__info__company">Компания: {{ getOrderUser.company.name }}</p>
                    </div>
                        <div class="order__block__info__item">
                            <div @click="isModalInfoEmployeeOpen.active = !isModalInfoEmployeeOpen.active" class="sotr">
                                <h4 class="info__item__sotr">Сотрудник</h4>
                                <div class="info__item__fio">Иванов Иван Иванович</div>
                            </div>
                            <img @click="isModalInfoEmployeeOpen.active = !isModalInfoEmployeeOpen.active" src="../../assets/img/1.jpg" alt="" class="info__item__img">
                            <a @click="isModalChangeOpen.active = !isModalChangeOpen.active" class="btn__settings__order">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-gear" viewBox="0 0 16 16">
                                <path d="M8 4.754a3.246 3.246 0 1 0 0 6.492 3.246 3.246 0 0 0 0-6.492zM5.754 8a2.246 2.246 0 1 1 4.492 0 2.246 2.246 0 0 1-4.492 0z"/>
                                <path d="M9.796 1.343c-.527-1.79-3.065-1.79-3.592 0l-.094.319a.873.873 0 0 1-1.255.52l-.292-.16c-1.64-.892-3.433.902-2.54 2.541l.159.292a.873.873 0 0 1-.52 1.255l-.319.094c-1.79.527-1.79 3.065 0 3.592l.319.094a.873.873 0 0 1 .52 1.255l-.16.292c-.892 1.64.901 3.434 2.541 2.54l.292-.159a.873.873 0 0 1 1.255.52l.094.319c.527 1.79 3.065 1.79 3.592 0l.094-.319a.873.873 0 0 1 1.255-.52l.292.16c1.64.893 3.434-.902 2.54-2.541l-.159-.292a.873.873 0 0 1 .52-1.255l.319-.094c1.79-.527 1.79-3.065 0-3.592l-.319-.094a.873.873 0 0 1-.52-1.255l.16-.292c.893-1.64-.902-3.433-2.541-2.54l-.292.159a.873.873 0 0 1-1.255-.52l-.094-.319zm-2.633.283c.246-.835 1.428-.835 1.674 0l.094.319a1.873 1.873 0 0 0 2.693 1.115l.291-.16c.764-.415 1.6.42 1.184 1.185l-.159.292a1.873 1.873 0 0 0 1.116 2.692l.318.094c.835.246.835 1.428 0 1.674l-.319.094a1.873 1.873 0 0 0-1.115 2.693l.16.291c.415.764-.42 1.6-1.185 1.184l-.291-.159a1.873 1.873 0 0 0-2.693 1.116l-.094.318c-.246.835-1.428.835-1.674 0l-.094-.319a1.873 1.873 0 0 0-2.692-1.115l-.292.16c-.764.415-1.6-.42-1.184-1.185l.159-.291A1.873 1.873 0 0 0 1.945 8.93l-.319-.094c-.835-.246-.835-1.428 0-1.674l.319-.094A1.873 1.873 0 0 0 3.06 4.377l-.16-.292c-.415-.764.42-1.6 1.185-1.184l.292.159a1.873 1.873 0 0 0 2.692-1.115l.094-.319z"/>
                                </svg>
                            </a>
                        </div>
                </div>
                <div class="order__block__info">
                    <p class="order__block__info__column">Количество продукта: {{ getOrderUser.quantity }}штук</p>
                    <p class="order__block__info__datePred">Предварительная дата доставки: {{ getOrderUser.first_deleviryDate  }}</p>
                    <p class="order__block__info__date">Дата доставки: {{ getOrderUser.last_deleviryDate }}</p>
                    <p class="order__block__info__description">{{ getOrderUser.information }}</p>
                    <p class="order__block__info__img">Картинка: Отсутствует</p>
                </div>
            </div>
            <ModalChangeOrder :class="isModalChangeOpen" @close="isModalChangeOpen.active = false" :orderNumber="orderNumber"></ModalChangeOrder>
            <ModalInfoEmployee :class="isModalInfoEmployeeOpen" @close="isModalInfoEmployeeOpen.active = false" 
            :orderNumber="orderNumber"
            :firstName="person.firstName"
            :secondName="person.secondName"
            :lastName="person.lastName"
            :roleName="person.roleName"
            :email="person.email"
            :phone="person.phone"

            ></ModalInfoEmployee>
           
        </div>
    </div>
</template>
<script>
import ModalChangeOrder from '@/components/ModalChangeOrder.vue';
import ModalInfoEmployee from '@/components/ModalInfoEmployee.vue';
import { mapActions, mapGetters } from 'vuex';
export default {
    components: {
        ModalChangeOrder,
        ModalInfoEmployee
    },
    data() {
        return {
            isModalChangeOpen: {
                active: false,
            },
            isModalInfoEmployeeOpen: {
                active: false,
            },
            orderNumber: 1250,
            person: {
                firstName: "Демошенков",
                secondName: "Сергей",
                lastName: "Михайлович",
                roleName: "Модератор",
                email: "info@1snab.ru",
                phone: "+79778598026"
            }, 
            orderId: this.$route.params.id
        }
    },
    computed: {
        ...mapGetters(['getOrderUser'])
    },
    methods: {
        ...mapActions(['setOrderUser'])
    },
    created() {
        this.setOrderUser(this.orderId)
    }
}
</script>
<style lang="">
    
</style>