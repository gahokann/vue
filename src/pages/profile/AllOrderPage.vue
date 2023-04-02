<template lang="">
    <div class="index__profile">
        <div class="user__table__admin allOrderPage">
            <div class="search__div">
                <input class="form-control me-2" style="padding-right: 40px" id="inputSearch" name="search" placeholder="Поиск" aria-label="Поиск">
                <button class="btn btn__search" type="submit"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
                    <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"></path>
                </svg>
                </button>
            </div>
            <div class="index__profile__orders__info">
                <h3 class="index__profile__order__title">Все заказы</h3>
                <router-link :to="{ name: 'orderCreate' }" class="btn btn-orange">
                Сделать заказ
                </router-link>
            </div>
            <table class="table orderPageTable">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Товар</th>
                        <th scope="col">Статус заказа</th>
                        <th scope="col">Дата заказа</th>
                        <th scope="col">Сотрудник</th>
                        <th scope="col"></th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="order in getOrder" :key="order.id">
                        <td scope="row" data-label="#">{{ order.id }}</td>
                        <td data-label="Товар">{{ order.title }}</td>
                        <td data-label="Статус заказа">{{ order.status_name }}</td>
                        <td data-label="Дата заказа">{{ order.created_at }}</td>
                        <td data-label="Сотрудник" >
                            <p v-if="order.employee_firstName == null">Не назначен</p>
                            <p v-if="order.employee_firstName != null">{{ order.employee_firstName }}</p>
                        </td>
                        <td data-label="">
                            <a href="#" class='btn btn-orange'>Открыть</a>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>
<script>

import { mapGetters } from 'vuex';

export default {
    name: 'allOrderPage',
    methods: {
    },
    computed: {
        ...mapGetters(['getOrder'])
    }
}
</script>
<style lang="">
    
</style>