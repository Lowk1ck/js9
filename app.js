let items = document.querySelectorAll('body')
let pan = document.querySelectorAll('.bigbox')
let parr = document.querySelectorAll('.pain')
let butt = document.querySelectorAll('.cell')
let butt2 = document.querySelectorAll('.cell2')
let butt3 = document.querySelectorAll('.cell3')
let butt4 = document.querySelectorAll('.cell4')
let butt5 = document.querySelectorAll('.cell5')

for(let i = 0; i < butt.length; i++) {
    butt[i].addEventListener('click', () => {
        items[i].style.background = 'red'
        parr[i].style.background = 'white'
    })
    for(let i = 0; i < butt2.length; i++) {
        butt2[i].addEventListener('click', () => {
            items[i].style.background = 'orange'
            parr[i].style.background = 'white'
        })
        for(let i = 0; i < butt3.length; i++) {
            butt3[i].addEventListener('click', () => {
                items[i].style.background = 'blue'
                parr[i].style.background = 'white'
            })
            for(let i = 0; i < butt4.length; i++) {
                butt4[i].addEventListener('click', () => {
                    items[i].style.background = 'black'  
                    parr[i].style.background = 'white'   
                })
                for(let i = 0; i < butt5.length; i++) {
                    butt5[i].addEventListener('click', () => {
                        items[i].style.background = 'white'
                    })
                }
            
        }
    }
}
}