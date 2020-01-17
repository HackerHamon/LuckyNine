const randomImage = document.querySelector(".randomImage");
const randomImage2 = document.querySelector(".randomImage2"); 
const alertDiv = document.querySelector("#alertDiv");

function randomImg(){
    let randomNumber = Math.floor(Math.random() * 53) + 1; 

    let imgName = randomNumber + ".png"; 

    randomImage.src= "assets" + "/" + imgName; 

    let difference = 0; 

    if (randomNumber<=13 && randomNumber >0) { 
    	difference = randomNumber; 

    } else if(randomNumber>13 && randomNumber<27){ 

        difference = randomNumber-13; 

    } else if(randomNumber>26 && randomNumber<40){ 27-39
    	difference = randomNumber-26;
    
    } else if(randomNumber>39 && randomNumber<53){
    	difference = randomNumber-39;
    } 

    return difference; 
 }

function randomImg2(){
    let randomNumber2 = Math.floor(Math.random() * 53) + 1;

    let imgName = randomNumber2 + ".png";

    randomImage2.src= "assets" + "/" + imgName;


    let difference = 0; 

    if (randomNumber2<=13 && randomNumber2 >0) {
    	difference = randomNumber2;

    } else if(randomNumber2>13 && randomNumber2<27){
    	difference = randomNumber2-13;
    } else if(randomNumber2>26 && randomNumber2<40){
    	difference = randomNumber2-26;
    } else if(randomNumber2>39 && randomNumber2<53){
    	difference = randomNumber2-39;
    } 

    return difference; 
 }

 function luckyNine(){
 	alertDiv.innerHTML = "";
 	let total = 0; 
 	total = randomImg() + randomImg2(); 

 	if (total ==9){		
 		alertDiv.innerHTML += "CONGRATULATIONS! Luck is on your side. Good one! ";
 		alertDiv.setAttribute("class", "bg-success");
 		alertDiv.style.color = "white";


 	} else{				

 		alertDiv.innerHTML+= "You got " + total + " points. Unlucky of you. Try Again!";
 		alertDiv.setAttribute("class", "bg-danger");
        alertDiv.style.color = "white";
        

 	}
 }

