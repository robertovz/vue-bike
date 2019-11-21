import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);

let cart = window.localStorage.getItem('cart');
let compare = window.localStorage.getItem('compare');
let lastProduct = window.localStorage.getItem('lastProduct');
let viewProducts = window.localStorage.getItem('viewProducts');
let activities = window.localStorage.getItem('activities');

export default new Vuex.Store({
    state: {
        cart: cart ? JSON.parse(cart) : [],
        compare: [],
        lastProduct: [],
        viewProducts: [],
        activities: [],
        products: {},
        subTotal: 0,
        tax: 0,
        total: 0,
        search: '',
        storeProducts: [
            {
                id: 1,
                name: "Vintage Ladies Bella",
                img: require('./assets/img/products/bike-01.png'),
                price: 150,
                offer: 10,
                speed: 21,
                wheel_size: 20,
                wheel_spec: 'reynolds',
                company: "Vintage",
                color: 'red',
                type: "urban",
                category: "Performance",
                frame_material: 'carbon',
                description: "Our online shop is the best place to buy bikes, accessories and other related products.",
                amount: 25,
                review: [{
                    id: 1,
                    type: "Review",
                    author: "User 1",
                    datePublished: "xx-xx-xxx",
                    description: "Awesome!",
                    rating: 5
                }]
            },
            {
                id: 2,
                name: "Crimson Bicicleta Urbana",
                img: require('./assets/img/products/bike-02.png'),
                price: 200,
                offer: 5,
                speed: 29,
                wheel_size: 20,
                wheel_spec: 'reynolds',
                company: "Crimson",
                color: 'black',
                type: "mountain",
                category: "Trail",
                frame_material: 'steel',
                description: "Itaque id aut magnam praesentium quia et ea odit et ea voluptas et sapiente quia nihil "
                    + "amet occaecati quia id voluptatem incidunt ea est distinctio odio.",
                amount: 25,
                review: [{
                    id: 1,
                    type: "Review",
                    author: "User 1",
                    datePublished: "xx-xx-xxx",
                    description: "Awesome!",
                    rating: 5
                }]
            },
            {
                id: 3,
                name: "Vintage Ladies Bella",
                img: require('./assets/img/products/bike-03.png'),
                price: 250,
                offer: 20,
                speed: 21,
                wheel_size: 24,
                wheel_spec: 'clincher',
                company: "Vintage",
                color: 'blue',
                type: "urban",
                category: "Performance",
                frame_material: 'aluminum',
                description: "Delectus reiciendis molestiae occaecati non minima eveniet qui voluptatibus accusamus "
                    + "in eum beatae sit vel qui neque voluptates ut commodi qui incidunt ut animi commodi.",
                amount: 25,
                review: [{
                    id: 1,
                    type: "Review",
                    author: "User 1",
                    datePublished: "xx-xx-xxx",
                    description: "Awesome!",
                    rating: 3
                }]
            },
            {
                id: 4,
                name: "Roadster Road Bike",
                img: require('./assets/img/products/bike-04.png'),
                price: 250,
                offer: 10,
                speed: 29,
                wheel_size: 24,
                wheel_spec: 'clincher',
                company: "Roadster",
                color: 'black',
                type: "road",
                category: "Performance",
                frame_material: 'carbon',
                description: "Quo et expedita modi cum officia vel magni doloribus qui repudiandae vero nisi sit quos "
                    + "veniam quod sed accusamus veritatis error.",
                amount: 25,
                review: [{
                    id: 1,
                    type: "Review",
                    author: "User 1",
                    datePublished: "xx-xx-xxx",
                    description: "Awesome!",
                    rating: 5
                },
                {
                    id: 2,
                    type: "Review",
                    author: "User 2",
                    datePublished: "xx-xx-xxx",
                    description: "Great service from this store.",
                    rating: 4
                }]
            },
            {
                id: 5,
                name: "Diamond Bicycle",
                img: require('./assets/img/products/bike-05.png'),
                price: 125.50,
                offer: 10,
                speed: 29,
                wheel_size: 26,
                wheel_spec: 'oval',
                company: "Diamond",
                color: 'green',
                type: "mountain",
                category: "Trail",
                frame_material: 'aluminum',
                description: "Consectetur animi nesciunt iure dolore enim quia ad veniam autem ut quam aut nobis et est "
                    + "aut quod aut provident voluptas autem voluptas.",
                amount: 25,
                review: [{
                    type: "Review",
                    author: "User 1",
                    datePublished: "xx-xx-xxx",
                    description: "Awesome!",
                    rating: 5
                },
                {
                    id: 1,
                    type: "Review",
                    author: "User 2",
                    datePublished: "xx-xx-xxx",
                    description: "This store is the best place to buy bikes.",
                    rating: 4
                }]
            },
            {
                id: 6,
                name: "Diamond Bicycle",
                img: require('./assets/img/products/bike-06.png'),
                price: 200,
                offer: 10,
                speed: 29,
                wheel_size: 29,
                wheel_spec: 'clincher',
                company: "Diamond",
                color: 'black',
                type: "mountain",
                category: "XC",
                frame_material: 'steel',
                description: "Dignissimos aperiam dolorem qui eum facilis quibusdam animi sint suscipit qui sint "
                    + "possimus cum quaerat magni maiores excepturi ipsam ut commodi dolor voluptatum modi aut vitae.",
                amount: 25,
                review: [{
                    id: 1,
                    type: "Review",
                    author: "User 1",
                    datePublished: "xx-xx-xxx",
                    description: "Awesome!",
                    rating: 5
                },
                {
                    id: 2,
                    type: "Review",
                    author: "User 2",
                    datePublished: "xx-xx-xxx",
                    description: "Great service from this store.",
                    rating: 3
                }]
            },
            {
                id: 7,
                name: "Crimson Bicicleta Estrada",
                img: require('./assets/img/products/bike-07.png'),
                price: 760.50,
                offer: 0,
                speed: 38,
                wheel_size: 29,
                wheel_spec: 'clincher',
                company: "Crimson",
                color: 'red',
                type: "road",
                category: "Cyclocross",
                frame_material: 'carbon',
                description: "Dolore placeat quibusdam ea quo vitae magni quis enim qui quis quo nemo aut saepe quidem "
                    + "repellat excepturi ut quia sunt ut sequi eos ea sed quas.",
                amount: 25,
                review: [{
                    id: 1,
                    type: "Review",
                    author: "User 1",
                    datePublished: "xx-xx-xxx",
                    description: "Awesome!",
                    rating: 5
                },
                {
                    id: 2,
                    type: "Review",
                    author: "User 2",
                    datePublished: "xx-xx-xxx",
                    description: "This store is the best place to buy bikes.",
                    rating: 4
                }]
            },
            {
                id: 8,
                name: "Crimson Bicicleta Estrada",
                img: require('./assets/img/products/bike-08.png'),
                price: 500,
                offer: 0,
                speed: 29,
                wheel_size: 26,
                wheel_spec: 'oval',
                company: "Crimson",
                color: 'black',
                type: "road",
                category: "Cyclocross",
                frame_material: 'carbon',
                description: "Ut aspernatur corporis harum nihil quis provident sequi mollitia nobis aliquid molestiae "
                    + "perspiciatis et ea nemo ab reprehenderit accusantium quas voluptate dolores velit et doloremque "
                    + "molestiae.",
                amount: 25,
                review: [{
                    id: 1,
                    type: "Review",
                    author: "User 1",
                    datePublished: "xx-xx-xxx",
                    description: "Awesome!",
                    rating: 5
                }]
            },
            {
                id: 9,
                name: "Ladies Esprit",
                img: require('./assets/img/products/bike-09.png'),
                price: 700,
                offer: 20,
                speed: 21,
                wheel_size: 24,
                wheel_spec: 'clincher',
                company: "Vintage",
                color: 'white',
                type: "mountain",
                category: "Downhill",
                frame_material: 'aluminum',
                description: "Ullam et saepe reiciendis voluptatem adipisci sit amet autem assumenda provident rerum "
                    + "culpa quis hic commodi nesciunt rem tenetur doloremque ipsam iure quis sunt voluptatem rerum "
                    + "illo velit.",
                amount: 25,
                review: [{
                    id: 1,
                    type: "Review",
                    author: "User 1",
                    datePublished: "xx-xx-xxx",
                    description: "Awesome!",
                    rating: 5
                },
                {
                    id: 2,
                    type: "Review",
                    author: "User 2",
                    datePublished: "xx-xx-xxx",
                    description: "This store is the best place to buy bikes.",
                    rating: 4
                }]
            },
            {
                id: 10,
                name: "Polygon Bend RV",
                img: require('./assets/img/products/bike-10.png'),
                price: 700,
                offer: 25,
                speed: 29,
                wheel_size: 29,
                wheel_spec: 'clincher',
                company: "Diamond",
                color: 'white',
                type: "road",
                category: "Gravel",
                frame_material: 'steel',
                description: "Et iusto sed quo iure voluptatem occaecati omnis eligendi aut ad voluptatem doloribus "
                    + "vel accusantium quis pariatur molestiae porro eius odio et labore et velit aut.",
                amount: 25,
                review: [{
                    id: 1,
                    type: "Review",
                    author: "User 1",
                    datePublished: "xx-xx-xxx",
                    description: "Awesome!",
                    rating: 5
                }]
            },
            {
                id: 11,
                name: "Tourin Road Bike",
                img: require('./assets/img/products/bike-13.png'),
                price: 900,
                offer: 0,
                speed: 38,
                wheel_size: 29,
                wheel_spec: 'clincher',
                company: "Roadster",
                color: 'red',
                type: "road",
                category: "Gravel",
                frame_material: 'steel',
                description: "Lorquia et suscipit suscipit recusandae consequuntur expedita et cum reprehenderit "
                    + "molestiae ut ut quas totam nostrum rerum est autem sunt rem eveniet architecto em.",
                amount: 25,
                review: [{
                    id: 1,
                    type: "Review",
                    author: "User 1",
                    datePublished: "xx-xx-xxx",
                    description: "Awesome!",
                    rating: 5
                },
                {
                    id: 2,
                    type: "Review",
                    author: "User 2",
                    datePublished: "xx-xx-xxx",
                    description: "Fantastic!",
                    rating: 4
                },
                {
                    id: 3,
                    type: "Review",
                    author: "User 3",
                    datePublished: "xx-xx-xxx",
                    description: "Great service from this store.",
                    rating: 5
                },
                {
                    id: 4,
                    type: "Review",
                    author: "User 4",
                    datePublished: "xx-xx-xxx",
                    description: "Incredible!",
                    rating: 5
                }]
            },
            {
                id: 12,
                name: "Diamond Bicycle",
                img: require('./assets/img/products/bike-01.jpeg'),
                price: 1350,
                offer: 0,
                speed: 38,
                wheel_size: 24,
                wheel_spec: 'clincher',
                company: "Diamond",
                color: 'red',
                type: "urban",
                category: "Hybrid",
                frame_material: 'steel',
                description: "Est rerum tempore vitae sequi sint nihil reprehenderit dolor beatae ea dolores neque "
                    + "fugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis qui aperiam non debitis "
                    + "possimus qui neque nisi nulla.",
                amount: 25,
                review: [{
                    id: 1,
                    type: "Review",
                    author: "User 1",
                    datePublished: "xx-xx-xxx",
                    description: "Awesome!",
                    rating: 5
                },
                {
                    id: 2,
                    type: "Review",
                    author: "User 2",
                    datePublished: "xx-xx-xxx",
                    description: "Great service from this store.",
                    rating: 5
                }]
            },
            {
                id: 13,
                name: "Fyxation Crimson Roja Bicicleta Urbana",
                img: require('./assets/img/products/bike-03.png'),
                price: 1183,
                offer: 0,
                speed: 29,
                wheel_size: 20,
                wheel_spec: 'reynolds',
                company: "Fyxation",
                color: 'red',
                type: "urban",
                category: "Adventure & Gravel",
                frame_material: 'aluminum',
                description: "Est rerum tempore vitae sequi sint nihil reprehenderit dolor beatae ea dolores neque "
                    + "fugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis qui aperiam non debitis "
                    + "possimus qui neque nisi nulla.",
                    amount: 25,
                review: [{
                    id: 1,
                    type: "Review",
                    author: "User 1",
                    datePublished: "xx-xx-xxx",
                    description: "Awesome!",
                    rating: 5
                }]
            },
            {
                id: 14,
                name: "Fyxation Copper Bicicleta Urbana",
                img: require('./assets/img/products/bike-14.png'),
                price: 1120,
                offer: 0,
                speed: 29,
                wheel_size: 20,
                wheel_spec: 'reynolds',
                company: "Fyxation",
                color: 'red',
                type: "urban",
                category: "Adventure & Gravel",
                frame_material: 'aluminum',
                description: "Eos voluptas et aut odit natus earum aspernatur fuga molestiae ullam deserunt ratione qui "
                    + "eos qui nihil ratione nemo velit ut aut id quo.",
                amount: 25,
                review: [{
                    id: 1,
                    type: "Review",
                    author: "User 1",
                    datePublished: "xx-xx-xxx",
                    description: "Awesome!",
                    rating: 5
                }]
            },
            {
                id: 15,
                name: "Ladies Esprit",
                img: require('./assets/img/products/bike-15.png'),
                price: 1300,
                offer: 0,
                speed: 21,
                wheel_size: 29,
                wheel_spec: 'clincher',
                company: "Vintage",
                color: 'white',
                type: "road",
                category: "Performance",
                frame_material: 'steel',
                description: "Eveniet quo quis laborum totam consequatur non dolor ut et est repudiandae est voluptatem "
                    + "vel debitis et magnam.",
                amount: 25,
                review: [{
                    id: 1,
                    type: "Review",
                    author: "User 1",
                    datePublished: "xx-xx-xxx",
                    description: "Awesome!",
                    rating: 5
                },
                {
                    id: 2,
                    type: "Review",
                    author: "User 2",
                    datePublished: "xx-xx-xxx",
                    description: "This store is the best place to buy bikes.",
                    rating: 4
                }]
            },
            {
                id: 16,
                name: "Ladies Esprit",
                img: require('./assets/img/products/bike-16.png'),
                price: 1300,
                offer: 20,
                speed: 21,
                wheel_size: 29,
                wheel_spec: 'clincher',
                company: "Vintage",
                color: 'white',
                type: "road",
                category: "Performance",
                frame_material: 'steel',
                description: "Est rerum tempore vitae sequi sint nihil reprehenderit dolor beatae ea dolores neque "
                    + "fugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis qui aperiam non debitis "
                    + "possimus qui neque nisi nulla.",
                amount: 25,
                review: [{
                    id: 1,
                    type: "Review",
                    author: "User 1",
                    datePublished: "xx-xx-xxx",
                    description: "Awesome!",
                    rating: 5
                },
                {
                    id: 2,
                    type: "Review",
                    author: "User 2",
                    datePublished: "xx-xx-xxx",
                    description: "This store is the best place to buy bikes.",
                    rating: 3
                }]
            },
            {
                id: 17,
                name: "Reid Vintage Roadster",
                img: require('./assets/img/products/bike-17.png'),
                price: 144,
                offer: 0,
                speed: 29,
                wheel_size: 24,
                wheel_spec: 'clincher',
                company: "Roadster",
                color: 'blue',
                type: "road",
                category: "Trail",
                frame_material: 'steel',
                description: "Illum quis cupiditate provident sit magnam ea sed aut omnis veniam maiores ullam consequatur"
                    + " atque adipisci quo iste expedita sit quos voluptas.",
                amount: 25,
                review: [{
                    id: 1,
                    type: "Review",
                    author: "User 1",
                    datePublished: "xx-xx-xxx",
                    description: "Awesome!",
                    rating: 5
                }]
            },
            {
                id: 18,
                name: "Fyxation Negra Bicleta Urbana",
                img: require('./assets/img/products/bike-18.png'),
                price: 825,
                offer: 0,
                speed: 38,
                wheel_size: 20,
                wheel_spec: 'reynolds',
                company: "Fyxation",
                color: 'black',
                type: "urban",
                category: "Cyclocross",
                frame_material: 'aluminum',
                description: "Qui consequuntur ducimus possimus quisquam amet similique suscipit porro ipsam amet eos "
                    + "veritatis officiis exercitationem vel fugit aut necessitatibus totam omnis rerum consequatur "
                    + "expedita quidem cumque explicabo.",
                amount: 25,
                review: [{
                    id: 1,
                    type: "Review",
                    author: "User 1",
                    datePublished: "xx-xx-xxx",
                    description: "Awesome!",
                    rating: 5
                }]
            },
            {
                id: 19,
                name: "Reid Wayfarer",
                img: require('./assets/img/products/bike-19.png'),
                price: 825,
                offer: 0,
                speed: 29,
                wheel_size: 29,
                wheel_spec: 'clincher',
                company: "Fyxation",
                color: 'white',
                type: "mountain",
                category: "Downhill",
                frame_material: 'steel',
                description: "Repellat aliquid praesentium dolorem quo sed totam minus non itaque nihil labore molestiae "
                    + "sunt dolor eveniet hic recusandae veniam tempora et tenetur expedita sunt.",
                amount: 25,
                review: [{
                    id: 1,
                    type: "Review",
                    author: "User 1",
                    datePublished: "xx-xx-xxx",
                    description: "Awesome!",
                    rating: 5
                }]
            },
            {
                id: 20,
                name: "Reid Vintage Roadster",
                img: require('./assets/img/products/bike-20.png'),
                price: 825,
                offer: 0,
                speed: 29,
                wheel_size: 29,
                wheel_spec: 'clincher',
                company: "Fyxation",
                color: 'black',
                type: "road",
                category: "Cyclocross",
                frame_material: 'carbon',
                description: "Eos qui et ipsum ipsam suscipit aut sed omnis non odio expedita earum mollitia molestiae "
                    + "aut atque rem suscipit nam impedit esse.",
                amount: 25,
                review: [{
                    id: 1,
                    type: "Review",
                    author: "User 1",
                    datePublished: "xx-xx-xxx",
                    description: "Awesome!",
                    rating: 5
                }]
            }
        ]
    },

    getters: {

        subTotal: state => {
            state.subTotal = 0;
            state.cart.filter((item) => {
                state.subTotal += (item.price * item.quantity);
            })
            return state.subTotal;
        },
        tax: state => {
            state.tax = state.subTotal * 0.1;
            return state.tax;
        },
        totalPrice: state => {
            state.total = state.subTotal + state.tax;
            return state.total;
        },

    },

    mutations: {

        searchit(state, item) {
            state.search = item;
            Fire.$emit('searching');
        },

        addLastProduct(state, item) {
            state.lastProduct = item;
            let found = state.viewProducts.find(product => product.id == item.id);
            if (!found) {
                state.viewProducts.push(item);
                item.activity = "view";
            }
            this.commit('storeItem');
        },

        removeFromProducts(state, item) {
            let index = state.viewProducts.indexOf(item);
            state.viewProducts.splice(index, 1);

            this.commit('storeItem');
        },

        storeItem(state) {
            window.localStorage.setItem('lastProduct', JSON.stringify(state.lastProduct));
            window.localStorage.setItem('viewProducts', JSON.stringify(state.viewProducts));
        },

        addToCart(state, item) {
            let found = state.cart.find(product => product.id == item.id);
            if (found) {
                found.quantity++;
            } else {
                state.cart.push(item);
            }

            this.commit('saveData');
        },


        storeProduct(state) {
            window.localStorage.setItem('activities', JSON.stringify(state.activities));
        },

        productQuantity(state, item) {
            let found = state.cart.find(product => product.id == item.id);

            if (found) {
                found.quantity = item.quantity;
            }

            this.commit('saveData');
        },

        saveData(state) {
            window.localStorage.setItem('cart', JSON.stringify(state.cart));
        },

        removeFromCart(state, item) {
            let index = state.cart.indexOf(item);
            state.cart.splice(index, 1);

            this.commit('saveData');
        },

        clearCart(state) {
            state.cart = [];
            state.subTotal = 0;
            state.tax = 0;
            state.total = 0;
            this.commit('saveData');
        },

        addToCompare(state, item) {
            let found = state.compare.find(product => product.id == item.id);

            if (!found) {
                state.compare.push(item);
            }

            this.commit('storeCompare');
        },

        storeCompare(state) {
            window.localStorage.setItem('compare', JSON.stringify(state.compare));
        },

        removeFromCompare(state, item) {
            let index = state.compare.indexOf(item);
            state.compare.splice(index, 1);

            this.commit('storeCompare');
        },
    }
})