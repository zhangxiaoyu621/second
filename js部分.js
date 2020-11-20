window.onload = function() {
  var BaseURL = 'http://thungghuan.xyz:3000'
  var getRequest = new XMLHttpRequest() 
  div1 = document.getElementById('div1')
  getRequest.open('GET', BaseURL + '/users') 
  getRequest.send()
  getRequest.onreadystatechange = function() {
    if (getRequest.readyState == 4)
     {  if (getRequest.status == 200) 
     {  console.log(getRequest.responseText)
        var a = '<ul>用户列表'
        var ca = Object(eval(getRequest.responseText))
        for(var i = 0; i <ca.length; i++)
        {a += '<li>' + ca[i] + '</li>'}
        a+='</ul>'
        document.getElementById('div1').innerHTML = a
     } 
      else {alert(getRequest.responseText)
     }
    }
 }
}
function postData() {
   var BaseURL = 'http://thungghuan.xyz:3000'
   var postRequest = new XMLHttpRequest();
   postRequest.open("POST", BaseURL + '/add');
   name=document.getElementById('name').value;
   num = document.getElementById('num').value;
   var postData = {
        'name': name,
        'num': String(num)
        
    }
   postRequest.setRequestHeader("Content-type", "application/json")
   postRequest.send(JSON.stringify(postData))
   postRequest.onreadystatechange = function() {
    if (postRequest.readyState == 4) {
    if (postRequest.status == 200) { 
        console.log(postRequest.responseText)
       } 
       else 
       { alert(postRequest.responseText)}
       }
    }
}



