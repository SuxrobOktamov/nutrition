
let newArr = [
    {
        dessert: 'Frozen yoghurt',
        calories: 159,
        fat: 6,
        carbs:24,
        protein: 4,
        id:1
    },
    {
        dessert: 'Ice cream sandwich',
        calories: 237,
        fat: 9,
        carbs:37,
        protein: 4.3,
        id:2
    },
    {
        dessert: 'Eclair',
        calories: 262,
        fat: 16,
        carbs:24,
        protein: 6,
        id:3
    },
    {
        dessert: 'Cupcake',
        calories: 305,
        fat: 3.7,
        carbs:67,
        protein: 4.3,
        id:4
    },
    {
        dessert: 'Book',
        calories: 318,
        fat: 12,
        carbs:81,
        protein: 2,
        id:5
    },
    {
        dessert: 'Pencil',
        calories: 318,
        fat: 1,
        carbs:81,
        protein: 2,
        id:6
    },
    {
        dessert: 'Pen',
        calories: 318,
        fat: 2,
        carbs:81,
        protein: 2,
        id:7
    },
    {
        dessert: 'Notebook',
        calories: 318,
        fat: 3,
        carbs:81,
        protein: 2,
        id:8
    },
    {
        dessert: 'Article',
        calories: 318,
        fat: 4,
        carbs:81,
        protein: 2,
        id:9
    },
    {
        dessert: 'Newspaper',
        calories: 318,
        fat: 5,
        carbs:81,
        protein: 2,
        id:10
    },
    {
        dessert: 'Laptok',
        calories: 318,
        fat: 6,
        carbs:81,
        protein: 2,
        id:11
    },
    {
        dessert: 'Mouse',
        calories: 318,
        fat: 7,
        carbs:81,
        protein: 2,
        id:12
    },
    {
        dessert: 'Press',
        calories: 318,
        fat: 8,
        carbs:81,
        protein: 2,
        id:13
    }
];

let tbody = document.querySelector('tbody');

newArr.forEach((item)=>{
    let tr = document.createElement('tr');
    tr.innerHTML = ` 
    <td class="start type">
    <span class="material-symbols-outlined">check_box</span>
    <span class="material-symbols-outlined">check_box_outline_blank</span>${item.dessert}
    </td>
    <td>${item.calories}</td>
    <td>${item.fat}</td>
    <td>${item.carbs}</td>
    <td>${item.protein}</td>
    `;

    tbody.appendChild(tr);
});


let title = document.querySelectorAll('tbody tr');
let check = document.querySelector('#check');
let menuList = document.querySelector('.menu');
let menu1 = document.querySelector('#menu1');

let select = document.querySelector('#span');

check.addEventListener('click', (e)=>{
   if(!e.target.classList.contains('checked') && e.target.classList.contains('start')){
        e.target.classList.add('checked');
        menuList.classList.add('active');
        
        title.forEach(item=>{
            item.classList.add('check');
        })
        let allArr = Array.from(title).filter((item)=>item.classList.contains('check'));
        select.innerHTML = allArr.length;
    }else{
        e.target.classList.remove('checked');
        menuList.classList.remove('active');
        
        title.forEach(item=>{
            item.classList.remove('check'); 
        });  
    }
})

title.forEach((item)=>{
    item.addEventListener('click',()=>{
        if(!item.classList.contains('check')){
            item.classList.add('check');
            check.classList.add('checked');
            menuList.classList.add('active');
        }else{
            item.classList.remove('check');
           
        }
        let allArr = Array.from(title).filter((item)=>item.classList.contains('check'));
        select.innerHTML = allArr.length;
        if( allArr.length == 0 ){
            check.classList.remove('checked');
            menuList.classList.remove('active');
        }
    })
})


menu1.addEventListener('click',()=>{
    check.classList.remove('checked');
    menuList.classList.remove('active');
    let topArr = [];
    topArr = Array.from(title).filter((item)=> !item.classList.contains('check'));
    tbody.innerHTML = '';
    topArr.forEach((item)=>{
        tbody.appendChild(item);
    });
})

let selected =  document.querySelector('select');
let left = document.querySelector('#left');
let right = document.querySelector('#right');
let rate = document.querySelector('#rate');
let rate1 = document.querySelector('#rate1');


selected.addEventListener('change',(e)=>{
    if( e.target.value == 5 ){
        rate.innerHTML = 1;
        rate1.innerHTML = 5;
        left.style.opacity = 0.6;
        right.style.opacity = 1;
        Array.from(title).forEach((item)=>{
            item.style.transform = 'translateY(0)';
        })
    }else if( e.target.value == 10){
        rate.innerHTML = 5;
        rate1.innerHTML = 10;
        left.style.opacity = 1;
        right.style.opacity = 1;
        Array.from(title).forEach((item)=>{
            item.style.transform = 'translateY(-500%)';
        })
    }else if( e.target.value == 15){
        rate.innerHTML = 10;
        rate1.innerHTML = 13;
        left.style.opacity = 1;
        right.style.opacity = 0.6;
        Array.from(title).forEach((item)=>{
            item.style.transform = 'translateY(-800%)';
        })
    }
});

left.addEventListener('click',()=>{
     if(selected.value == 10){
        rate.innerHTML = 1;
        rate1.innerHTML = 5;
        left.style.opacity = 0.6;
        right.style.opacity = 1;
        Array.from(title).forEach((item)=>{
            item.style.transform = 'translateY(0)';
            selected.value = 5
        })
    }else if(selected.value == 15){
        rate.innerHTML = 5;
        rate1.innerHTML = 10;
        left.style.opacity = 1;
        right.style.opacity = 1;
        Array.from(title).forEach((item)=>{
            item.style.transform = 'translateY(-500%)';
            selected.value = 10
        })
    }
})

right.addEventListener('click',()=>{
    if(selected.value == 5){
        rate.innerHTML = 5;
        rate1.innerHTML = 10;
        left.style.opacity = 1;
        right.style.opacity = 1;
        Array.from(title).forEach((item)=>{
            item.style.transform = 'translateY(-500%)';
        })
        selected.value = 10;
    }else if(selected.value == 10){
        rate.innerHTML = 10;
        rate1.innerHTML = 13;
        left.style.opacity = 1;
        right.style.opacity = 0.6;
        Array.from(title).forEach((item)=>{
            item.style.transform = 'translateY(-800%)';
            selected.value = 15;
        })
    }
})










































