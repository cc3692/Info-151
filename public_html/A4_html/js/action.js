function getCellID(colsPerRow, r, c) {
    var id = r * colsPerRow + c;
    return "c" + id;
}

function drawGameBoard(r, c) {
    document.getElementById("member1").innerHTML="Ching";
    var tble = document.createElement("table");
    var brd = document.getElementById("board").appendChild(tble);
    for (var i = 0; i < r; i++) {
        n_row = document.createElement("tr");
        tble.appendChild(n_row);
        for (var j = 0; j < c; j++) {
            n_col = document.createElement("td");
            if (i % 2 === 0 ) {
                if (j % 2 === 0) {
                    n_col.className = "white";
                }else {
                    n_col.className = "black";
                }
            } else if (i % 2 != 0) {
                console.log("not0");
                if (j % 2 === 0) {
                    n_col.className = "black";
                } else {
                    n_col.className = "white";
                }
            }
            var cellId = getCellID(8, i, j);
            n_col.id = cellId;
            n_row.appendChild(n_col);
        }
        
    }

    return brd;
}