function initiate() {
    var images = document.querySelectorAll('#picturesbox > img');
    for (var i = 0; i < images.length; i++) {
        images[i].addEventListener('dragstart', dragged, false);
        images[i].addEventListener('dragend', ending, false);
    }

    drop = document.getElementById('canvas');
    canvas = drop.getContext('2d');
    
    drop.addEventListener('dragenter', function (e) {
        e.preventDefault();
    }, false);
    drop.addEventListener('dragover', function (e) {
        e.preventDefault();
    }, false);
    drop.addEventListener('drop', dropped, false);

    drop2=document.getElementById('dropbox2')
    drop2.addEventListener('dragenter', function(e){
    e.preventDefault(); }, false);
    drop2.addEventListener('dragover', function(e){
    e.preventDefault(); }, false);
    drop2.addEventListener('drop', droppedFiles, false); 
}
function ending(e) {
    elem = e.target;
    elem.style.visibility = 'hidden';
}
function dragged(e) {
    elem = e.target;
    console.log(elem)
    e.dataTransfer.setData('Text', elem.getAttribute('id'));
    e.dataTransfer.setDragImage(e.target, 0, 0);
}
function dropped(e) {
    e.preventDefault();
    var id = e.dataTransfer.getData('Text');
    var elem = document.getElementById(id);
    var posx = e.pageX - drop.offsetLeft;
    var posy = e.pageY - drop.offsetTop;
    canvas.drawImage(elem, posx, posy);
}

function droppedFiles(e){
    e.preventDefault();
    var files=e.dataTransfer.files;
    console.log(files)
    var list='';
    for(var f=0;f<files.length;f++){
        list+='File: '+files[f].name+' '+files[f].size+'<br>';
    }
    console.log(list)

    drop2 .innerHTML=list;
   }
 
window.addEventListener('load', initiate, false);