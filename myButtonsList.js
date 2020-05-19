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


if (screen.width <= 575){
    document.getElementById("List").innerHTML = "To Change an item, go to the buttons below the list!" 
                                                + "<hr class='ul-line'>";
    document.getElementById("List").style.color = "red";
}

const cpus = [{name: "Rising Corium Z3", price: 150, detail1: "2 Cores", detail2: "4 Threads", detail3: "3.7Ghz", detail4: "2MB Cache", detail5: "65W Thermal Output"}, 
            {name: "Rising Corium Z5", price: 200, detail1: "4 Cores", detail2: "4 Threads", detail3: "3.2Ghz", detail4: "4MB Cache", detail5: "65W Thermal Output"}, 
            {name: "Rising Corium Z7", price: 250, detail1: "4 Cores", detail2: "8 Threads", detail3: "3.0Ghz", detail4: "6MB Cache", detail5: "65W Thermal Output"}, 
            {name: "Rising Corium Z9", price: 300, detail1: "6 Cores", detail2: "12 Threads", detail3: "2.7Ghz", detail4: "10MB Cache", detail5: "95W Thermal Output"},
            {name: "Rising Starium X3", price: 175, detail1: "2 Cores", detail2: "4 Threads", detail3: "4.2Ghz", detail4: "2MB Cache", detail5: "85W Thermal Output"}, 
            {name: "Rising Starium X5", price: 225, detail1: "4 Cores", detail2: "4 Threads", detail3: "3.7Ghz", detail4: "4MB Cache", detail5: "85W Thermal Output"}, 
            {name: "Rising Starium X7", price: 275, detail1: "4 Cores", detail2: "8 Threads", detail3: "3.5Ghz", detail4: "6MB Cache", detail5: "85W Thermal Output"}, 
            {name: "Rising Starium X9", price: 325, detail1: "6 Cores", detail2: "12 Threads", detail3: "3.2Ghz", detail4: "10MB Cache", detail5: "115W Thermal Output"},
            {name: "JS Scripter G5", price: 300, detail1: "6 Cores", detail2: "12 Threads", detail3: "2.6Ghz - 3.8Ghz", detail4: "10MB Cache", detail5: "75W Thermal Output"}, 
            {name: "JS Scripter G9", price: 400, detail1: "8 Cores", detail2: "16 Threads", detail3: "3.2Ghz - 4.0Ghz", detail4: "16MB Cache", detail5: "85W Thermal Output"}];


const cpuFans = [{name: "CoolerCracker H80Y", price: 15, detail1: "Brand: Cooler Cracker", detail2: "400RPM - 1000RPM", detail3: "Water Cooler: No", detail4: "Noise: 9Db - 20Db", detail5: "Height: 50mm"}, 
               {name: "CoolerBlaster X63", price: 20, detail1: "Brand: CoolerBlaster", detail2: "600RPM - 1200RPM", detail3: "Water Cooler: No", detail4: "Noise: 9Db - 25Db", detail5: "Height: 60mm"},
               {name: "Star WindCool I30", price: 25, detail1: "Brand: Star", detail2: "600RPM - 1500RPM", detail3: "Water Cooler: No", detail4: "Noise: 9Db - 25Db", detail5: "Height: 90mm"},
               {name: "MysticBlast H34", price: 30, detail1: "Brand: MysticBlast", detail2: "800RPM - 1900RPM", detail3: "Water Cooler: No", detail4: "Noise: 9Db - 30Db", detail5: "Height: 115mm"},
               {name: "TsunamiStrike L95 Air", price: 55, detail1: "Brand: TsunamiStrike", detail2: "900RPM - 2500RPM", detail3: "Water Cooler: No", detail4: "Noise: 9Db - 35Db", detail5: "Height: 155mm"},
               {name: "AquaCool J703", price: 60, detail1: "Brand: AquaCool", detail2: "600RPM - 1200RPM", detail3: "Water Cooler: Yes", detail4: "Noise: 9Db - 30Db", detail5: "Radiator: 1x100mm"},
               {name: "Star LiquidCool I60", price: 65, detail1: "Brand: Star", detail2: "600RPM - 1400RPM", detail3: "Water Cooler: Yes", detail4: "Noise: 9Db - 35Db", detail5: "Radiator: 1x100mm"},
               {name: "AquaCool X853", price: 70, detail1: "Brand: AquaCool", detail2: "800RPM - 1900RPM", detail3: "Water Cooler: Yes", detail4: "Noise: 9Db - 30Db", detail5: "Radiator: 1x100mm"},
               {name: "CoolerBlaster Liquid X99", price: 75, detail1: "Brand: CoolerBlaster", detail2: "900RPM - 2300RPM", detail3: "Water Cooler: Yes", detail4: "Noise: 9Db - 25Db", detail5: "Radiator: 1x100mm"},
               {name: "TsunamiStrike Storm L99 Liquid", price: 80, detail1: "Brand: TsunamiStrike", detail2: "600RPM - 2700RPM", detail3: "Water Cooler: No", detail4: "Noise: 15Db - 40Db", detail5: "Radiator: 1x100mm"}];


const mobos = [{name: "Strike X360", price: 70, detail1: "Brand: Strike", detail2: "4 Memory DIMMs", detail3: "M.2 Slots: 1", detail4: "On-Board Ethernet: Yes", detail5: "On-Board Wifi: No"}, 
             {name: "Legend Y250", price: 80, detail1: "Brand: Legend", detail2: "4 Memory DIMMs", detail3: "M.2 Slots: 1", detail4: "On-Board Ethernet: Yes", detail5: "On-Board Wifi: No"}, 
             {name: "Coral Ace 700Z", price: 90, detail1: "Brand: Coral Ace", detail2: "4 Memory DIMMs", detail3: "M.2 Slots: 1", detail4: "On-Board Ethernet: Yes", detail5: "On-Board Wifi: No"}, 
             {name: "XGFD Gaming Z455", price: 100, detail1: "Brand: XGFD", detail2: "4 Memory DIMMs", detail3: "M.2 Slots: 1", detail4: "On-Board Ethernet: Yes", detail5: "On-Board Wifi: No"}, 
             {name: "LGFG Enterprise 690Y", price: 110, detail1: "Brand: LGFG", detail2: "4 Memory DIMMs", detail3: "M.2 Slots: 1", detail4: "On-Board Ethernet: Yes", detail5: "On-Board Wifi: No"}, 
             {name: "L9 Bedrock X99", price: 120, detail1: "Brand: L9", detail2: "6 Memory DIMMs", detail3: "M.2 Slots: 1", detail4: "On-Board Ethernet: Yes", detail5: "On-Board Wifi: Yes"}, 
             {name: "L9 Steel H99", price: 130, detail1: "Brand: L9", detail2: "6 Memory DIMMs", detail3: "M.2 Slots: 1", detail4: "On-Board Ethernet: Yes", detail5: "On-Board Wifi: Yes"}, 
             {name: "Tsunami Screw TN45", price: 140, detail1: "Brand: Tsunami", detail2: "6 Memory DIMMs", detail3: "M.2 Slots: 1", detail4: "On-Board Ethernet: Yes", detail5: "On-Board Wifi: Yes"}, 
             {name: "LGFG Gaming 980X", price: 150, detail1: "Brand: LGFG", detail2: "8 Memory DIMMs", detail3: "M.2 Slots: 1", detail4: "On-Board Ethernet: Yes", detail5: "On-Board Wifi: No"}, 
             {name: "Tsunami Gaming J99", price: 160, detail1: "Brand: Tsunami", detail2: "8 Memory DIMMs", detail3: "M.2 Slots: 1", detail4: "On-Board Ethernet: Yes", detail5: "On-Board Wifi: No"}];


