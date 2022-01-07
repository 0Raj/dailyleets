function max_of(max_diff,diff) {
    if(max_diff>diff) {
        return max_diff;
    }
    else {
        return diff;
    }
}

var prices = [3,3],max_diff=-Infinity,diff=0,day=0,s1=0,s2=1,greater=0,lesser=0,equal=0;
while(s2<prices.length) {
    if(prices[s1] > prices[s2]) {
        diff=0;
        greater++;
    }
    else if(prices[s1] < prices[s2]) {
        diff = prices[s2] - prices[s1];
        lesser++
    }
    else if(prices[s1] == prices[s2]) {
        equal++;
    }
    max_diff = max_of(max_diff,diff);
    if(max_diff == diff) {
        day = prices[s2];
    }
    s1++;
    s2++;
}
var x = prices.length-1;
if(greater == x || equal==x){
    console.log(0);
}
else if(lesser == x) {
    console.log(prices[0]);
}
else {
    console.log(day);
}