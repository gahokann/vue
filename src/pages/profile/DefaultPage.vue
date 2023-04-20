<template lang="">
    <div class="page">
        <ContentContainer :status="getLoadPageStatus">
            <template #content>
                <navigation-profile></navigation-profile>
                <div class="profile__content__items">
                    <sidebar-profile></sidebar-profile>
                    <div class="profile__content">
                        <div class="d-flex justify-content-between">
                            <button
                                class="btn btn-outline-success link__back"
                                @click="$router.go(-1)"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="16"
                                    height="16"
                                    fill="currentColor"
                                    class="bi bi-arrow-left"
                                    viewBox="0 0 16 16"
                                >
                                    <path
                                        fill-rule="evenodd"
                                        d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"
                                    />
                                </svg>
                            </button>
                            <button
                                class="btn btn-outline-success link__update"
                                @click="reload"
                            >
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-clockwise" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M8 3a5 5 0 1 0 4.546 2.914.5.5 0 0 1 .908-.417A6 6 0 1 1 8 2v1z"/>
                            <path d="M8 4.466V.534a.25.25 0 0 1 .41-.192l2.36 1.966c.12.1.12.284 0 .384L8.41 4.658A.25.25 0 0 1 8 4.466z"/>
                            </svg>
                            </button>
                            <PreloaderLine 
                            v-if="getloadStatusAdmin == 'LOADING' || getLoadOrder == 'LOADING'"
                            >
                            </PreloaderLine>
                        </div>

                        <transition name="fade" mode="out-in">
                            <router-view></router-view>
                        </transition>
                    </div>
                </div>
            </template>
        </ContentContainer>
    </div>
</template>
<script>
import SidebarProfile from "@/components/SidebarProfile.vue";
import ContentContainer from "@/components/ContentContainer.vue";
import NavigationProfile from "@/components/NavigationProfile.vue";
import PreloaderLine from "@/components/PreloaderLine.vue";
import { mapActions, mapGetters } from "vuex";

export default {
    name: "DefaultPage",
    components: {
        SidebarProfile,
        ContentContainer,
        NavigationProfile,
        PreloaderLine
    },
    data() {
        return {
            err: true,
        };
    },
    computed: {
        ...mapGetters(["getUser", "getLoadPageStatus", "getloadStatusAdmin", "getLoadOrder"]),
    },

    methods: {
        ...mapActions(["setUser", "setOrder", 'setNotifications']),

        logOut() {
            this.logout();
            this.$router.push({ name: "main" });
        },

        reload() {
            this.setUser();
            this.setOrder();
            this.setNotifications();
        }
    },

    async created() {
        this.setUser();
        this.setOrder();
        this.setNotifications();
    },
};
</script>

