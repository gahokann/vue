<template lang="">
    <div class="index__profile">
        <div class="user__table__admin adminPage">
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
                    <p>Сотрудники</p>
                </div>
                <a @click="employees()" class="spinner__link">
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
                    <table class="table adminPageTable userPageTableAdmin">
                        <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Фамилия</th>
                                <th scope="col">Имя</th>
                                <th scope="col">Отчество</th>
                                <th scope="col">Почта</th>
                                <th scope="col">Номер телефона</th>
                                <!-- <th scope="col">Компания</th> -->
                                <th scope="col">Уровень доступа</th>
                                <th scope="col">Выдача доступа</th>
                                <th scope="col"></th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="user in searchEmployee" :key="user.id">
                                <td data-label="#">{{ user.id }}</td>
                                <td data-label="Фамилия">
                                    {{ user.first_name }}
                                </td>
                                <td data-label="Имя">{{ user.second_name }}</td>
                                <td data-label="Отчество">
                                    {{ user.last_name }}
                                </td>
                                <td data-label="Почта">{{ user.email }}</td>
                                <td data-label="Номер телефона">
                                    {{ user.phone }}
                                </td>
                                <!-- <td data-label="Компания">
                                    <p v-if="user.company == null">
                                        Отсутствует
                                    </p>
                                    <p v-if="user.company != null">
                                        {{ user.company.name }}
                                    </p>
                                </td> -->
                                <td data-label="Уровень доступа">
                                    {{ user.role_name }}
                                </td>
                                <td data-label="Выдача доступа" v-if="user.id != getUser.id && getUser.role_id >= user.role_id">
                                    <select @change="onChange($event, user.id)" class="form-select" >
                                        <option selected>Выберите доступ</option>
                                        <option 
                                        v-for="role in getRoles" :key="role.id" :value="role.id"
                                        
                                        >
                                            {{ role.name }}
                                        </option>
                                    </select>
                                </td>
                                <td v-else data-label="Выдача доступа">Доступ запрещён</td>
                                <td data-label="">
                                    <router-link
                                        :to="{ name: 'adminPerson',
                                        params: { id: user.id }, }"
                                        class="btn btn-orange"
                                        >Открыть</router-link
                                    >
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </template>
            </TableContentContainer>
        </div>
        <ToastMessage
            :class="isToasts"
            class="toast__message"
            @close="isToasts.active = false"
            :title="toastTitle"
            :description="getStatus"
        ></ToastMessage>
    </div>
</template>
<script>
import { mapActions, mapGetters } from "vuex";
import TableContentContainer from "@/components/TableContentContainer.vue";
import ToastMessage from "@/components/ToastMessage.vue";

export default {
    components: {
        TableContentContainer,
        ToastMessage
    },
    data() {
        return {
            isToasts: {
                active: false,
            },
            searchText: '',
            toastTitle: 'Выдача доступа'
        }
    },
    methods: {
        ...mapActions(['allRoles', 'employees', 'chagneRoleUser']),
        onChange(event, userID) {
            let value = event.target.value
            this.chagneRoleUser({value, userID})
            setTimeout(() => {
                this.isToasts.active = true;
            }, 1500)
        },
    },
    computed: {
        ...mapGetters(["getEmployees", "getloadStatusAdmin", "getRoles", "getStatus", "getUser"]),

        searchEmployee() {
            return this.$searchTable(this.getEmployees, this.searchText)
        }
    },
    created() {
        this.employees();
        this.allRoles();
    },
};
</script>

