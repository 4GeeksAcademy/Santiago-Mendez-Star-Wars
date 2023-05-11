const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			
			people: [],
			vehicles: ["toyota"],
			planets: [],
			peopleInfo: {}
		},
		actions: {
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			loadSomeData: () => {
				/**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
			},
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			},
			fetchStarWars: async (element) => {
				let baseUrl = `https://www.swapi.tech/api/${element}?page=1&limit=6`
				try {
					let response = await fetch(baseUrl)
					console.log(response)
					if (!response.ok) return response.status
					let data = await response.json()
					console.log(data)
					let obj = {}
					obj[element] = data.results
					// obj = {vehicles: data.results}
					setStore(obj) 
					console.log(getStore(element))
				}
				catch(error) {
					console.log(error)
				}
            },

			fetchPeopleDatail: async (id) => {
				let baseUrl = `https://www.swapi.tech/api/people/${id}`
				try {
					let response = await fetch(baseUrl)
					console.log(response)
					if (!response.ok) return response.status
					let data = await response.json()
					console.log(data.result.properties)
					
					setStore({peopleInfo: data?.result.properties}) 
					console.log(getStore().peopleInfo)
				}
				catch(error) {
					console.log(error)
				}
            }
		}
	};
};

export default getState;
