// let heading = document.querySelector('#a1')
// let block = document.querySelector('.block')
// let block_1 = document.querySelector('.block_1')
// let block_2 = document.querySelector('.block_2')
// let block_3 = document.querySelector('.block_3')
// let blockLi = document.querySelector('#blockLi')
// let block_1Li = document.querySelector('#block_1Li')
// let block_2Li = document.querySelector('#block_2Li')
// let block_3Li = document.querySelector('#block_3Li')
// let progressBar=document.querySelector('#progressBar')

// console.log(block.style.width)
// console.log(window.getComputedStyle(block).width)



// console.log('ширина внутренних рамок блока',block.clientWidth)
// console.log('высота внутренних рамок блока',block.clientHeight)
// console.log('толщина рамки сверху',block.clientTop)
// console.log('толщина рамки слева',block.clientLeft)


// console.log('ширина внешних рамок блока',block.offsetWidth)
// console.log('высота внешних рамок блока',block.offsetHeight)
// console.log('отступ от верхнего края документа',block.offsetTop)
// console.log('отступ от левого края документа',block.offsetLeft)

// console.log('размер прокрученной части контента блока по вертикали',document.documentElement.scrollTop)
// console.log('размер прокрученной части контента блока по горизонтали',document.documentElement.scrollLeft)
// console.log('высота блока с учетом прокрутки',document.documentElement.scrollHeight)
// console.log('ширина блока с учетом прокрутки',document.documentElement.scrollWidth)

// window.addEventListener('scroll',function(){

//     if(block.offsetTop <= document.documentElement.scrollTop + document.documentElement.clientHeight &&
//      block.offsetTop + block.offsetHeight >= document.documentElement.scrollTop){
//         console.log('Блок виден');
//     }
// })

// window.addEventListener('scroll',function(){

//     if(block.offsetTop <= document.documentElement.scrollTop + document.documentElement.clientHeight &&
//      block.offsetTop + block.offsetHeight >= document.documentElement.scrollTop){
//         console.log('Блок виден');
//     	blockLi.style.backgroundColor='red';
//     	block_1Li.style.backgroundColor='transparent';
//     	block_2Li.style.backgroundColor='transparent';
//     	block_3Li.style.backgroundColor='transparent';
//     }
//     if(block_1.offsetTop <= document.documentElement.scrollTop + document.documentElement.clientHeight &&
//      block_1.offsetTop + block_1.offsetHeight >= document.documentElement.scrollTop){
//         console.log('Блок виден');
//     	block_1Li.style.backgroundColor='red';
//     	blockLi.style.backgroundColor='transparent';
//     	block_2Li.style.backgroundColor='transparent';
//     	block_3Li.style.backgroundColor='transparent';
//     }
//     if(block_2.offsetTop <= document.documentElement.scrollTop + document.documentElement.clientHeight &&
//      block_2.offsetTop + block_2.offsetHeight >= document.documentElement.scrollTop){
//         console.log('Блок виден');
//     	block_2Li.style.backgroundColor='red';
//     	block_1Li.style.backgroundColor='transparent';
//     	blockLi.style.backgroundColor='transparent';
//     	block_3Li.style.backgroundColor='transparent';
//     }
//     if(block_3.offsetTop <= document.documentElement.scrollTop + document.documentElement.clientHeight &&
//      block_3.offsetTop + block_3.offsetHeight >= document.documentElement.scrollTop){
//         console.log('Блок виден');
//     	block_3Li.style.backgroundColor='red';
//     	block_1Li.style.backgroundColor='transparent';
//     	block_2Li.style.backgroundColor='transparent';
//     	blockLi.style.backgroundColor='transparent';
//     }
// })

// window.addEventListener('scroll',function(){
// 	let a=document.documentElement.scrollTop;
// 	let b=document.documentElement.scrollHeight-document.documentElement.clientHeight;
// 	let c=a/b*100;
// 	progressBar.style.width=c+"%";
// })


// blockLi.addEventListener('click',()=>{
// 	let a=document.documentElement.clientHeight;
// 	let b=a-block.offsetHeight;
// 	let c=b/2;
// 	document.documentElement.scrollTop=block.offsetTop+c;
// })
// block_1Li.addEventListener('click',()=>{
// 	let a=document.documentElement.clientHeight;
// 	let b=a-block_1.offsetHeight;
// 	let c=b/2;
// 	document.documentElement.scrollTop=block_1.offsetTop+c;
// })
// block_2Li.addEventListener('click',()=>{
// 	let a=document.documentElement.clientHeight;
// 	let b=a-block_2.offsetHeight;
// 	let c=b/2;
// 	document.documentElement.scrollTop=block_2.offsetTop+c;
// })
// block_3Li.addEventListener('click',()=>{
// 	let a=document.documentElement.clientHeight;
// 	let b=a-block_3.offsetHeight;
// 	let c=b/2;
// 	document.documentElement.scrollTop=block_3.offsetTop+c;
// })






