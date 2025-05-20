// 1. 輸入框
// 2. 計算圓面積
// 3. 頁面輸出
const radius = document.querySelector("#radius")
const btn = document.querySelector("#btn")
const result = document.querySelector("#result")

btn.addEventListener("click", () => {
	// console.log("OK")

	// 讀取使用者輸入並轉為數字
	const r = parseFloat(radius.value)

	if (r <= 0) {
		result.textContent = "請輸入正確半徑"
		result.classList.remove("success")
		result.classList.add("error")

		return
	}
	// 使用內建常數 Math.PI
	const area = r * r * Math.PI
	result.textContent = `圓面積為: ${area.toFixed(2)}`
	result.classList.add("success")
	result.classList.remove("error")
	// 清空
	radius.value = ""
})
