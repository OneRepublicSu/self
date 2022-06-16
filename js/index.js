var clickbtn = document.getElementById('chro');
var list = document.getElementById('list');
var hua03 = document.getElementById('hua03');

var isopen = false;

clickbtn.addEventListener('click',function()
{
    isopen = !isopen;
    if(isopen)
    {
        list.style.display = 'block';
        hua03.style.opacity = '0';
        clickbtn.style.color='#4f553c';
        clickbtn02.style.color='transparent';
        clickbtn03.style.color='transparent';
        clickbtn04.style.color='transparent';
        clickbtn05.style.color='transparent';
    }
    else 
    {
        list.style.display = 'none';
        hua03.style.opacity = '1';
        clickbtn.style.color='white';
        clickbtn02.style.color='white';
        clickbtn03.style.color='white';
        clickbtn04.style.color='white';
        clickbtn05.style.color='white';

    }
})


var clickbtn02 = document.getElementById('kale');
var list02 = document.getElementById('listka');
var hua03 = document.getElementById('hua03');

var isopen = false;

clickbtn02.addEventListener('click',function()
{
    isopen = !isopen;
    if(isopen)
    {
        list02.style.display = 'block';
        hua03.style.opacity = '0';
        clickbtn02.style.color='#4f553c'
        clickbtn.style.color='transparent';
        clickbtn03.style.color='transparent';
        clickbtn04.style.color='transparent';
        clickbtn05.style.color='transparent';
    }
    else 
    {
        list02.style.display = 'none';
        hua03.style.opacity = '1';
        clickbtn02.style.color='white'
        clickbtn.style.color='white';
        clickbtn03.style.color='white';
        clickbtn04.style.color='white';
        clickbtn05.style.color='white';
    }
})

var clickbtn03 = document.getElementById('tec');
var list03 = document.getElementById('listte');
var hua03 = document.getElementById('hua03');

var isopen = false;

clickbtn03.addEventListener('click',function()
{
    isopen = !isopen;
    if(isopen)
    {
        list03.style.display = 'block';
        hua03.style.opacity = '0';
        clickbtn03.style.color='#4f553c'
        clickbtn.style.color='transparent';
        clickbtn02.style.color='transparent';
        clickbtn04.style.color='transparent';
        clickbtn05.style.color='transparent';
    }
    else 
    {
        list03.style.display = 'none';
        hua03.style.opacity = '1';
        clickbtn03.style.color='white'
        clickbtn.style.color='white';
        clickbtn02.style.color='white';
        clickbtn04.style.color='white';
        clickbtn05.style.color='white';
    }
})

var clickbtn04 = document.getElementById('docu');
var list04 = document.getElementById('listdocu');
var hua03 = document.getElementById('hua03');

var isopen = false;

clickbtn04.addEventListener('click',function()
{
    isopen = !isopen;
    if(isopen)
    {
        list04.style.display = 'block';
        hua03.style.opacity = '0';
        clickbtn04.style.color='#4f553c'
        clickbtn.style.color='transparent';
        clickbtn02.style.color='transparent';
        clickbtn03.style.color='transparent';
        clickbtn05.style.color='transparent';
    }
    else 
    {
        list04.style.display = 'none';
        hua03.style.opacity = '1';
        clickbtn04.style.color='white'
        clickbtn.style.color='white';
        clickbtn02.style.color='white';
        clickbtn03.style.color='white';
        clickbtn05.style.color='white';
    }
})

var clickbtn05 = document.getElementById('pho');
var list05 = document.getElementById('listpho');
var hua03 = document.getElementById('hua03');

var isopen = false;

clickbtn05.addEventListener('click',function()
{
    isopen = !isopen;
    if(isopen)
    {
        list05.style.display = 'block';
        hua03.style.opacity = '0';
        clickbtn05.style.color='#4f553c'
        clickbtn.style.color='transparent';
        clickbtn02.style.color='transparent';
        clickbtn03.style.color='transparent';
        clickbtn04.style.color='transparent';
    }
    else 
    {
        list05.style.display = 'none';
        hua03.style.opacity = '1';
        clickbtn05.style.color='white'
        clickbtn.style.color='white';
        clickbtn02.style.color='white';
        clickbtn03.style.color='white';
        clickbtn04.style.color='white';
    }
})