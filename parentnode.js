	/**
	 * [commonParentNode description]
	 *查找两个节点的最近的一个共同父节点，可以包括节点自身 
	 */
	function commonParentNode(oNode1, oNode2) {
	    if(oNode1.contains(oNode2)){
	        return oNode1;
	    }else if(oNode2.contains(oNode1)){
	        return oNode2;
	    }else{
	        return arguments.callee(oNode1.parentNode,oNode2);//callee有个非常有用的应用就是用来判断实际参数跟行参是否一致
	    }
	}

