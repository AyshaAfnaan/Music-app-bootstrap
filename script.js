function deleteRow(event){
    let rowIndex = event.target.parentNode.parentNode.parentNode.rowIndex;
    document.getElementById("table").deleteRow(rowIndex - 1);
  }



function addTrack(){
    let trackNum = document.getElementById("track-num");
    let trackTitle = document.getElementById("track-title");
    let artistName = document.getElementById("artist-name");
    let trackDuration = document.getElementById("track-duration");
    let deleteBtn = document.getElementsByClassName("delete-btn")
    let tableRef = document.getElementById("table");

    let newRow = tableRef.insertRow(-1);
    let newCell = newRow.insertCell(0);
    let newText = document.createTextNode(trackNum);
    newCell.appendChild(newText);


    let newCell2= newRow.insertCell(1);
    let newTitle = document.createTextNode(trackTitle);
    newCell2.appendChild(newTitle);

    let newCell3 = newRow.insertCell(2);
    let newArtist = document.createTextNode(artistName);
    newCell3.appendChild(newArtist);

    let newCell4 = newRow.insertCell(3);
    let duration = document.createTextNode(trackDuration);
    newCell4.appendChild(duration);

    let newCell5 = newRow.insertCell(4);
    newCell5.appendChild(deleteBtn.cloneNode(true));

    document.getElementById("exampleModal").classList.remove("show");

    alert(`Track ${trackTitle} is added`);
}