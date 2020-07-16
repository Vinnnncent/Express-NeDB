var request = new XMLHttpRequest();
request.open("GET", "/users", true);

request.onload = function(users) {
  if (this.status >= 200 && this.status < 400) {
    // Success!
    var resp = JSON.parse(this.response);
    console.log(resp);

    resp.forEach((element, index, array) => {
      /*
      console.log(element.name);
      console.log(index);
      console.log(array);
      */
      var ul = document.getElementById("users");
      var li = document.createElement("li");
      var a = document.createElement("a");
      a.appendChild(document.createTextNode(element.name));
      a.setAttribute("id", element._id);
      a.href = "/users/remove/" + element._id;
      li.appendChild(a);
      ul.appendChild(li);
    });
  } else {
    // We reached our target server, but it returned an error
    console.log("error 500");
  }
};

request.onerror = function() {
  // There was a connection error of some sort
  console.log("some other error");
};

request.send();

//document.getElementById("users").style.color = "red";
