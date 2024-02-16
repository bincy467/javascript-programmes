function longest(str){ 
 
    str = str.split(" ") 

    return str.sort((a, b) => b.length - a.length)[0] 
    } 
    console.log(longest("welcome to the javascript"+ 
    " where students learn programming")) 