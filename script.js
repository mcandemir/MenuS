/*
CARD CLASSES INDEXES: 
    [0] -> CARD CLASS
    [1] -> MENU IDENTIFIER
    [2] -> ID
    [3] -> TOPIC
*/

// create an on menu item
function createOnMenuItemElement(id, img_src, title, text, title2, topic){
    // create a column cardboard on-menu-item
    let newElementCol = document.createElement('div');
    newElementCol.className = 'col';
    // newElementCol.setAttribute('draggable', 'false');

    let newElementColCard = document.createElement('div');
    newElementColCard.className = `card on-menu-item id-${id} ${topic}`;
    newElementColCard.setAttribute('draggable', 'true');
    
    let newElementColCardImg = document.createElement('img');
    newElementColCardImg.className = 'card-img-top';
    newElementColCardImg.setAttribute('src', img_src);
    newElementColCardImg.setAttribute('draggable', 'false');
    
    let newElementColCardBody = document.createElement('div');
    newElementColCardBody.className = 'card-body';
    // newElementColCardBody.setAttribute('draggable', 'false');
    
    let newElementColCardBodyTitle = document.createElement('h5');
    newElementColCardBodyTitle.className = 'card-title';
    newElementColCardBodyTitle.textContent = title;
    // newElementColCardBodyTitle.setAttribute('draggable', 'false');

    let newElementColCardBodyText = document.createElement('p');
    newElementColCardBodyText.className = 'card-text';
    newElementColCardBodyText.textContent = text;
    // newElementColCardBodyText.setAttribute('draggable', 'false');
    
    let newElementColCardBodyTitle2 = document.createElement('h6');
    newElementColCardBodyTitle2.className = 'card-title';
    newElementColCardBodyTitle2.textContent = title2;
    // newElementColCardBodyTitle2.setAttribute('draggable', 'false');

    newElementColCardBody.appendChild(newElementColCardBodyTitle);
    newElementColCardBody.appendChild(newElementColCardBodyText);
    newElementColCardBody.appendChild(newElementColCardBodyTitle2);

    newElementColCard.appendChild(newElementColCardImg);
    newElementColCard.appendChild(newElementColCardBody);
    
    newElementCol.appendChild(newElementColCard);

    return newElementCol;
}

// create an off menu item
function createOffMenuItemElement(id, img_src, title, text, title2, topic){
    let newElementCard = document.createElement('div');
    newElementCard.className = `card off-menu-item id-${id} ${topic}`;
    newElementCard.setAttribute('draggable', 'true');

    let newElementCardRow = document.createElement('div');
    newElementCardRow.className = 'row g-0';

    let newElementCardRowCol = document.createElement('div');
    newElementCardRowCol.className = 'col-md-4';

    let newElementCardRowColImg = document.createElement('img');
    newElementCardRowColImg.className = 'img-fluid rounded-start';
    newElementCardRowColImg.setAttribute('src', img_src);
    newElementCardRowColImg.setAttribute('draggable', 'false');
   
    let newElementCardRowCol2 = document.createElement('div');
    newElementCardRowCol2.className = 'col-md-8';
    
    let newElementCardRowCol2Body = document.createElement('div');
    newElementCardRowCol2Body.className = 'card-body';
   
    let newElementCardRowCol2BodyTitle = document.createElement('h5');
    newElementCardRowCol2BodyTitle.className = 'card-title';
    newElementCardRowCol2BodyTitle.textContent = title;
  
    let newElementCardRowCol2BodyText = document.createElement('p');
    newElementCardRowCol2BodyText.className = 'card-text';
    newElementCardRowCol2BodyText.textContent = text;
  
    let newElementCardRowCol2BodyTitle2 = document.createElement('h6');
    newElementCardRowCol2BodyTitle2.className = 'card-title';
    newElementCardRowCol2BodyTitle2.textContent = title2;

    newElementCardRowCol2Body.appendChild(newElementCardRowCol2BodyTitle);
    newElementCardRowCol2Body.appendChild(newElementCardRowCol2BodyText);
    newElementCardRowCol2Body.appendChild(newElementCardRowCol2BodyTitle2);
    newElementCardRowCol2.appendChild(newElementCardRowCol2Body);

    newElementCardRowCol.appendChild(newElementCardRowColImg);
    
    newElementCardRow.appendChild(newElementCardRowCol);
    newElementCardRow.appendChild(newElementCardRowCol2);

    newElementCard.appendChild(newElementCardRow);

    return newElementCard
}

