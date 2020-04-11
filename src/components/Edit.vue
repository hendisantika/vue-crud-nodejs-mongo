// Edit.vue

<template>
    <div>
        Edit Component
    </div>
</template>

<template>
    <div class="container">
        <div class="card">
            <div class="card-header">
                <h3>Edit Item</h3>
            </div>
            <div class="card-body">
                <form v-on:submit.prevent="updateItem">
                    <div class="form-group">
                        <label>Item Name:</label>
                        <input class="form-control" type="text" v-model="item.name"/>
                    </div>
                    <div class="form-group">
                        <label>Item Price:</label>
                        <input class="form-control" type="text" v-model="item.price"/>
                    </div>
                    <div class="form-group">
                        <input class="btn btn-primary" type="submit" value="Update Item"/>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                item: {}
            }
        },

        created: function () {
            this.getItem();
        },

        methods: {
            getItem() {
                let uri = 'http://localhost:4000/items/edit/' + this.$route.params.id;
                this.axios.get(uri).then((response) => {
                    this.item = response.data;
                });
            },

            updateItem() {
                let uri = 'http://localhost:4000/items/update/' + this.$route.params.id;
                // eslint-disable-next-line no-unused-vars
                this.axios.post(uri, this.item).then((response) => {
                    this.$router.push({name: 'Index'});
                });
            }
        }
    }
</script>
