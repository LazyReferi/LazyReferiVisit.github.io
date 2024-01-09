window.onload = function() {
	document.getElementById("passwordForm").addEventListener("submit", function(event) {
		event.preventDefault();

		var websiteName = document.getElementById("websiteName").value;
		var username = document.getElementById("username").value;
		var password = document.getElementById("password").value;

		var passwordItem = document.createElement("li");
		passwordItem.innerHTML = "<strong>" + websiteName + "</strong> - " + username + ": " + password;

		document.getElementById("passwords").appendChild(passwordItem);

		document.getElementById("websiteName").value = "";
		document.getElementById("username").value = "";
		document.getElementById("password").value = "";
	});
};