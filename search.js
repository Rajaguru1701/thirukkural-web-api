const APIKEY = "2chskpfk71ath";
// thirukkural number from input field 
const kuralNumber = document.getElementById("kuralNumber");

const form = document.getElementById("form")
//this is the result div
const resultContainer = document.querySelector(".result")
const container = document.querySelector(".container")

form.addEventListener("submit",(event)=>{
    container.classList.add("height");
    event.preventDefault();
    //getting thirukkural number from the input field
    const thirukkuralNumber = kuralNumber.value;
    if(0< thirukkuralNumber && thirukkuralNumber<=1330)
    {
    //this url is the fetching the data
    const URL = `https://getthirukkural.appspot.com/api/3.0/kural/${thirukkuralNumber}?appid=${APIKEY}`
    //fetching
    fetch(URL).then((res)=>{
        return res.json(); //fetching data is converted into json format
    }).then((data)=>{
        
        // display the thirukkral
        // using constant variable store the data
        const div = `
            <div class="ani">
                <h2>அதிகாரம் : <span>${data.athigaram}</span></h2>
                <br>
                <h2>குறள் : </h2>
                <p style="color:#FFD700">${data.line1}</p>
                <p style="color:#FFD700">${data.line2}</p>
                <br>
                <h2>பால் : <span>${data.paal}</span></h2>
            </div>
        `
         // display the thirukkral
        resultContainer.innerHTML = div
        
    })
    }
    else
    {
        resultContainer.innerHTML=`<h2>சரியான திருக்குறள் எண்ணை உள்ளிடவும்</h2>`
    }
    
    
    
})