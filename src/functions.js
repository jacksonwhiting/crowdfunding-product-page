//Modifies the DOM with the provided text
const writeTextToDom = (node, text) => (node.textContent = text)

//Opens a dialog box
const openDialog = (dialog) => {
	dialog.showModal()
}

//Closes a dialog box
const closeDialog = (dialog) => {
	dialog.close()
}

//Disables a pledge box and adds 50% opacity
const disablePledgeBox = (boxNode, btnNode) => {
	if (navigator.userAgent.includes("Mozilla")) {
		boxNode.classList.add("opacity-50")
	}
	btnNode.setAttribute("disabled", "")
}

//Hides a DOM node
const toggleHidden = (node) => node.classList.toggle("hidden")

//Uncheck a radio button if it's checked
const uncheckBtn = (btn) => {
	if (btn.checked) {
		btn.checked = false
	}
}
