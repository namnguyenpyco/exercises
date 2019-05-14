const percentDiscount = (type, year) => {
    const currentDate = new Date();
    const currentYear = currentDate.getFullYear();
    const checkCustomerOver2Year = currentYear - year > 0 ? true : false;

    if (type === 'employee') {
        return {percentDiscount: 30}
    }

    if (type === 'affiliate') {
        return {percentDiscount: 10}
    }

    if (checkCustomerOver2Year) {
        return {percentDiscount: 5}
    }

    return  {percentDiscount: 0}
}

const discountOnBill = (type, number) => {
    if (type === 'groceries') {
        return {moneyDiscount: 0}
    }

    if (number >= 990 ) {
        return {moneyDiscount: 45}
    }

    if ( 100 <= number < 990 ) {
        return {moneyDiscount: 5}
    } 
}

const netPay = (data) => {
    let finalPay;
    const checkDiscountPercent = percentDiscount(data.type, data.joinDate);
    const checkMoneyDiscount = discountOnBill(data.type, data.bill);

    if (checkDiscountPercent.percentDiscount > 0) {
        finalPay = data.bill - ((data.bill*checkDiscountPercent.percentDiscount)/100);
    } else if (checkMoneyDiscount.moneyDiscount > 0) {
        finalPay = data.bill - checkMoneyDiscount.moneyDiscount;
    } else {
        finalPay = data.bill;
    }
    return finalPay;
}

export default netPay;