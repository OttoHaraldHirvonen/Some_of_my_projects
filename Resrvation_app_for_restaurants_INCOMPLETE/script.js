var tableList = [];
var storedData = localStorage.getItem("List of tables");
var maxTableNumber = [];


	function onLoadfunction(){

		var tableList = [];


	if(storedData == null) {

	var div0 = document.createElement("div");
	div0.id = "tableModal";
	div0.className = "modal1";

	document.getElementsByTagName("body")[0].appendChild(div0);

	var div9 = document.createElement("div");
	div9.id = "idOfModelContent";
	div9.className = "modalContent";

	div0.appendChild(div9);

	var span0 = document.createElement("span");
	span0.className = "span00";

	div0.appendChild(span0); 

	var paragraph10 = document.createElement("p");
	paragraph10.id = "paragraph100";
	span0.appendChild(paragraph10);

	var t0 = document.createTextNode("Let's get started!");
	paragraph10.appendChild(t0);

	var paragraph11 = document.createElement("p");
	paragraph11.id = "paragraph111";
	span0.appendChild(paragraph11);

	var t1 = document.createTextNode("How many tables are in your restaurant?");
	paragraph11.appendChild(t1);

	var input7 = document.createElement("input");
	input7.id = "input700";
	input7.type = "number";

	span0.appendChild(input7);

	var paragraph8 = document.createElement("p");
	span0.appendChild(paragraph8);

	var button76 = document.createElement("button");
	button76.id = "button760";
	paragraph8.appendChild(button76);

	var button76Text = document.createTextNode("ADD");
	button76.appendChild(button76Text);

	var paragraph9 = document.createElement("p");
	span0.appendChild(paragraph9);

	var xSymbol1 = document.getElementById("xSymbol");
	xSymbol1.style.display = "block";

	span0.appendChild(xSymbol1);

	xSymbol1.onclick = function(){

		var removeOnLoadDiv = document.getElementById("tableModal");
		removeOnLoadDiv.remove();
		xSymbol1.style.display = "none";

	};



		button76.onclick = function(){

			var numberOfTables = document.getElementById("input700").value;
		

		for(var i = 0; i < numberOfTables || i == numberOfTables; i++){

			tableList.splice(i, 0, []);
	}
			console.log(tableList);
			localStorage.setItem("List of tables", JSON.stringify(tableList));

			var div5 = document.createElement("div");
			div5.id = "tableModal";
			div5.className = "modal1";

			document.getElementsByTagName("body")[0].appendChild(div5);

			var paragraph12 = document.createElement("p");
			paragraph12.id = "paragraph122";
			div5.appendChild(paragraph12);

			document.getElementById("paragraph122").innerHTML = "what is the maximum amount";

			var paragraph13 = document.createElement("p");
			paragraph13.id = "paragraph133";
			div5.appendChild(paragraph13);

			document.getElementById("paragraph133").innerHTML = "of diners on each table?";

			var div6 = document.createElement("div");
			div6.id = "placeForInputs";

			div5.appendChild(div6);

			for(var x = 1; x <=  numberOfTables; x++){
				var input86 = document.createElement("input");
				input86.type = "number";
				input86.placeholder = "table:" + x;
				input86.className = "inputsOf86";
				input86.id = "input86" + x;
				div6.appendChild(input86);

				var br = document.createElement("br");
				input86.appendChild(br);

				var br = document.createElement("br");
				input86.appendChild(br);

				var br = document.createElement("br");
				input86.appendChild(br);
			}

			var button86 = document.createElement("button");
			button86.id = "button860";

			div6.appendChild(button86);

			var t86 = document.createTextNode("confirm");
			button86.appendChild(t86);

			var removeOnLoadDiv = document.getElementById("tableModal");
			removeOnLoadDiv.remove();

			button86.onclick = function(){

				maxTableNumber = [];

				for(var x = 0; x <  numberOfTables; x++){
					var y = x+1;
					var inputKey = document.getElementById("input86" + y).value;
					maxTableNumber.splice(x,0,inputKey);
				}

				localStorage.setItem("max amount of tables", JSON.stringify(maxTableNumber));
				var removeOnLoadDiv = document.getElementById("tableModal");
				removeOnLoadDiv.remove();
				location.reload();
			}

	};


	}

	else{

			
			var tableList = localStorage.getItem("List of tables", tableList);

			console.log(tableList);
			
	}
}


