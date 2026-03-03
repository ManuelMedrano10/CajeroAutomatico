export const Papeletas = {
    "100": 0,
    "200": 0,
    "500": 0,
    "1000": 0
};

export const Withdraw200_1000 = (amount) => {

    let result = 0;
    let comprobationAmount = amount;

    if (amount % 200 !== 0 || amount % 1000 !== 0) {
        return null;
    }

    if (amount < 1000) {
        result = amount / 200;
        Papeletas["200"].push(result);
    } else {
        result = amount / 1000;
        Papeletas["1000"].push(result);
        comprobationAmount % 1000;
    }
    if (comprobationAmount !== 0) {
        comprobationAmount /= 200;
        Papeletas["200"].push(comprobationAmount);
    }
};

export const Withdraw100_500 = (amount) => {
    amount = parseInt(amount);
    let result = 0;
    let comprobationAmount = amount;

    if (amount % 100 !== 0 || amount % 500 !== 0) {
        return null;
    }

    if (amount < 500) {
        result = amount / 100;
        Papeletas["100"].push(result);
    } else {
        result = amount / 500;
        Papeletas["500"].push(result);
        comprobationAmount % 500;

        if (comprobationAmount !== 0) {
            comprobationAmount /= 200;
            Papeletas["100"].push(comprobationAmount);
        }
    }
};

export const WithdrawEffective = (amount) => {
    amount = parseInt(amount);
    let result = 0;
    let comprobationAmount = amount;

    if (amount % 100 !== 0 || amount % 500 !== 0 || amount % 200 !== 0 || amount % 1000 !== 0) {
        return null;
    }

    do {
        switch (comprobationAmount) {
            case comprobationAmount >= 1000:
                result = comprobationAmount / 1000;
                Papeletas["1000"].push(result);
                comprobationAmount % 1000;
                break;

            case comprobationAmount >= 500:
                result = comprobationAmount / 500;
                Papeletas["500"].push(result);
                comprobationAmount % 500;
                break;

            case comprobationAmount >= 200:
                result = comprobationAmount / 200;
                Papeletas["12000"].push(result);
                comprobationAmount % 200;
                break;

            case comprobationAmount >= 100:
                result = comprobationAmount / 100;
                Papeletas["100"].push(result);
                comprobationAmount % 100;
                break;
        }
    } while (comprobationAmount !== 0);
};