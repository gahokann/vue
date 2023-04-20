<template lang="">
    <nav class="nav__profile__items">
                    <div class="nav__profile__item">
                        <!-- <router-link
                    :to="{ name: 'main' }"
                    class="nav__profile__title__link"
                > -->
                        <img
                            src="../assets/img/logo.png"
                            alt=""
                            class="nav__profile__logo"
                        />
                        <p class="nav__profile__title">
                            Первая Снабженческая Компания
                        </p>
                        <!-- </router-link> -->
                    </div>

                    <div class="nav__profile__item">
                        <router-link
                            :to="{ name: 'profileMain' }"
                            class="nav__profile__item__link"
                        >
                            <div class="nav__profile__info">
                                <img
                                    src="../assets/img/1.jpg"
                                    alt=""
                                    class="profile__info__logo"
                                />
                                <div class="profile__info__fio-company">
                                    <p class="profile__info__fio">
                                        {{
                                            `${getUser.first_name} ${getUser.second_name} ${getUser.last_name}`
                                        }}
                                    </p>
                                    <p
                                        class="profile__info__company"
                                        v-if="getUser.company != null"
                                    >
                                        {{ getUser.company.name }}
                                    </p>
                                </div>
                            </div>
                        </router-link>

                        <div class="nav__profile__icon">
                            <svg
                                @click="isNotifications.active =
                                                !isNotifications.active"
                                xmlns="http://www.w3.org/2000/svg"
                                width="16"
                                height="16"
                                fill="currentColor"
                                class="bi bi-bell bell__icon"
                                viewBox="0 0 16 16"
                            >
                                <path
                                    d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2zM8 1.918l-.797.161A4.002 4.002 0 0 0 4 6c0 .628-.134 2.197-.459 3.742-.16.767-.376 1.566-.663 2.258h10.244c-.287-.692-.502-1.49-.663-2.258C12.134 8.197 12 6.628 12 6a4.002 4.002 0 0 0-3.203-3.92L8 1.917zM14.22 12c.223.447.481.801.78 1H1c.299-.199.557-.553.78-1C2.68 10.2 3 6.88 3 6c0-2.42 1.72-4.44 4.005-4.901a1 1 0 1 1 1.99 0A5.002 5.002 0 0 1 13 6c0 .88.32 4.2 1.22 6z"
                                />
                            </svg>
                            <span v-if="getNotificationActivity.length != 0" class="position-absolute unread p-2 bg-danger border border-light rounded-circle" @click="isNotifications.active =
                                                !isNotifications.active"
                                >
                                <span class="visually-hidden">New alerts</span>
                            </span>
                            <svg
                                @click="logout()"
                                xmlns="http://www.w3.org/2000/svg"
                                width="16"
                                height="16"
                                fill="currentColor"
                                class="bi bi-box-arrow-right btn__logout"
                                viewBox="0 0 16 16"
                            >
                                <path
                                    fill-rule="evenodd"
                                    d="M10 12.5a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v2a.5.5 0 0 0 1 0v-2A1.5 1.5 0 0 0 9.5 2h-8A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h8a1.5 1.5 0 0 0 1.5-1.5v-2a.5.5 0 0 0-1 0v2z"
                                    fill="#f00"
                                />
                                <path
                                    fill-rule="evenodd"
                                    d="M15.854 8.354a.5.5 0 0 0 0-.708l-3-3a.5.5 0 0 0-.708.708L14.293 7.5H5.5a.5.5 0 0 0 0 1h8.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3z"
                                    fill="#f00"
                                />
                            </svg>
                        </div>
                        <div class="nav__profile__notifications" :class="isNotifications">
                            <div class="d-flex justify-content-between align-items-center">
                                <div class="d-flex" style="column-gap: 10px; align-items: center">
                                    <button @click="isNotifications.active = false" type="button" class="btn-close" aria-label="Close"></button>
                                    <h1 class="nav__profile__notifications__title">Уведомления</h1>
                                </div>
                                <p class="nav__profile__notifications__column">Непрочитаных уведомлений: {{ getNotificationActivity.length }}</p>
                                <p class="nav__profile__notifications__column no-text">10</p>
                            </div>
                            <hr>
                            
                            <div class="nav__profile__notifications__items">
                                <div v-if="getNotificationActivity.length">
                                    <div v-for="notif in getNotificationActivity" :key="notif.id" class="nav__profile__notifications__item">
                                        <p></p>
                                        <p class="profile__notifications__text">{{ notif.status_name }}</p>
                                        <p class="profile__notifications__descrription">{{ notif.description }}</p>
                                        <p class="profile__notifications__date">{{ notif.created_at }}</p>
                                        <button @click="isReadNotif(notif.id, notif.is_read)" type="button" class="btn-close" aria-label="Close"></button>
                                    </div>
                                </div>
                                <div v-else>
                                    <p>У вас нет новых уведомлений</p>
                                </div>
                                
                            </div>
                            <hr class="separator__not__end">
                            <div class="nav__profile__notifications__buttons">
                                <router-link  :to="{ name: 'notifications' }">
                                    <p @click="isNotifications.active = false">Показать все</p>
                                </router-link>
                            </div>
                        </div>
                    </div>
                </nav>
</template>
<script>
import { mapGetters, mapActions } from 'vuex';
export default {
    components: {
    },
    computed: {
        ...mapGetters(['getUser', 'getNotificationActivity'])
    },
    methods: {
        ...mapActions(["logout", 'setNotificationsRead']),
        isReadNotif(id, is_read) {
            if(is_read == 0)
                this.setNotificationsRead(id)
        }
    },
    data() {
        return {
            isNotifications: {
                active: false,
            }
        }
    }
}
</script>
<style lang="">
    
</style>