function createReservationWindow(){

	var div1 = document.createElement("div");
	div1.id = "reservationModal";
	div1.className = "modal";

	document.getElementsByTagName("body")[0].appendChild(div1);

	var div2 = document.createElement("div");
	div2.id = "idOfModelContent";
	div2.className = "modalContent";

	div1.appendChild(div2);

	var span1 = document.createElement("span");
	div2.appendChild(span1); 

	var div3 = document.createElement("div");
	div3.id = "division3";

	span1.appendChild(div3);

	var paragraph1 = document.createElement("p");
	paragraph1.id = "para1";
	var t = document.createTextNode("Let's make a reservation!");

	paragraph1.appendChild(t);

	div3.appendChild(paragraph1);

	var input0 = document.createElement("input");
	input0.id = "input00";
	input0.type = "number";
	input0.placeholder = "How many diners?";

	div3.appendChild(input0);

	var button0 = document.createElement("button");
	button0.id = "button1";

	var paragraph2 = document.createElement("p");
	div3.appendChild(paragraph2);

	var input1 = document.createElement("input");
	input1.id = "input10";
	input1.type = "time";

	paragraph2.appendChild(input1);

	var input9 = document.createElement("input");
	input9.id = "input90";
	input9.type = "time";

	paragraph2.appendChild(input9);

	var paragraph3 = document.createElement("p");
	div3.appendChild(paragraph3);

	var input2 = document.createElement("input");
	input2.id = "input20";
	input2.placeholder = "Firstname";

	paragraph3.appendChild(input2);

	var paragraph4 = document.createElement("p");
	div3.appendChild(paragraph4);

	var input3 = document.createElement("input");
	input3.id = "input30";
	input3.placeholder = "Lastname";

	paragraph4.appendChild(input3);

	var paragraph5 = document.createElement("p");
	div3.appendChild(paragraph5);

	var input5 = document.createElement("input");
	input5.id = "input50";
	input5.type = "number";
	input5.placeholder = "Phonenumber";

	paragraph5.appendChild(input5);

	var paragraph6 = document.createElement("p");
	div3.appendChild(paragraph6);

	var input6 = document.createElement("input");
	input6.id = "input60";
	input6.type = "number";
	input6.placeholder = "Tablenumber";

	paragraph6.appendChild(input6);

	var paragraph7 = document.createElement("p");
	div3.appendChild(paragraph7);

	var button0Text = document.createTextNode("Splice");
	button0.appendChild(button0Text);

	paragraph7.appendChild(button0);	

	var div4 = document.createElement("div");
	div4.id = "division4";

	span1.appendChild(div4);

	var input8 = document.createElement("input");
	input8.id = "input80";
	input8.type = "date";

	div4.appendChild(input8);

	var modal = document.getElementById("reservationModal");

	var xSymbol1 = document.getElementById("xSymbol");
	xSymbol1.style.display = "block";

	span1.appendChild(xSymbol1);

	modal.style.display = "block";

	xSymbol1.onclick = function() {
 	modal.style.display = "none";

};

	button0.onclick = function() {

		var storedData = localStorage.getItem("List of tables");

		console.table(tableList);

		if(storedData) {
			tableList = JSON.parse(storedData);
		}
		
		var i = document.getElementById("input60").value;
		var dinerAmount = document.getElementById("input00").value;
		var reservationTime = document.getElementById("input10").value;
		var reservationTimeUntil = document.getElementById("input90").value;
		var firstName = document.getElementById("input20").value;
		var lastName = document.getElementById("input30").value;
		var phoneNumber = document.getElementById("input50").value;
		var reservationDate = document.getElementById("input80").value;
		var newTable = [dinerAmount, firstName, lastName, phoneNumber, reservationDate + " " + reservationTime, reservationDate + " " + reservationTimeUntil, i, false];

			var momenttiReservationTime = moment(newTable[4]);
			var	momenttiReservationTimeUntil = moment(newTable[5]);

		if(momenttiReservationTimeUntil.diff(momenttiReservationTime, 'seconds') > 0){


				if(tableList[i].length === 0){
						tableList[i].splice(0, 0, newTable);
						console.log(tableList);
				}else { 
					var anotherTime = moment(reservationDate + " " + reservationTime);
					for(var v = 0; v < tableList[i].length; v++){
						var specificTime = moment(tableList[i][v][4]);
		
							if(anotherTime > specificTime && tableList[i].length == v+1){
									tableList[i].splice(v+1, 0, newTable);
									break;
								}
							else if(anotherTime > specificTime){
								continue;
							}
								else {
									tableList[i].splice(v, 0, newTable);
									//document.getElementById("secondDivision").innerHTML = tableList;
									console.log(tableList);
									break;
									}
							
							}
						
					}
			
				

				localStorage.setItem("List of tables", JSON.stringify(tableList));

				console.log(localStorage.getItem("List of tables"));
			

		} else{
				alert("Varauksen aika on suurempi kuin varauksenloppu");
			};
	}
};





