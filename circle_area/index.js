const radius = document.querySelector("#radius")
const btn = document.querySelector("#btn")
const result = document.querySelector("#result")

btn.addEventListener("click", () => {
	// console.log("ok")
	const r = parseFloat(radius.value)
	const area = r * r * Math.PI

	if (isNaN(r) || r <= 0) {
		result.textContent = "重新輸入"
		result.classList.remove("success")
		result.classList.add("error")
		return
	}
	result.textContent = area.toFixed(2)
	result.classList.add("success")
	result.classList.remove("error")
})