const memory = [{name: "1x8GB GGDR5 3200Mhz SkillZ J8", price: 40, detail1: "Brand: SkillZ", detail2: "Modules: 1", detail3: "Size per module: 8GB", detail4: "Speed: 3200Mhz", detail5: "Heatspreader: No"}, 
              {name: "1x8GB GGDR5 3200Mhz GogPow H8", price: 40, detail1: "Brand: GogPow", detail2: "Modules: 1", detail3: "Size per module: 8GB", detail4: "Speed: 3200Mhz", detail5: "Heatspreader: Yes"},
              {name: "1x8GB GGDR5 3200Mhz XLGF M8", price: 40, detail1: "Brand: XLGF", detail2: "Modules: 1", detail3: "Size per module: 8GB", detail4: "Speed: 3200Mhz", detail5: "Heatspreader: No"},
              {name: "1x16GB GGDR5 3200Mhz SkillZ JX16", price: 80, detail1: "Brand: SkillZ", detail2: "Modules: 1", detail3: "Size per module: 16GB", detail4: "Speed: 3200Mhz", detail5: "Heatspreader: Yes"},  
              {name:  "1x16GB GGDR5 3200Mhz GogPow HY16", price: 80, detail1: "Brand: GogPow", detail2: "Modules: 1", detail3: "Size per module: 16GB", detail4: "Speed: 3200Mhz", detail5: "Heatspreader: No"},
              {name: "1x16GB GGDR5 3200Mhz XLGF MZ16", price: 80, detail1: "Brand: XLGF", detail2: "Modules: 1", detail3: "Size per module: 16GB", detail4: "Speed: 3200Mhz", detail5: "Heatspreader: Yes"},
              {name: "2x8GB GGDR5 3200Mhz SkillZ J16", price: 90, detail1: "Brand: SkillZ", detail2: "Modules: 2", detail3: "Size per module: 8GB", detail4: "Speed: 3200Mhz", detail5: "Heatspreader: Yes"},  
              {name: "2x8GB GGDR5 3200Mhz GogPow H16", price: 90, detail1: "Brand: GogPow", detail2: "Modules: 2", detail3: "Size per module: 8GB", detail4: "Speed: 3200Mhz", detail5: "Heatspreader: Yes"},   
              {name: "2x8GB GGDR5 3200Mhz XLGF M16", price: 90, detail1: "Brand: XLGF", detail2: "Modules: 2", detail3: "Size per module: 8GB", detail4: "Speed: 3200Mhz", detail5: "Heatspreader: Yes"}, 
              {name: "2x16GB GGDR5 4000Mhz L9 JS32", price: 160, detail1: "Brand: L9", detail2: "Modules: 2", detail3: "Size per module: 16GB", detail4: "Speed: 4000Mhz", detail5: "Heatspreader: Yes"}];


const storage = [{name: "L9 1TB HDD 5400RPM", price: 35, detail1: "Brand: L9", detail2: "Hard Drive", detail3: "Size: 1TB", detail4: "Spin Speed: 5400RPM", detail5: "Type: SATA III"},
               {name: "XGGDisc 256GB SATA III SSD", price: 35, detail1: "Brand: XGGDisc", detail2: "Solid State Drive", detail3: "Size: 256GB", detail4: "Spin Speed: No", detail5: "Type: SATA III"},
               {name: "XGGDisc 1TB HDD 7200RPM", price: 40, detail1: "Brand: XGGDisc", detail2: "Hard Drive", detail3: "Size: 1TB", detail4: "Spin Speed: 5400RPM", detail5: "Type: SATA III"},
               {name: "L9 2TB HDD 5400RPM", price: 45, detail1: "Brand: L9", detail2: "Hard Drive", detail3: "Size: 2TB", detail4: "Spin Speed: 5400RPM", detail5: "Type: SATA III"},
               {name: "XGGDisc 512GB SATA III SSD", price: 50, detail1: "Brand: XGGDisc", detail2: "Solid State Drive", detail3: "Size: 512GB", detail4: "Spin Speed: No", detail5: "Type: SATA III"},
               {name: "L9 256GB NVME M.2 SSD", price: 50, detail1: "Brand: L9", detail2: "Solid State Drive", detail3: "Size: 256GB", detail4: "Spin Speed: No", detail5: "Type: M.2 NVME"}, 
               {name: "XGGDisc 2TB HDD 7200RPM", price: 60, detail1: "Brand: XGGDisc", detail2: "Hard Drive", detail3: "Size: 2TB", detail4: "Spin Speed: 5400RPM", detail5: "Type: SATA III"}, 
               {name: "XGGDisc 1TB SATA III SSD", price: 70, detail1: "Brand: XGGDisc", detail2: "Solid State Drive", detail3: "Size: 1TB", detail4: "Spin Speed: No", detail5: "Type: SATA III"},  
               {name: "L9 512GB NVME M.2 SSD", price: 75, detail1: "Brand: L9", detail2: "Solid State Drive", detail3: "Size: 512GB", detail4: "Spin Speed: No", detail5: "Type: M.2 NVME"}, 
               {name: "L9 1TB NVME M.2 SSD", price: 100, detail1: "Brand: L9", detail2: "Solid State Drive", detail3: "Size: 1TB", detail4: "Spin Speed: No", detail5: "Type: M.2 NVME"}];


const cases = [{name: "Cooler Cracker LCase CS45", price: 40, detail1: "Brand: Cooler Cracker", detail2: "Color: Black", detail3: "RGB/LED: No", detail4: "Side Panel: No", detail5: "Tempered Glass: No"}, 
             {name: "Cooler Cracker XGCase CS45", price: 45, detail1: "Brand: Cooler Cracker", detail2: "Color: Black", detail3: "RGB/LED: No", detail4: "Side Panel: Yes", detail5: "Tempered Glass: No"}, 
             {name: "L9 CaseBox K55", price: 50, detail1: "Brand: L9", detail2: "Color: Black/Blue", detail3: "RGB/LED: No", detail4: "Side Panel: No", detail5: "Tempered Glass: No"}, 
             {name: "L9 GamingBox LED K60", price: 50, detail1: "Brand: L9", detail2: "Color: Black/White", detail3: "RGB/LED: LED", detail4: "Side Panel: Yes", detail5: "Tempered Glass: No"},
             {name: "JS Charge JS79 LED Case", price: 55, detail1: "Brand: JS", detail2: "Color: Black/Yellow", detail3: "RGB/LED: LED", detail4: "Side Panel: Yes", detail5: "Tempered Glass: No"},
             {name: "LFGB Nitro Blue LED Case", price: 60, detail1: "Brand: LFGB", detail2: "Color: Black", detail3: "RGB/LED: LED", detail4: "Side Panel: Yes", detail5: "Tempered Glass: No"},
             {name: "JS Charge JS79 RGB Case", price: 65, detail1: "Brand: JS", detail2: "Color: Black/Red", detail3: "RGB/LED: RGB", detail4: "Side Panel: Yes", detail5: "Tempered Glass: No"}, 
             {name: "LFGB Gaming RGB Case", price: 70, detail1: "Brand: LFGB", detail2: "Color: Black/Green", detail3: "RGB/LED: RGB", detail4: "Side Panel: Yes", detail5: "Tempered Glass: No"}, 
             {name: "LFGB Gaming RGB Tempered Glass Case", price: 75, detail1: "Brand: LFGB", detail2: "Color: Black/Red", detail3: "RGB/LED: RGB", detail4: "Side Panel: Yes", detail5: "Tempered Glass: Yes"}, 
             {name: "L9 GamingBox Tempered Glass RGB K65", price: 75, detail1: "Brand: L9", detail2: "Color: Black/Red", detail3: "RGB/LED: RGB", detail4: "Side Panel: Yes", detail5: "Tempered Glass: Yes"}];


const videoCards = [{name: "L9 XYZ Gaming 5000", price: 150, detail1: "Brand: L9", detail2: "1200 CUDA Cores", detail3: "Speed: 1.9Ghz", detail4: "Video Memory Type: GDDR5", detail5: "Memory Size: 2GB"},
                  {name: "Razor G3 Gaming 1060X", price: 200, detail1: "Brand: Razor", detail2: "1354 CUDA Cores", detail3: "Speed: 2.1Ghz", detail4: "Video Memory Type: GDDR5", detail5: "Memory Size: 4GB"},
                  {name: "MSG L3 Strike 7600", price: 200, detail1: "Brand: MSG", detail2: "1300 CUDA Cores", detail3: "Speed: 2.3Ghz", detail4: "Video Memory Type: GDDR5", detail5: "Memory Size: 4GB"},
                  {name: "L9 XYZ Gaming 6000X", price: 225, detail1: "Brand: L9", detail2: "1456 CUDA Cores", detail3: "Speed: 2.2Ghz", detail4: "Video Memory Type: GDDR5", detail5: "Memory Size: 4GB"}, 
                  {name: "Razor G6 Gaming 2060Y", price: 250, detail1: "Brand: Razor", detail2: "1532 CUDA Cores", detail3: "Speed: 2.0Ghz", detail4: "Video Memory Type: GDDR5", detail5: "Memory Size: 6GB"},
                  {name: "MSG L3 Strike 7600ti", price: 250, detail1: "Brand: MSG", detail2: "1486 CUDA Cores", detail3: "Speed: 2.2Ghz", detail4: "Video Memory Type: GDDR5", detail5: "Memory Size: 6GB"}, 
                  {name: "Razor G9 Gaming 2660Z", price: 275, detail1: "Brand: Razor", detail2: "1665 CUDA Cores", detail3: "Speed: 2.5Ghz", detail4: "Video Memory Type: HBM2", detail5: "Memory Size: 6GB"}, 
                  {name: "MSG L3 Strike 7700", price: 275, detail1: "Brand: MSG", detail2: "1726 CUDA Cores", detail3: "Speed: 2.3Ghz", detail4: "Video Memory Type: HBM2", detail5: "Memory Size: 8GB"},
                  {name: "MSG L3 Strike 7700ti", price: 300, detail1: "Brand: MSG", detail2: "1878 CUDA Cores", detail3: "Speed: 2.5Ghz", detail4: "Video Memory Type: HBM2", detail5: "Memory Size: 8GB"}, 
                  {name: "Razor GG Titan 3000XYZ", price: 350, detail1: "Brand: Razor", detail2: "2300 CUDA Cores", detail3: "Speed: 2.8Ghz", detail4: "Video Memory Type: HBM2", detail5: "Memory Size: 11GB"}];