// return a copy of a menu list filtered with topic 
function filterDisplayListByTopic(displayList){
    let displayListCopy = []
    let selectedTopicElement = document.querySelector('.form-select.topic')

    for(let i=0; i<displayList.length; i++){
        if(selectedTopicElement.value == 'topic-all'){
            displayListCopy.push(displayList[i])
        }
        else{
            if(displayList[i]['topic'] == selectedTopicElement.value){
                displayListCopy.push(displayList[i])
            }
        }
    }

    return displayListCopy;
}

// clear and reload both on/off-menus-items
function refreshBoth(){
    onMenuItems.refresh()
    offMenuItems.refresh()
}

// add item within the form
function addItemPopUp(){
    popupBox = document.querySelector('.add-item-popup-box')
    containerDiv = document.querySelector('.container')

    popupBox.classList.remove('hidden')
    containerDiv.classList.add('blackout')

    popupButtonTopic = document.querySelector('.add-topic-button')
    popupButtonTopic.setAttribute('disabled', true)
}

function closeAddItemPopUp(add=false){
    if(add){
        let newItemTitle = document.querySelector('.input-title').value;
        let newItemText = document.querySelector('.input-text').value;
        let newItemTitle2 = document.querySelector('.input-title2').value;
        let newItemTopic = document.querySelector('.input-topic').value;
        let newItemImgSrc = document.querySelector('#input-img').value;
    
        offMenuItems.addItem(NEXT_ID, 'images/hamburger.jpg', `${newItemTitle} ${NEXT_ID}`, `${newItemText}`, `${newItemTitle2} ₺`, `${newItemTopic}`);
        NEXT_ID++;
    }

    let popupBox = document.querySelector('.add-item-popup-box');
    let containerDiv = document.querySelector('.container');

    popupBox.classList.add('hidden');
    containerDiv.classList.remove('blackout');

    popupButtonTopic = document.querySelector('.add-topic-button')
    popupButtonTopic.removeAttribute('disabled')
}

// add topic within the form
function addTopicPopUp(){
    popupBox = document.querySelector('.add-topic-popup-box')
    containerDiv = document.querySelector('.container')

    popupBox.classList.remove('hidden')
    containerDiv.classList.add('blackout')

    popupButtonItem = document.querySelector('.add-item-button')
    popupButtonItem.setAttribute('disabled', 'true')
}

function closeAddTopicPopUp(add=false){
    if(add){
        let newTopic = document.querySelector('.input-newtopic').value;

        TOPIC_LIST.push(newTopic);
        createTopics(TOPIC_LIST);
    }

    let popupBox = document.querySelector('.add-topic-popup-box');
    let containerDiv = document.querySelector('.container');

    popupBox.classList.add('hidden');
    containerDiv.classList.remove('blackout');

    popupButtonItem = document.querySelector('.add-item-button')
    popupButtonItem.removeAttribute('disabled')
}

// attune topic select boxes
function createTopics(topicList){
    let topicSelecBox = document.querySelector('.form-select.topic');
    let topicSelectBoxPopUp = document.querySelector('.input-topic');
    let topicOption = null;
    let topicValue = null;

    if(topicSelecBox.children.length){
        for(let i=topicSelecBox.children.length - 1; i>=0; i--){
            topicSelecBox.children[i].remove()
            topicSelectBoxPopUp.children[i].remove()
        }
    }
    

    for(let i=0; i<topicList.length; i++){
        topicValue = topicList[i].replace(/ /g, '-')
        topicValue = topicValue.toLowerCase()
        topicOption = document.createElement('option')
        topicOption.setAttribute('value', `topic-${topicValue}`)
        topicOption.textContent = topicList[i]
        topicSelecBox.appendChild(topicOption)
        topicSelectBoxPopUp.appendChild(topicOption.cloneNode(deep=true))
    }
}


