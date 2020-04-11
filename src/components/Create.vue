// Create.vue
<template>
    <div>
        Create Component
    </div>
</template>
<script>
    export default {}
</script>

<template>
    <div class="container">
        <div class="card">
            <div class="card-header">
                <h3>Add Item</h3>
            </div>
            <div class="card-body">
                <form v-on:submit.prevent="addItem">
                    <div class="form-group">
                        <label>Item Name:</label>
                        <input class="form-control" type="text" v-model="item.name"/>
                    </div>
                    <div class="form-group">
                        <label>Item Price:</label>
                        <input class="form-control" type="text" v-model="item.price"/>
                    </div>
                    <div class="form-group">
                        <input class="btn btn-primary" type="submit" value="Add Item"/>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        components: {
            name: 'AddItem'
        },
        data() {
            return {
                item: {}
            }
        },
        methods: {
            addItem() {
                let uri = 'http://localhost:4000/items/add';
                this.axios.post(uri, this.item).then((response) => {
                    console.log(response.data)
                });
            }
        }
    }
</script>
