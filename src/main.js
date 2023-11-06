const projectsDialogEl = document.querySelector("#projects-dialog")
const closeDialogEl = document.querySelector("#close-dialog-btn")
const thanksDialogEl = document.querySelector("#thanks-dialog")
const pledgeDialogForm = document.querySelector("#pledge-dialog-form")
const pledgeDialogArr = [...pledgeDialogForm]

pledgeDialogArr.forEach((el) => {
	if (el.type === "radio") {
		el.addEventListener("click", (e) => {
			const selectedPledgeBox = document.querySelector(
				`div[data-reward=${e.target.value}]`
			)
			const allPledgeBoxes = document.querySelectorAll("div[data-reward]")
			//Show the pledge box if radio button is clicked
			selectedPledgeBox.classList.toggle("hidden")

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

let bookmarkProject = () => {
	const bookmarkBtnEl = document.querySelector("#main-bookmark-btn")
	const bookmarkIconCircleEl = document.querySelector(
		"#main-bookmark-icon-circle"
	)
	const bookmarkIconSymbolEl = document.querySelector(
		"#main-bookmark-icon-symbol"
	)
	const bookmarkTextEl = document.querySelector("#main-bookmark-text")

	bookmarkBtnEl.addEventListener("click", (e) => {
		bookmarkTextEl.classList.toggle("text-skin-active-brand-accent")
		bookmarkTextEl.textContent = "Bookmarked"
		bookmarkIconCircleEl.classList.toggle("fill-skin-dim-brand-accent")
		bookmarkIconCircleEl.classList.toggle("fill-skin-active-brand-accent")
		bookmarkIconSymbolEl.style.fill = "white"
	})
}

bookmarkProject()
