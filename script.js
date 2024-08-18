let boxs=document.querySelectorAll("th")
let completionCordList=[];
let lastSelection;
let selectedListMaxTwo=[]; 


const setEffect=([...items], color, fontSize)=>{
    items.forEach((element, idx)=>{
        element.style.backgroundColor=color
        element.style.fontSize=fontSize
    })
}

const checkValid=()=>{
    console.log(selectedListMaxTwo)
    if(selectedListMaxTwo[0].innerText === selectedListMaxTwo[1].innerText && selectedListMaxTwo[0].id !== selectedListMaxTwo[1].id){
        setEffect(selectedListMaxTwo, "gray", "50px")
    }
    selectedListMaxTwo=[];
}

boxs.forEach((item,idx)=>{
    item.addEventListener('click',()=>{
        selectedListMaxTwo.push(item)

        setEffect([item], "pink", "50px")
        setTimeout(()=>{
            if(selectedListMaxTwo.length===2){
                // reset the initial pink background to transparent.
                setEffect(selectedListMaxTwo, "transparent", "0px")
                checkValid()
            }
        }, 500)
    })
})