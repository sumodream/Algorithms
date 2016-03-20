var str = 'hello world';
function spacity(str){
    return str.split('').join('');
}

console.log(spacity(str));

/*String.prototype.spacity = function(){
    return this.split('').join('');
}
'hello world'.spacity();*/