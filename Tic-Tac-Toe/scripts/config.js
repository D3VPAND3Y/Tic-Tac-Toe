function openPlayerConfig(event){
    editedPlayer = +event.target.dataset.playerid; //+ converts to number
    //playerid is attribute assigned
    playerConfigOverlay.style.display = "block";
    backdrop.style.display = "block";
}




function closePlayerConfig(){
    playerConfigOverlay.style.display = "none";
    backdrop.style.display = "none";
    formElement.firstElementChild.classList.remove("error");//to access first element in the form
    errorOutput.innerHTML = "";
    clearName.value = "";
}




function handleSubmit(event){
    event.preventDefault();
    const formData = new FormData(event.target);//points to the form element
    // formdata function is used to get the data from the form and store it in an object
    const playerName = formData.get("name").trim();
    if(!playerName){
        event.target.firstElementChild.classList.add("error");//adds the error class to the first element in the form(traversing)
        errorOutput.innerHTML = "Enter a valid name!!";
        return;
    }
    const updatedPlayer = document.getElementById('player-'+ editedPlayer +'-data');
    updatedPlayer.children[1].innerHTML = playerName;

    
    players[editedPlayer-1].name = playerName;


    closePlayerConfig();

}