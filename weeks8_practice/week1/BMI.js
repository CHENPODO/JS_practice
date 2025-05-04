/* 
Week 1 - BMI 計算器設計任務
實作一個 BMI 計算器

功能需求如下：

1.使用者輸入體重（公斤）與身高（公尺）
2.用公式計算： BMI = 體重 / (身高 * 身高)
3.如果 BMI 小於 18.5，印出「過輕」
4.如果 BMI 介於 18.5 到 24，印出「正常」
5.其他則印出「過重」
6.顯示 BMI 結果

*/

// step 1: 抓到體重、身高的id、計算btn的id、BMI結果的id
const heightInput = document.querySelector("#height")
const weightInput = document.querySelector("#weight")
const calculate = document.querySelector("#calculate")
const result = document.querySelector("#result")

// step 2: 監聽計算按鈕的點擊事件
calculate.addEventListener("click", () => {
	// console.log("click")

	// step 3: 抓到身高體重input的value，並且需將字符串轉換成小數
	const h = parseFloat(heightInput.value) // console.log(h) //點計算會列印出2
	const w = parseFloat(weightInput.value)
	// bmi = 計算方式
	let bmi = w / (h * h)

	// step 4: 設定BMIStatus為空字符串
	let BMIStatus = "" //因為後續會修改內容值所以這邊用 let

	// step 5 : 判斷式
	if (bmi < 18.5) {
		BMIStatus = "過輕"
	} else if (bmi >= 18.5 && bmi < 24) {
		BMIStatus = "適中"
	} else {
		BMIStatus = "過重"
	}
	result.value = `BMI: ${bmi.toFixed(2)} - ${BMIStatus}`
})
