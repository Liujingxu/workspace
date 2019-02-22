
function addEvent(obj, type, fn) {
    if (obj.addEventListener)
        obj.addEventListener(type, fn);
    else
        obj.attachEvent('on' + type, fn);
}


function removeEvent(obj, type, fn) {
    if (obj.removeEventListener)
        obj.removeEventListener(type, fn);
    else
        obj.detachEvent('on' + type, fn);
}

function getTarget(evt){
    if (evt.target)
        return evt.target;
    else
        return window.event.srcElement;
}

function $(id) {
    return document.getElementById(id);
}


function preDef(evt){
    if (evt.preventDefault)
        evt.preventDefault();
    else
        evt.returnValue = false;
}