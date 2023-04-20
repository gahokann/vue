<template lang="">
    <section>
        <slot v-if="status === $options.LoadingStatuses.Loading" name="loading">
        </slot>
        <slot v-else-if="status === $options.LoadingStatuses.Ready" name="content" />
        <slot v-else-if="status === $options.LoadingStatuses.Empty" name="empty">
            <p class="empty__data">На данный момент данные для отображения отсутствуют</p>
        </slot>
        <slot v-else-if="status === $options.LoadingStatuses.Error" name="error">
            <p class="error__data">Произошла ошибка при загрузке данных</p>
            <p v-if="$debug" class="error__data" style="color: #000">{{ getHttpCode }}</p>
            <p v-if="$debug" class="error__data" style="color: #000">{{ getErrorStatus }}</p>
        </slot>
    </section>
</template>
<script>
import { LoadingStatuses } from '@/types';
import { mapGetters } from 'vuex';
export default {
    components: {
        
    },
    computed: {
        ...mapGetters(['getErrorStatus', 'getHttpCode'])
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