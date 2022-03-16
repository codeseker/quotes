// console.log("hello")

let newQuote = document.getElementById('newQuote');

let getQuote = document.getElementById('getQuote');
getQuote.addEventListener('click', function quote() {
    //console.log("Here I am for you");

    const xhr = new XMLHttpRequest();

    xhr.open('GET', "https://quotes15.p.rapidapi.com/quotes/random/", true);
    xhr.setRequestHeader("x-rapidapi-host", "quotes15.p.rapidapi.com");
    xhr.setRequestHeader("x-rapidapi-key", "ea19b98c73mshc6562a6ed99ac65p1a5895jsn63fefc9b397e");

    xhr.onprogress = function performing() {
        newQuote.innerText = `Please Wait for your quote..`
    }
    xhr.onload = function dis() {

        setTimeout(() => {

            if (this.readyState === this.DONE) {
                let json = JSON.parse(this.responseText);
                // console.log(json);
                newQuote.innerText = `${json["content"]}`
            }
        }, 2000);
    }


    xhr.send();
})

let toggleMode = document.getElementById('toggleMode');
toggleMode.addEventListener('click', function mode() {
    
    if (document.body.style.color == 'white') {
        document.body.style.color = 'black';
        document.body.style.backgroundColor = 'white';
        document.querySelector('.card').style.backgroundColor = 'white';
        document.querySelector('.card').style.border = '1px solid black';
       // document.querySelector('.card-body').style.border = '1px solid black';
        toggleMode.innerText = "Enable Dark Mode";
        toggleMode.className = "btn btn-outline-dark mx-3";
    }
    else {
        document.body.style.color = 'white';
        document.body.style.backgroundColor = 'black';
        document.querySelector('.card').style.backgroundColor = 'black';
        toggleMode.innerText = "Enable Light Mode";
        document.querySelector('.card').style.border = '1px solid white';
        document.querySelector('.card-body').style.border = '1px solid white';
        toggleMode.className = "btn btn-outline-light mx-3";
        
    }
})