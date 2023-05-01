<template lang="">
    <div class="index__profile">
        <div class="user__table__admin allOrderPage">
            <div class="search__div">
                <input
                    class="form-control me-2"
                    style="padding-right: 40px"
                    id="inputSearch"
                    name="search"
                    placeholder="Поиск"
                    aria-label="Поиск"
                    v-model="searchText"
                />
            </div>
            <div class="index__profile__orders__info">
                <div class="index__profile__order__title">
                    <p>Все заказы</p>
                </div>
                <a @click="setOrderAll()" class="spinner__link">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        class="bi bi-arrow-clockwise"
                        viewBox="0 0 16 16"
                    >
                        <path
                            fill-rule="evenodd"
                            d="M8 3a5 5 0 1 0 4.546 2.914.5.5 0 0 1 .908-.417A6 6 0 1 1 8 2v1z"
                        />
                        <path
                            d="M8 4.466V.534a.25.25 0 0 1 .41-.192l2.36 1.966c.12.1.12.284 0 .384L8.41 4.658A.25.25 0 0 1 8 4.466z"
                        />
                    </svg>
                </a>
            </div>
            <TableContentContainer :status="getloadStatusAdmin">
                <template #content>
                    <table class="table orderAllPageTable">
                        <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Товар</th>
                                <th scope="col">Статус заказа</th>
                                <th scope="col">Дата заказа</th>
                                <th scope="col">Заказчик</th>
                                <th scope="col">Сотрудник</th>
                                <th scope="col">Компания</th>
                                <th scope="col"></th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="order in searchOrders" :key="order.id">
                                <td scope="row" data-label="#">
                                    {{ order.id }}
                                </td>
                                <td data-label="Товар">{{ order.title }}</td>
                                <td data-label="Статус заказа">
                                    {{ order.status_name }}
                                </td>
                                <td data-label="Дата доставки">
                                    <p v-if="order.last_deleviryDate == null">
                                        Не назначено
                                    </p>
                                    <p v-if="order.last_deleviryDate != null">
                                        {{ order.last_deleviryDate }}
                                    </p>
                                </td>
                                <td data-label="Заказчик">
                                    {{ `${order.user_firstName} ${order.user_secondName[0]}.${order.user_lastName[0]}.` }}
                                </td>
                                <td data-label="Сотрудник">
                                    <p v-if="order.employee_id == null">
                                        Не назначен
                                    </p>
                                    <p v-if="order.employee_id != null">
                                        {{ `${order.employee_firstName} ${order.employee_secondName[0]}.${order.employee_lastName[0]}.` }}
                                    </p>
                                </td>
                                <td data-label="Компания">
                                    {{ order.company.name }}
                                </td>
                                <td data-label="">
                                    <router-link
                                        :to="{
                                            name: 'order',
                                            params: { id: order.id },
                                        }"
                                        class="btn btn-orange"
                                    >
                                        Открыть
                                    </router-link>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </template>
            </TableContentContainer>
        </div>
    </div>
</template>
<script>
import { mapActions, mapGetters } from "vuex";
import TableContentContainer from "@/components/TableContentContainer.vue";

export default {
    data() {
        return {
            searchText: ''
        }
    },
    components: {
        TableContentContainer,
        
    },
    methods: {
        ...mapActions(["setOrderAll"]),
    },
    computed: {
        ...mapGetters(["getOrdersAll", "getloadStatusAdmin"]),
        searchOrders() {
            return this.$searchTable(this.getOrdersAll, this.searchText)
        }
    },
    created() {
        this.setOrderAll();
    },
};
</script>
<style lang=""></style>
