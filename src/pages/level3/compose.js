// 此例 来源 https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce

// arr.reduce(callback(accumulator, currentValue[, index[, array]])[, initialValue])
// accumulator 累计器
// currentValue 当前值
// currentIndex 当前索引
// array 数组

// 注意：如果没有提供initialValue，reduce 会从索引1的地方开始执行 callback 方法，跳过第一个索引。
// 如果提供initialValue，从索引0开始

const array1 = [1, 2, 3, 4];
const reducer = (accumulator, currentValue) => accumulator + currentValue;
// 1 + 2 + 3 + 4
console.log(array1.reduce(reducer));
// expected output: 10
// 5 + 1 + 2 + 3 + 4
console.log(array1.reduce(reducer, 5));
// expected output: 15



// 思考:有如下函数， 聚合成一个函数，并把第一个函数的返回值传递给下一个函数，如何处理。

function f1(arg) {
    console.log("f1", arg);
    return arg;
}
function f2(arg) {
    console.log("f2", arg);
    return arg;
}
function f3(arg) {
    console.log("f3", arg);
    return arg;
}

function compose(...funcs) {
    const len = funcs.length
    if (len === 0) {
        return arg => arg
    }

    if (len === 1) {
        return funcs[0]
    }
    return funcs.reduce((a, b) => (...args) => a(b(...args)))
}


// 因为把第一个函数的返回值传递给下一个函数, 第一个函数没有参数,所以要传个'omg'
const result = compose(f1, f2, f3)('omg')

console.log('result', result)
