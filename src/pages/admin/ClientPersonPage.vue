<template lang="">
    <div class="index__profile">
        <TableContentContainer :status="getLoadPageShow">
            <template #content>
                <div class="index__profile__items">
                    <div class="index__profile__item">
                        <img
                            :src="$url_photo + getShowUserPage.photo"
                            class="index__profile__item__logo"
                            alt=""
                        />
                        <p class="index__profile__name">
                            {{ getShowUserPage.second_name }}
                        </p>
                        <p class="index__profile__level">
                            {{ getShowUserPage.role_name }}
                        </p>
                        <p class="index__profile__company">
                            {{ getShowUserPage.company_name }}
                        </p>
                    </div>
                    <div class="index__profile__item">
                        <h3 class="index__profile__fio">
                            {{
                                `${getShowUserPage.first_name} ${getShowUserPage.second_name} ${getShowUserPage.last_name}`
                            }}
                        </h3>
                        <p class="index__profile__email">
                            {{ getShowUserPage.email }}
                        </p>
                        <p class="index__profile__phone">{{ getShowUserPage.phone }}</p>
                    </div>
                </div>
                <div class="index__profile__orders">
                    <div class="index__profile__orders__info">
                        <h3 class="index__profile__order__title">
                            Заказы пользователя
                        </h3>
                    </div>
                    <table class="table orderPageTable">
                        <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Товар</th>
                                <th scope="col">Статус заказа</th>
                                <th scope="col">Дата заказа</th>
                                <th scope="col">Сотрудник</th>
                                <th scope="col">Компания</th>
                                <th scope="col"></th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="order in getShowUserPage.orders" :key="order.id">
                                <td scope="row" data-label="#">{{ order.id }}</td>
                                <td data-label="Товар">{{ order.title }}</td>
                                <td data-label="Статус заказа">{{ order.status_name }}</td>
                                <td data-label="Дата доставки">
                                    {{ order.created_at }}
                                </td>
                                <td data-label="Сотрудник">
                                    {{ `${order.employee_firstName} ${order.employee_secondName[0]}.${order.employee_lastName[0]}.` }}    
                                </td>
                                <td data-label="Компания">{{ getShowUserPage.company_name }}</td>
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
                </div>
            </template>
        </TableContentContainer>
    </div>
</template>
<script>
import { mapActions, mapGetters } from "vuex";
import TableContentContainer from "@/components/TableContentContainer.vue";
export default {
    components: {
        TableContentContainer,
    },
    methods: {
        ...mapActions(["showUser"]),
    },
    computed: {
        ...mapGetters(["getShowUserPage", "getLoadPageShow"]),
    },
    data() {
        return {
            userID: this.$route.params.id,
        };
    },
    created() {
        this.showUser(this.userID);
    },
};
</script>
<style lang=""></style>
