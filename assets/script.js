var states = ['Alabama','Alaska','Arizona','Arkansas','California','Colorado','Connecticut','Delaware','Florida','Georgia','Hawaii','Idaho','Illinois','Indiana','Iowa','Kansas','Kentucky','Louisiana','Maine','Maryland','Massachusetts','Michigan','Minnesota','Mississippi','Missouri','Montana','Nebraska','Nevada','New Hampshire','New Jersey','New Mexico','New York','North Carolina','North Dakota','Ohio','Oklahoma','Oregon','Pennsylvania','Rhode Island','South Carolina','South Dakota','Tennessee','Texas','Utah','Vermont','Virginia','Washington','West Virginia','Wisconsin','Wyoming']
var listEl = document.getElementById('jobList');
var countEl = document.getElementById('totalCount');

// const apiKey = "aa947a1d-05b4-4350-97b2-8a7206b4a89c"
const btn1 = document.getElementById("submitBtn");
btn1.addEventListener("click", getParam);

const btn2 = document.getElementById('clearBtn');
btn2.addEventListener("click", function () {
   listEl.textContent = " ";
   countEl.textContent = " "
})




function getParam () {
   var keyword = document.getElementById("keyword").value;
   console.log(keyword);
   var state = document.getElementById("state").value;
   console.log(state);
   //document.getElementById('jobList').empty();
   getAPI(keyword, state);
};

function getAPI(a,b) {

   var url = "https://jooble.org/api/";
   var key = "aa947a1d-05b4-4350-97b2-8a7206b4a89c";
   //var params = "{ keywords: 'farm', location: 'Virginia'}";
   var params = "{ keywords: '" + a + "', location: '" + b + "'}";
   console.log(params)
   //create xmlHttpRequest object
   var http = new XMLHttpRequest();
   //open connection. true - asynchronous, false - synchronous
   http.open("POST", url + key, true);
   
   //Send the proper header information
   http.setRequestHeader("Content-type", "application/json");
      
   //Callback when the state changes
   http.onreadystatechange = function() {
      if(http.readyState == 4 && http.status == 200) {
         //alert(http.responseText);
         var repoList = JSON.parse(http.responseText);
         var repoTotal = repoList.totalCount;
         
         console.log(repoList);
                
         console.log(repoTotal);
         countEl.append("total job count is " + repoTotal);
        
        

         displayContent(repoList.jobs);
         
      }
   
   }
   //Send request to the server
   http.send(params);

   
   function displayContent (data) {
      
      var totalList = document.createElement('p');
      totalList.textContent = data.totalCount;
      countEl.append(totalList);
      console.log(totalList);
      
      for (let i=0; i < data.length; i++) {
         console.log(data[i].title + "-" + data[i].location);
         // var linkEl = document.createElement('a');
         // linkEl.setAttribute('href', data[i].link);
         // linkEl.setAttribute('target', '_blank');
         // linkEl.appendChild(listEl);
         var listTitles = document.createElement('li');
         //listTitles.textContent = (data[i].title + "----" + data[i].location);
         

         var a = document.createElement("a");
         a.href = data[i].link;
         a.innerText = (data[i].title + "----" + data[i].location);
         console.log(data[i].link);

         listTitles.appendChild(a);
         listEl.appendChild(listTitles);
         
         

      }
      // var totalList = document.createElement('p');
      // totalList.textContent = data.totalCount;
      // countEl.append(totalList);
      // console.log(totalList);
   }

  

console.log("test")
};

   