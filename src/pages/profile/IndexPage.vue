<template lang="">
    <div class="index__profile">
        <div class="index__profile__items">
            <div class="index__profile__item">
                <div class="index__profile__item__item">
                    <img
                    :src="$url_photo + getUser.photo"
                    class="index__profile__item__logo"
                        alt=""
                    />
                    <div class="changeimg">
                        <a href="#" @click="
                            isModalUser.active = !isModalUser.active
                        ">Изменить картинку</a>
                    </div>
                </div>
                <p class="index__profile__name">{{ getUser.second_name }}</p>
                <p class="index__profile__level">{{ getUser.role_name }}</p>
                <p
                    class="index__profile__company"
                    v-if="getUser.company != null"
                >
                    {{ getUser.company.name }}
                </p>
            </div>
            <div class="index__profile__item">
                <h3 class="index__profile__fio">
                    {{
                        `${getUser.first_name} ${getUser.second_name} ${getUser.last_name}`
                    }}
                </h3>
                <p class="index__profile__email">{{ getUser.email }}</p>
                <p class="index__profile__phone">{{ getUser.phone }}</p>
                <div class="index__profile__dostup">
                    <h3 class="profile__dostup__title">
                        Ваш уровень доступа: {{ getUser.role_name }}
                    </h3>
                    <p class="profile__dostup__text">{{ getUser.role_info }}</p>
                </div>
            </div>
        </div>
        <div class="index__profile__orders">
            <div class="index__profile__orders__info">
                <h3 class="index__profile__order__title">Активные заказы</h3>
                <router-link
                    v-if="isСustomer"
                    :to="{ name: 'orderCreate' }"
                    class="btn btn-orange"
                >
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
                    <tr v-for="order in getActiveOrder" :key="order.id">
                        <td scope="row" data-label="#">{{ order.id }}</td>
                        <td data-label="Товар">{{ order.title }}</td>
                        <td data-label="Статус заказа">
                            {{ order.status_name }}
                        </td>
                        <td data-label="Дата доставки">
                            {{ order.created_at }}
                        </td>
                        <td data-label="Сотрудник">
                            <p v-if="order.employee_firstName == null">
                                Не назначен
                            </p>
                            <p v-if="order.employee_firstName != null">
                                {{
                                    `${order.employee_firstName} ${order.employee_secondName[0]}.${order.employee_lastName[0]}.`
                                }}
                            </p>
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
        </div>
        <ToastMessage
            :class="isToasts"
            class="toast__message"
            @close="isToasts.active = false"
            :title="toastTitle"
            :description="getStatus"
        ></ToastMessage>
        <ModalImageUser
            :class="isModalUser"
            @toast="isToasts.active = true"
            @close="isModalUser.active = false"
        >
        </ModalImageUser>
    </div>
</template>
<script>
import { mapGetters } from "vuex";
import ToastMessage from "@/components/ToastMessage.vue";
import ModalImageUser from "@/components/ModalImageUser.vue";
export default {
    components: {
        ModalImageUser,
        ToastMessage
    },
    data() {
        return {
            isModalUser: {
                active: false,
            },
            isToasts: {
                active: false,
            },
            toastTitle: "Изменение картинки пользователя",
        }
    },
    computed: {
        ...mapGetters(["getUser", "getOrder", "getActiveOrder", "isСustomer", 'getStatus']),
    },
};
</script>
<style lang=""></style>
