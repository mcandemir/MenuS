function createOnMenuItemElement(){
    // create a column cardboard on-menu-item
    let newElementCol = document.createElement('div');
    newElementCol.className = 'col';
    let newElementColCard = document.createElement('div');
    newElementColCard.className = 'card';
    let newElementColCardImg = document.createElement('img');
    newElementColCardImg.className = 'card-img-top';
    let newElementColCardBody = document.createElement('div');
    newElementColCardBody.className = 'card-body';
    let newElementColCardBodyTitle = document.createElement('h5');
    newElementColCardBodyTitle.className = 'card-title';
    let newElementColCardBodyText = document.createElement('p');
    newElementColCardBodyText.className = 'card-text';
    let newElementColCardBodyTitle2 = document.createElement('h6');
    newElementColCardBodyTitle2.className = 'card-title';

    newElementColCardBody.appendChild(newElementColCardBodyTitle);
    newElementColCardBody.appendChild(newElementColCardBodyText);
    newElementColCardBody.appendChild(newElementColCardBodyTitle2);

    newElementColCard.appendChild(newElementColCardImg);
    newElementColCard.appendChild(newElementColCardBody);
    
    newElementCol.appendChild(newElementColCard);

    return newElementCol;
}

function addOnMenuItem(){
    // get on-menu-items
    let onMenuItems = document.querySelector('.on-menu-items');

    // add a row if none exists
    if(onMenuItems.children.length == 0){
        let newElementRow = document.createElement('div');
        newElementRow.className='row';
        onMenuItems.appendChild(newElementRow);
    }

    // get the last row element
    let lastElementRow = onMenuItems.children[onMenuItems.children.length - 1];
    // console.log(lastElementRow);

    // get the last row element's columns
    let lastElementCols = lastElementRow.children;
    // console.log(lastElementCols);

    // if last row has 2 cols; create a new row and make it last row
    if(lastElementCols.length == 2){
        let newElementRow = document.createElement('div');
        newElementRow.className = 'row';
        onMenuItems.appendChild(newElementRow);
    }

    // get the new last row
    lastElementRow = onMenuItems.children[onMenuItems.children.length - 1];

    // create new element col
    // add the col to the last row
    lastElementRow.appendChild(createOnMenuItemElement());
}

function createOffMenuItemElement(){
    let newElementCard = document.createElement('div');
    newElementCard.className = 'card mb3';
    let newElementCardRow = document.createElement('div');
    newElementCardRow.className = 'row g-0';
    let newElementCardRowCol = document.createElement('div');
    newElementCardRowCol.className = 'col-md-4';
    let newElementCardRowColImg = document.createElement('img');
    newElementCardRowColImg.className = 'img-fluid rounded-start';
    let newElementCardRowCol2 = document.createElement('div');
    newElementCardRowCol2.className = 'col-md-8';
    let newElementCardRowCol2Body = document.createElement('div');
    newElementCardRowCol2Body.className = 'card-body';
    let newElementCardRowCol2BodyTitle = document.createElement('h5');
    newElementCardRowCol2BodyTitle.className = 'card-title';
    let newElementCardRowCol2BodyTitle2 = document.createElement('h6');
    newElementCardRowCol2BodyTitle2.className = 'card-title';

    newElementCardRowCol2Body.appendChild(newElementCardRowCol2BodyTitle);
    newElementCardRowCol2Body.appendChild(newElementCardRowCol2BodyTitle2);
    newElementCardRowCol2.appendChild(newElementCardRowCol2Body);

    newElementCardRowCol.appendChild(newElementCardRowColImg);
    
    newElementCardRow.appendChild(newElementCardRowCol);
    newElementCardRow.appendChild(newElementCardRowCol2);

    newElementCard.appendChild(newElementCardRow);





    return newElementCard
}

function addOffMenuItem(){
    // get off-menu-items
    let offMenuItems = document.querySelector('.off-menu-items');

    offMenuItems.appendChild(createOffMenuItemElement());

    console.log(offMenuItems.children);

}

addOnMenuItem()

addOffMenuItem()





// function attuneEventListeners(){
//     let leftItemList = document.querySelector('.menu-chosen-items-box');
//     let rightItemList = document.querySelector('.menu-items-box');
//     let items = document.querySelectorAll('.menu-list-item');

