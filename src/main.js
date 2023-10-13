const projectsDialogEl = document.querySelector("#projects-dialog")
const closeDialogEl = document.querySelector("#close-dialog-btn")

const openDialog = () => {
	projectsDialogEl.showModal()
}

const closeDialog = () => {
	projectsDialogEl.close()
}

window.onload = openDialog()
