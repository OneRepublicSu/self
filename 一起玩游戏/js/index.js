// 输入输出
const one = document.querySelector('#one')
const two = document.querySelector('#two')

const result = document.querySelector('#result')
const items = document.querySelectorAll('.item')
// 符号
const add = document.querySelector('#add')
const jian = document.querySelector('#jian')
const cheng = document.querySelector('#cheng')
const chu = document.querySelector('#chu')
const AC = document.querySelector('#AC')

let arrNumber = []

function concat(str1, str2) {
    return `${str1}${str2}`
}

// 0-9的事件绑定
for (let r = 0; r < items.length; r++) {
    items[r].addEventListener('click', function () {
        arrNumber.push(r)
        m = arrNumber.reduce(concat)
        one.innerHTML = m
    })
}

// 加减乘除事件绑定
add.addEventListener('click', function () {
    arrNumber.push(' + ')
    m = arrNumber.reduce(concat)
    one.innerHTML = m
})
jian.addEventListener('click', function () {
    arrNumber.push(' - ')
    m = arrNumber.reduce(concat)
    one.innerHTML = m
})
cheng.addEventListener('click', function () {
    arrNumber.push(' * ')
    m = arrNumber.reduce(concat)
    one.innerHTML = m
})
chu.addEventListener('click', function () {
    arrNumber.push(' / ')
    m = arrNumber.reduce(concat)
    one.innerHTML = m
})
AC.addEventListener('click', function () {
    one.innerHTML = ''
    two.innerHTML = ''
    arrNumber = []
})

// 等号的点击事件
result.addEventListener('click', function () {
    let n = m.split(' ')
    let str = 0
    // 乘除先处理
    for (let o = 0; o < n.length; o++) {
        if (n[o] === '*') {
            n[o - 1] = Number(n[o - 1]) * Number(n[o + 1])
            n.splice(o, 2)
            o--

        } else if (n[o] === '/') {
            n[o - 1] = Number(n[o - 1]) / Number(n[o + 1])
            n.splice(o, 2)
            o--
        } else {
            continue
        }
    }
    // 加减后处理
    for (let q = 0; q < n.length; q++) {
        if (q === 0) {
            str = Number(n[q]) + str
        } else {
            if (n[q] === '-') {
                str = str - Number(n[q + 1])

            } else if (n[q] === '+') {
                str = str + Number(n[q + 1])
            } else {
                continue
            }
        }
    }
    two.innerHTML =`=${str}`

})