const psus = [{name: "LXGD Bronze B3 500W", price: 45, detail1: "Brand: LXGD", detail2: "Model: B3", detail3: "Efficiency: Bronze", detail4: "Wattage: 500W", detail5: "Modular: No"},
            {name: "JS Bronze B5 500W", price: 45, detail1: "Brand: JS", detail2: "Model: B5", detail3: "Efficiency: Bronze", detail4: "Wattage: 500W", detail5: "Modular: No"},
            {name: "Razor Gold G3 500W", price: 55, detail1: "Brand: Razor", detail2: "Model: G3", detail3: "Efficiency: Gold", detail4: "Wattage: 500W", detail5: "Modular: No"}, 
            {name: "Razor Gold G5 750W", price: 70, detail1: "Brand: Razor", detail2: "Model: G5", detail3: "Efficiency: Gold", detail4: "Wattage: 750W", detail5: "Modular: Semi"}, 
            {name: "LXGD Gold G5 750W", price: 70, detail1: "Brand: LXGD", detail2: "Model: G5", detail3: "Efficiency: Gold", detail4: "Wattage: 750W", detail5: "Modular: Semi"},
            {name: "JS Gold G7 750W", price: 100, detail1: "Brand: JS", detail2: "Model: G7", detail3: "Efficiency: Gold", detail4: "Wattage: 750W", detail5: "Modular: Semi"},
            {name: "Razor Platinum X10 1000W", price: 135, detail1: "Brand: Razor", detail2: "Model: X10", detail3: "Efficiency: Platinum", detail4: "Wattage: 1000W", detail5: "Modular: Full"}, 
            {name: "LXGD Platinum Z10 1000W", price: 135, detail1: "Brand: LXGD", detail2: "Model: Z10", detail3: "Efficiency: Platinum", detail4: "Wattage: 1000W", detail5: "Modular: Full"}, 
            {name: "JS Platinum P9X 1200W", price: 175, detail1: "Brand: JS", detail2: "Model: P9X", detail3: "Efficiency: Platinum", detail4: "Wattage: 1200W", detail5: "Modular: Full"}, 
            {name: "JS Diamond XYZ10 2000W", price: 300, detail1: "Brand: JS", detail2: "Model: XYZ10", detail3: "Efficiency: Diamond", detail4: "Wattage: 2000W", detail5: "Modular: Full"}];


const OSsystems = [{name: "Ubuntu", price: 0, detail1: "Developer: Canonical Ltd", detail2: "Difficulty: Easy", detail3: "64bit/32bit", detail4: "Customizability: High", detail5: "Debian Based"}, 
                 {name: "Linux Mint", price: 0, detail1: "Developer: Community Driven", detail2: "Difficulty: Easy", detail3: "64bit/32bit", detail4: "Customizability: High", detail5: "Ubuntu/Debian Based"}, 
                 {name: "Parrot Security OS", price: 0, detail1: "Brand: Parrot Security", detail2: "Difficulty: Intermediate", detail3: "64bit", detail4: "Customizability: High", detail5: "Debian Based"}, 
                 {name: "Kali Linux", price: 0, detail1: "Developer: Offensive Security", detail2: "Difficulty: Intermediate", detail3: "64bit/32bit", detail4: "Customizability: High", detail5: "Debian Based"}, 
                 {name: "Solus Linux", price: 0, detail1: "Developer: Community Driven", detail2: "Difficulty: Easy/Intermediate", detail3: "64bit/32bit", detail4: "Customizability: Medium/High", detail5: "Independent Distribution"}, 
                 {name: "Arch Linux", price: 0, detail1: "Developer: Aaron Griffin and Community", detail2: "Difficulty: Very Difficult", detail3: "64bit/32bit", detail4: "Customizability: Immeasurably High", detail5: "Independent Distribution"}, 
                 {name: "Manjaro Linux", price: 0, detail1: "Developer: Manjaro GmbH & Co. KG", detail2: "Difficulty: Intermediate", detail3: "64bit/32bit", detail4: "Customizability: High", detail5: "Based on Arch"}, 
                 {name: "Blackarch Linux", price: 0, detail1: "Developer: Community Driven", detail2: "Difficulty: Very Difficult", detail3: "64bit/32bit", detail4: "Customizability: Immeasurably High", detail5: "Extention of Arch Linux"},
                 {name: "Windows 10", price: 120, detail1: "Developer: Microsoft Corpotation", detail2: "Difficulty: Easy", detail3: "64bit/32bit", detail4: "Customizability: Low", detail5: "Based on Windows NT Kernel"}, 
                 {name: "Windows 7", price: 120, detail1: "Developer: Microsoft Corpotation", detail2: "Difficulty: Easy", detail3: "64bit/32bit", detail4: "Customizability: Low", detail5: "Based on Windows NT Kernel"}];


var whatIsIt = localStorage.getItem("whatIsIt").toString();

var list = JSON.parse(localStorage.getItem("CURRENTLIST"));

for (var i = 0, y = 1; i < 10, y < 11; i++, y++){
    document.getElementById("part" + y).innerHTML = list[i].name;
    document.getElementById("AddButton" + y).innerHTML = "Add " + list[i].name;
}

function addPart1(){

    if (whatIsIt == "cpu"){
        localStorage.setItem("CURRENTCPU", list[0].name);
        location.href = "MainPage.html";
    } else if (whatIsIt == "cpufan"){
        localStorage.setItem("CURRENTCPUFAN", list[0].name);
        location.href = "MainPage.html";
    } else if (whatIsIt == "mobo"){
        localStorage.setItem("CURRENTMOBO", list[0].name);
        location.href = "MainPage.html";
    } else if (whatIsIt == "memory"){
        localStorage.setItem("CURRENTMEMORY", list[0].name);
        location.href = "MainPage.html";
    } else if (whatIsIt == "storage"){
        localStorage.setItem("CURRENTSTORAGE", list[0].name);
        location.href = "MainPage.html";
    } else if (whatIsIt == "gpu"){
        localStorage.setItem("CURRENTGPU", list[0].name);
        location.href = "MainPage.html";
    } else if (whatIsIt == "case"){
        localStorage.setItem("CURRENTCASE", list[0].name);
        location.href = "MainPage.html";
    } else if (whatIsIt == "psu"){
        localStorage.setItem("CURRENTPSU", list[0].name);
        location.href = "MainPage.html";
    } else {
        localStorage.setItem("CURRENTOS", list[0].name);
        location.href = "MainPage.html";
    }

}

function addPart2(){
    if (whatIsIt == "cpu"){
        localStorage.setItem("CURRENTCPU", list[1].name);
        location.href = "MainPage.html";
    } else if (whatIsIt == "cpufan"){
        localStorage.setItem("CURRENTCPUFAN", list[1].name);
        location.href = "MainPage.html";
    } else if (whatIsIt == "mobo"){
        localStorage.setItem("CURRENTMOBO", list[1].name);
        location.href = "MainPage.html";
    } else if (whatIsIt == "memory"){
        localStorage.setItem("CURRENTMEMORY", list[1].name);
        location.href = "MainPage.html";
    } else if (whatIsIt == "storage"){
        localStorage.setItem("CURRENTSTORAGE", list[1].name);
        location.href = "MainPage.html";
    } else if (whatIsIt == "gpu"){
        localStorage.setItem("CURRENTGPU", list[1].name);
        location.href = "MainPage.html";
    } else if (whatIsIt == "case"){
        localStorage.setItem("CURRENTCASE", list[1].name);
        location.href = "MainPage.html";
    } else if (whatIsIt == "psu"){
        localStorage.setItem("CURRENTPSU", list[1].name);
        location.href = "MainPage.html";
    } else {
        localStorage.setItem("CURRENTOS", list[1].name);
        location.href = "MainPage.html";
    }
}

