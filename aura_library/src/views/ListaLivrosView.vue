<script setup>

import DefaultLayout from '@/layouts/DefaultLayout.vue';

</script>

<template>
    <DefaultLayout>
        <main>
        <div class="filtro-titulo">
            <h1>Livros</h1>
            <select name="genero" id="genero" >
                <option value="default">Filtrar por gênero</option>
                <option value="romance">Romance</option>
                <option value="terror">Terror</option>
                <option value="suspense">Suspense</option>
                <option value="ficcao">Ficção</option>
            </select>
        </div>

        <div class="livros-home">
            <div class="conj-livro">
                <div class="livro">

                </div>
                <p>Livro</p>
            </div>

            <div class="conj-livro">
                <div class="livro">

                </div>
                <p>Livro</p>
            </div>

            <div class="conj-livro">
                <div class="livro">

                </div>
                <p>Livro</p>
            </div>

            <div class="conj-livro">
                <div class="livro">

                </div>
                <p>Livro</p>
            </div>

        </div>

        <div class="livros-home">

            <div class="conj-livro">
                <div class="livro">

                </div>
                <p>Livro</p>
            </div>

            <div class="conj-livro">
                <div class="livro">

                </div>
                <p>Livro</p>
            </div>

            <div class="conj-livro">
                <div class="livro">

                </div>
                <p>Livro</p>
            </div>

            <div class="conj-livro">
                <div class="livro">

                </div>
                <p>Livro</p>
            </div>

        </div>

    </main>
    </DefaultLayout>
</template>

<style>

</style>