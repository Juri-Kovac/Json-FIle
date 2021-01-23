let pageCounter = 1;
let animalContainer = document.querySelector('#animal_info')
let btn = document.querySelector('#btn');

btn.addEventListener('click', () =>{
    let ourRequest = new XMLHttpRequest();
    ourRequest.open("GET", "https://learnwebcode.github.io/json-example/animals-" + pageCounter + ".json");
    ourRequest.onload = function () {
        let ourData = JSON.parse(ourRequest.responseText);
        renderHTML(ourData);

    }
    ourRequest.send();
    pageCounter++;
    if (pageCounter > 3){
        // btn.remove();                  /*--both options are correct remove also classList */
        btn.classList.add('hide-me')
    }
})
function renderHTML(data) {
    let htmlString = "";
    for (let i = 0; i < data.length; i++){
        htmlString += '<p>' + data[i].name + ' is  a ' + data[i].species + 'that likes to eat ';



        // for (let ii = 0 ; ii < data[i].foods.likes.length; i++){
        //     htmlString += data[i].foods.likes[ii];
        // }
        htmlString +='.</p>';
    }

    // animalContainer.innerHTML = htmlString;                            /* insert data only once */
    animalContainer.insertAdjacentHTML("beforeend", htmlString);
}


// function renderHTML(data) {
//     let htmlString = '';
//     data.forEach( key => {
// htmlString += key.name + '  ' + key.species + key[foods] + '<br />' ;
// });
// animalContainer.insertAdjacentHTML("beforeend", htmlString)
// }




