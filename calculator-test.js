describe('calculateMonthlyPayment tests', function(){
  it('should calculate the monthly rate correctly', function() {
    const values = {amount: 200000, years: 30, rate:4.5};   
    expect(calculateMonthlyPayment(values)).toEqual('1013.37');
  });


  it("should return a result with 2 decimal places", function() {
  const values = {amount: 200000, years: 30, rate:4.5};
  const calculatePayment = calculateMonthlyPayment(values);
  const twoDecimalPlaces = calculatePayment.split(".")[1].length;
  expect(twoDecimalPlaces).toEqual(2);
  });

  
});