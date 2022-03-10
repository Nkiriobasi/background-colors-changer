let index = 0;

document.querySelector("button").addEventListener("click", changeColors);



function changeColors(){
    let colors = ["blue","green","orange","brown","purple","black","yellow","pink","maroon","grey","Acid green","Alloy orange"];

    document.getElementsByTagName("body")[0].style.background = colors[index++];

    if(index > colors.length - 1)
    index = 0;
}