function addPart3(){
    if (whatIsIt == "cpu"){
        localStorage.setItem("CURRENTCPU", list[2].name);
        location.href = "MainPage.html";
    } else if (whatIsIt == "cpufan"){
        localStorage.setItem("CURRENTCPUFAN", list[2].name);
        location.href = "MainPage.html";
    } else if (whatIsIt == "mobo"){
        localStorage.setItem("CURRENTMOBO", list[2].name);
        location.href = "MainPage.html";
    } else if (whatIsIt == "memory"){
        localStorage.setItem("CURRENTMEMORY", list[2].name);
        location.href = "MainPage.html";
    } else if (whatIsIt == "storage"){
        localStorage.setItem("CURRENTSTORAGE", list[2].name);
        location.href = "MainPage.html";
    } else if (whatIsIt == "gpu"){
        localStorage.setItem("CURRENTGPU", list[2].name);
        location.href = "MainPage.html";
    } else if (whatIsIt == "case"){
        localStorage.setItem("CURRENTCASE", list[2].name);
        location.href = "MainPage.html";
    } else if (whatIsIt == "psu"){
        localStorage.setItem("CURRENTPSU", list[2].name);
        location.href = "MainPage.html";
    } else {
        localStorage.setItem("CURRENTOS", list[2].name);
        location.href = "MainPage.html";
    }
}

function addPart4(){
    if (whatIsIt == "cpu"){
        localStorage.setItem("CURRENTCPU", list[3].name);
        location.href = "MainPage.html";
    } else if (whatIsIt == "cpufan"){
        localStorage.setItem("CURRENTCPUFAN", list[3].name);
        location.href = "MainPage.html";
    } else if (whatIsIt == "mobo"){
        localStorage.setItem("CURRENTMOBO", list[3].name);
        location.href = "MainPage.html";
    } else if (whatIsIt == "memory"){
        localStorage.setItem("CURRENTMEMORY", list[3].name);
        location.href = "MainPage.html";
    } else if (whatIsIt == "storage"){
        localStorage.setItem("CURRENTSTORAGE", list[3].name);
        location.href = "MainPage.html";
    } else if (whatIsIt == "gpu"){
        localStorage.setItem("CURRENTGPU", list[3].name);
        location.href = "MainPage.html";
    } else if (whatIsIt == "case"){
        localStorage.setItem("CURRENTCASE", list[3].name);
        location.href = "MainPage.html";
    } else if (whatIsIt == "psu"){
        localStorage.setItem("CURRENTPSU", list[3].name);
        location.href = "MainPage.html";
    } else {
        localStorage.setItem("CURRENTOS", list[3].name);
        location.href = "MainPage.html";
    }
}

function addPart5(){
    if (whatIsIt == "cpu"){
        localStorage.setItem("CURRENTCPU", list[4].name);
        location.href = "MainPage.html";
    } else if (whatIsIt == "cpufan"){
        localStorage.setItem("CURRENTCPUFAN", list[4].name);
        location.href = "MainPage.html";
    } else if (whatIsIt == "mobo"){
        localStorage.setItem("CURRENTMOBO", list[4].name);
        location.href = "MainPage.html";
    } else if (whatIsIt == "memory"){
        localStorage.setItem("CURRENTMEMORY", list[4].name);
        location.href = "MainPage.html";
    } else if (whatIsIt == "storage"){
        localStorage.setItem("CURRENTSTORAGE", list[4].name);
        location.href = "MainPage.html";
    } else if (whatIsIt == "gpu"){
        localStorage.setItem("CURRENTGPU", list[4].name);
        location.href = "MainPage.html";
    } else if (whatIsIt == "case"){
        localStorage.setItem("CURRENTCASE", list[4].name);
        location.href = "MainPage.html";
    } else if (whatIsIt == "psu"){
        localStorage.setItem("CURRENTPSU", list[4].name);
        location.href = "MainPage.html";
    } else {
        localStorage.setItem("CURRENTOS", list[4].name);
        location.href = "MainPage.html";
    }
}

function addPart6(){
    if (whatIsIt == "cpu"){
        localStorage.setItem("CURRENTCPU", list[5].name);
        location.href = "MainPage.html";
    } else if (whatIsIt == "cpufan"){
        localStorage.setItem("CURRENTCPUFAN", list[5].name);
        location.href = "MainPage.html";
    } else if (whatIsIt == "mobo"){
        localStorage.setItem("CURRENTMOBO", list[5].name);
        location.href = "MainPage.html";
    } else if (whatIsIt == "memory"){
        localStorage.setItem("CURRENTMEMORY", list[5].name);
        location.href = "MainPage.html";
    } else if (whatIsIt == "storage"){
        localStorage.setItem("CURRENTSTORAGE", list[5].name);
        location.href = "MainPage.html";
    } else if (whatIsIt == "gpu"){
        localStorage.setItem("CURRENTGPU", list[5].name);
        location.href = "MainPage.html";
    } else if (whatIsIt == "case"){
        localStorage.setItem("CURRENTCASE", list[5].name);
        location.href = "MainPage.html";
    } else if (whatIsIt == "psu"){
        localStorage.setItem("CURRENTPSU", list[5].name);
        location.href = "MainPage.html";
    } else {
        localStorage.setItem("CURRENTOS", list[5].name);
        location.href = "MainPage.html";
    }
}

function addPart7(){
    if (whatIsIt == "cpu"){
        localStorage.setItem("CURRENTCPU", list[6].name);
        location.href = "MainPage.html";
    } else if (whatIsIt == "cpufan"){
        localStorage.setItem("CURRENTCPUFAN", list[6].name);
        location.href = "MainPage.html";
    } else if (whatIsIt == "mobo"){
        localStorage.setItem("CURRENTMOBO", list[6].name);
        location.href = "MainPage.html";
    } else if (whatIsIt == "memory"){
        localStorage.setItem("CURRENTMEMORY", list[6].name);
        location.href = "MainPage.html";
    } else if (whatIsIt == "storage"){
        localStorage.setItem("CURRENTSTORAGE", list[6].name);
        location.href = "MainPage.html";
    } else if (whatIsIt == "gpu"){
        localStorage.setItem("CURRENTGPU", list[6].name);
        location.href = "MainPage.html";
    } else if (whatIsIt == "case"){
        localStorage.setItem("CURRENTCASE", list[6].name);
        location.href = "MainPage.html";
    } else if (whatIsIt == "psu"){
        localStorage.setItem("CURRENTPSU", list[6].name);
        location.href = "MainPage.html";
    } else {
        localStorage.setItem("CURRENTOS", list[6].name);
        location.href = "MainPage.html";
    }
}

function addPart8(){
    if (whatIsIt == "cpu"){
        localStorage.setItem("CURRENTCPU", list[7].name);
        location.href = "MainPage.html";
    } else if (whatIsIt == "cpufan"){
        localStorage.setItem("CURRENTCPUFAN", list[7].name);
        location.href = "MainPage.html";
    } else if (whatIsIt == "mobo"){
        localStorage.setItem("CURRENTMOBO", list[7].name);
        location.href = "MainPage.html";
    } else if (whatIsIt == "memory"){
        localStorage.setItem("CURRENTMEMORY", list[7].name);
        location.href = "MainPage.html";
    } else if (whatIsIt == "storage"){
        localStorage.setItem("CURRENTSTORAGE", list[7].name);
        location.href = "MainPage.html";
    } else if (whatIsIt == "gpu"){
        localStorage.setItem("CURRENTGPU", list[7].name);
        location.href = "MainPage.html";
    } else if (whatIsIt == "case"){
        localStorage.setItem("CURRENTCASE", list[7].name);
        location.href = "MainPage.html";
    } else if (whatIsIt == "psu"){
        localStorage.setItem("CURRENTPSU", list[7].name);
        location.href = "MainPage.html";
    } else {
        localStorage.setItem("CURRENTOS", list[7].name);
        location.href = "MainPage.html";
    }
}

