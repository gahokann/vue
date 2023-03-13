<template lang="">
    <div class="index__profile">
        <div class="user__table__admin adminPage">
            
            <div class="search__div">
                <input class="form-control me-2" style="padding-right: 40px" id="inputSearch" name="search" placeholder="Поиск" aria-label="Поиск">
                <button class="btn btn__search" type="submit"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
                    <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"></path>
                </svg>
                </button>
            </div>
            <div class="index__profile__orders__info">
                <h3 class="index__profile__order__title mb-2">Пользователи</h3>
            </div>
            <table class="table adminPageTable">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Фамилия</th>
                        <th scope="col">Имя</th>
                        <th scope="col">Отчество</th>
                        <th scope="col">Почта</th>
                        <th scope="col">Номер телефона</th>
                        <th scope="col">Компания</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td data-label="#">1</td>
                        <td data-label="Фамилия">Демошенков</td>
                        <td data-label="Имя">Сергей</td>
                        <td data-label="Отчество">Михайлович</td>
                        <td data-label="Почта">1@snab.ru</td>
                        <td data-label="Номер телефона">+79778598026</td>
                        <td data-label="Компания">ООО 'ПСК'</td>
                    </tr>
                    
                </tbody>
            </table>
        </div>
    </div>
</template>
<script>
export default {
    
}
</script>
<style lang="">
    
</style>