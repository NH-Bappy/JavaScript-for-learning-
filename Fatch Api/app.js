const URL = "https://dogapi.dog/api-docs/v2/swagger.json";
const btn = document.querySelector("#btn")
const fact = document.querySelector("#ani")

// =====fetch======
// const getFacts = async () => {
//     console.log ("getting data ....")
//     let response = await fetch(url)
//     console.log(response.status);
// }
// getFacts()

// ===== usable data=======
const getFacts = async () => {
    console.log ("getting data ....")
    let response =await fetch(URL)
    console.log(response);
    let Data = await response.json();
    fact.innerHTML = Data.info.description;
}
btn.addEventListener("click", getFacts);
// ====
// function getFect () {
//     fetch(URL)
//     .then((Response) => {
//         return Response.json()
//     })
//     .then((Data) =>{
//         console.log(Data)
//     })
// }

















































