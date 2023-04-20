<template lang="">
    <div class="toast-container position-fixed bottom-0 end-0 p-3">
        <div
            id="liveToast"
            class="toast"
            role="alert"
        >
            <div class="toast-header">
                <img
                    src="/img/logo.ad4e60bf.png"
                    class="me-2 toast__img"
                    alt="..."
                />
                <strong class="me-auto">{{ title }}</strong>
                <button
                    type="button"
                    class="btn-close"
                    @click="closeModal"
                ></button>
            </div>
            <div class="toast-body">{{ description }}</div>
        </div>
    </div>
</template>
<script>
import { mapActions, mapGetters } from "vuex";
export default {
    methods: {
        ...mapActions(["nullStatus", "nullHttpCode"]),
        closeModal() {
            this.$emit("close");
            setTimeout(() => {
                this.nullStatus();
                this.nullHttpCode();
            }, 1500);
        },
    },
    computed: {
        ...mapGetters(["getHttpCode"]),
    },
    props: {
        title: {
            type: String,
        },

        description: {
            type: String,
        },
    },
};
</script>
<style lang=""></style>
