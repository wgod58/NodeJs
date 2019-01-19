var item = {
    exec(arr, n) {
        var cache = {};
        return arr.filter(value => {
            cache[value] = (cache[value] || 0) + 1;
            return cache[value] <= n;
        })


        /*return arr.filter(function (n) {
            cache[n] = (cache[n] || 0) + 1;
            return cache[n] <= x;
        });*/
        /*let map = new Map();
        let ans = [];
        for (const item of arr) {
            let val = 1;
            if (map.has(item)) {
                const itemVal = map.get(item)
                if (itemVal > n - 1)
                    continue;
                val += itemVal;
            }
            map.set(item, val);
            ans.push(item);
        }
        return ans;*/
    },
};
module.exports = item