//     for (let item of items) {
//         item.addEventListener('dragstart', function(e){
//             let selectedItem = e.target;
            
//             while (selectedItem.tagName != 'LI'){
//                 selectedItem = selectedItem.parentElement;
//             }
    
//             console.log(selectedItem)
    
//             leftItemList.addEventListener('dragover', function(e){
//                 e.preventDefault();
//             });
//             leftItemList.addEventListener('drop', function(e){
//                 if (selectedItem != null){
//                     leftItemList.append(selectedItem);
//                 }
//                 selectedItem = null;
//             });
    
//             rightItemList.addEventListener('dragover', function(e){
//                 e.preventDefault();
//             });
//             rightItemList.addEventListener('drop', function(e){
//                 if (selectedItem != null){
//                     rightItemList.append(selectedItem);
//                 }
//                 selectedItem = null;
//             });
//         })
//     }
// }

// function addItemPopup(){
//     let popup = document.querySelector('.add-item-popup');
//     popup.classList.add('add-item-popup-open');
//     popup.classList.remove('add-item-popup-close');
// }

// function addItem(){
//     let name = document.getElementById('menu-name-input');
//     let price = document.getElementById('menu-price-input');
//     let img = document.getElementById('menu-image-input');

//     console.log(name.value, price.value)

//     let newItem = document.createElement('li');
//     newItem.classList.add('menu-list-item')
//     newItem.setAttribute('draggable', true)

//     let newItemDiv = document.createElement('div')
//     newItemDiv.classList.add('details')
    
//     let newItemSpanName = document.createElement('span')
//     newItemSpanName.textContent = name.value
//     newItemSpanName.classList.add('details-name')

//     newItemSpanPrice = document.createElement('span')
//     newItemSpanPrice.textContent = price.value + "₺"
//     newItemSpanPrice.classList.add('details-price')

//     let newItemImg = document.createElement('img');
//     newItemImg.classList.add('details-image')
//     newItemImg.src = URL.createObjectURL(img.files[0])
        
//     let newItemIcon = document.createElement('div')
//     newItemIcon.classList.add('i')
//     newItemIcon.classList.add('uil')
//     newItemIcon.classList.add('uil-draggabledots')

//     let newItemRemove = document.createElement('button')
//     newItemRemove.classList.add('remove')
//     newItemRemove.setAttribute('id', 'remove')
//     newItemRemove.setAttribute('onclick', 'removeItem(event)')
//     newItemRemove.textContent = 'X'


//     newItemDiv.appendChild(newItemImg)
//     newItemDiv.appendChild(newItemSpanName)
//     newItemDiv.appendChild(newItemSpanPrice)
//     newItemDiv.appendChild(newItemIcon)
//     newItemDiv.appendChild(newItemRemove)

    
//     newItem.appendChild(newItemDiv)
    
//     let rightItemList = document.querySelector('.menu-items-box');
//     rightItemList.append(newItem)

//     console.log(newItem)

//     let popup = document.querySelector('.add-item-popup');
//     popup.classList.remove('add-item-popup-open');
//     popup.classList.add('add-item-popup-close');

//     attuneEventListeners()
// }

// function removeItem(e){
//     selectedItem = e.target
//     grandParent = selectedItem.parentElement.parentElement
//     grandParent.remove()
// }

// function getFile() {
//     document.getElementById("upfile").click();
// }
  
// function sub(obj) {
//     var file = obj.value;
//     var fileName = file.split("\\");
//     document.getElementById("menu-image-input").innerHTML = fileName[fileName.length - 1];
//     document.myForm.submit();
//     e.preventDefault();
// }

// function attuneListByTopic(){
//     let items = document.querySelectorAll('.menu-list-item');
//     let selectedTopic = document.getElementById('topics');

//     for (let i = 0; i < items.length; i++) {
//         if(items[i].classList.contains(selectedTopic.value) || selectedTopic.value == 'all'){
//             if(items[i].classList.contains('hide-by-topic')){
//                 items[i].classList.remove('hide-by-topic')
//             }
//             continue
//         }
//         items[i].classList.add('hide-by-topic')
//     }
// }

// attuneEventListeners()

// // document.addEventListener('click', function(e) {
// //     e = e || window.event;
// //     var target = e.target
// //     console.log(target)
// // }, false);