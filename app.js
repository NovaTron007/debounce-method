// get button
const dbBtn = document.querySelector("#debounce-btn");
// add event listener to button
dbBtn.addEventListener("click", () => console.log("clicked"))
dbBtn.addEventListener("click", debounce())

function debounce(){
	let timeoutID;
	console.log("timeoutID: ", timeoutID)
	return () => {
		clearTimeout(timeoutID) // clear timeout with the id every time
		// always called by js, no need to call as fn, setTimeout returns its id alwauys
		timeoutID = setTimeout(() => { 
			console.log("debounce called, timeoutID: " ,timeoutID)
		}, 2000) // called after last timeout
	}
}

// delay logic so it runs 2 secs after last click
// setTimeout returns an id, pass to clearTimeout to clear it