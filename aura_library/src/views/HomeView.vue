<script setup>

    import DefaultLayout from '@/layouts/DefaultLayout.vue';

</script>

<template>
  <DefaultLayout>
    <main>
        <div class="slide">
            
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

        <div id="ver-mais">
            <RouterLink to="/lista-livros">Ver Mais</RouterLink>
        </div>
        
    </main>
  </DefaultLayout>
</template>

<style>
main{
    display: flex;
    padding: 40px 180px 80px 180px;
    flex-direction: column;
    justify-content: space-around;
}

.slide{
    background-color: #dfdfdf;
    width: 100%;
    height: 320px;
    border-radius: 10px;
}

.livros-home{
    margin-top: 60px;
    display: flex;
    width: 100%;
    justify-content: space-between;
}

.livro{
    width: 200px;
    height: 250px;
    background-color: #dfdfdf;
    border-radius: 10px;
}

#ver-mais{
    display: flex;
    justify-content: center;
    color: #ffff;
    align-items: center;
}

#ver-mais a{
    color: #ffff;
    text-decoration: none;
    background-color: #4AA0EF;
    padding: 10px 35px 10px 35px;
    border-radius: 50px;
    margin-top: 60px;
}

.conj-livro{
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 15px;
}

#genero{
    padding: 10px;  
}

.filtro-titulo{
    display: flex;
    justify-content: space-between;
}

</style>