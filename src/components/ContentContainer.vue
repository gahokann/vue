<template lang="">
    <section>
        <slot v-if="status === $options.LoadingStatuses.Loading" name="loading">
            <PreloaderPage />
        </slot>
        <slot v-else-if="status === $options.LoadingStatuses.Ready" name="content" />
        <slot v-else-if="status === $options.LoadingStatuses.Empty" name="empty">
            <p>Нет данных для отображения</p>
        </slot>
        <slot v-else-if="status === $options.LoadingStatuses.Error" name="error">
            <ErrorComponent></ErrorComponent>
        </slot>
    </section>
</template>
<script>
import PreloaderPage from '../pages/layouts/PreloaderPage.vue'
import ErrorComponent from './ErrorComponent.vue';
import { LoadingStatuses } from '@/types';
export default {
    components: {
        PreloaderPage,
        ErrorComponent,
    },
    props: {
        status: {
            type: String,
            required: true,
            validator: function (value) {
                return Object.values(LoadingStatuses).includes(value);
            }
        }
    },
    LoadingStatuses
}
</script>
<style lang="">
    
</style>