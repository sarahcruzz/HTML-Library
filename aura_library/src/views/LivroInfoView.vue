<script setup>

import DefaultLayout from '@/layouts/DefaultLayout.vue';

</script>

<template>
    <DefaultLayout>
        <div class="conj-livro-unico">
            <img src="../assets/livro.jpg" alt="">

            <div class="info-livro">
                <h1>Lendas Japonesas</h1>

                <span class="genero-estrelas">
                    <p>Gênero: Contos e Fantasia</p>
                    <span class="estrelinhas">
                        <i class="pi pi-star"></i>
                        <i class="pi pi-star"></i>
                        <i class="pi pi-star"></i>
                        <i class="pi pi-star"></i>
                        <i class="pi pi-star"></i>
                    </span>
                </span>

                <span class="info-detalhada">
                    <p>ISBN: 123456789</p>
                    <p>Publicado em: 2020</p>
                    <p>Autor: Loputyn</p>
                </span>

                <span class="descricao-livro">
                    <p>"Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident odit unde quod repellendus inventore deserunt, animi laudantium optio fugit ipsam aperiam repudiandae voluptas? Beatae quaerat debitis culpa praesentium impedit ullam. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quibusdam maxime unde neque aperiam! Voluptatibus harum ad atque quisquam itaque deleniti natus hic? Consequatur, voluptate voluptas vero deleniti dolor iure ut."</p>
                </span>

                <div class="emprestar-favoritar">
                    <div class="btn-eptmo-fav">
                        <i class="pi pi-book"></i>
                        <button type="submit">Emprestar</button>
                    </div>
                    

                    <button type="submit">Favoritar</button>
                </div>


            </div>
        </div>
    </DefaultLayout>

</template>

<style scoped>

.info-livro{
    width: 50%;
}

.conj-livro-unico{
    display: flex;
    padding: 30px;
}

.conj-livro-unico img{
    height: 500px;
}

.genero-estrelas{
    display: flex;
    justify-content: space-between;
}

.info-detalhada{
    display: flex;
    width: 100%;
    justify-content: space-around;
    gap: 80px;
}
</style>