function clearStorage(){

	localStorage.removeItem("List of tables");

	/*var timeNow = new Date();
	var hourNow = timeNow.getHours();
	var minuteNow = timeNow.getMinutes();

	var currentTime = hourNow + ":" + minuteNow;
	*/


	var hourNumber = moment().hour(Number);
	var minuteNumber = moment().minute(Number);
	var secondNumber = moment().second(Number);
	var midnight = moment().date(Number).hour(23).minute(59).second(59);

	var timeNow = moment().dayOfYear(Number);

	var something = moment().add(3, 'days').add(2, 'months').add(3, 'hours').add(4,'minutes');
	var differencedate = moment().subtract(hourNumber, 'hours').subtract(minuteNumber, 'minutes').subtract(secondNumber, 'seconds');

	//if(midnight.diff(timeNow, 'seconds') > ){}


}

//window.setInterval(

	function getMyTableBitch() {


	tableList = JSON.parse(storedData);
	maxTableNumber = JSON.parse(localStorage.getItem("max amount of tables"));

	console.log(tableList);

	var currentTime = moment().date(Number);
	var currentTimeHour = moment(currentTime).format("YYYY-MM-DD HH:mm");
	var midnight = moment().date(Number).hour(23).minute(59).second(59);


	for(x = 0; x < tableList.length; x++){
		for(y = 0; y < tableList[x].length; y++){
			var targetTime = moment(tableList[x][y][5]); 

			if(targetTime.diff(currentTime, 'seconds') < 0){
				tableList[x].splice(y,1);
				console.log(tableList);
			} else{
				continue;
			}
		}
	}

	
console.log(tableList);
	var parhaimmatAjat = [];
	var momenttiJaindeksi = [];
	var availableAllDayArr = [];


	for(var i = 1; i < tableList.length; i++){ // establishes two arrays which have the best times and the tablenumber
		if(tableList[i].length == 0){	//If there are no reservations on this table --> add tablenumber to availableAllDAyArr list.
			availableAllDayArr.splice(0,0,i);
		}else{
			for(var j = 0; j < tableList[i].length; j++){
				var aika = moment(tableList[i][j][4]);
				var aikaUntill = moment(tableList[i][j][5]);
				if(tableList[i].length == 1){ // 3 scenarios: 1) reservation has past --> available all day 2) we are in the middle of reservation --> don't show 3) reservation hasn't arrived yet --> show
					if(aikaUntill.diff(currentTimeHour, 'seconds') < 0){// 1) scenario
						availableAllDayArr.splice(0,0,i);
					}else if(aikaUntill.diff(currentTimeHour, 'seconds') > 0 && aika.diff(currentTimeHour, 'seconds') < 0){// 2) scenario
						break;
					}else{// 3) scenario
						if(parhaimmatAjat.length < 6){
							parhaimmatAjat.splice(0,0, aika);
							momenttiJaindeksi.splice(0,0, [aika, i]);
						}else{

							var minAikaParhaat = moment.min(parhaimmatAjat);

							if(aika > minAikaParhaat){
								var indexOfMinAikaParhaat = parhaimmatAjat.indexOf(minAikaParhaat);

								parhaimmatAjat.splice(indexOfMinAikaParhaat,1,aika);

								for(var k = 0; k<momenttiJaindeksi.length;k++){
									if(minAikaParhaat == momenttiJaindeksi[k][0]){
										momenttiJaindeksi.splice(k,1,[aika,i]);
									}
								}
								break;
							}else{
								break;
							}
						}
					} //tested: works!

				}else{ // tableList[i].length > 1 in other words there are more reservations on this table
					if(j == 0){ 
						if(aika.diff(currentTime,'seconds') > 0){ // if the first reservation hasn't arrived yet
								if(parhaimmatAjat.length < 6){
								parhaimmatAjat.splice(0,0, aika);
								momenttiJaindeksi.splice(0,0, [aika, i]);
								}else{

									var minAikaParhaat = moment.min(parhaimmatAjat);

									if(aika > minAikaParhaat){
										var indexOfMinAikaParhaat = parhaimmatAjat.indexOf(minAikaParhaat);

										parhaimmatAjat.splice(indexOfMinAikaParhaat,1,aika);

									for(var k = 0; k<momenttiJaindeksi.length;k++){
										if(minAikaParhaat == momenttiJaindeksi[k][0]){
											momenttiJaindeksi.splice(k,1,[aika,i]);
											}
											}
											break;
									}else{
										break;
									}
								}
						}
					}else{
						if(aika.diff(currentTime,'seconds') > 0){
							var oneBefore = moment(tableList[i][j-1][5]);
							if(oneBefore.diff(currentTime,'seconds')<0){
								if(parhaimmatAjat.length < 6){
								parhaimmatAjat.splice(0,0, aika);
								momenttiJaindeksi.splice(0,0, [aika, i]);
								}else{

									var minAikaParhaat = moment.min(parhaimmatAjat);

									if(aika > minAikaParhaat){
										var indexOfMinAikaParhaat = parhaimmatAjat.indexOf(minAikaParhaat);

										parhaimmatAjat.splice(indexOfMinAikaParhaat,1,aika);

									for(var k = 0; k<momenttiJaindeksi.length;k++){
										if(minAikaParhaat == momenttiJaindeksi[k][0]){
											momenttiJaindeksi.splice(k,1,[aika,i]);
											}
											}
											break;
									}else{
										break;
									}
								}
								}else{
									break;
								}

						}else if(tableList[i][j+1] == undefined){// all reservations fromt this table have arrived
								if(aikaUntill.diff(currentTime,'seconds') > 0){//The last table hasn't finished yet
									break;
								}else{
									availableAllDayArr.splice(0,0,i);
									break;
								}
						}else{
							continue;
						}
					}
				}
			}
		}
	} // tested: works!
	
var numero = 1;
var x = 0;
var suurinAika = moment.max(parhaimmatAjat);


	while(availableAllDayArr.length > 0){
		var idSetterClass = "bestTime" + numero;
		var idSetterPaxNumber = "bestTimePaxnumber" + numero;
		var idSetter = "bestTimeTableNumber" + numero;
		var idSetterHours = "bestTimeTime" + numero;

		if(document.getElementById(idSetterClass) === null){
		break;
		} else{
		document.getElementById(idSetterPaxNumber).innerHTML = maxTableNumber[x] + " pax";

		document.getElementById(idSetter).innerHTML = availableAllDayArr[x];
		document.getElementById(idSetterHours).innerHTML = "Allday";
		document.getElementById(idSetterClass).style.display = "block";
		availableAllDayArr.splice(x,1);
		numero++;
		var x = 0;
		}
	}
		while(momenttiJaindeksi.length > 0){
		var idSetterClass = "bestTime" + numero;
		var idSetterPaxNumber = "bestTimePaxnumber" + numero;
		var idSetter = "bestTimeTableNumber" + numero;
		var idSetterHours = "bestTimeTime" + numero;
		var idSetterHoursHours = "bestTimeHours" + numero;
		var suurinAika = moment.max(parhaimmatAjat);
		var ajanIndeksi = parhaimmatAjat.indexOf(suurinAika);
		var wantedTime = moment(momenttiJaindeksi[x][0]);

		if(document.getElementById(idSetterClass) === null){
			break;
		}else{
			if(wantedTime.diff(suurinAika,'seconds') == 0){
				document.getElementById(idSetter).innerHTML = momenttiJaindeksi[x][1];
				momenttiJaindeksi.splice(x,1);
				parhaimmatAjat.splice(ajanIndeksi,1);
				numero++;
				var x = 0;

				document.getElementById(idSetterPaxNumber).innerHTML = maxTableNumber[x] + " pax";

				var minutes = wantedTime.diff(currentTime, 'minutes');

				var myMinutes = Math.floor(minutes / 60);
				var remainderMinutes = minutes%60;
				document.getElementById(idSetterHoursHours).innerHTML =  "hours";
				document.getElementById(idSetterClass).style.display = "block";

				if(remainderMinutes > 10){
				document.getElementById(idSetterHours).innerHTML =  myMinutes + ":" + remainderMinutes;
					}else if( remainderMinutes < 10){
						document.getElementById(idSetterHours).innerHTML =  myMinutes + ":0" + remainderMinutes;
					}


			} else{
				x++;
			}		
		}
	}

} //, 5000); // tested: works!

