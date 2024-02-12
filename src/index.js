import LinkedList from "./linked_lists";

// examples of each method shown in console
const listOne = new LinkedList('List One');
listOne.find('New Node');
listOne.append('Node 1');
listOne.append('Node 2');
listOne.prepend('New Head');
listOne.toString();
listOne.size();
listOne.tail();
listOne.at(1);
listOne.pop();
listOne.toString();
listOne.pop();
listOne.toString();
listOne.contains('Node 2');
listOne.contains('New Head');
listOne.headFunc();
listOne.append('New Node');
listOne.find('New Node');
listOne.toString();
listOne.insertAt('Middle Node', 1);
listOne.toString();
listOne.removeAt(1);
listOne.toString();