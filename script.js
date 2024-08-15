let boxs=document.querySelectorAll("td")
let completionCordList=[];
let lastSelection;
boxs.forEach((item,idx)=>{
    item.addEventListener('click',()=>{
        let currentSelection=item
        if(!lastSelection){
            lastSelection=item
        }
        item.style.backgroundColor="orange"

        // initial section when no item is matched
        if(lastSelection.innerText === currentSelection.innerText && lastSelection.id !== currentSelection.id){
            console.log("Matched", lastSelection)
            completionCordList.push(currentSelection)
            lastSelection.style.backgroundColor="gray"
            currentSelection.style.backgroundColor="gray"
        }

        console.log(lastSelection,currentSelection)
        
        
        
        if(lastSelection){
            lastSelection=item;
        }
    })
})