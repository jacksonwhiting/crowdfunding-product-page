const projectsDialogEl = document.querySelector("#projects-dialog")
const closeDialogEl = document.querySelector("#close-dialog-btn")
const thanksDialogEl = document.querySelector("#thanks-dialog")
const pledgeDialogForm = document.querySelector("#pledge-dialog-form")
const pledgeDialogArr = [...pledgeDialogForm]

pledgeDialogArr.forEach((el) => {
	if (el.type === "radio") {
		el.addEventListener("input", (e) => {
			const selectedPledgeBox = document.querySelector(
				`[data-reward=${e.target.value}]`
			)
			//Show the pledge box if radio button is clicked
			selectedPledgeBox.classList.remove("hidden")

			const allPledgeBoxes = document.querySelectorAll("[data-reward]")

			allPledgeBoxes.forEach((box) => {
				if (
					!(box.dataset.reward === `${e.target.value}`) &&
					!box.classList.contains("hidden")
				) {
					box.classList.add("hidden")
				}
			})
		})
	}
})

const openDialog = (dialog) => {
	dialog.showModal()
}

const closeDialog = (dialog) => {
	dialog.close()
}

/*
When clicking the hamburger menu...
   - Show pop-out-nav-box (remove hidden)
   - Show backdrop (remove hidden)
   - Set opacity 100 on Nav items
   - Replace hamburger menu with x icon
*/

let displayPopOutNav = () => {
	const hamburgerMenuIcon = document.querySelectorAll("#hamburger-menu-icon")
	const popOutNavEl = document.querySelector("#pop-out-nav-box")
	const backdropEl = document.querySelector("#main-backdrop")
	const xIcon = document.querySelector("#x-icon-mobile-pop-out")

	popOutNavEl.classList.remove("hidden")
	backdropEl.classList.remove("hidden")
	hamburgerMenuIcon[0].classList.add("hidden")
	xIcon.classList.remove("hidden")
}

let closePopOutNav = () => {
	const hamburgerMenuIcon = document.querySelectorAll("#hamburger-menu-icon")
	const popOutNavEl = document.querySelector("#pop-out-nav-box")
	const backdropEl = document.querySelector("#main-backdrop")
	const xIcon = document.querySelector("#x-icon-mobile-pop-out")

	popOutNavEl.classList.add("hidden")
	backdropEl.classList.add("hidden")
	xIcon.classList.add("hidden")
	hamburgerMenuIcon[0].classList.remove("hidden")
}
