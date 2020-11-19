export default function({ getStore, getActions, setStore }) {
    return {
        store: {
            loading: false,
            planets : [],
            people: [],
            favorites: ["hola", "Alejandro"]
        },
        actions: {
            setLoading(status) {
                setStore({loading: status})
            },
            toggleLoader() {
                const store = getStore()
                setStore({loading: !store.loading})
            },

            getPlanets() {
                const store = getStore() // DEVUELVE EL ESTADO ULTIMO DE STORE, SINO TRENDRIAMOS EL ERROR DE store is not defined
                if (store.planets.length === 0) {  // PARA QUE NO VUELVA A CARGAR TODO DESDE EL STORE CADA VEZ QUE CAMBIEMOS EN EL Switch DE ROUTER
                    const endpoint = "https://swapi.dev/api/planets/";
                    const config = {
                        method: "GET"
                    }
                    fetch(endpoint,config).then((response) => {
                        return response.json()
                    }).then((json) => {
                        setStore({ 
                            planets: json.results 
                        })
                        console.log(json.results); // IMPRIME EL RESULTADOS DEL JSON OBTENIDO
                    })
                }
            },

            getPeople() {
                const store = getStore()
                if (store.planets.length === 0) {
                    const endpoint = "https://swapi.dev/api/people/";
                    const config = {
                        method: "GET"
                    }
                    fetch(endpoint,config).then((response) => {
                        return response.json()
                    }).then((json) => {
                    setStore({ 
                        people: json.results 
                    })
                    console.log(json.results);
                    })
                }
               
            }
        }
    }
}