let n=4,r=4,c=0;
let bag="";


function print(r,c,bag){
    if(r == 0) {
        return 
    }
    else if(r>c){
        bag = bag+"*"+" ";
        print(r,c+1,bag);
    }
    else if(r == c){
        console.log(bag);
        bag="";
        c=0;
        print(r-1,c,bag);
    }
}
print(r,c,bag);
