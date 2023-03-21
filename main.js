let elementById = document.getElementById("download1");
let elementsByClassName = elementById.getElementsByClassName("thunder1");
let element = elementsByClassName.item(0);


let elementsByTagName = element.getElementsByTagName("a");
let allUrl = ""
let allSet = new Set();
for (let i = 0; i < elementsByTagName.length; i++) {


	let attribute = elementsByTagName.item(i).getAttribute("href");
	if (attribute !== null) {

		allSet.add(attribute)
	}

}
for (let item of allSet) {
	allUrl += (item + "\n")
}

// console.log(allSet)
console.log(allUrl)