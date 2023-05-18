<template lang="">
    <div class="index__profile">
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
        <div class="index__profile__items">
            <TableContentContainer :status="getLoadNotificationStatus">
                <template #content>
                    
                    <div class="index__notifications__items">
                        <div
                            v-for="notif in searchUser"
                            :key="notif.id"
                            class="index__notifications__item"
                            :class="notif.is_read == 1 ? 'read' : ''"
                        >
                            <div
                                class="d-flex justify-content-between align-items-center"
                            >
                                <div class="">
                                    <p
                                        class="index__notifications__item__title"
                                    >
                                        Уведомление
                                    </p>
                                    <p class="index__notifications__item__time">
                                        {{ notif.created_at }}
                                    </p>
                                </div>
                                <p class="d-flex align-items-center">
                                    <button
                                        @click="notDelete(notif.id)"
                                        type="button"
                                        class="btn-close"
                                        aria-label="Close"
                                    ></button>
                                </p>
                            </div>
                            <hr />
                            <p class="index__notifications__item__text">
                                {{ notif.status_name }}
                            </p>
                            <p class="index__notifications__item__description">
                                {{ notif.description }}
                            </p>

                            <a
                                class="index__notifications__item__link"
                                @click="
                                    (isModalOpen.active = !isModalOpen.active),
                                        setNotif(notif),
                                        isReadNotif(notif.id, notif.is_read)
                                "
                                >Подробнее</a
                            >
                        </div>
                    </div>
                </template>
            </TableContentContainer>
        </div>
        <ModalNotifications
            :class="isModalOpen"
            :status_name="notification.status_name"
            :date="notification.created_at"
            :description="notification.description"
            :initiator="notification.initiator"
            :order="notification.order"
            @close="isModalOpen.active = false"
        ></ModalNotifications>
    </div>
</template>
<script>
import { mapGetters, mapActions } from "vuex";
import ModalNotifications from "@/components/ModalNotifications.vue";
import TableContentContainer from "@/components/TableContentContainer.vue";
export default {
    name: "NotificationPage",
    components: {
        ModalNotifications,
        TableContentContainer,
    },
    computed: {
        ...mapGetters([
            "getUser",
            "getOrder",
            "getNotification",
            "getLoadNotificationStatus",
        ]),

        searchUser() {
            return this.$searchTable(this.getNotification, this.searchText)
        }
    },

    data() {
        return {
            isModalOpen: {
                active: false,
            },
            notification: [],
            searchText: '',
        };
    },
    methods: {
        ...mapActions([
            "setNotificationsRead",
            "notificationDelete",
            "updateNotifications",
        ]),
        setNotif(data) {
            this.notification = data;
        },

        isReadNotif(id, is_read) {
            if (is_read == 0) this.setNotificationsRead(id);
        },

        notDelete(id) {
            this.notificationDelete(id);
        },
    },
};
</script>
<style lang=""></style>
