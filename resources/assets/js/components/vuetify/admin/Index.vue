<template>
<div>
    <h1>Admin</h1>
    <div>
        <client></client>
    </div>
    <div>
        <user></user>
    </div>
</div>
</template>

<script>
    import User from 'user'
    import Client from 'client'
    export default {
        data(){
            return{

            }
        },
        components:{
            'user': User,
            'client': Client
        }

    }
</script>

<style >

</style>