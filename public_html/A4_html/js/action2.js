var pieces = [
    [0,-1,0,-1,0,-1,0,-1],
    [-1,0,-1,0,-1,0,-1,0],
    [0,-1,0,-1,0,-1,0,-1],
    [-1,0,-1,0,-1,0,-1,0],
    [0,-1,0,-1,0,-1,0,-1],
    [-1,0,-1,0,-1,0,-1,0],
    [0,-1,0,-1,0,-1,0,-1],
    [-1,0,-1,0,-1,0,-1,0]
];

function showGamePieces(r,c) {
    document.getElementById("member2").innerHTML="Alexcia";
    for (var i = 0; i < r; i++) {
        n_row = document.createElement("tr");
        tble.appendChild(n_row);
        for (var j = 0; j < c; j++) {
            n_col = document.createElement("td");
            if (i < 0 and j < 0 ) {
                n_col.className = "redpiece";
            else:
                n_col.className = "blackpiece";
            }
        }
    }       
}