function addPart9(){
    if (whatIsIt == "cpu"){
        localStorage.setItem("CURRENTCPU", list[8].name);
        location.href = "MainPage.html";
    } else if (whatIsIt == "cpufan"){
        localStorage.setItem("CURRENTCPUFAN", list[8].name);
        location.href = "MainPage.html";
    } else if (whatIsIt == "mobo"){
        localStorage.setItem("CURRENTMOBO", list[8].name);
        location.href = "MainPage.html";
    } else if (whatIsIt == "memory"){
        localStorage.setItem("CURRENTMEMORY", list[8].name);
        location.href = "MainPage.html";
    } else if (whatIsIt == "storage"){
        localStorage.setItem("CURRENTSTORAGE", list[8].name);
        location.href = "MainPage.html";
    } else if (whatIsIt == "gpu"){
        localStorage.setItem("CURRENTGPU", list[8].name);
        location.href = "MainPage.html";
    } else if (whatIsIt == "case"){
        localStorage.setItem("CURRENTCASE", list[8].name);
        location.href = "MainPage.html";
    } else if (whatIsIt == "psu"){
        localStorage.setItem("CURRENTPSU", list[8].name);
        location.href = "MainPage.html";
    } else {
        localStorage.setItem("CURRENTOS", list[8].name);
        location.href = "MainPage.html";
    }
}

function addPart10(){
    if (whatIsIt == "cpu"){
        localStorage.setItem("CURRENTCPU", list[9].name);
        location.href = "MainPage.html";
    } else if (whatIsIt == "cpufan"){
        localStorage.setItem("CURRENTCPUFAN", list[9].name);
        location.href = "MainPage.html";
    } else if (whatIsIt == "mobo"){
        localStorage.setItem("CURRENTMOBO", list[9].name);
        location.href = "MainPage.html";
    } else if (whatIsIt == "memory"){
        localStorage.setItem("CURRENTMEMORY", list[9].name);
        location.href = "MainPage.html";
    } else if (whatIsIt == "storage"){
        localStorage.setItem("CURRENTSTORAGE", list[9].name);
        location.href = "MainPage.html";
    } else if (whatIsIt == "gpu"){
        localStorage.setItem("CURRENTGPU", list[9].name);
        location.href = "MainPage.html";
    } else if (whatIsIt == "case"){
        localStorage.setItem("CURRENTCASE", list[9].name);
        location.href = "MainPage.html";
    } else if (whatIsIt == "psu"){
        localStorage.setItem("CURRENTPSU", list[9].name);
        location.href = "MainPage.html";
    } else {
        localStorage.setItem("CURRENTOS", list[9].name);
        location.href = "MainPage.html";
    }
}

var currentDetailItem;


function findItem1Details(){
    if (whatIsIt == "cpu"){
        for(var i = 0; i < 10; i++){
            if (document.getElementById("part1").innerHTML == cpus[i].name){
                currentDetailItem = cpus[i];
                var currItem = JSON.stringify(currentDetailItem);
                localStorage.setItem("currentDetailItem", currItem);
                break;
            }
        }
    } else if (whatIsIt == "cpufan"){
        for(var i = 0; i < 10; i++){
            if (document.getElementById("part1").innerHTML == cpuFans[i].name){
                currentDetailItem = cpuFans[i];
                var currItem = JSON.stringify(currentDetailItem);
                localStorage.setItem("currentDetailItem", currItem);
                break;
            }
        }
    } else if (whatIsIt == "mobo"){
        for(var i = 0; i < 10; i++){
            if (document.getElementById("part1").innerHTML == mobos[i].name){
                currentDetailItem = mobos[i];
                var currItem = JSON.stringify(currentDetailItem);
                localStorage.setItem("currentDetailItem", currItem);
                break;
            }
        }
    } else if (whatIsIt == "memory"){
        for(var i = 0; i < 10; i++){
            if (document.getElementById("part1").innerHTML == memory[i].name){
                currentDetailItem = memory[i];
                var currItem = JSON.stringify(currentDetailItem);
                localStorage.setItem("currentDetailItem", currItem);
                break;
            }
        }
    } else if (whatIsIt == "storage"){
        for(var i = 0; i < 10; i++){
            if (document.getElementById("part1").innerHTML == storage[i].name){
                currentDetailItem = storage[i];
                var currItem = JSON.stringify(currentDetailItem);
                localStorage.setItem("currentDetailItem", currItem);
                break;
            }
        }
    } else if (whatIsIt == "gpu"){
        for(var i = 0; i < 10; i++){
            if (document.getElementById("part1").innerHTML == videoCards[i].name){
                currentDetailItem = videoCards[i];
                var currItem = JSON.stringify(currentDetailItem);
                localStorage.setItem("currentDetailItem", currItem);
                break;
            }
        }
    } else if (whatIsIt == "case"){
        for(var i = 0; i < 10; i++){
            if (document.getElementById("part1").innerHTML == cases[i].name){
                currentDetailItem = cases[i];
                var currItem = JSON.stringify(currentDetailItem);
                localStorage.setItem("currentDetailItem", currItem);
                break;
            }
        }
    } else if (whatIsIt == "psu"){
        for(var i = 0; i < 10; i++){
            if (document.getElementById("part1").innerHTML == psus[i].name){
                currentDetailItem = psus[i];
                var currItem = JSON.stringify(currentDetailItem);
                localStorage.setItem("currentDetailItem", currItem);
                break;
            }
        }
        
    } else {
        for(var i = 0; i < 10; i++){
            if (document.getElementById("part1").innerHTML == OSsystems[i].name){
                currentDetailItem = OSsystems[i];
                var currItem = JSON.stringify(currentDetailItem);
                localStorage.setItem("currentDetailItem", currItem);
                break;
            }
        }
    }
    location.href = "ItemDescription.html";
}

function findItem2Details(){
    if (whatIsIt == "cpu"){
        for(var i = 0; i < 10; i++){
            if (document.getElementById("part2").innerHTML == cpus[i].name){
                currentDetailItem = cpus[i];
                var currItem = JSON.stringify(currentDetailItem);
                localStorage.setItem("currentDetailItem", currItem);
                break;
            }
        }
    } else if (whatIsIt == "cpufan"){
        for(var i = 0; i < 10; i++){
            if (document.getElementById("part2").innerHTML == cpuFans[i].name){
                currentDetailItem = cpuFans[i];
                var currItem = JSON.stringify(currentDetailItem);
                localStorage.setItem("currentDetailItem", currItem);
                break;
            }
        }
    } else if (whatIsIt == "mobo"){
        for(var i = 0; i < 10; i++){
            if (document.getElementById("part2").innerHTML == mobos[i].name){
                currentDetailItem = mobos[i];
                var currItem = JSON.stringify(currentDetailItem);
                localStorage.setItem("currentDetailItem", currItem);
                break;
            }
        }
    } else if (whatIsIt == "memory"){
        for(var i = 0; i < 10; i++){
            if (document.getElementById("part2").innerHTML == memory[i].name){
                currentDetailItem = memory[i];
                var currItem = JSON.stringify(currentDetailItem);
                localStorage.setItem("currentDetailItem", currItem);
                break;
            }
        }
    } else if (whatIsIt == "storage"){
        for(var i = 0; i < 10; i++){
            if (document.getElementById("part2").innerHTML == storage[i].name){
                currentDetailItem = storage[i];
                var currItem = JSON.stringify(currentDetailItem);
                localStorage.setItem("currentDetailItem", currItem);
                break;
            }
        }
    } else if (whatIsIt == "gpu"){
        for(var i = 0; i < 10; i++){
            if (document.getElementById("part2").innerHTML == videoCards[i].name){
                currentDetailItem = videoCards[i];
                var currItem = JSON.stringify(currentDetailItem);
                localStorage.setItem("currentDetailItem", currItem);
                break;
            }
        }
    } else if (whatIsIt == "case"){
        for(var i = 0; i < 10; i++){
            if (document.getElementById("part2").innerHTML == cases[i].name){
                currentDetailItem = cases[i];
                var currItem = JSON.stringify(currentDetailItem);
                localStorage.setItem("currentDetailItem", currItem);
                break;
            }
        }
    } else if (whatIsIt == "psu"){
        for(var i = 0; i < 10; i++){
            if (document.getElementById("part2").innerHTML == psus[i].name){
                currentDetailItem = psus[i];
                var currItem = JSON.stringify(currentDetailItem);
                localStorage.setItem("currentDetailItem", currItem);
                break;
            }
        }
    } else {
        for(var i = 0; i < 10; i++){
            if (document.getElementById("part2").innerHTML == OSsystems[i].name){
                currentDetailItem = OSsystems[i];
                var currItem = JSON.stringify(currentDetailItem);
                localStorage.setItem("currentDetailItem", currItem);
                break;
            }
        }
    }
    location.href = "ItemDescription.html";
}

