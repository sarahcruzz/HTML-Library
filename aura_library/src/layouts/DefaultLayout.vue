<script setup>

import HeaderComponent from '@/components/HeaderComponent.vue';
defineProps({});

</script>

<template>
    <div class="layout"  v-bind="$attrs"> 
        <HeaderComponent />
        <slot></slot>
    </div>
    
</template>

