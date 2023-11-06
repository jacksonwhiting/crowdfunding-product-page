let supportData = {
	fundsGiven: 89914,
	peopleGiven: 5007,
	daysLeft: 56,
	"bamboo-stand": 101,
	"black-edition": 64,
	"mahogany-edition": 0,
	bambooStandCost: 25,
	blackEditionCost: 75,
	mahoganySpecialCost: 200,
	percent: function () {
		return Math.floor((this.fundsGiven / 100000) * 100)
	},
}

const updateData = (value, dataReward) => {
	let currentPercent = supportData.percent()
	supportData.fundsGiven += value
	supportData.peopleGiven += 1
	supportData[dataReward] -= 1
	let updatedPercent = supportData.percent()

	const totalBacked = document.querySelector("#total-backed")
	const totalBackers = document.querySelector("#total-backers")
	const goalPercent = document.querySelector("#goal-percent")
	const mainInventoryEl = document.querySelector(
		`#main-inventory-${dataReward}`
	)
	const dialogInventoryEl = document.querySelector(
		`#dialog-inventory-${dataReward}`
	)

	totalBacked.textContent = `$${supportData.fundsGiven.toLocaleString()}`
	totalBackers.textContent = supportData.peopleGiven.toLocaleString()
	if (mainInventoryEl) {
		mainInventoryEl.textContent = supportData[dataReward]
	}
	if (dialogInventoryEl) {
		dialogInventoryEl.textContent = supportData[dataReward]
	}
	goalPercent.style.width = `${updatedPercent}%`
}

const displayData = () => {
	const pledgeDataBtnEls = document.querySelectorAll("button[data-reward]")

	//listen for button click
	pledgeDataBtnEls.forEach((btn) => {
		btn.addEventListener("click", (e) => {
			const projectsDialogEl = document.querySelector("#projects-dialog")
			const selectedPledgeBox = document.querySelector(
				`div[data-reward=${e.target.dataset.reward}]`
			)
			const inputReward = document.querySelector(
				`input[type="text"][data-reward=${e.target.dataset.reward}]`
			)
			const dataSetAttr = e.target.dataset.reward
			const selectedRadioBtn = document.querySelector(
				`#pledge-${dataSetAttr}`
			)
			const inputValue = Number(inputReward.value)

			updateData(inputValue, dataSetAttr)
			console.log(supportData)

			// Hide the input pledge box after button clicked
			inputReward.value = ""
			selectedPledgeBox.classList.add("hidden")
			selectedRadioBtn.checked = false
			closeDialog(projectsDialogEl)
		})
	})
}

//Uncheck button when closing idalog with x icon
const uncheckRadioBtn = () => {
	const pledgeRadioBtns = document.querySelectorAll(
		"#pledge-dialog-form input[type=radio]"
	)

	pledgeRadioBtns.forEach((btn) => {
		if (btn.checked) {
			const checkedPledgeBox = document.querySelector(
				`div[data-reward=${btn.dataset.reward}
			]`
			)
			btn.checked = false
			console.log(btn)
			checkedPledgeBox.classList.add("hidden")
		}
	})
}

displayData()