function findItem3Details(){
    if (whatIsIt == "cpu"){
        for(var i = 0; i < 10; i++){
            if (document.getElementById("part3").innerHTML == cpus[i].name){
                currentDetailItem = cpus[i];
                var currItem = JSON.stringify(currentDetailItem);
                localStorage.setItem("currentDetailItem", currItem);
                break;
            }
        }
    } else if (whatIsIt == "cpufan"){
        for(var i = 0; i < 10; i++){
            if (document.getElementById("part3").innerHTML == cpuFans[i].name){
                currentDetailItem = cpuFans[i];
                var currItem = JSON.stringify(currentDetailItem);
                localStorage.setItem("currentDetailItem", currItem);
                break;
            }
        }
    } else if (whatIsIt == "mobo"){
        for(var i = 0; i < 10; i++){
            if (document.getElementById("part3").innerHTML == mobos[i].name){
                currentDetailItem = mobos[i];
                var currItem = JSON.stringify(currentDetailItem);
                localStorage.setItem("currentDetailItem", currItem);
                break;
            }
        }
    } else if (whatIsIt == "memory"){
        for(var i = 0; i < 10; i++){
            if (document.getElementById("part3").innerHTML == memory[i].name){
                currentDetailItem = memory[i];
                var currItem = JSON.stringify(currentDetailItem);
                localStorage.setItem("currentDetailItem", currItem);
                break;
            }
        }
    } else if (whatIsIt == "storage"){
        for(var i = 0; i < 10; i++){
            if (document.getElementById("part3").innerHTML == storage[i].name){
                currentDetailItem = storage[i];
                var currItem = JSON.stringify(currentDetailItem);
                localStorage.setItem("currentDetailItem", currItem);
                break;
            }
        }
    } else if (whatIsIt == "gpu"){
        for(var i = 0; i < 10; i++){
            if (document.getElementById("part3").innerHTML == videoCards[i].name){
                currentDetailItem = videoCards[i];
                var currItem = JSON.stringify(currentDetailItem);
                localStorage.setItem("currentDetailItem", currItem);
                break;
            }
        }
    } else if (whatIsIt == "case"){
        for(var i = 0; i < 10; i++){
            if (document.getElementById("part3").innerHTML == cases[i].name){
                currentDetailItem = cases[i];
                var currItem = JSON.stringify(currentDetailItem);
                localStorage.setItem("currentDetailItem", currItem);
                break;
            }
        }
    } else if (whatIsIt == "psu"){
        for(var i = 0; i < 10; i++){
            if (document.getElementById("part3").innerHTML == psus[i].name){
                currentDetailItem = psus[i];
                var currItem = JSON.stringify(currentDetailItem);
                localStorage.setItem("currentDetailItem", currItem);
                break;
            }
        }
        
    } else {
        for(var i = 0; i < 10; i++){
            if (document.getElementById("part3").innerHTML == OSsystems[i].name){
                currentDetailItem = OSsystems[i];
                var currItem = JSON.stringify(currentDetailItem);
                localStorage.setItem("currentDetailItem", currItem);
                break;
            }
        }
    }
    location.href = "ItemDescription.html";
}

function findItem4Details(){
    if (whatIsIt == "cpu"){
        for(var i = 0; i < 10; i++){
            if (document.getElementById("part4").innerHTML == cpus[i].name){
                currentDetailItem = cpus[i];
                var currItem = JSON.stringify(currentDetailItem);
                localStorage.setItem("currentDetailItem", currItem);
                break;
            }
        }
    } else if (whatIsIt == "cpufan"){
        for(var i = 0; i < 10; i++){
            if (document.getElementById("part4").innerHTML == cpuFans[i].name){
                currentDetailItem = cpuFans[i];
                var currItem = JSON.stringify(currentDetailItem);
                localStorage.setItem("currentDetailItem", currItem);
                break;
            }
        }
    } else if (whatIsIt == "mobo"){
        for(var i = 0; i < 10; i++){
            if (document.getElementById("part4").innerHTML == mobos[i].name){
                currentDetailItem = mobos[i];
                var currItem = JSON.stringify(currentDetailItem);
                localStorage.setItem("currentDetailItem", currItem);
                break;
            }
        }
    } else if (whatIsIt == "memory"){
        for(var i = 0; i < 10; i++){
            if (document.getElementById("part4").innerHTML == memory[i].name){
                currentDetailItem = memory[i];
                var currItem = JSON.stringify(currentDetailItem);
                localStorage.setItem("currentDetailItem", currItem);
                break;
            }
        }
    } else if (whatIsIt == "storage"){
        for(var i = 0; i < 10; i++){
            if (document.getElementById("part4").innerHTML == storage[i].name){
                currentDetailItem = storage[i];
                var currItem = JSON.stringify(currentDetailItem);
                localStorage.setItem("currentDetailItem", currItem);
                break;
            }
        }
    } else if (whatIsIt == "gpu"){
        for(var i = 0; i < 10; i++){
            if (document.getElementById("part4").innerHTML == videoCards[i].name){
                currentDetailItem = videoCards[i];
                var currItem = JSON.stringify(currentDetailItem);
                localStorage.setItem("currentDetailItem", currItem);
                break;
            }
        }
    } else if (whatIsIt == "case"){
        for(var i = 0; i < 10; i++){
            if (document.getElementById("part4").innerHTML == cases[i].name){
                currentDetailItem = cases[i];
                var currItem = JSON.stringify(currentDetailItem);
                localStorage.setItem("currentDetailItem", currItem);
                break;
            }
        }
    } else if (whatIsIt == "psu"){
        for(var i = 0; i < 10; i++){
            if (document.getElementById("part4").innerHTML == psus[i].name){
                currentDetailItem = psus[i];
                var currItem = JSON.stringify(currentDetailItem);
                localStorage.setItem("currentDetailItem", currItem);
                break;
            }
        }
        
    } else {
        for(var i = 0; i < 10; i++){
            if (document.getElementById("part4").innerHTML == OSsystems[i].name){
                currentDetailItem = OSsystems[i];
                var currItem = JSON.stringify(currentDetailItem);
                localStorage.setItem("currentDetailItem", currItem);
                break;
            }
        }
    }
    location.href = "ItemDescription.html";
}

function findItem5Details(){
    if (whatIsIt == "cpu"){
        for(var i = 0; i < 10; i++){
            if (document.getElementById("part5").innerHTML == cpus[i].name){
                currentDetailItem = cpus[i];
                var currItem = JSON.stringify(currentDetailItem);
                localStorage.setItem("currentDetailItem", currItem);
                break;
            }
        }
    } else if (whatIsIt == "cpufan"){
        for(var i = 0; i < 10; i++){
            if (document.getElementById("part5").innerHTML == cpuFans[i].name){
                currentDetailItem = cpuFans[i];
                var currItem = JSON.stringify(currentDetailItem);
                localStorage.setItem("currentDetailItem", currItem);
                break;
            }
        }
    } else if (whatIsIt == "mobo"){
        for(var i = 0; i < 10; i++){
            if (document.getElementById("part5").innerHTML == mobos[i].name){
                currentDetailItem = mobos[i];
                var currItem = JSON.stringify(currentDetailItem);
                localStorage.setItem("currentDetailItem", currItem);
                break;
            }
        }
    } else if (whatIsIt == "memory"){
        for(var i = 0; i < 10; i++){
            if (document.getElementById("part5").innerHTML == memory[i].name){
                currentDetailItem = memory[i];
                var currItem = JSON.stringify(currentDetailItem);
                localStorage.setItem("currentDetailItem", currItem);
                break;
            }
        }
    } else if (whatIsIt == "storage"){
        for(var i = 0; i < 10; i++){
            if (document.getElementById("part5").innerHTML == storage[i].name){
                currentDetailItem = storage[i];
                var currItem = JSON.stringify(currentDetailItem);
                localStorage.setItem("currentDetailItem", currItem);
                break;
            }
        }
    } else if (whatIsIt == "gpu"){
        for(var i = 0; i < 10; i++){
            if (document.getElementById("part5").innerHTML == videoCards[i].name){
                currentDetailItem = videoCards[i];
                var currItem = JSON.stringify(currentDetailItem);
                localStorage.setItem("currentDetailItem", currItem);
                break;
            }
        }
    } else if (whatIsIt == "case"){
        for(var i = 0; i < 10; i++){
            if (document.getElementById("part5").innerHTML == cases[i].name){
                currentDetailItem = cases[i];
                var currItem = JSON.stringify(currentDetailItem);
                localStorage.setItem("currentDetailItem", currItem);
                break;
            }
        }
    } else if (whatIsIt == "psu"){
        for(var i = 0; i < 10; i++){
            if (document.getElementById("part5").innerHTML == psus[i].name){
                currentDetailItem = psus[i];
                var currItem = JSON.stringify(currentDetailItem);
                localStorage.setItem("currentDetailItem", currItem);
                break;
            }
        }
        
    } else {
        for(var i = 0; i < 10; i++){
            if (document.getElementById("part5").innerHTML == OSsystems[i].name){
                currentDetailItem = OSsystems[i];
                var currItem = JSON.stringify(currentDetailItem);
                localStorage.setItem("currentDetailItem", currItem);
                break;
            }
        }
    }
    location.href = "ItemDescription.html";
}