function twoHourReservation(){
	tableList = JSON.parse(storedData);

	var timeSlab = document.getElementsByTagName("div");
	var timeSlabCount = timeSlab.length;

	for (var i = 2; i < 8; i++) {
    	timeSlab[i].onclick = function(e) {
	    	var wantedId = this.id;
	    	var x = document.getElementsByTagName("p");
	    	for(var j = 1; j <= 6; j++){
	    		var timeId = "bestTime" + j;
	    		if(timeId == wantedId){
	    			var k = j-1;
	    			var targetNumber = i + 6 + (4*k);
	    			var notherNumber = targetNumber + 1;
	    			var targetTableNumber = tableList[x[targetNumber].innerHTML];
	    			var currentTime = moment().date(Number);
	    			var nowHours = moment(currentTime).format("YYYY-MM-DD HH:mm");
	    			var twoHours = moment(currentTime).add(2,'h').format("YYYY-MM-DD HH:mm");
	    			var hourTwo = moment(currentTime).add(2,'h');
	    			console.log(x[notherNumber].innerHTML);
	    			if(x[notherNumber].innerHTML == "Allday"){ // If there is less than 2 hours it takes as much time untill next reservation.
	    				var newReservation = ["","","","",nowHours,twoHours, x[targetNumber].innerHTML]

	    				targetTableNumber.splice(0,0,newReservation);
	    				localStorage.setItem("List of tables", JSON.stringify(tableList));
						console.log(localStorage.getItem("List of tables"));
							location.reload();
	    			}else{
	    				var b = x[notherNumber].innerHTML
	    				if(b.length == 4){
	    				var someString = x[notherNumber].innerHTML;
	    				var hourString = someString.substring(0,1);
	    				var minuteString = someString.substring(2,4);
	    				console.log(hourString);
	    				console.log(minuteString);
	    				}if(b.length == 5){
	    				var someString = x[notherNumber].innerHTML;
	    				var hourString = someString.substring(0,2);
	    				var minuteString = someString.substring(3,5);
	    				}

	    				var xmoment = moment(currentTime).add(hourString,'hours').add(minuteString,'minutes');
	    				console.log(xmoment);
	    				if(xmoment > hourTwo){
	    				var newReservation = ["","","","",nowHours,twoHours, x[targetNumber].innerHTML];
	    				}else{
	    					var paikka = moment(xmoment).format("YYYY-MM-DD HH:mm");
    					var newReservation = ["","","","",nowHours,paikka, x[targetNumber].innerHTML];
	    				}
	    			}


	    			if(targetTableNumber.length === 0){
	    				targetTableNumber.splice(0,0,newReservation);


	    				localStorage.setItem("List of tables", JSON.stringify(tableList));
						console.log(localStorage.getItem("List of tables"));
							location.reload(); 
	    			}else{
	    				for(var v = 0; v<targetTableNumber.length; v++){
	    					var testTime = moment(targetTableNumber[v][4]);

	    					if(currentTime.diff(testTime, 'seconds') < 0){
	    						targetTableNumber.splice(v,0,newReservation);
	    						console.log(tableList);

			    				localStorage.setItem("List of tables", JSON.stringify(tableList));
								console.log(localStorage.getItem("List of tables"));
									location.reload(); 
	    						break;
	    					}else{
	    						continue;
	    					}
	    				}

	    			}
	    		break;}
			}

 		}
    }
    			console.log(tableList);

}; //tested: Bug fixed. If there is less than 2 hours it takes as much time untill next reservation. Works! 


