function namespace(oNamespace, sPackage) {
    var obj = oNamespace;
   var  pkg = "";
    if(sPackage.indexOf(".")==-1){
        pkg = sPackage;
    }else{
        pkg = sPackage.substr(0,sPackage.indexOf("."));
    }
    if(pkg&&!(obj[pkg]&&obj[pkg] instanceof Object)){
        obj[pkg] = {};
    }
    if(sPackage.indexOf(".")!=-1){
        namespace(obj[pkg],sPackage.substr(sPackage.indexOf(".")+1));
    }
     
    return obj;
}
console.log(namespace({a: {test: 1, b: 2}}, 'a.b.c.d'));