<template lang="">
    <div class="index__profile">
        <TableContentContainer :status="getLoadPageShow">
            <template #content>
                <div class="index__profile__items">
                    <div class="index__profile__item">
                        <img
                            :src="$url_photo + getShowEmployeePage.photo"
                            class="index__profile__item__logo"
                            alt=""
                        />
                        <p class="index__profile__name">
                            {{ getShowEmployeePage.second_name }}
                        </p>
                        <p class="index__profile__level">
                            {{ getShowEmployeePage.role_name }}
                        </p>
                        <p
                            v-if="getShowEmployeePage.company_name != null"
                            class="index__profile__company"
                        >
                            {{ getShowEmployeePage.company_name }}
                        </p>
                        <p v-else class="index__profile__company">Не указана</p>
                    </div>
                    <div class="index__profile__item">
                        <h3 class="index__profile__fio">
                            {{
                                `${getShowEmployeePage.first_name} ${getShowEmployeePage.second_name} ${getShowEmployeePage.last_name}`
                            }}
                        </h3>
                        <p class="index__profile__email">
                            {{ getShowEmployeePage.email }}
                        </p>
                        <p class="index__profile__phone">
                            {{ getShowEmployeePage.phone }}
                        </p>
                    </div>
                </div>
                <div class="index__profile__orders">
                    <div class="index__profile__orders__info">
                        <h3 class="index__profile__order__title">
                            Заказы в работе
                        </h3>
                    </div>
                    <table class="table orderPageTable">
                        <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Товар</th>
                                <th scope="col">Статус заказа</th>
                                <th scope="col">Дата заказа</th>
                                <th scope="col">Заказчик</th>
                                <th scope="col">Компания</th>
                                <th scope="col"></th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr
                                v-for="order in getShowEmployeePage.orders"
                                :key="order.id"
                            >
                                <td scope="row" data-label="#">
                                    {{ order.id }}
                                </td>
                                <td data-label="Товар">{{ order.title }}</td>
                                <td data-label="Статус заказа">
                                    {{ order.status_name }}
                                </td>
                                <td data-label="Дата доставки">
                                    {{ order.created_at }}
                                </td>
                                <td data-label="Заказчик">
                                    {{
                                        `${order.employee_firstName} ${order.employee_secondName[0]}.${order.employee_lastName[0]}.`
                                    }}
                                </td>
                                <td data-label="Компания">ООО "ПСК"</td>
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
import TableContentContainer from "@/components/TableContentContainer.vue";
import { mapActions, mapGetters } from "vuex";
export default {
    components: {
        TableContentContainer,
    },
    methods: {
        ...mapActions(["showEmployee"]),
    },
    computed: {
        ...mapGetters(["getShowEmployeePage", "getLoadPageShow"]),
    },
    data() {
        return {
            userID: this.$route.params.id,
        };
    },
    created() {
        this.showEmployee(this.userID);
    },
};
</script>
<style lang=""></style>
