<template lang="">
    <div class="index__profile">
        <div class="user__table__admin employeePage">
            <div class="search__div">
                <input class="form-control me-2" style="padding-right: 40px" id="inputSearch" name="search" placeholder="Поиск" aria-label="Поиск">
                <button class="btn btn__search" type="submit"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
                    <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"></path>
                </svg>
                </button>
            </div>
            <div class="index__profile__orders__info">
                <h3 class="index__profile__order__title mb-2 fs-3">Сотрудники</h3>
            </div>
            <div class="employee__page">
                <div class="employee__page__role">
                    <h5 class="page__role__title">Генеральный директор</h5>
                    <div class="page__role__items">
                        <div class="page__role__item" v-for="employee in getEmployees" :key="employee.id">
                            <div >
                                <img src="../../assets/img/1.jpg" alt="" class="page__role__item__img">
                                <p class="page__role__item__fio">Демошенков С.М.</p>
                                <p class="page__role__item__roleName">Генеральный Директор</p>
                                <router-link :to="{ name: 'adminPerson' }" class="btn btn-orange btn__employee">Открыть</router-link>
                            </div>
                        </div>
                    </div>
                    <h5 class="page__role__title">Главный бухгалтер</h5>
                    <div class="page__role__items">
                        <div class="page__role__item">
                            <img src="../../assets/img/1.jpg" alt="" class="page__role__item__img">
                            <p class="page__role__item__fio">Демошенков С.М.</p>
                            <p class="page__role__item__roleName">Генеральный Директор</p>
                            <router-link :to="{ name: 'adminPerson' }" class="btn btn-orange btn__employee">Открыть</router-link>
                        </div>
                    </div>
                    <h5 class="page__role__title">Бухгалтер</h5>
                    <div class="page__role__items">
                        <div class="page__role__item">
                            <img src="../../assets/img/1.jpg" alt="" class="page__role__item__img">
                            <p class="page__role__item__fio">Демошенков С.М.</p>
                            <p class="page__role__item__roleName">Генеральный Директор</p>
                            <router-link :to="{ name: 'adminPerson' }" class="btn btn-orange btn__employee">Открыть</router-link>
                        </div>
                    </div>
                    <h5 class="page__role__title">Менеджер</h5>
                    <div class="page__role__items">
                        <div class="page__role__item">
                            <img src="../../assets/img/1.jpg" alt="" class="page__role__item__img">
                            <p class="page__role__item__fio">Демошенков С.М.</p>
                            <p class="page__role__item__roleName">Генеральный Директор</p>
                            <router-link :to="{ name: 'adminPerson' }" class="btn btn-orange btn__employee">Открыть</router-link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import { mapActions, mapGetters } from 'vuex';

export default {
    methods: {
        ...mapActions(['allRoles', 'employees'])
    },
    computed: {
        ...mapGetters(['getRoles', 'getEmployees'])
    },
    created() {
        this.allRoles()
        this.employees()
    }
}
</script>
<style lang="">
    
</style>