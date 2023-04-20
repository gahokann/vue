<template lang="">
    <div class="notfound">
        <div class="error">
            <div class="col-md-6 align-self-center">
                <h1>404</h1>
                <h2>Ошибка! Данная страница не найдена!</h2>
                <p>
                    Данная страница не существует. Пожалуйста, перейдите на существующую страницу.
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
export default {};
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
}
</style>
