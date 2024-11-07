<script setup>

</script>

<template>
    <header>
        <nav>
            <div class="conjunto1">
                <i class="pi pi-bars"></i>

                <div class="logo">
                    <RouterLink to="/"><img src="../assets/logo.png" alt="Logo Aura Library"></RouterLink>
                </div>
            </div>

            <div class="conjunto2">
                <div class="barra-pesquisa">
                    <input type="search" class="pesquisa" placeholder="O que está procurando hoje?">
                </div>
    
                <div class="icones">
                    <i class="pi pi-heart"></i>
                    <i class="pi pi-shopping-bag"></i>
                    <i class="pi pi-user"></i>
                </div>
            </div>
            
        </nav>
    </header>
</template>

<style>

header{
    background-color: #4AA0EF;
}

nav{
    display: flex;
    justify-content: space-between;
    color: white;
    align-items: center;
    padding: 10px 20px 10px 20px;
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

</style>