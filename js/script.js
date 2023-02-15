
// Define the characters that can be used in the CAPTCHA
var chars = "가각건검경계고과광교구국군귀규그기길나난내노눈다단달담대던도동두라랑래러럭런럴레려로루류마막만말명모목무문미민바반발방배백버범법병보부분불비사산살삼상서석선설섬성세소솔송수숙순슬승시신실심쌍아안암압앙애액야약양어언얼엄업에여역연열영예오옥온옹와완왕왜외요욕용우운웅원월위유육으은을음의이익인일임입잉자작잔잠장재쟁저적전절점정제조족존졸종주죽준줄중즉즐즘증지진질짐집징차착찬찰참창채책처천철첨체초총최추출충취치칠침카칸캄캐캡커컴컵케켈코콜콤콩쾌쿠퀴크큰클키타태탁탄탑탕태택터토턱통투툴툼퉁특티틱파판팔패팽퍼퍽펀펄펑페폐포폭표풀품풍프픔피픽필핑하학한할함합항해핵행향헌험혁현혈협형혜호혹혼홀홍화확환황회획횡효후훈훌훔훨휘휴휼";

// Get the CAPTCHA element
var captcha = document.getElementById("captcha");

// Get the CAPTCHA input element
var captchaInput = document.getElementById("captchaInput");

// Get the result element
var result = document.getElementById("result");

// Create an array to hold the characters that will be used in the CAPTCHA
var captchaChars = [];

// Create an array to hold the character positions
var positions = [10, 40, 70, 100, 130];

// Create variables to hold the number of correct attempts and the total time
var numCorrect = 0;
var totalTime = 0;
// Clear the CAPTCHA input
// Generate the CAPTCHA characters and add them to the CAPTCHA element
generateCaptcha();

// Add a click event listener to the submit button
document.getElementById("submitBtn").addEventListener("click", function() {
	// Get the value of the CAPTCHA input
	var input = captchaInput.value;
	
	// Check if the input matches the CAPTCHA characters
	if (input.toUpperCase() === captchaChars.join("")) {
		// If the input is correct, increment the number of correct attempts and update the result element
		numCorrect++;
		result.innerHTML = "Số lần nhấn đúng: " + numCorrect;
		
		// Calculate the time taken to solve the CAPTCHA and add it to the total time
		var timeTaken = Date.now() - startTime;
		totalTime += timeTaken;
		
		// Update the result element with the average time taken to solve the CAPTCHA
		result.innerHTML += "<br>Tổng thời gian: " + Math.round(totalTime / 1000).toFixed(2) + "s";
		// Clear the CAPTCHA input and generate a new CAPTCHA
		captchaInput.value = "";
		generateCaptcha();
		// Generate a new CAPTCHA
		generateCaptcha();
	} else {
		// If the input is incorrect, show an error message and clear the input field
		alert("Mã xác nhận không chính xác");
		captchaInput.value = "";
	}
});

// Add a keypress event listener to the CAPTCHA input field to allow submission by pressing Enter
captchaInput.addEventListener("keypress", function(event) {
	if (event.keyCode === 13) {
		document.getElementById("submitBtn").click();
	}
});

// Function to generate a new CAPTCHA
function generateCaptcha() {
	// Clear the captchaChars array
	captchaChars = [];
	
	// Remove any existing characters from the CAPTCHA element
	captcha.innerHTML = "";
	
	// Get a random character from the chars string and add it to the captchaChars array
	for (var i = 0; i < 5; i++) {
		var char = chars.charAt(Math.floor(Math.random() * chars.length));
		captchaChars.push(char);
		
		// Create a new span element for the character and add it to the captcha element
		var charElement = document.createElement("span");
		charElement.className = "char";
		charElement.dataset.char = (i + 1);
		charElement.innerHTML = char;
		charElement.style.left = positions[i] + "px";
		captcha.appendChild(charElement);
	}
	
	// Set the starting time for the CAPTCHA
	startTime = Date.now();
}
