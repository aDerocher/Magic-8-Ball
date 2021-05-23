function shake(){

	let pTag = document.getElementById("eightBallText");

	let rollOutcome = Math.floor(Math.random()*6)+1;
	console.log(rollOutcome);
	switch (rollOutcome){
		case 1:
			pTag.innerHTML = "No";
			break;
		case 2:
			pTag.innerHTML = "Yes"
			break;
		case 3:
			pTag.innerHTML = "You may rely on it";
			break;
		case 4:
			pTag.innerHTML = "Outlook Good";
			break;
		case 5:
			pTag.innerHTML = "My sources say no";
			break;
		case 6:
			pTag.innerHTML = "Very doubtful";
			break;

	}
}
