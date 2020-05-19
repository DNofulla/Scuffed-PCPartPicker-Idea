/*****************************************
* LCD Clock script- by Javascriptkit.com
* Featured on/available at http://www.dynamicdrive.com/
* This notice must stay intact for use
*****************************************/

var alternate=0

function show(){
var clockobj=document.getElementById? document.getElementById("digitalclock") : document.all.digitalclock
var Digital=new Date()
var hours=Digital.getHours()
var minutes=Digital.getMinutes()
var dn="AM"

if (hours==12) dn="PM" 
if (hours>12){
dn="PM"
hours=hours-12
}
if (hours==0) hours=12
if (hours.toString().length==1)
hours="0"+hours
if (minutes<=9)
minutes="0"+minutes

if (alternate==0)
clockobj.innerHTML=hours+"<font color='lime'> : </font>"+minutes+" "+"<sup>"+dn+"</sup>"
else
clockobj.innerHTML=hours+"<font color='black'> : </font>"+minutes+" "+"<sup>"+dn+"</sup>"
alternate=(alternate==0)? 1 : 0
setTimeout("show()",1000)
}
window.onload=show
// EVERYTHING ABOVE THIS LINE IS CODE FROM DYNAMIC DRIVE FOR AN LCD CLOCK

function clearList(){
    localStorage.clear();
}