


function generate(){
//Removing previous content and styling
var arr = document.getElementsByClassName("isq");

for(var i=0; i<arr.length; i++){
	arr[i].innerHTML = null;
	arr[i].style.backgroundImage = "none";
}
    
//Rolling number of terrain elements for each main square
	var dice1, dice2;

for(var i=1; i<7; i++){
	dice1 = Math.floor((Math.random()*6)+1);
	dice2 = Math.floor((Math.random()*6)+1);
	var diceroll = dice1+dice2;
	//console.log(diceroll);

	//checking number of terrains for each main square
	var numOfTerrain;
	switch(diceroll){
		case 2:
		case 3:
			numOfTerrain = 0;
			break;
		case 4:
		case 5:
		case 9:
		case 10:
			numOfTerrain = 2;
			break;
		case 6:
		case 7:
		case 8:
			numOfTerrain = 1;
			break;
		case 11:
		case 12:
			numOfTerrain = Math.floor((Math.random()*4));
			break;
	}
	// console.log("Liczba terenow: " +numOfTerrain);

	//Randomizing the placement of terrains in squares
	var rolls = [];
	if(numOfTerrain ==0){
		continue;
	} else{
		for(var j=0; j <numOfTerrain; j++){
			rolls[j] = Math.floor((Math.random()*9)+1);
			while(rolls[j]==rolls[j-1] || rolls[j]==rolls[j-2] || rolls[j]==rolls[j-3] ){
				rolls[j] = Math.floor((Math.random()*9)+1);
			}

			//determining what kind of terrain will be put
			dice1 = Math.floor((Math.random()*6)+1);
			dice2 = Math.floor((Math.random()*6)+1);
			diceroll = dice1+dice2;
			// console.log("Rzut kostka na teren: " +diceroll);
			switch(diceroll){
				case 2:
				case 3:
					document.querySelector('.o'+(i)+' '+'.i'+(rolls[j])).style.backgroundImage = "url('fence2.png')";
					break;
				case 4:
				case 5:
					document.querySelector('.o'+(i)+' '+'.i'+(rolls[j])).style.backgroundImage = "url('hills2.png')";
					break;
				case 6:
				case 7:
				case 8:
					document.querySelector('.o'+(i)+' '+'.i'+(rolls[j])).style.backgroundImage = "url('plains2.png')";
					break;
				case 9:
				case 10:
					document.querySelector('.o'+(i)+' '+'.i'+(rolls[j])).style.backgroundImage = "url('barrel2.png')";
					break;
				case 11:
				case 12:
					document.querySelector('.o'+(i)+' '+'.i'+(rolls[j])).style.backgroundImage = "url('tree2.png')";
					break;
			}


			//applying terrain characteristic to terrain
			var diceTerrain = Math.floor((Math.random()*6)+1);
			switch(diceTerrain){
				case 1:
					document.querySelector('.o'+(i)+' '+'.i'+(rolls[j])).textContent = "Dmn";
					break;
				case 2:
					document.querySelector('.o'+(i)+' '+'.i'+(rolls[j])).textContent = "Arc";
					break;
				case 3:
					document.querySelector('.o'+(i)+' '+'.i'+(rolls[j])).textContent = "Ins";
					break;
				case 4:
					document.querySelector('.o'+(i)+' '+'.i'+(rolls[j])).textContent = "Dead";
					break;
				case 5:
					document.querySelector('.o'+(i)+' '+'.i'+(rolls[j])).textContent = "Mst";
					break;
				case 6:
					document.querySelector('.o'+(i)+' '+'.i'+(rolls[j])).textContent = "Sin";
					break;
			}
		}
	}

}
};




var legend_button = document.querySelector('.dis_legend');
var legend = document.querySelector('.legend');
var legend_displayed = false;
legend.style.display = "none";

legend_button.onmousedown = function(){
	if(legend_displayed == false){
		legend.style.display = "flex";
		legend_displayed = true;
	} else {
		legend.style.display = "none";
		legend_displayed = false;
	}
} 

var generate_button = document.querySelector(".generate");

generate_button.onmousedown = function(){
	generate();
}





















// for(var i = 0; i < 9; i++){
// 	var group = document.querySelectorAll('.'+'i'+(i+1));
//    for (var j = 0; j < group.length; j ++) {
//     group[j].textContent = i+1;
//    }
// }

// for(var i = 0; i < 9; i++){
//   document.querySelector('.o3 .i'+(i+1)).textContent = i+1;
// }

// Yes it is. Also, keep in mind you can switch from space, between the classes, to > if you only want to match children elements rather than every descendant. You're welcome