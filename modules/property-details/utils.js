import { add, format, differenceInYears } from "date-fns";

export const calculateValuationChanges = (recentValuation, originalPurchasePrice, originalPurchasePriceDate) => {
  const sincePurchaseValue = (recentValuation.amount) - (originalPurchasePrice);

  const sincePurchasePercentage = sincePurchaseValue / (originalPurchasePrice) * 100;

  const dateOfPurchase = format(new Date(originalPurchasePriceDate), "MMMM yyyy");

  const noOfYearsSincePurchase = differenceInYears(new Date(), new Date(originalPurchasePriceDate));

  return {
    sincePurchaseValue,
    sincePurchasePercentage,
    dateOfPurchase,
    noOfYearsSincePurchase
  };
};

export const formatCurrency = (amount) => {
    return new Intl.NumberFormat("en-GB", {
      style: "currency",
      currency: "GBP",
    }).format(amount)
  }

export const formatUpdateDate = (lastUpdate, updateAfterDays) => {
    let formattedUpdate;
    const formattedLastUpdate = new Date(lastUpdate);
    formattedUpdate = format(formattedLastUpdate, "do MMM yyyy");
    if(updateAfterDays > 0){
      formattedUpdate = format(add(formattedLastUpdate, { days: updateAfterDays }), "do MMM yyyy")
      return formattedUpdate;
    };
    return formattedUpdate;
  };
