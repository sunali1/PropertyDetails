
import React from "react";
import { useQuery} from "@tanstack/react-query";
import * as Constants from '../constants';
import { Button } from "../../components/button";
import ListItem from "../../components/list-item";
import Section from '../../components/section';
import {calculateValuationChanges, formatCurrency, formatUpdateDate } from "./utils";
import {InfoValue,Inset, InfoValueWrapper, InfoPercent} from "./style";

const Detail = () => {
  
  const fetchAccountData = async () => {
    const apiRes = await fetch('/api/accoun');
    if(!apiRes.ok){throw new Error(`fetchAccountData was not OK `)};
// no need to await fetch expects a Promise 
    return apiRes.json();
  };

  const {data, isLoading, error }  = useQuery(["account"], fetchAccountData);
  if(error){ return <div>😞 Fetchin Data was not ok </div>}
  if (isLoading) return <p> 🌀</p>
  

  const {
    lastUpdate, 
    associatedMortgages, 
    recentValuation, 
    originalPurchasePrice, 
    originalPurchasePriceDate, 
    updateAfterDays, 
    name, 
    bankName,
    postcode,
  } = data.account;

  let mortgage;
  if (associatedMortgages?.length) {
    mortgage = associatedMortgages[0];
  }

  const valuationChanges = calculateValuationChanges(recentValuation, originalPurchasePrice, originalPurchasePriceDate);
  
  const { sincePurchaseValue, sincePurchasePercentage, dateOfPurchase, noOfYearsSincePurchase } = valuationChanges;
  const annualAppreciation = sincePurchasePercentage/noOfYearsSincePurchase;
  const positiveChange = sincePurchaseValue > 0 ? 'positive' : 'none';
    
  return (
    <Inset>
      <Section label={Constants.ESTIMATED_VALUE} amount={formatCurrency(recentValuation?.amount)}>
          <ListItem item={`Last updated ${formatUpdateDate(lastUpdate)}`} />
          <ListItem item=
            {`Next update ${formatUpdateDate(lastUpdate, updateAfterDays)}`} />
      </Section>
      <Section label={Constants.PROPERTY_DETAILS}>
            <ListItem item={name} />
            <ListItem item={bankName} />
            <ListItem item={postcode} />
      </Section>
      <Section label={Constants.VALUATION_CHANGES}>
            <ListItem item={`Purchased for ${formatCurrency(originalPurchasePrice)} in ${dateOfPurchase} `} />
            <ListItem item={`Since purchase`}>
              <InfoValueWrapper bg={positiveChange}>
<InfoValue color={positiveChange}>{formatCurrency(sincePurchaseValue)}</InfoValue>
              <InfoValue color={positiveChange}>{`(${sincePurchasePercentage}%)`}</InfoValue>
              </InfoValueWrapper>
            </ListItem>
            <ListItem item={`Annual Appreciation`}>
              <InfoValueWrapper bg={positiveChange}>
              <InfoPercent color={positiveChange}>{`${annualAppreciation}%`}</InfoPercent>
              </InfoValueWrapper>
            </ListItem>
      </Section>
      {mortgage && (
        <Section label={Constants.MORTGAGE}>
              <ListItem item=
                {formatCurrency(
                  Math.abs(associatedMortgages[0].currentBalance)
                )} />
              <ListItem item={associatedMortgages[0].name} />
        </Section>
      )}
      <Button
        // This is a dummy action
        onClick={() => alert("You have navigated to the edit account page")}>
        Edit account
      </Button>
    </Inset>
  );
};

export default Detail;