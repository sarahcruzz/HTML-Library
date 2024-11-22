<script>
    export default {
        name: 'HamburgerMenu',
        data() {
            return {
            isOpen: false,
            };
        },
        methods: {
            toggleMenu() {
            this.isOpen = !this.isOpen;
            },
        },
    }
</script>

<template>
    <header>
        <nav>
            <div class="conjunto1">
                <button class="hamburger" @click="toggleMenu">
                    <i class="pi pi-bars">
                    
                        <span :class="{ open: isOpen }"></span>
                        <span :class="{ open: isOpen }"></span>
                        <span :class="{ open: isOpen }"></span>
                        
                    </i>
                </button>

                <transition name="slide">
                    <nav v-if="isOpen" class="menu">
                        <ul>
                        <li><a href="#">Home</a></li>
                        <li><a href="#">Sobre</a></li>
                        <li><a href="#">Serviços</a></li>
                        <li><a href="#">Contato</a></li>
                        </ul>
                    </nav>
                </transition>

                <div class="logo">
                    <RouterLink to="/"><img src="../assets/logo.png" alt="Logo Aura Library"></RouterLink>
                </div>
            </div>

            <div class="conjunto2">
                <RouterLink to="/status">Status</RouterLink>
                <RouterLink to="/verLivros">Ver Livros</RouterLink>
                
                <div class="barra-pesquisa">
                    <input type="search" class="pesquisa" placeholder="O que está procurando hoje?">
                </div>
    
                <div class="icones">
                    <RouterLink to="/favoritos"><i class="pi pi-heart"></i></RouterLink>
                    <RouterLink to="/emprestimo"><i class="pi pi-shopping-bag"></i></RouterLink>
                    <RouterLink to="/login"><i class="pi pi-user"></i></RouterLink>
                </div>
            </div>
            
        </nav>
    </header>
</template>

<style>

.hamburger {
display: flex;
flex-direction: column;
justify-content: space-around;
width: 30px;
height: 30px;
background: none;
border: none;
cursor: pointer;
padding: 0;
}

.hamburger i{
    color: #fff;
    font-size: 24px;
}

.hamburger span {
width: 100%;
height: 3px;
background-color: #333;
border-radius: 5px;
transition: transform 0.3s ease, opacity 0.3s ease;
}

/* Animação do botão ao abrir */
.hamburger span.open:nth-child(1) {
transform: translateY(8px) rotate(45.deg);
}

.hamburger span.open:nth-child(2) {
opacity: 0;
}

.hamburger span.open:nth-child(3) {
transform: translateY(-8px) rotate(-45deg);
}

/* Estilos do menu */
.menu {
position: fixed;
top: 0;
right: 0;
width: 250px;
height: 100%;
background-color: #f8f8f8;
box-shadow: -2px 0 5px rgba(0, 0, 0, 0.1);
padding: 20px;
z-index: 10;
}

.menu ul {
list-style-type: none;
padding: 0;
}

.menu li {
margin-bottom: 15px;
}

.menu a {
color: #333;
text-decoration: none;
font-size: 18px;
}

/* Animação de transição do menu */
.slide-enter-active,
.slide-leave-active {
transition: transform 0.3s ease;
}

.slide-enter {
transform: translateX(100%);
}

.slide-leave-to {
transform: translateX(100%);
}

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

.icones i{
    color: #fff;
}

</style>