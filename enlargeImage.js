function clickOnenlargeImage(imgName){
    document.getElementById('largeImg').src = imgName;
    document.getElementById('largeImgPanel').style.visibility = 'visible';
    if(document.selection) document.selection.empty();
    if(window.getSelection) window.getSelection().removeAllRanges();
    }
function hideMe(obj) {
        obj.style.visibility = 'hidden';
    }



