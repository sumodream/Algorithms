/**
 * 优先队列
 */
function Patient (name,code){
	this.name = name ;
	this.code = code ;
}
function dequeue(){
	var priority = this.dataStore[0].code;
	for(var i = 0 ; i <this.dataStore.length ; i++){
		if(this.dataStore[i].code < priority){
			priority = i ;
		}
	}
}