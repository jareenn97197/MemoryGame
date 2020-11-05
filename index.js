document.addEventListener('DOMContentLoaded',()=>{

    function shuffleArray(array) {
        for (var i = array.length - 1; i > 0; i--) {
            var j = Math.floor(Math.random() * (i + 1));
            var temp = array[i];
            array[i] = array[j];
            array[j] = temp;
        }
    }
    
  
    const cardArray=[

            {
                name:'fries',
                img:'./images/fries.png'
            },
            
            {
                name:'fries',
                img:'./images/fries.png'
            },

            
            {
                name:'cheeseburger',
                img:'./images/cheeseburger.png'
            },

            {
                name:'cheeseburger',
                img:'./images/cheeseburger.png'
            },

               
            {
                name:'hotdog',
                img:'./images/hotdog.png'
            },
               
            {
                name:'hotdog',
                img:'./images/hotdog.png'
            },
               
            {
                name:'ice-cream',
                img:'./images/ice-cream.png'
            },   
            {
                name:'ice-cream',
                img:'./images/ice-cream.png'
            },
            {
                name:'milkshake',
                img:'./images/milkshake.png'
            },
            {
                name:'milkshake',
                img:'./images/milkshake.png'
            },
            {
                name:'pizza',
                img:'./images/pizza.png'
            },
            {
                name:'pizza',
                img:'./images/pizza.png'
            }

    ]

shuffleArray(cardArray);
const grid=document.querySelector('.grid');
let cardChosen=[]
let cardId=[]
let cardMatches=[]
let result=document.querySelector('#result')
result.textContent=0;

let st =new Set();


function createOne(){
    let allImages = document.querySelectorAll('img');
    for(let i=0;i<allImages.length;i++){
        allImages[i].setAttribute('src','./images/blank.png');
    }
}

function createBoard(){                   // function created to make a board with the reapeated images

        for(let i =0;i<cardArray.length;i++){
            let card = document.createElement('img')
            card.setAttribute('src',cardArray[i].img)
            card.setAttribute('data-id',i)
            card.addEventListener('click',flipcard)
            grid.appendChild(card);

        }
        setTimeout(createOne,1000)
       


}

createBoard();

function checkForMatch(){                //check for match function checks if two cards matches with each other
    let allImages = document.querySelectorAll('img');

    if(cardChosen[0]===cardChosen[1]){
        allImages[cardId[0]].setAttribute('src','./Images/white.png');
        allImages[cardId[1]].setAttribute('src','./Images/white.png');
        cardMatches.push(1);
        st.add(cardId[0]);
        st.add(cardId[1]);
        alert("Hurray! you found a match");
        result.textContent=cardMatches.length;

    }
    else{
        allImages[cardId[0]].setAttribute('src','./Images/blank.png');
        allImages[cardId[1]].setAttribute('src','./Images/blank.png');
        st.delete(cardId[0]);
        st.delete(cardId[1]);
     
        alert("sorry better luck next time ");
    }

    if(cardMatches.length==cardArray.length/2){
        alert("You found all the matches. play again by refreshing the tab ");
        for(let i=0;i<allImages.length;i++){
            allImages[i].setAttribute('src','./Images/blank.png');
        }
        shuffleArray(cardArray);
       st =new Set();
       result.textContent=0;
    }

    cardId=[];
    cardChosen=[];
    

}

function flipcard(){                // Creating a function when a user click on some card

    
    let id=this.getAttribute('data-id');
    console.log(st);
    if(st.has(id)){
        alert('dont click on white spaces')
        return;
    }
    if(id==cardId[0]){
        alert("Same card chosen Not allowed");
        return;
    }
    
    let name = cardArray[id].name;
    
    cardChosen.push(name);
    cardId.push(id);
    
    this.setAttribute('src',cardArray[id].img);

 

    if(cardChosen.length==2){
        setTimeout(checkForMatch,500);
        
    }


}


});

