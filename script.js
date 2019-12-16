document.getElementById("btn").addEventListener("click", displayData);
// result.innerHTML = "Loading...";
let main = document.getElementById("main");

function displayData() {

    fetch("http://api.giphy.com/v1/gifs/search?q=michael+jordan&api_key=QB5VNfeC4Kyvh8h3t9RuYCMgvyW0N19M&limit=20")
        .then(function (resp) {
            // Transform the returned json string data into a real json object.
            return resp.json()
        })

        .then(function (data) {
            // return the data to be used
            let datas = data.data.length;
        
            function constructGif(arg1, arg2, arg3) {
                arg1.setAttribute("src", arg2);
                arg1.setAttribute("class", "mt-5");
                arg1.style.margin = "0 auto";
                arg1.style.padding = "10px";
                arg1.style.display = "inline-block";
                arg1.style.width = "auto";
                arg1.style.height = "200px";
                arg3.appendChild(arg1);
            }
            main.innerHTML = " ";
            for (let i = 0; i <= datas; i++) {
                setTimeout(function () {
                    let randomNumber = Math.floor(Math.random() * datas) + 1;
                    let gif = document.createElement("img");
                    let source = data.data[randomNumber].images.original.url;
                    // console.log(randomNumber);
                    // randomNumber[source];
                    if (source !== main.innerHTML.src) {
                        constructGif(gif, source, main);
                    }
                    console.log(main.innerHTML.src);
                }, 1000 * i)

            }

        });
}

// function Count(ct) {
//     let _ct = ct;
//     this.addCount = () => {
//         _ct++;
//     };
//     this.getCount = () => _ct;
// }
// let count = new Count(0);