// Attraverso una chiamata ajax all’Api di boolean avremo
// a disposizione una decina di dischi musicali. 
// Servendoci di Vue JS stampiamo tutto a schermo.
// In questo momento non è importante la parte grafica.
// Bonus: Creare una select con i seguenti generi: pop, rock, metal e jazz.
// In base a cosa scegliamo nella select vedremo i corrispondenti cd.

let app = new Vue({
  el: "#root",
  data: {
	  albums: [

	  ]

  },

  mounted(){
	  axios.get("https://flynn.boolean.careers/exercises/api/array/music")
	  .then(response => {
		console.log(response);
		this.albums = response.data.response;
	  });
  }

});