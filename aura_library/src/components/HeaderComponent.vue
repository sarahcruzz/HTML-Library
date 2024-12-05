<script>
import axios from "axios";

export default {
  data() {
    return {
      searchQuery: "", // Texto digitado na barra de pesquisa
      searchResults: [], // Resultados retornados pela API
    };
  },
  methods: {
    async handleSearch() {
      try {
        const response = await axios.get("http://localhost:3000/api/books/search", {
          params: { query: this.searchQuery },
        });
        this.searchResults = response.data;

        // Redireciona para uma página de resultados ou exibe diretamente
          // 
        console.log('funciona')
      } catch (error) {
        console.error("Erro ao buscar livros:", error);
      }
    },
  },
};
</script>


<template>
    <header>
        <nav>
            <div class="logo">
                <RouterLink to="/home"><img src="../assets/logo.png" alt="Logo Aura Library"></RouterLink>
            </div>
            
            <div class="conjunto2">
                <RouterLink to="/gerenciarBiblioteca">Gerenciar Biblioteca</RouterLink>
                <RouterLink to="/status">Status Empréstimo</RouterLink>
                <RouterLink to="/lista-livros">Ver Livros</RouterLink>
            </div>

            <div class="conjunto2">              
                <div class="barra-pesquisa">
                    <input
                        type="search"
                        class="pesquisa"
                        placeholder="O que está procurando hoje?"
                        v-model="searchQuery"
                        @keyup.enter="handleSearch"
                    />
                </div>
    
                <div class="icones">
                    <RouterLink to=""><i class="pi pi-shopping-bag"></i></RouterLink>
                    <RouterLink to="/login"><i class="pi pi-user"></i></RouterLink>
                </div>
            </div>
            
        </nav>
    </header>
</template>

<style>

header{
    background-color: #44749d;
}

nav{
    display: flex;
    justify-content: space-between;
    color: white;
    align-items: center;
    padding: 10px 50px;
    font-size: 24px;
}

.logo img{
    display: flex;
    height: 60px;
}

.conjunto1{
    display: flex;
    align-items: center;
    gap: 100px;
}

.conjunto2{
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 120px;
}

.conjunto2 a{
    text-decoration: none;
    color: white;
    font-size: 16px;
}

.barra-pesquisa input{
    display: flex;
    width: 350px;
    height: 30px;
    border: none;
    border-radius: 5px;
    padding: 15px;
}

.icones{
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 30px;
}

.icones i{
    color: #fff;
    font-size: 20px;
}



</style>