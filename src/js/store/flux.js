const getState = ({ getStore, setStore }) => {
	return {
		store: {
			buttons: [
				{ name: "characters", className: "fas fa-users" },
				{ name: "vehicles", className: "fas fa-truck-pickup" },
				{ name: "planets", className: "fas fa-globe-asia" }
			],
			favorites: [],
			demo: [
				{
					title: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				}
			]
		},
		actions: {
			favCard: (property, id) => {
				const store = getStore();
				store.favorites.push(store[property][id]);
				store[property][id].category = property;
				setStore({ store: store });
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
			}
		}
	};
};

export default getState;
