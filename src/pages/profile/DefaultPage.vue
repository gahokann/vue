<template lang="">
    <div class="page">
        <nav class="nav__profile__items">
            
                <div class="nav__profile__item">
                    <!-- <router-link
                        :to="{ name: 'main' }"
                        class="nav__profile__title__link"
                    > -->
                        <img
                            src="../../assets/img/logo.png"
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
                            src="../../assets/img/1.jpg"
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
                    <svg
                        @click="logOut()"
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
            </div>
        </nav>
        <div class="profile__content__items">
            <sidebar-profile></sidebar-profile>
            <div class="profile__content">
                <button class="btn btn-outline-success link__back" @click="$router.go(-1)">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-left" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"/>
                    </svg>
                </button>
                <transition name="fade" mode="out-in">
                    <router-view></router-view>
                </transition>
            </div>
        </div>
        <transition name="slide-fade">
            <PreloaderPage />
        </transition>
        
    </div>
</template>
<script>
import SidebarProfile from "@/components/SidebarProfile.vue";
import { mapActions, mapGetters } from "vuex";
import PreloaderPage from "../layouts/PreloaderPage.vue";

export default {
    name: "DefaultPage",
    components: {
        SidebarProfile,
        PreloaderPage,
    },
    data() {
        return {
            err: true,
        };
    },
    methods: {
        ...mapActions(["setUser", "logout", "setOrder"]),

        logOut() {
            this.logout();
            this.$router.push({ name: "main" });
        },
    },
    computed: {
        ...mapGetters(["getUser"]),
    },

    async created() {
        this.setUser();
        this.setOrder();
    }
};
</script>
