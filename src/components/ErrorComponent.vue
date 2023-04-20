<template lang="">
    <div class="notfound">
        <div class="error">
            <div class=" align-self-center">
                <h1>{{ getHttpCode }}</h1>
                <h2>Ошибка!</h2>
                <p v-if="$debug">
                    {{ getErrorStatus }}
                </p>
                <p v-if="!$debug">
                    Произошла ошибка на сервере! Команда разработчиков уже работает над решением проблемы!
                </p>
                <router-link
                    :to="{
                        name: 'main',
                    }"
                    class="btn btn-outline-success mt-2"
                >
                    Главная
                </router-link>
            </div>
        </div>
    </div>
</template>
<script>
import { mapGetters } from 'vuex';

export default {
    computed: {
        ...mapGetters(['getHttpCode', 'getErrorStatus'])
    }
};
</script>
<style lang="css">
.notfound {
    background-color: #fff;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 9999;
    transition: all 0.5s;
}
.error {
    display: flex;
    height: 100%;
    width: 100%;
    justify-content: center;
    align-items: center;
    font-size: 28px;
    flex-direction: column;
}
</style>
