// "яблоко, слон, дуб, лес" 13
// "лон-ес" 233
// 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 


const getSlicedString = (str) => {
    return str.split(", ").reduce((acc, val, idx) => {
        if (idx %2 !==0){
            acc.push(val.slice(1, val.length));
        }
        return acc;
    }, []);
};

const getFibonacciNumber = (num) => {
    let f1 =1;
    let f2 = 1;
    for(let i = 3; i <= num; i++){
        const f3 = f1 + f2;
        f1 = f2;
        f2 = f3;

    }
    return f2;
};

const getSomeData = (str, num) => {
    const slicedString = new Promise ((resolve, reject) => {
        resolve(getSlicedString(str));
    });
    const fibonacci = new Promise ((resolve, reject) => {
        resolve(getFibonacciNumber(num));
    });
    return Promise.all([slicedString, fibonacci]);
};

getSomeData("яблоко, слон, дуб, лес", 13).then((data)=>{
    console.log(data);
});