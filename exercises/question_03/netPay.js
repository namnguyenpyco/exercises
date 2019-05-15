const percentDiscount = (type, year) => {
    const currentDate = new Date();
    const currentYear = currentDate.getFullYear();
    const checkCustomerOver2Year = currentYear - year > 2 ? true : false;

    if (type === 'groceries') {
        return 0;
    }
    if (type === 'employee') {
        return 30
    }
    if (type === 'affiliate') {
        return 10
    }
    if (checkCustomerOver2Year) {
        return 5
    }
    return  0;
}

const amountDiscount = (type, number) => {
    if ( number === 100 ) {
        return 5
    }

    if (number > 100 ) {
        return Math.floor(number/100) * 5;
    }
    return 0;
}

const netPay = (data) => {
    let finalPay;
    const checkDiscountPercent = percentDiscount(data.type, data.joinDate);
    const checkMoneyDiscount = amountDiscount(data.type, data.buy);

    if (checkDiscountPercent > 0) {
        finalPay = data.buy - ((data.bill*checkDiscountPercent)/100);
    } else if (checkMoneyDiscount > 0) {
        finalPay = data.buy - checkMoneyDiscount;
    } else {
        finalPay = data.buy;
    }
    return finalPay;
}

export {amountDiscount, percentDiscount}
export default netPay;