let containerPromo = document.querySelector('#containerPromo')
let about = document.querySelector('.about')
let service = document.querySelector('.service')
let works = document.querySelector('.works')
let blog = document.querySelector('.blog')
let contact = document.querySelector('.contact')

let LiHome = document.querySelector('#nav_item_Home')
let LiAbout = document.querySelector('#nav_item_About')
let LiServicing = document.querySelector('#nav_item_Servicing')
let LiPortfolio = document.querySelector('#nav_item_Portfolio')
let LiBlog = document.querySelector('#nav_item_Blog')
let LiContact = document.querySelector('#nav_item_Contact')

window.addEventListener('scroll',function(){

    if(containerPromo.offsetTop <= document.documentElement.scrollTop + document.documentElement.clientHeight &&
     containerPromo.offsetTop + containerPromo.offsetHeight >= document.documentElement.scrollTop){
        
        LiHome.style.backgroundColor='#90ee90';
        LiAbout.style.backgroundColor='transparent';
        LiServicing.style.backgroundColor='transparent';
        LiPortfolio.style.backgroundColor='transparent';
        LiBlog.style.backgroundColor='transparent';
        LiContact.style.backgroundColor='transparent';
    }
    if(about.offsetTop <= document.documentElement.scrollTop + document.documentElement.clientHeight &&
     about.offsetTop + about.offsetHeight >= document.documentElement.scrollTop){
        
        LiHome.style.backgroundColor='transparent';
        LiAbout.style.backgroundColor='#90ee90';
        LiServicing.style.backgroundColor='transparent';
        LiPortfolio.style.backgroundColor='transparent';
        LiBlog.style.backgroundColor='transparent';
        LiContact.style.backgroundColor='transparent';
    }
    if(service.offsetTop <= document.documentElement.scrollTop + document.documentElement.clientHeight &&
     service.offsetTop + service.offsetHeight >= document.documentElement.scrollTop){
        
        LiHome.style.backgroundColor='transparent';
        LiAbout.style.backgroundColor='transparent';
        LiServicing.style.backgroundColor='#90ee90';
        LiPortfolio.style.backgroundColor='transparent';
        LiBlog.style.backgroundColor='transparent';
        LiContact.style.backgroundColor='transparent';
    }
    if(works.offsetTop <= document.documentElement.scrollTop + document.documentElement.clientHeight &&
     works.offsetTop + works.offsetHeight >= document.documentElement.scrollTop){
        
        LiHome.style.backgroundColor='transparent';
        LiAbout.style.backgroundColor='transparent';
        LiServicing.style.backgroundColor='transparent';
        LiPortfolio.style.backgroundColor='#90ee90';
        LiBlog.style.backgroundColor='transparent';
        LiContact.style.backgroundColor='transparent';
    }
    if(blog.offsetTop <= document.documentElement.scrollTop + document.documentElement.clientHeight &&
     blog.offsetTop + blog.offsetHeight >= document.documentElement.scrollTop){
        
        LiHome.style.backgroundColor='transparent';
        LiAbout.style.backgroundColor='transparent';
        LiServicing.style.backgroundColor='transparent';
        LiPortfolio.style.backgroundColor='transparent';
        LiBlog.style.backgroundColor='#90ee90';
        LiContact.style.backgroundColor='transparent';
    }
    if(contact.offsetTop <= document.documentElement.scrollTop + document.documentElement.clientHeight &&
     contact.offsetTop + contact.offsetHeight >= document.documentElement.scrollTop){
        
        LiHome.style.backgroundColor='transparent';
        LiAbout.style.backgroundColor='transparent';
        LiServicing.style.backgroundColor='transparent';
        LiPortfolio.style.backgroundColor='transparent';
        LiBlog.style.backgroundColor='transparent';
        LiContact.style.backgroundColor='#90ee90';
    }
})

LiContact.addEventListener('click',function (){
    contact.scrollIntoView(true);
})

LiBlog.addEventListener('click',()=>{
    document.documentElement.scrollHeight=blog.scrollIntoView(top);
})

// let progressBar=document.querySelector('#progressBar')

// window.addEventListener('scroll',function(){
//  let a=document.documentElement.scrollTop;
//  let b=document.documentElement.scrollHeight-document.documentElement.clientHeight;
//  let c=a/b*100;
//  progressBar.style.width=c+"%";
// })