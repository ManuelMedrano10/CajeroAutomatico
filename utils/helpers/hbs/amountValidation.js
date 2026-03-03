export const ValidAmount = (amount)=>{
    let result = amount % 100;
    return result === 0;
};