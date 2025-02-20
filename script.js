let tbody = document.getElementById("output");

let tr = document.createElement("tr");
let td1 = document.createElement("td");
td1.setAttribute("colspan","2");
td1.innerText = "Loading..."
tr.append(td1);
tbody.append(tr);

function getRandomTime(){
	let randomTime = parseInt(1+Math.random()*3)*1000;
	return randomTime;
}


let promise1 = new Promise((resolve,reject)=>{
	let time = getRandomTime();
	setTimeout(()=>{
		resolve(time);
	},time)
})
let promise2 = new Promise((resolve,reject)=>{
	let time = getRandomTime();
	setTimeout(()=>{
		resolve(time);
	},time)
})
let promise3 = new Promise((resolve,reject)=>{
	let time =getRandomTime();
	setTimeout(()=>{
		resolve(time);
	},time)
})

Promise.all([promise1,promise2,promise3])
.then((results)=>{
	tr.remove();
	let count = 1;
	let max = -Infinity;
	results.forEach(result=>{
		if(result>max){
			max = result
		}
		// console.log((result/1000).toFixed(3))
		let tr1 = document.createElement("tr");
		let td2 = document.createElement("td");
		td2.innerText = "Promise " + count;
		let td3 = document.createElement("td");
		td3.innerText = (result/1000).toFixed(3);
		tr1.append(td2,td3);
		tbody.append(tr1);
		count++;
	})

	
	let tr2 = document.createElement("tr");
	let td4 = document.createElement("td");
	td4.innerText = "Total";
	let td5 = document.createElement("td");
	td5.innerText = (max/1000).toFixed(3);
	tr2.append(td4,td5);
	tbody.append(tr2);
})






