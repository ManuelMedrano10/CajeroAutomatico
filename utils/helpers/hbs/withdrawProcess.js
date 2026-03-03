export const WithdrawProcess = (amount, mode) => {
    const Bills = {
        "100": 0,
        "200": 0,
        "500": 0,
        "1000": 0
    };

    let remaining = parseInt(amount);
    let billToUse = [];

    if (mode === 1) {
        billToUse = [1000, 200];
    } else if(mode === 2){
        billToUse = [500, 100];
    } else {
        billToUse = [1000, 500, 200, 100];
    }

    for (let bill of billToUse){
        if(remaining >= bill){
            const count = Math.floor(remaining / bill);
            remaining %= bill;
            Bills[bill.toString()] = count;
        }
    }

    return {
        papeletas: Bills,
        restante: remaining
    }
};
