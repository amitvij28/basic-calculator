let screen = []
//update screen
const updatescreen = ()=>{
    let s =''
    screen.forEach(element => {
        s+= element.toString()
    });
    document.getElementById('screen').value =s 
}

//add to screen
const addtoscreen = val =>{
    val=val.toString()
    if(!isNaN(parseInt(val)) && !isNaN(parseInt(screen[screen.length-1]))){
        screen[screen.length-1] += val 
        updatescreen()
    }else if(isNaN(screen[screen.length-1]) && isNaN(parseInt(val))){
        
    }else{
        screen.push(val)
        updatescreen()  
    }
    

}
//clear
const clr = ()=>{
    screen.length=0
    updatescreen()
}


//calculate 
const calculate = ()=>{
    valstack=[]
    opstack=[]
    operators = ['/','*','+','-']
    screen.forEach(element=>{
        if(!isNaN(parseInt(element)))
            valstack.push(parseInt(element))
        else{
            if(opstack.length!=0 && operators.indexOf(opstack[opstack.length-1])<operators.indexOf(element) ){
                val1 = valstack.pop()
                val2=valstack.pop()
                op = opstack.pop()
                if(op == '+')
                    valstack.push(val1+val2)
                if(op=='-')
                    valstack.push(val2-val1)
                if(op=='/')
                    valstack.push(val2/val1)
                if(op=='*')
                    valstack.push(val2*val1)
            }
            opstack.push(element)
        }
        
    })
    while(opstack.length!=0){
        val1 = valstack.pop()
        val2=valstack.pop()
        op = opstack.pop()
        if(op == '+')
            valstack.push(val1+val2)
        if(op=='-')
            valstack.push(val2-val1)
        if(op=='/')
            valstack.push(val2/val1)
        if(op=='*')
            valstack.push(val2*val1)
    }
    if (valstack.length>0){
    result = valstack.pop()
    screen.length = 0
    screen.push(result)
    updatescreen()}
}