javascript:var words=['I am Groot. ','I AM GROOT! ','I am Groot. ','I am Groot. ','I am Groot! ','I am Groot. ','I am Groot. ','I AM GROOT! ','I am Groot? ','I... am Groot. ','I am Groot?! '];
function groot(node){
  if(node.nodeType===Node.TEXT_NODE){
    var text=node.textContent;
    var iam=text.replace(/\b(\w\S*\s?){1,3}/ig,function(){var idx=Math.floor(Math.random()*words.length);
    return words[idx];});
    node.textContent=iam;return;
    }
  else if(node.nodeType===Node.ELEMENT_NODE){
    for(var i=0;i<node.childNodes.length;++i){
      groot(node.childNodes[i]);
    }
    return;
  }
  else{
    return;
  }
}
groot(document.body);
