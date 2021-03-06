var ul = document.getElementById('ul');
var left_in = document.getElementById('left-in');
var right_in = document.getElementById('right-in');
var left_out = document.getElementById('left-out');
var right_out = document.getElementById('right-out');

var sort_init = document.getElementById('sort-init');
var bubble_sort = document.getElementById('bubble-sort');
var modified_bubble_sort = document.getElementById('modified-bubble-sort');
var insertion_sort = document.getElementById('insertion-sort');

left_in.onclick = function(event){enul("left");};
right_in.onclick = function(event){enul("right");};
left_out.onclick = function(event){deul(0,"left");};
right_out.onclick = function(event){deul(0,"right");};
ul.onclick = function(event){deul(event.target);};  // 事件冒泡，事件委托

// 记录未排序数列
var initState = rememberInitArray(ul);
var stateSort = new Array();  // 保留每一次的排序状态，用于可视化

sort_init.onclick = function(event){
    console.log(initState);
    ul.innerHTML = "";
    for (var i = 0; i < initState.length; i++) {
        var li = createVisualizationItem(initState[i]);
        ul.appendChild(li);
    }
};
bubble_sort.onclick = function(event){sortAndVisualization("冒泡排序",ul,stateSort);};
modified_bubble_sort.onclick = function(event){sortAndVisualization("改进冒泡",ul,stateSort);};
insertion_sort.onclick = function(event){sortAndVisualization("插入排序",ul,stateSort);};

// 记录未排序数列
function rememberInitArray(ul){
    var initUllist = ulDeleteTextNode(ul.childNodes);  // 初始ul>li的nodelist
    var initArrayList = createNonSortedArray(initUllist);  // 初始nodelist转为ArrayList
    // var initState = JSON.parse(JSON.stringify(initArrayList.array()));  // 初始ArrayList转为Array
    var initState = initArrayList.array().concat();  // 初始ArrayList转为Array
    console.log(initState);
    return initState;
}
// 创建可视化的li
function createVisualizationItem(itemValue){
    var li = document.createElement('li');
    li.innerHTML = itemValue;
    li_height = itemValue/100*200;
    li.style.height = li_height+"px";
    return li;
}

// 排序及其可视化
function sortAndVisualization(sortDescription,ul,stateSort){
    console.log(sortDescription);
    var sortUllist = ulDeleteTextNode(ul.childNodes);  // 待排序ul>li的nodelist
    var sortArrayList = createNonSortedArray(sortUllist);  // 待排序nodelist转为ArrayList
    switch (sortDescription){
        case "冒泡排序":
            sortArrayList.bubbleSort(stateSort);
            break;
        case "改进冒泡":
            sortArrayList.modifiedBubbleSort(stateSort);
            break;
        case "插入排序":
            sortArrayList.insertionSort(stateSort);
            break;
        default:
            alert("此排序算法不存在！");
    }
    visualization(stateSort);  // 清空了stateSort
}

// 删除nodelist空文本节点
function ulDeleteTextNode(nodelist){
    for (var i = 0; i < nodelist.length; i++) {
    // chrome浏览器会将空格视为text节点，所以处理子节点之前应删除空格文本节点
        //如果是文本节点，并且值为空，则删除该节点
        if (nodelist[i].nodeType == 3 && /\s/.test(nodelist[i].nodeValue)) {
            nodelist[i].parentNode.removeChild(nodelist[i]);
        }
    }
    return nodelist;
}

// 将nodelist转为ArrayList
function createNonSortedArray(nodelist){
    var arraylist = new ArrayList();
    for (var i = 0; i < nodelist.length; i++) {
        arraylist.insert(nodelist[i].innerHTML);
    }
    return arraylist;
}

// 排序过程可视化
function visualization(stateSort){
    var timer = setInterval(function(){//每500ms取一次stateSort中的第一个数组
        if(stateSort.length>0){
            ul.innerHTML = "";
            // console.log(ul);
            var state = stateSort.shift();
            console.log(state);
            for (var i = 0; i < state.length-2; i++) {
                var li = createVisualizationItem(state[i]);
                // 若i是当前比较的数，且发生了交换，则改变颜色
                if ( (i == state[state.length-2]) && state[state.length-1] ) {
                    li.style.backgroundColor = "#3DA3EF";
                    // li.style.color = "red";
                }
                ul.appendChild(li);
            }
        }else{
            clearInterval(timer);
        }
    },500);
}