class OnMenuItems{
    constructor(menuList, numCols=2){
        this.menuList = menuList;
        this.numCols = numCols;

        this.numRows = Math.ceil(this.menuList.length / this.numCols);

        this.remainedCol = this.menuList.length % this.numCols;
        if(this.remainedCol==0){this.remainedCol = this.numCols}

        this.onMenuItems = document.querySelector('.on-menu-items');
        this.leftBox = document.querySelector('.left-box');
    }

    autoScrollDown(){
        this.leftBox.scrollTop = this.leftBox.scrollHeight
    }

    setEventListeners(){
        this.onMenuItems.addEventListener('dragstart', (e) => {
            SELECTED_ELEMENT = e.target
            e.target.classList.add("dragging");
        })

        this.leftBox.addEventListener('dragover', (e) => {
            e.preventDefault()
        })

        this.leftBox.addEventListener('dragend', (e) => {
            e.target.classList.remove("dragging");
        })

        this.leftBox.addEventListener('drop', (e) => {
            // console.log('drop')
            // console.log(SELECTED_ELEMENT)
            // console.log(e.target)
            if(SELECTED_ELEMENT.classList.contains('off-menu-item')){
                console.log('DROPPING TO ON-MENU-ITEMS')

                let selectedId = SELECTED_ELEMENT.classList[2].slice(3)
                let selectedImgSrc = SELECTED_ELEMENT.children[0].children[0].children[0].getAttribute('src')
                let selectedTitle = SELECTED_ELEMENT.children[0].children[1].children[0].children[0].textContent
                let selectedText = SELECTED_ELEMENT.children[0].children[1].children[0].children[1].textContent
                let selectedTitle2 = SELECTED_ELEMENT.children[0].children[1].children[0].children[2].textContent
                let selectedTopic = SELECTED_ELEMENT.classList[3]

                console.log('ID: ', selectedId)
                console.log('ImgSrc: ', selectedImgSrc)
                console.log('Title: ', selectedTitle)
                console.log('Text: ', selectedText)
                console.log('Title2: ', selectedTitle2)
                console.log('Topic: ', selectedTopic)

                this.addItem(selectedId, selectedImgSrc, selectedTitle, selectedText, selectedTitle2, selectedTopic)
                offMenuItems.removeItem(selectedId)
            }
        })
    }

    updateNumRowsRemainedCols(){
        this.numRows = Math.ceil(this.menuList.length / this.numCols);

        this.remainedCol = this.menuList.length % this.numCols;
        if(this.remainedCol==0){this.remainedCol = this.numCols}
    }

    showMenuList(){ //experimental
        let menuIdx = 0;        

        for(let i=0; i<this.numRows; i++){
            for(let j=0; j<this.remainedCol; j++){
                console.log(this.menuList[menuIdx]['title']);
                console.log(this.menuList[menuIdx]['text']);
                console.log(this.menuList[menuIdx]['title2']);
                menuIdx++;
            }
        }
    }

    buildOnMenuItems(displayList=this.menuList){
        displayList = filterDisplayListByTopic(displayList)

        console.log(displayList)

        let menuIdx = 0;        
        let displayListNumRows = Math.ceil(displayList.length / this.numCols)
        
        let displayListRemainedCol = displayList.length % this.numCols;
            if(displayListRemainedCol==0){displayListRemainedCol = this.numCols}

        for(let i=0; i<(displayListNumRows); i++){
            let newElementRow = document.createElement('div');
            newElementRow.className = 'row'
            this.onMenuItems.appendChild(newElementRow);
            
            let cols = this.numCols;
            if(i == displayListNumRows - 1){
                cols = displayListRemainedCol;
            }

            for(let j=0; j<cols; j++){
                newElementRow.appendChild(createOnMenuItemElement(
                    displayList[menuIdx]['id'],
                    displayList[menuIdx]['img_src'],
                    displayList[menuIdx]['title'],
                    displayList[menuIdx]['text'],
                    displayList[menuIdx]['title2'],
                    displayList[menuIdx]['topic']
                    ));
                menuIdx++;
            }
        }
    }