function findItem6Details(){
    if (whatIsIt == "cpu"){
        for(var i = 0; i < 10; i++){
            if (document.getElementById("part6").innerHTML == cpus[i].name){
                currentDetailItem = cpus[i];
                var currItem = JSON.stringify(currentDetailItem);
                localStorage.setItem("currentDetailItem", currItem);
                break;
            }
        }
    } else if (whatIsIt == "cpufan"){
        for(var i = 0; i < 10; i++){
            if (document.getElementById("part6").innerHTML == cpuFans[i].name){
                currentDetailItem = cpuFans[i];
                var currItem = JSON.stringify(currentDetailItem);
                localStorage.setItem("currentDetailItem", currItem);
                break;
            }
        }
    } else if (whatIsIt == "mobo"){
        for(var i = 0; i < 10; i++){
            if (document.getElementById("part6").innerHTML == mobos[i].name){
                currentDetailItem = mobos[i];
                var currItem = JSON.stringify(currentDetailItem);
                localStorage.setItem("currentDetailItem", currItem);
                break;
            }
        }
    } else if (whatIsIt == "memory"){
        for(var i = 0; i < 10; i++){
            if (document.getElementById("part6").innerHTML == memory[i].name){
                currentDetailItem = memory[i];
                var currItem = JSON.stringify(currentDetailItem);
                localStorage.setItem("currentDetailItem", currItem);
                break;
            }
        }
    } else if (whatIsIt == "storage"){
        for(var i = 0; i < 10; i++){
            if (document.getElementById("part6").innerHTML == storage[i].name){
                currentDetailItem = storage[i];
                var currItem = JSON.stringify(currentDetailItem);
                localStorage.setItem("currentDetailItem", currItem);
                break;
            }
        }
    } else if (whatIsIt == "gpu"){
        for(var i = 0; i < 10; i++){
            if (document.getElementById("part6").innerHTML == videoCards[i].name){
                currentDetailItem = videoCards[i];
                var currItem = JSON.stringify(currentDetailItem);
                localStorage.setItem("currentDetailItem", currItem);
                break;
            }
        }
    } else if (whatIsIt == "case"){
        for(var i = 0; i < 10; i++){
            if (document.getElementById("part6").innerHTML == cases[i].name){
                currentDetailItem = cases[i];
                var currItem = JSON.stringify(currentDetailItem);
                localStorage.setItem("currentDetailItem", currItem);
                break;
            }
        }
    } else if (whatIsIt == "psu"){
        for(var i = 0; i < 10; i++){
            if (document.getElementById("part6").innerHTML == psus[i].name){
                currentDetailItem = psus[i];
                var currItem = JSON.stringify(currentDetailItem);
                localStorage.setItem("currentDetailItem", currItem);
                break;
            }
        }
        
    } else {
        for(var i = 0; i < 10; i++){
            if (document.getElementById("part6").innerHTML == OSsystems[i].name){
                currentDetailItem = OSsystems[i];
                var currItem = JSON.stringify(currentDetailItem);
                localStorage.setItem("currentDetailItem", currItem);
                break;
            }
        }
    }
    location.href = "ItemDescription.html";
}

function findItem7Details(){
    if (whatIsIt == "cpu"){
        for(var i = 0; i < 10; i++){
            if (document.getElementById("part7").innerHTML == cpus[i].name){
                currentDetailItem = cpus[i];
                var currItem = JSON.stringify(currentDetailItem);
                localStorage.setItem("currentDetailItem", currItem);
                break;
            }
        }
    } else if (whatIsIt == "cpufan"){
        for(var i = 0; i < 10; i++){
            if (document.getElementById("part7").innerHTML == cpuFans[i].name){
                currentDetailItem = cpuFans[i];
                var currItem = JSON.stringify(currentDetailItem);
                localStorage.setItem("currentDetailItem", currItem);
                break;
            }
        }
    } else if (whatIsIt == "mobo"){
        for(var i = 0; i < 10; i++){
            if (document.getElementById("part7").innerHTML == mobos[i].name){
                currentDetailItem = mobos[i];
                var currItem = JSON.stringify(currentDetailItem);
                localStorage.setItem("currentDetailItem", currItem);
                break;
            }
        }
    } else if (whatIsIt == "memory"){
        for(var i = 0; i < 10; i++){
            if (document.getElementById("part7").innerHTML == memory[i].name){
                currentDetailItem = memory[i];
                var currItem = JSON.stringify(currentDetailItem);
                localStorage.setItem("currentDetailItem", currItem);
                break;
            }
        }
    } else if (whatIsIt == "storage"){
        for(var i = 0; i < 10; i++){
            if (document.getElementById("part7").innerHTML == storage[i].name){
                currentDetailItem = storage[i];
                var currItem = JSON.stringify(currentDetailItem);
                localStorage.setItem("currentDetailItem", currItem);
                break;
            }
        }
    } else if (whatIsIt == "gpu"){
        for(var i = 0; i < 10; i++){
            if (document.getElementById("part7").innerHTML == videoCards[i].name){
                currentDetailItem = videoCards[i];
                var currItem = JSON.stringify(currentDetailItem);
                localStorage.setItem("currentDetailItem", currItem);
                break;
            }
        }
    } else if (whatIsIt == "case"){
        for(var i = 0; i < 10; i++){
            if (document.getElementById("part7").innerHTML == cases[i].name){
                currentDetailItem = cases[i];
                var currItem = JSON.stringify(currentDetailItem);
                localStorage.setItem("currentDetailItem", currItem);
                break;
            }
        }
    } else if (whatIsIt == "psu"){
        for(var i = 0; i < 10; i++){
            if (document.getElementById("part7").innerHTML == psus[i].name){
                currentDetailItem = psus[i];
                var currItem = JSON.stringify(currentDetailItem);
                localStorage.setItem("currentDetailItem", currItem);
                break;
            }
        }
        
    } else {
        for(var i = 0; i < 10; i++){
            if (document.getElementById("part7").innerHTML == OSsystems[i].name){
                currentDetailItem = OSsystems[i];
                var currItem = JSON.stringify(currentDetailItem);
                localStorage.setItem("currentDetailItem", currItem);
                break;
            }
        }
    }
    location.href = "ItemDescription.html";
}