// 自定义构造函数ArrayList
function ArrayList(){

    var array = [];

    this.array= function(){
        return array;
    };

    this.toString= function(){
        return array.join();
    };

    this.insert = function(item){
        array.push(item);
    };

    this.delete = function(item){
        array.shift(item);
    };

    var swap = function(array, index1, index2){
        var aux = array[index1];
        array[index1] = array[index2];
        array[index2] = aux;
    };

    var saveState = function(array,currentIndex,isSwap,stateSort){
        var state = array.concat();
        state.push(currentIndex);  // 保存当前比较的数的索引
        state.push(isSwap);  // 保存是否交换
        stateSort.push(state);
    };

    // 冒泡排序
    this.bubbleSort = function(stateSort){
        var length = array.length;

        for (var i=0; i<length; i++){
            console.log('--- ');
            for (var j=0; j<length-1; j++ ){
                var isswap = 0; // 默认没有交换
                console.log('compare ' + array[j] + ' with ' + array[j+1]);
                if (array[j] > array[j+1]){
                    console.log('swap ' + array[j] + ' with ' + array[j+1]);
                    swap(array, j, j+1);
                    isswap = 1;  // 交换置1
                    console.log(array);
                }
                saveState(array,j+1,isswap,stateSort);
            }
        }
    };
    // 改进的冒泡排序
    this.modifiedBubbleSort = function(stateSort){
        var length = array.length;

        for (var i=0; i<length; i++){
            console.log('--- ');
            for (var j=0; j<length-1-i; j++ ){
                var isswap = 0; // 默认没有交换
                console.log('compare ' + array[j] + ' with ' + array[j+1]);
                if (array[j] > array[j+1]){
                    console.log('swap ' + array[j] + ' with ' + array[j+1]);
                    swap(array, j, j+1);
                    isswap = 1;  // 交换置1
                    console.log(array);
                }
                saveState(array,j+1,isswap,stateSort);
            }
        }
    };
    // 插入排序
    this.insertionSort = function(stateSort){
        var length = array.length,
            j,temp;

        console.log('--- ');
        for (var i=1; i<length; i++){
            j = i;
            temp = array[i];
            console.log('insert ' + array[i]);

            while (temp<array[j-1]){
                array[j] = array[j-1];
                array[j-1] = temp; // 为记录state而存在，没有也可以
                j--;

                console.log(array);
                saveState(array,j,1,stateSort);
            }
            array[j] = temp;

            saveState(array,j,1,stateSort);
        }
        saveState(array,j,0,stateSort);
    };
}

// 入队
function enul(side){
    var input = document.getElementsByTagName('input')[0];
    var input_value = input.value;
    if (!input_value) {
        alert('请输入一个10-100之间的数字');
        input.value="";
        input.focus();
    }else if (isNaN(input_value)) {
        alert('只能输入数字，且在10-100之间！');
        input.value="";
        input.focus();
    }else if (input_value<10 || input_value>100)  {
        alert('数字要在10-100之间！');
        input.value="";
        input.focus();
    }else{
        var li = createVisualizationItem(input_value);
        if(side==="left"){
            ul.insertBefore(li,ul.firstChild);
        }else if(side==="right"){
            ul.appendChild(li);
        }
        input.value="";
        input.focus();

        // 记录未排序数列
        initState = rememberInitArray(ul);
    }
}

// 出队
function deul(node,side){
    if(side=="left"){
        alert("您将删除数字"+ul.firstChild.innerHTML+"!");
        ul.removeChild(ul.firstChild);
    }else if(side=="right"){
        alert("您将删除数字"+ul.lastChild.innerHTML+"!");
        ul.removeChild(ul.lastChild);
    }else{
        // ul.removeChild(node);
        // alert("您将删除数字"+node.innerHTML+"!");
        alert("您将删除数字" +ul.removeChild(node).innerHTML +"!"); // 更好的写法！
    }

    // 记录未排序数列
    initState = rememberInitArray(ul);
}