    // needs to be called before updateNumRowsRemainedCols() 
    resetOnMenuItems(){
        console.log('Resetting Menu Items')
        for(let i=this.numRows - 1; i>=0; i--) {
            if(this.onMenuItems.children[i]){
                this.onMenuItems.children[i].remove();
            }
        }
    }

    // resets, updates and builds
    addItem(id, img_src, title, text, title2, topic){
        this.resetOnMenuItems()

        let newMenu = {
            'id': id,
            'img_src': img_src,
            'title': title,
            'text': text,
            'title2': title2,
            'topic': topic
        }
        this.menuList.push(newMenu)
        console.log('Adding Menu: ', newMenu)

        this.updateNumRowsRemainedCols()
        this.buildOnMenuItems()
        this.autoScrollDown()
    }

    //
    removeItem(id){
        for(let i=0; i<this.menuList.length; i++){
            if(id == this.menuList[i]['id']){
                this.menuList.splice(i, 1);
                break;
            }
        }

        this.resetOnMenuItems()
        this.updateNumRowsRemainedCols()
        this.buildOnMenuItems()
    }

    refresh(){
        this.resetOnMenuItems()
        this.buildOnMenuItems()
    }

}

class OffMenuItems{
    constructor(menuList){
        this.menuList = menuList;
        this.offMenuItems = document.querySelector('.off-menu-items');
        this.rightBox = document.querySelector('.right-box');
    }

    setEventListeners(){
        this.offMenuItems.addEventListener('dragstart', (e) => {
            SELECTED_ELEMENT = e.target
            e.target.classList.add("dragging");
        })

        this.rightBox.addEventListener('dragover', (e) => {
            e.preventDefault()
        })

        this.rightBox.addEventListener('dragend', (e) => {
            e.target.classList.remove("dragging");
        })

        this.rightBox.addEventListener('drop', (e) => {
            // console.log('drop')
            // console.log(SELECTED_ELEMENT)
            // console.log(e.target)
            if(SELECTED_ELEMENT.classList.contains('on-menu-item')){
                console.log('DROPPING TO OFF-MENU-ITEMS')

                let selectedId = SELECTED_ELEMENT.classList[2].slice(3)
                let selectedImgSrc = SELECTED_ELEMENT.children[0].getAttribute('src')
                let selectedTitle = SELECTED_ELEMENT.children[1].children[0].textContent
                let selectedText = SELECTED_ELEMENT.children[1].children[1].textContent
                let selectedTitle2 = SELECTED_ELEMENT.children[1].children[2].textContent
                let selectedTopic = SELECTED_ELEMENT.classList[3]

                console.log('ID: ', selectedId)
                console.log('ImgSrc: ', selectedImgSrc)
                console.log('Title: ', selectedTitle)
                console.log('Text: ', selectedText)
                console.log('Title2: ', selectedTitle2)
                console.log('Topic: ', selectedTopic)

                this.addItem(selectedId, selectedImgSrc, selectedTitle, selectedText, selectedTitle2, selectedTopic)
                onMenuItems.removeItem(selectedId)
            }
        })
    }

    autoScrollDown(){
        this.rightBox.scrollTop = this.rightBox.scrollHeight
    }

    buildOffMenuItems(displayList=this.menuList){
        displayList = filterDisplayListByTopic(displayList)
        for(let i=0; i<displayList.length; i++){
            this.offMenuItems.appendChild(createOffMenuItemElement(
                displayList[i]['id'],
                displayList[i]['img_src'],
                displayList[i]['title'],
                displayList[i]['text'],
                displayList[i]['title2'],
                displayList[i]['topic']
                ));
        }
    }

    // resets, updates and builds
    addItem(id, img_src, title, text, title2, topic){
        this.resetOffMenuItems()

        let newMenu = {
            'id': id,
            'img_src': img_src,
            'title': title,
            'text': text,
            'title2': title2,
            'topic': topic,
        }
        this.menuList.push(newMenu)
        console.log('Adding Menu: ', newMenu)

        this.buildOffMenuItems()
        this.autoScrollDown()
    }

