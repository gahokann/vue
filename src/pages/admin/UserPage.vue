<template lang="">
    <div class="index__profile">
        <div class="user__table__admin adminPage">
            
            <div class="search__div">
                <input class="form-control me-2" style="padding-right: 40px" id="inputSearch" name="search" placeholder="Поиск" aria-label="Поиск">
                <button class="btn btn__search" type="submit"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
                    <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"></path>
                </svg>
                </button>
            </div>
            <div class="index__profile__orders__info">
                <h3 class="index__profile__order__title mb-2">Пользователи</h3>
            </div>
            <table class="table adminPageTable userPageTableAdmin">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Фамилия</th>
                        <th scope="col">Имя</th>
                        <th scope="col">Отчество</th>
                        <th scope="col">Почта</th>
                        <th scope="col">Номер телефона</th>
                        <th scope="col">Компания</th>
                        <th scope="col">Уровень доступа</th>
                        <th scope="col"></th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="user in getUsers" :key="user.id">
                        <td data-label="#">{{ user.id }}</td>
                        <td data-label="Фамилия">{{ user.first_name }}</td>
                        <td data-label="Имя">{{ user.second_name }}</td>
                        <td data-label="Отчество">{{ user.last_name }}</td>
                        <td data-label="Почта">{{ user.email }}</td>
                        <td data-label="Номер телефона">{{ user.phone }}</td>
                        <td data-label="Компания">
                            <p v-if="user.company == null">Отсутствует</p>
                            <p v-if="user.company != null">{{ user.company.name }}</p>
                            
                        </td>
                        <td data-label="Уровень доступа">{{ user.role_name }}</td>
                        <td data-label=""><router-link :to="{name: 'adminClientPerson'}" class='btn btn-orange'>Открыть</router-link></td>
                    </tr>
                    
                </tbody>
            </table>
        </div>
    </div>
</template>
<script>
import { mapActions, mapGetters } from 'vuex';

export default {
    methods: {
        ...mapActions(['allUsers']),
    },
    computed: {
        ...mapGetters(['getUsers'])
    },
    created() {
        this.allUsers()
    }
}
</script>
<style lang="">
    
</style>