// create an on menu item
function createOnMenuItemElement(id, img_src, title, text, title2){
    // create a column cardboard on-menu-item
    let newElementCol = document.createElement('div');
    newElementCol.className = 'col';
    // newElementCol.setAttribute('draggable', 'false');

    let newElementColCard = document.createElement('div');
    newElementColCard.className = `card on-menu-item id-${id}`;
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
function createOffMenuItemElement(id, img_src, title, text, title2){
    let newElementCard = document.createElement('div');
    newElementCard.className = `card mb-3 off-menu-item id-${id}`;
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

                let selectedId = SELECTED_ELEMENT.classList[3].slice(3)
                let selectedImgSrc = SELECTED_ELEMENT.children[0].children[0].children[0].getAttribute('src')
                let selectedTitle = SELECTED_ELEMENT.children[0].children[1].children[0].children[0].textContent
                let selectedText = SELECTED_ELEMENT.children[0].children[1].children[0].children[1].textContent
                let selectedTitle2 = SELECTED_ELEMENT.children[0].children[1].children[0].children[2].textContent

                console.log('ID: ', selectedId)
                console.log('ImgSrc: ', selectedImgSrc)
                console.log('Title: ', selectedTitle)
                console.log('Text: ', selectedText)
                console.log('Title2: ', selectedTitle2)

                this.addItem(selectedId, selectedImgSrc, selectedTitle, selectedText, selectedTitle2)
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

    buildOnMenuItems(){
        let menuIdx = 0;        

        for(let i=0; i<this.numRows; i++){
            let newElementRow = document.createElement('div');
            newElementRow.className = 'row'
            this.onMenuItems.appendChild(newElementRow);

            let cols = this.numCols;
            if(i == this.numRows - 1){
                cols = this.remainedCol;
            }
            for(let j=0; j<cols; j++){
                console.log(menuIdx)
                newElementRow.appendChild(createOnMenuItemElement(
                    this.menuList[menuIdx]['id'],
                    this.menuList[menuIdx]['img_src'],
                    this.menuList[menuIdx]['title'],
                    this.menuList[menuIdx]['text'],
                    this.menuList[menuIdx]['title2']
                    ));
                menuIdx++;
            }
        }
    }

    // needs to be called before updateNumRowsRemainedCols() 
    resetOnMenuItems(){
        for(let i=this.numRows - 1; i>=0; i--) {
            console.log(this.onMenuItems.children.length);
            console.log(this.onMenuItems.children);
            console.log(i);

            this.onMenuItems.children[i].remove();
        }
    }

    // resets, updates and builds
    addItem(id, img_src, title, text, title2){
        this.resetOnMenuItems()

        let newMenu = {
            'id': id,
            'img_src': img_src,
            'title': title,
            'text': text,
            'title2': title2
        }
        this.menuList.push(newMenu)
        console.log(this.menuList)

        this.updateNumRowsRemainedCols()
        this.buildOnMenuItems()
        this.autoScrollDown()
        NEXT_ID++;
    }

    //
    removeItem(id){
        let removeId = null;
        for(let i=0; i<this.menuList.length; i++){
            if(id == this.menuList[i]['id']){
                removeId = id;
                this.menuList.splice(i, 1);
                break;
            }
        }

        this.resetOnMenuItems()
        this.updateNumRowsRemainedCols()
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

                console.log('ID: ', selectedId)
                console.log('ImgSrc: ', selectedImgSrc)
                console.log('Title: ', selectedTitle)
                console.log('Text: ', selectedText)
                console.log('Title2: ', selectedTitle2)

                this.addItem(selectedId, selectedImgSrc, selectedTitle, selectedText, selectedTitle2)
                onMenuItems.removeItem(selectedId)
            }
        })
    }

    autoScrollDown(){
        this.rightBox.scrollTop = this.rightBox.scrollHeight
    }

    buildOffMenuItems(){
        for(let i=0; i<this.menuList.length; i++){
            this.offMenuItems.appendChild(createOffMenuItemElement(
                this.menuList[i]['id'],
                this.menuList[i]['img_src'],
                this.menuList[i]['title'],
                this.menuList[i]['text'],
                this.menuList[i]['title2']
                ));
        }
    }

    // resets, updates and builds
    addItem(id, img_src, title, text, title2){
        this.resetOffMenuItems()

        let newMenu = {
            'id': id,
            'img_src': img_src,
            'title': title,
            'text': text,
            'title2': title2
        }
        this.menuList.push(newMenu)
        console.log(this.menuList)

        this.buildOffMenuItems()
        this.autoScrollDown()
        NEXT_ID++;
    }

    resetOffMenuItems(){
        for(let i=this.menuList.length - 1; i>=0; i--) {
            console.log(this.offMenuItems.children.length);
            console.log(this.offMenuItems.children);
            console.log(i);

            this.offMenuItems.children[i].remove();
        }
    }

    removeItem(id){
        this.resetOffMenuItems()

        let removeId = null;
        for(let i=0; i<this.menuList.length; i++){
            if(id == this.menuList[i]['id']){
                removeId = id;
                this.menuList.splice(i, 1);
                break;
            }
        }

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
        'title2': '19.99'
    },
    {
        'id': 1,
        'img_src': 'images/frenchfries.jpg',
        'title': 'Xi French Fries',
        'text': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        'title2': '19.99'
    },
    {
        'id': 2,
        'img_src': 'images/currypasta.jpeg',
        'title': 'Xi Curry Pasta',
        'text': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        'title2': '19.99'
    },
    {
        'id': 3,
        'img_src': 'images/alfredopasta.png',
        'title': 'Xi Alfredo Pasta',
        'text': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        'title2': '19.99'
    },
]

let initialOffMenuItemList = [
    {
        'id': 4,
        'img_src': 'images/coke.jpg',
        'title': 'Xi Coke',
        'text': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        'title2': '19.99'
    },
    {
        'id': 5,
        'img_src': 'images/lemonade.jpg',
        'title': 'Xi Lemonade',
        'text': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        'title2': '19.99'
    },
    {
        'id': 6,
        'img_src': 'images/water.jpg',
        'title': 'Xi Water',
        'text': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        'title2': '19.99'
    },
    {
        'id': 7,
        'img_src': 'images/nuggets.jpg',
        'title': 'Xi Nuggets',
        'text': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        'title2': '19.99'
    },
]

let NEXT_ID = initialOnMenuItemList.length + initialOffMenuItemList.length
let SELECTED_ELEMENT = null

let onMenuItems = new OnMenuItems(initialOnMenuItemList)
let offMenuItems = new OffMenuItems(initialOffMenuItemList)

onMenuItems.setEventListeners()
offMenuItems.setEventListeners()

onMenuItems.buildOnMenuItems()
offMenuItems.buildOffMenuItems()

offMenuItems.addItem(NEXT_ID, 'images/nuggets.jpg', 'Xi Nuggets 5', 'test add func', '44.55')
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