    resetOffMenuItems(){
        console.log('Resetting Menu Items')
        for(let i=this.menuList.length - 1; i>=0; i--) {
            if(this.offMenuItems.children[i]){
                this.offMenuItems.children[i].remove();
            }
        }
    }

    removeItem(id){
        this.resetOffMenuItems()
        for(let i=0; i<this.menuList.length; i++){
            if(id == this.menuList[i]['id']){
                this.menuList.splice(i, 1);
                break;
            }
        }

        this.buildOffMenuItems()
    }

    refresh(){
        this.resetOffMenuItems()
        this.buildOffMenuItems()
    }

}


// ================================


let initialOnMenuItemList = [
    {
        'id': 0,
        'img_src': 'images/hamburger.jpg',
        'title': 'Xi Hamburger',
        'text': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        'title2': '19.99 ₺',
        'topic': 'topic-fast-food'
    },
    {
        'id': 1,
        'img_src': 'images/frenchfries.jpg',
        'title': 'Xi French Fries',
        'text': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        'title2': '24.99 ₺',
        'topic': 'topic-fast-food'
    },
    {
        'id': 2,
        'img_src': 'images/currypasta.jpeg',
        'title': 'Xi Curry Pasta',
        'text': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        'title2': '29.99 ₺',
        'topic': 'topic-pasta'
    },
    {
        'id': 3,
        'img_src': 'images/alfredopasta.png',
        'title': 'Xi Alfredo Pasta',
        'text': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        'title2': '14.99 ₺',
        'topic': 'topic-pasta'
    },
]

let initialOffMenuItemList = [
    {
        'id': 4,
        'img_src': 'images/coke.jpg',
        'title': 'Xi Coke',
        'text': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        'title2': '10.99 ₺',
        'topic': 'topic-cold-drinks'
    },
    {
        'id': 5,
        'img_src': 'images/lemonade.jpg',
        'title': 'Xi Lemonade',
        'text': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        'title2': '15.99 ₺',
        'topic': 'topic-cold-drinks'
    },
    {
        'id': 6,
        'img_src': 'images/water.jpg',
        'title': 'Xi Water',
        'text': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        'title2': '17.99 ₺',
        'topic': 'topic-cold-drinks'
    },
    {
        'id': 7,
        'img_src': 'images/nuggets.jpg',
        'title': 'Xi Nuggets',
        'text': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        'title2': '18.99 ₺',
        'topic': 'topic-fast-food'
    },
]

let TOPIC_LIST = [
    'All',
    'Cold Drinks',
    'Fast Food',
    'Pasta'
]
createTopics(TOPIC_LIST)

let NEXT_ID = initialOnMenuItemList.length + initialOffMenuItemList.length
let SELECTED_ELEMENT = null

let onMenuItems = new OnMenuItems(initialOnMenuItemList)
let offMenuItems = new OffMenuItems(initialOffMenuItemList)

onMenuItems.setEventListeners()
offMenuItems.setEventListeners()

onMenuItems.buildOnMenuItems()
offMenuItems.buildOffMenuItems()



// offMenuItems.removeItem(7)

// onMenuItems.removeItem(1)
// onMenuItems.addItem(NEXT_ID, 'images/nuggets.jpg', 'Xi Nuggets 2', 'test add func', '44.55')
// onMenuItems.removeItem(5)
// onMenuItems.removeItem(7)
// onMenuItems.addItem(NEXT_ID, 'images/nuggets.jpg', 'Xi Nuggets 3', 'test add func', '44.55')
// onMenuItems.removeItem(2)
// onMenuItems.addItem(NEXT_ID, 'images/nuggets.jpg', 'Xi Nuggets 4', 'test add func', '44.55')
// onMenuItems.removeItem(9)
// onMenuItems.addItem(NEXT_ID, 'images/nuggets.jpg', 'Xi Nuggets 5', 'test add func', '44.55')


// onMenuItems.resetOnMenuItems()

// onMenuItems.showMenuList()
// onMenuItems.resetOnMenuItems()
