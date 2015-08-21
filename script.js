window.onload = function(){

	// document.getElementById("myForm").addEventListener("submit", function(event){
	// 	event.preventDefault();
	// 	var value = document.querySelector("input").value;
	// 	var newLi = document.createElement("li");
	// 	newLi.innerText = value;
	// 	document.querySelector("ul").appendChild(newLi);
	// });

	document.querySelector("button").addEventListener("click", function(event){
		event.preventDefault();
		var value = document.querySelector("input").value;
		var newLi = document.createElement("li");
		newLi.innerText = value;
		newLi.addEventListener("click", function(){
			newLi.classList.add("completed");
		});
		document.querySelector("ul").appendChild(newLi);
	});

};