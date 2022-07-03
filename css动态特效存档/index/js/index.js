
// 首行文字逐渐出现
let landInTexts = document.querySelectorAll(".landIn");
landInTexts.forEach(landInText => {
    let letters = landInText.textContent.split("");
    landInText.textContent = "";
    letters.forEach((letter, i) => {
        let span = document.createElement("span");
        span.textContent = letter;
        span.style.animationDelay = `${i * 0.05}s`;
        landInText.append(span);
    });
});

// 鼠标追随
document.querySelector('.button').onmousemove = (e) => {
    const x = e.pageX - e.target.offsetLeft
    const y = e.pageY - e.target.offsetTop
    e.target.style.setProperty('--x', `${x}px`)
    e.target.style.setProperty('--y', `${y}px`)
}

// 轮播图
const sliderData = [
    { url: 'url(./index/img/ver2.0/banner-01.jpg)  center/cover ', title: '"天下万物的来和去，都有他的时间。"', color: 'rgb(100, 67, 68)' },
    { url: 'url(./index/img/ver2.0/banner-02.jpg)  center/cover ', title: '"少年与爱永不老去，即便披荆斩棘，丢失怒马鲜衣。"', color: 'rgb(43, 35, 26)' },
    { url: 'url(./index/img/ver2.0/banner-03.jpg)  center/cover ', title: '"如果爱一个人，不能只爱他的夏天。"', color: 'rgb(36, 31, 33)' },
    { url: 'url(./index/img/ver2.0/banner-04.jpg)  center/cover ', title: '"早晨是一只花鹿，踩到我额上。"', color: 'rgb(139, 98, 66)' },
    { url: 'url(./index/img/ver2.0/banner-05.jpg)  center/cover ', title: '"大海深处有一家便利店，售卖着蓝色的孤独。"', color: 'rgb(67, 90, 92)' },
]

const img = document.querySelector('.banner')
const lis = document.querySelectorAll('.indicator li')
const cont = document.querySelector('#describe span')
const rightbtn = document.querySelector('#rightbtn')
const leftbtn = document.querySelector('#leftbtn')
const bannerBox =document.querySelector('.banner-box')
let i = 0

function rander(i) {
    img.style.background = sliderData[i].url
    document.querySelector('.indicator li.active').classList.remove('active')
    lis[i].classList.add('active')
    cont.innerHTML = sliderData[i].title
}

// 开启定时器
let id = setInterval(function () {
    rightbtn.click()
}, 2500)

// 向右的箭头
rightbtn.addEventListener('click', function () {
    i++
    if (i > sliderData.length - 1) {
        i = 0
    }
    rander(i)
})

//向左的箭头
leftbtn.addEventListener('click', function () {
    i--
    if (i < 0) {
        i = sliderData.length - 1
    }
    rander(i)
})

// 指示器
function getChange(j){
    lis[j].addEventListener('click',function(){
        rander(j)
        // 被赋予的值需要放在后面
        i =  j      
    })
}

for(j=0 ; j<sliderData.length ; j++){
    getChange(j)
}

// 悬停
bannerBox.addEventListener('mouseenter',function(){
    clearInterval(id)
})
bannerBox.addEventListener('mouseleave',function(){
    id = setInterval(function () {
        rightbtn.click()
    }, 2500)
})


// 全选复选
const checkedAll = document.querySelector('#checkedAll')
const checkedLists = document.querySelectorAll('.checkedList')


checkedAll.addEventListener('click', function(){
     checkedLists[0].checked =checkedAll.checked 
     checkedLists[1].checked =checkedAll.checked 
})

for(let m = 0 ; m <2 ; m++){
    checkedLists[m].addEventListener('click',function(){
        const checkedListLength = document.querySelectorAll('.checkedList:checked').length
        // 被赋予的值需要放在后面
        checkedAll.checked = checkedListLength === checkedLists.length
    })
}


// 手风琴
const accordion = document.querySelector('#accordion')
const accs = document.querySelectorAll('#accordion li')

for(let q = 0 ; q < accs.length ; q++){
    accs[q].addEventListener('mouseenter',function(){
        for(let b = 0 ; b < accs.length ; b++){
            accs[b].style.width = '100px'
        }
        accs[q].style.width = '700px'
    })
    accs[q].addEventListener('mouseleave',function(){
        for(let b = 0 ; b < accs.length ; b++){
            accs[b].style.width = '250px'
        }
    })
}

// 顶栏

const nav = document.querySelector('#nav')
const ttop = document.querySelector('.top')
const closed = document.querySelector('#closed')


nav.addEventListener('click',function(e){
    ttop.style.top = 0
    e.preventDefault()

})

closed.addEventListener('click',function(e){
    ttop.style.top = '-200px'
    const n = document.querySelector('.top ul li.active')
    n && n.classList.remove('active')
    e.preventDefault()

})

const lism = document.querySelector('.top ul')
lism.addEventListener('click',function(e){
    const n = document.querySelector('.top ul li.active')
    n && n.classList.remove('active')
    if(e.target.tagName === 'LI'){
        e.target.classList.add('active')
        const rname = e.target.dataset.name
        const rtop = document.querySelector(`.${rname}`).offsetTop
        document.documentElement.scrollTop = rtop - 220
    }

})

