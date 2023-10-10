
createApp({
    /* data() {
        return {
            message: "Hello Vue 1",
        };
    }, */
    computed: {
        message () {
            return this.store.count
        }
    },
    methods: {
        increment () {
            this.store.increment()
        },
        decrement () {
            this.store.decrement()
        }
    },
    setup () {
        const store = useCounterStore();

        return {
            store
        }
    }
}).use(pinia).mount("#appOne");