function getReservations(){
	tableList = JSON.parse(storedData);

	var allReservations = [];
	var allReservationsOrdered = [];
	var k = 0;

 for(var i = 0; i < tableList.length; i++){ //takes all the starting times of reservations and puts them into a list
		for(var j = 0; j < tableList[i].length; j++){
			var jElement = moment(tableList[i][j][4]);
			var zeroElement = tableList[i][j][1];
			if(zeroElement !== ""){
			allReservations.splice(0,0,jElement);
			}
		}
	}

	if(allReservations.length > 0){	//orders them from smallest to biggest
		var n = 0;
		for(var k = allReservations.length; k > 0; k--){
			var smallestOfreservations =  moment.min(allReservations);
			var indexOfsmallestOfReservations = allReservations.indexOf(smallestOfreservations);
			allReservationsOrdered.splice(n,0,smallestOfreservations);
			allReservations.splice(indexOfsmallestOfReservations,1);
			n++;
		}
	}

	var gate = false;
	console.log(allReservationsOrdered);
	var eliminationArr = [];

	for(var x = 0; x < allReservationsOrdered.length; x++){ //creates individual boxes for all reservations
		
		var div10 = document.createElement("div");
		div10.className = "div100";

		rightBottomReservations.appendChild(div10);

		var paragraph14 = document.createElement("p");
		paragraph14.className = "reservationPara";
		paragraph14.id = "paragraph14" + x;

		div10.appendChild(paragraph14);

		var paragraph15 = document.createElement("p");
		paragraph15.className = "tableNumberPara";
		paragraph15.id = "paragraph15" + x;

		paragraph14.appendChild(paragraph15);

		var paragraph16 = document.createElement("p");
		paragraph16.className = "tableTimePara";
		paragraph16.id = "paragraph16" + x;

		paragraph14.appendChild(paragraph16);

		var paragraph17 = document.createElement("p");
		paragraph17.className = "tablePaxPara";
		paragraph17.id = "paragraph17" + x;

		paragraph14.appendChild(paragraph17);

		var paragraph18 = document.createElement("p");
		paragraph18.className = "tableInfoPara";
		paragraph18.id = "paragraph18" + x;

		paragraph14.appendChild(paragraph18);

		var infoOfsvg = '<svg id="infoSVG" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 446.55 986.24"><defs></defs><title>info</title><polygon class="cls-1" points="5 273.3 303.61 273.3 303.61 808.37 441.55 808.37 441.55 975.11 5 981.17 5 811.4 138.39 809.88 138.39 440.03 5 441.55 5 273.3"/><rect class="cls-1" x="139.67" y="5" width="166.74" height="160.67"/></svg>';
		infoOfsvg.className = "infoSVG";

		var paragraph19 = document.createElement("p");
		paragraph19.className = "tableNamePara";
		paragraph19.id = "paragraph19" + x;

		paragraph14.appendChild(paragraph19);

		var momentti = moment(allReservationsOrdered[x]).format("YYYY-MM-DD HH:mm");
		var todMomentti = moment(allReservationsOrdered[x]).format("HH:mm");
		gate = false;

		document.getElementById("rightBottomReservations").insertBefore(document.getElementById("paragraph14" + x).parentElement,document.getElementById("lineBreak"));

		for(var i = 1; i<tableList.length; i++){

			if(gate == false){
				for(var j = 0; j<tableList[i].length; j++){
					if(tableList[i][j][0] !== undefined){
						var listaMomentti = moment(tableList[i][j][4]).format("YYYY-MM-DD HH:mm");
						if(momentti == listaMomentti){
							if(x>0){
							var z = x-1;
							var beforeTablePara = document.getElementById("paragraph15" + z).innerHTML;
							if(i == beforeTablePara){
								break;
							}} if(eliminationArr.includes(i)){break;}else{
								document.getElementById("paragraph15" + x).innerHTML = i;
								document.getElementById("paragraph16" + x).innerHTML = todMomentti;
								document.getElementById("paragraph17" + x).innerHTML = tableList[i][j][0] + "pax";
								document.getElementById("paragraph18" + x).innerHTML = infoOfsvg;
								document.getElementById("paragraph19" + x).innerHTML = tableList[i][j][2];
								eliminationArr.splice(0,0,i);
								gate = true;

								if(tableList[i][j][7] === true){
									document.getElementById("paragraph14" + x).className = "seatedPara";
									document.getElementById("rightBottomReservations").insertBefore(document.getElementById("paragraph14" + x).parentElement,document.getElementById("linebreak2"));
									console.log("plöö")
								}
								
								break;
						}
						}else{break;}
					}
				}
			}
		}
	}
	var divis = document.getElementsByTagName("div");
	var paras = document.getElementsByTagName("p");
	var svgs = document.getElementsByTagName("svg");
	var reservationlength = allReservationsOrdered.length; 
	for(var q = 0; q < reservationlength; q++){
		w = (q*6) + 44;
		
		paras[w].onclick = function(e){

			if(this.className == "seatedPara"){//if table has been seated and wants to be returned.

				//this.id.substr(11,12);
				//console.log(this.id.substr(11,12));
				var b = parseInt(this.children[0].id.substr(11,12));
				console.log(b);
				console.log(b);

				if(b === reservationlength - 1){
					b--;
				};

				this.className = "reservationPara";

				var divv = document.createElement("div");
				divv.className = "div100";
				document.getElementById("rightBottomReservations").insertBefore(divv,divis[11+b]);

				this.parentNode.remove();

				divv.appendChild(this);
				console.log(paras[w].parentElement);
				console.log(this.children[0]);

				console.log(divis[11+b]);

				tableList[this.children[0].innerHTML][0][7] = false;

				localStorage.setItem("List of tables", JSON.stringify(tableList));

			}else{//if you want to seat table.
				this.className = "seatedPara";

				var divv = document.createElement("div");
				divv.className = "div200";
				document.getElementById("rightBottomReservations").appendChild(divv);

				this.parentNode.remove();

				divv.appendChild(this);

				document.getElementById("rightBottomReservations").insertBefore(divv,document.getElementById("linebreak2"));

				tableList[this.children[0].innerHTML][0][7] = true;
				console.log(tableList[this.children[0].innerHTML]);

				localStorage.setItem("List of tables", JSON.stringify(tableList));
			}
		}
	}

	for(var k = 2; k<reservationlength; k++){
		svgs[k].onclick = function(e){
			alert("painoit inffoa bitch");
		}
	}

}; // tested: works? Was a glitch where available-table-cards' availability time hours were missing. Refreshed and glitch didn't happen and has'n happend since.
