function loadjson(file){
	return new Promise((resolve,reject)=>{
		return fetch(file).then(res=>{
			if(res.ok){
				resolve(res.json());
			}
			else{
				reject(new Error('error'));
			}
		})
	})
}
#this is the main.js file which fetches the data from the data.json file and then calls the functions to display the data on the webpage. The loadjson function returns a promise that resolves with the JSON data if the fetch is successful, or rejects with an error if it fails. The fetchedData variable holds the promise returned by loadjson, and when it resolves, it calls the career, education, and skills functions with the respective data.
var fetchedData=loadjson("data.json");
fetchedData.then(data=>{
	console.log(data);
	career(data.career);
	education(data.education);
	skills(data.skills);
})
var childTwo=document.querySelector(".child2")
console.log(childTwo);
function career(car){
	var heading=document.createElement("h3");
	heading.textContent="career objective";
	childTwo.appendChild(heading);
     var hr=document.createElement("hr");
     heading.appendChild(hr);
     var text=document.createElement("p");
     text.textContent=car.info;
     childTwo.appendChild(text);
}
function education(edu){
	var heading=document.createElement("h3");
	heading.textContent="educational qualification";
	childTwo.appendChild(heading);
     var hr=document.createElement("hr");
     heading.appendChild(hr);
      var tab=document.createElement("table");
      tab.border="1";
      childTwo.appendChild(tab);
      var tr="<tr><th>Degree</th><th>Institute</th><th>Data</th></tr>";
      //tab.innerHTML=tr;
      var tr1=" ";
      for(var i=0;i<edu.length;i++){
       tr1+="<tr> <td>"+edu[i].degree+" </td> <td>"+edu[i].institute+" </td> <td>"+edu[i].Data+
       " </td> </tr>";
     
      }
      tab.innerHTML=tr+tr1;
}
function skills(sk){
	var heading=document.createElement("h3");
	heading.textContent="Technical skills";
	childTwo.appendChild(heading);
     var hr=document.createElement("hr");
     heading.appendChild(hr);
     for(var i=0;i<sk.length;i++){
     	var skdiv=document.createElement("div");
     	skdiv.classList.add("skdiv");
     	childTwo.append(skdiv);
     	var title=document.createElement("h3");
     	title.textContent=sk[i].title;
     	skdiv.append(title);
     	var hr=document.createElement("hr");
        title.appendChild(hr);
        for(var j=0;j<sk[i].content.length;j++){
        	var con=document.createElement("span");
        	con.textContent=sk[i].content[j];
        	skdiv.appendChild(con);
        }



     }
}
