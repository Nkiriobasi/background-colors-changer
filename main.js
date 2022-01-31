let index = 0;

function changeColors(){
    let colors = ["blue","green","orange","brown","purple","black","yellow","pink","maroon"];

    document.getElementsByTagName("body")[0].style.background = colors[index++];

    if(index > colors.length - 1)
    index = 0;
}