const input = document.querySelector("input");
const button = document.querySelector("button");
const list = document.querySelector("ul");


button.addEventListener("click", function() {
    
    const myli = document.createElement('li');
    const mybutton = document.createElement('button');
    
    const myitem = input.value;
    
    if (myitem !== "" ){
        input.value = '';
        myli.textContent = myitem;
        mybutton.textContent = "X";
        myli.appendChild(mybutton);
        list.appendChild(myli);
        mybutton.addEventListener('click', ()=>{
            return myli.remove();
        })
    }
    
input.focus()

})

