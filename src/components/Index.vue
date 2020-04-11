// Index.vue

<template>
    <div>
        Index Component
    </div>
</template>
<script>
    export default {}
</script>

<template>
    <div>
        <h1>Items</h1>

        <table class="table table-hover">
            <thead>
            <tr>
                <td>ID</td>
                <td>Item Name</td>
                <td>Item Price</td>
                <td>Actions</td>
            </tr>
            </thead>

            <tbody>
            <tr :key="item._id" v-for="item in items">
                <td>{{ item._id }}</td>
                <td>{{ item.name }}</td>
                <td>{{ item.price }}</td>
                <td>
                    <router-link :to="{name: 'Edit', params: { id: item._id }}" class="btn btn-primary">Edit
                    </router-link>
                </td>
                <td>
                    <button class="btn btn-danger">Delete</button>
                </td>
            </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
    data()
    {
        return {
            items: []
        }
    }
    ,

    created: function () {
        this.fetchItems();
    }
    ,

    {
        fetchItems()
        {
            let uri = 'http://localhost:4000/items';
            this.axios.get(uri).then((response) => {
                this.items = response.data;
            });
        }
    }
    }
</script>
