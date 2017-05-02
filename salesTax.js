
//DATA
var salesTaxRates = {
  AB: 0.05,
  BC: 0.12,
  SK: 0.10
};

var companySalesData = [
  {
    name: "Telus",
    province: "BC",
    sales: [ 100, 200, 400 ]
  },
  {
    name: "Bombardier",
    province: "AB",
    sales: [ 80, 20, 10, 100, 90, 500 ]
  },
  {
    name: "Telus",
    province: "SK",
    sales: [ 500, 100 ]
  }
];

function calculateSalesTax(salesData, taxRates) {
  var outputObj = {};
  var sales = 0;
  var taxes = 0;
  for (var key in salesData){
    if (salesData.hasOwnProperty(key)){
      sales = (addSales(salesData[key].sales));
      taxes = calcTax(salesData[key].province,sales,taxRates);
        if(outputObj[salesData[key].name]){
          outputObj[salesData[key].name].totalSales += sales;
          outputObj[salesData[key].name].totalTaxes += taxes;
          continue;
        }
      outputObj[salesData[key].name] = {"totalSales":sales
      , "totalTaxes": taxes};
    }
  }
  return outputObj;
}

function addSales (salesArray) {
  var sum = 0;
  for (var i of salesArray) {
    sum += i;
  }
  return sum;
}

function calcTax(prov, sales, taxRates){
  return taxRates[prov]*sales;
}

var results = calculateSalesTax(companySalesData, salesTaxRates);
console.log(results);
/* Expected Results:
{
  Telus: {
    totalSales: 1300
    totalTaxes: 144
  },
  Bombardier: {
    totalSales: 800,
    totalTaxes: 40
  }
}
*/
