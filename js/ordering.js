
function clearOrders() {
    document.getElementById("q1").value = "";
    document.getElementById("q2").value = "";
    document.getElementById("q3").value = "";
    document.getElementById("q4").value = "";
    document.getElementById("p1").value = "";
    document.getElementById("p2").value = "";
    document.getElementById("p3").value = "";
    document.getElementById("p4").value = "";
}

function calculateBill() {
    var item1, item2, item3, item4, q1, q2, q3, q4, p1, p2, p3, p4;
    var arr = [];

    item1 = document.getElementById("item1").value;
    item2 = document.getElementById("item2").value;
    item3 = document.getElementById("item3").value;
    item4 = document.getElementById("item4").value;
    q1 = document.getElementById("q1").value;
    q2 = document.getElementById("q2").value;
    q3 = document.getElementById("q3").value;
    q4 = document.getElementById("q4").value;
    p1 = document.getElementById("p1").value;
    p2 = document.getElementById("p2").value;
    p3 = document.getElementById("p3").value;
    p4 = document.getElementById("p4").value;

    var data = [
	[item1, q1, p1, q1 * p1],
	[item2, q2, p2, q2 * p2],
	[item3, q3, p3, q3 * p3],
	[item4, q4, p4, q4 * p4]
    ];

    var total = Number(q1*p1) + Number(q2*p2) + Number(q3*p3) + Number(q4*p4); 

    if(typeof(Storage) !== "undefined") {
	window.localStorage.setItem("order", JSON.stringify(data));
	window.localStorage.setItem("total", total);
    } else {
	alert("Your browser doesn\'t support local storage which is vital in this program to work. Please use another browser.");
    }
}

window.onload = function generate_table() {
    var orders = JSON.parse(window.localStorage.getItem("order"));
    var total = window.localStorage.getItem("total");
    let tbl = `
<table>
  <thead>
    <tr>
      <th>ITEMS</th>
      <th>QUANTITY</th>
      <th>PRICE</th>
      <th>Sub-Total</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>${orders[0][0]}</td>
      <td>${orders[0][1]}</td>
      <td>${orders[0][2]}</td>
      <td>${orders[0][3]}</td>
    </tr>
    <tr>
      <td>${orders[1][0]}</td>
      <td>${orders[1][1]}</td>
      <td>${orders[1][2]}</td>
      <td>${orders[1][3]}</td>
    </tr>
    <tr>
      <td>${orders[2][0]}</td>
      <td>${orders[2][1]}</td>
      <td>${orders[2][2]}</td>
      <td>${orders[2][3]}</td>
    </tr>
    <tr>
      <td>${orders[3][0]}</td>
      <td>${orders[3][1]}</td>
      <td>${orders[3][2]}</td>
      <td>${orders[3][3]}</td>
    </tr>
    <tr>
      <td><strong>Total</strong></td>
      <td></td>
      <td></td>
      <td>${total}</td>
    </tr>
  </tbody>
</table>`;
    let container = document.querySelector('#root');
    container.innerHTML = tbl;
}



