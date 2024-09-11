import "../css/currency.css";
import currencyDetails from "../json/currencyPicker.json";

const CurrencyDetails = () => {
  const currencyDiv = Object.keys(currencyDetails).map((currencyKey, index) => {
    const currency = currencyDetails[currencyKey];
    return(
    <div className="CurrencyPicker_currencyModalListItem" key={index}>
      <div className="currency-modal-list-item-line-one">
        <span className="CurrencyPicker_currencyModalListItemFlag">{currency.label}</span>
        <span className="CurrencyPicker_currencyModalListItemCode">{currency.code} -{" "}</span>
        <span className="CurrencyPicker_currencyModalListItemCode"> {currency.symbol}</span>
      </div>

      <div className="currency-modal-list-item-line-two">
        <span className="CurrencyPicker_currencyModalListItemName">
            {currency.name}
        </span>
      </div>
    </div>
    )
});

  return (
    <div className="CurrencyPicker_currencyModalListItems">
      {currencyDiv}
    </div>
  )

};

export default CurrencyDetails;
