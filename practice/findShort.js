function name(params) {
    var a = '1320';
    var b = a.charCodeAt();
    var c = 'sdf';
    return params + " HELLO+  ksdjfksl;fj;lksdjf";
}

function findShort(s) {
    let array = s.split(" ")
    let ans = array[0];
    for (const item of array) {
        if (item.length > 0 && item.length <= ans.length) {
            ans = item;
        }
    }
    return ans.length;
}
console.log(findShort("bitcoin take over the world maybe who knows perhaps"));