function findItem8Details(){
    if (whatIsIt == "cpu"){
        for(var i = 0; i < 10; i++){
            if (document.getElementById("part8").innerHTML == cpus[i].name){
                currentDetailItem = cpus[i];
                var currItem = JSON.stringify(currentDetailItem);
                localStorage.setItem("currentDetailItem", currItem);
                break;
            }
        }
    } else if (whatIsIt == "cpufan"){
        for(var i = 0; i < 10; i++){
            if (document.getElementById("part8").innerHTML == cpuFans[i].name){
                currentDetailItem = cpuFans[i];
                var currItem = JSON.stringify(currentDetailItem);
                localStorage.setItem("currentDetailItem", currItem);
                break;
            }
        }
    } else if (whatIsIt == "mobo"){
        for(var i = 0; i < 10; i++){
            if (document.getElementById("part8").innerHTML == mobos[i].name){
                currentDetailItem = mobos[i];
                var currItem = JSON.stringify(currentDetailItem);
                localStorage.setItem("currentDetailItem", currItem);
                break;
            }
        }
    } else if (whatIsIt == "memory"){
        for(var i = 0; i < 10; i++){
            if (document.getElementById("part8").innerHTML == memory[i].name){
                currentDetailItem = memory[i];
                var currItem = JSON.stringify(currentDetailItem);
                localStorage.setItem("currentDetailItem", currItem);
                break;
            }
        }
    } else if (whatIsIt == "storage"){
        for(var i = 0; i < 10; i++){
            if (document.getElementById("part8").innerHTML == storage[i].name){
                currentDetailItem = storage[i];
                var currItem = JSON.stringify(currentDetailItem);
                localStorage.setItem("currentDetailItem", currItem);
                break;
            }
        }
    } else if (whatIsIt == "gpu"){
        for(var i = 0; i < 10; i++){
            if (document.getElementById("part8").innerHTML == videoCards[i].name){
                currentDetailItem = videoCards[i];
                var currItem = JSON.stringify(currentDetailItem);
                localStorage.setItem("currentDetailItem", currItem);
                break;
            }
        }
    } else if (whatIsIt == "case"){
        for(var i = 0; i < 10; i++){
            if (document.getElementById("part8").innerHTML == cases[i].name){
                currentDetailItem = cases[i];
                var currItem = JSON.stringify(currentDetailItem);
                localStorage.setItem("currentDetailItem", currItem);
                break;
            }
        }
    } else if (whatIsIt == "psu"){
        for(var i = 0; i < 10; i++){
            if (document.getElementById("part8").innerHTML == psus[i].name){
                currentDetailItem = psus[i];
                var currItem = JSON.stringify(currentDetailItem);
                localStorage.setItem("currentDetailItem", currItem);
                break;
            }
        }
        
    } else {
        for(var i = 0; i < 10; i++){
            if (document.getElementById("part8").innerHTML == OSsystems[i].name){
                currentDetailItem = OSsystems[i];
                var currItem = JSON.stringify(currentDetailItem);
                localStorage.setItem("currentDetailItem", currItem);
                break;
            }
        }
    }
    location.href = "ItemDescription.html";
}

function findItem9Details(){
    if (whatIsIt == "cpu"){
        for(var i = 0; i < 10; i++){
            if (document.getElementById("part9").innerHTML == cpus[i].name){
                currentDetailItem = cpus[i];
                var currItem = JSON.stringify(currentDetailItem);
                localStorage.setItem("currentDetailItem", currItem);
                break;
            }
        }
    } else if (whatIsIt == "cpufan"){
        for(var i = 0; i < 10; i++){
            if (document.getElementById("part9").innerHTML == cpuFans[i].name){
                currentDetailItem = cpuFans[i];
                var currItem = JSON.stringify(currentDetailItem);
                localStorage.setItem("currentDetailItem", currItem);
                break;
            }
        }
    } else if (whatIsIt == "mobo"){
        for(var i = 0; i < 10; i++){
            if (document.getElementById("part9").innerHTML == mobos[i].name){
                currentDetailItem = mobos[i];
                var currItem = JSON.stringify(currentDetailItem);
                localStorage.setItem("currentDetailItem", currItem);
                break;
            }
        }
    } else if (whatIsIt == "memory"){
        for(var i = 0; i < 10; i++){
            if (document.getElementById("part9").innerHTML == memory[i].name){
                currentDetailItem = memory[i];
                var currItem = JSON.stringify(currentDetailItem);
                localStorage.setItem("currentDetailItem", currItem);
                break;
            }
        }
    } else if (whatIsIt == "storage"){
        for(var i = 0; i < 10; i++){
            if (document.getElementById("part9").innerHTML == storage[i].name){
                currentDetailItem = storage[i];
                var currItem = JSON.stringify(currentDetailItem);
                localStorage.setItem("currentDetailItem", currItem);
                break;
            }
        }
    } else if (whatIsIt == "gpu"){
        for(var i = 0; i < 10; i++){
            if (document.getElementById("part9").innerHTML == videoCards[i].name){
                currentDetailItem = videoCards[i];
                var currItem = JSON.stringify(currentDetailItem);
                localStorage.setItem("currentDetailItem", currItem);
                break;
            }
        }
    } else if (whatIsIt == "case"){
        for(var i = 0; i < 10; i++){
            if (document.getElementById("part9").innerHTML == cases[i].name){
                currentDetailItem = cases[i];
                var currItem = JSON.stringify(currentDetailItem);
                localStorage.setItem("currentDetailItem", currItem);
                break;
            }
        }
    } else if (whatIsIt == "psu"){
        for(var i = 0; i < 10; i++){
            if (document.getElementById("part9").innerHTML == psus[i].name){
                currentDetailItem = psus[i];
                var currItem = JSON.stringify(currentDetailItem);
                localStorage.setItem("currentDetailItem", currItem);
                break;
            }
        }
        
    } else {
        for(var i = 0; i < 10; i++){
            if (document.getElementById("part9").innerHTML == OSsystems[i].name){
                currentDetailItem = OSsystems[i];
                var currItem = JSON.stringify(currentDetailItem);
                localStorage.setItem("currentDetailItem", currItem);
                break;
            }
        }
    }
    location.href = "ItemDescription.html";
}

function findItem10Details(){
    if (whatIsIt == "cpu"){
        for(var i = 0; i < 10; i++){
            if (document.getElementById("part10").innerHTML == cpus[i].name){
                currentDetailItem = cpus[i];
                var currItem = JSON.stringify(currentDetailItem);
                localStorage.setItem("currentDetailItem", currItem);
                break;
            }
        }
    } else if (whatIsIt == "cpufan"){
        for(var i = 0; i < 10; i++){
            if (document.getElementById("part10").innerHTML == cpuFans[i].name){
                currentDetailItem = cpuFans[i];
                var currItem = JSON.stringify(currentDetailItem);
                localStorage.setItem("currentDetailItem", currItem);
                break;
            }
        }
    } else if (whatIsIt == "mobo"){
        for(var i = 0; i < 10; i++){
            if (document.getElementById("part10").innerHTML == mobos[i].name){
                currentDetailItem = mobos[i];
                var currItem = JSON.stringify(currentDetailItem);
                localStorage.setItem("currentDetailItem", currItem);
                break;
            }
        }
    } else if (whatIsIt == "memory"){
        for(var i = 0; i < 10; i++){
            if (document.getElementById("part10").innerHTML == memory[i].name){
                currentDetailItem = memory[i];
                var currItem = JSON.stringify(currentDetailItem);
                localStorage.setItem("currentDetailItem", currItem);
                break;
            }
        }
    } else if (whatIsIt == "storage"){
        for(var i = 0; i < 10; i++){
            if (document.getElementById("part10").innerHTML == storage[i].name){
                currentDetailItem = storage[i];
                var currItem = JSON.stringify(currentDetailItem);
                localStorage.setItem("currentDetailItem", currItem);
                break;
            }
        }
    } else if (whatIsIt == "gpu"){
        for(var i = 0; i < 10; i++){
            if (document.getElementById("part10").innerHTML == videoCards[i].name){
                currentDetailItem = videoCards[i];
                var currItem = JSON.stringify(currentDetailItem);
                localStorage.setItem("currentDetailItem", currItem);
                break;
            }
        }
    } else if (whatIsIt == "case"){
        for(var i = 0; i < 10; i++){
            if (document.getElementById("part10").innerHTML == cases[i].name){
                currentDetailItem = cases[i];
                var currItem = JSON.stringify(currentDetailItem);
                localStorage.setItem("currentDetailItem", currItem);
                break;
            }
        }
    } else if (whatIsIt == "psu"){
        for(var i = 0; i < 10; i++){
            if (document.getElementById("part10").innerHTML == psus[i].name){
                currentDetailItem = psus[i];
                var currItem = JSON.stringify(currentDetailItem);
                localStorage.setItem("currentDetailItem", currItem);
                break;
            }
        }
        
    } else {
        for(var i = 0; i < 10; i++){
            if (document.getElementById("part10").innerHTML == OSsystems[i].name){
                currentDetailItem = OSsystems[i];
                var currItem = JSON.stringify(currentDetailItem);
                localStorage.setItem("currentDetailItem", currItem);
                break;
            }
        }
    }
    location.href = "ItemDescription.html";
}

function clearList(){
    localStorage.clear();
}