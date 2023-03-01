function calculateCommission(event) {
    
    const deliveryStatus = document.querySelector('input[name="delivery-status"]:checked');
    if (!deliveryStatus) {
      errorMessage.textContent = "من فضلك اختار  حاله التوصيل الحاليه !";
      return;
    }
    
    const productName = document.getElementById("product-name");
    const productPrice = document.getElementById("product-price");
    const commissionRate = document.getElementById("commission-rate");
    const shippingCost = document.getElementById("shipping-cost");
    const additionalExpenses = document.getElementById("additional-expenses");
    const errorMessage = document.getElementById("error-message");
    
    errorMessage.textContent = "";
    
    // Check if product name and price are entered
    if (productName.value === "" || productPrice.value === "") {
      errorMessage.innerHTML = "الرجاء إدخال اسم المنتج والسعر.";
      commissionResults.innerHTML = "";
      return;
    }
  
    // Check if commission rate and shipping cost are entered
    if (commissionRate.value === "" || shippingCost.value === "") {
      errorMessage.innerHTML = "الرجاء إدخال معدل العمولة وتكلفة الشحن.";
      commissionResults.innerHTML = "";
      return;
    }
  
    // Convert commission rate and shipping cost to decimals
    const commissionRateDecimal = commissionRate.value / 100;
    const shippingCostDecimal = parseFloat(shippingCost.value);
  
    // Calculate commission and final price
    const commission = (parseFloat(productPrice.value) + shippingCostDecimal) * commissionRateDecimal;
    const finalPrice = parseFloat(productPrice.value) + shippingCostDecimal + parseFloat(additionalExpenses.value) + commission;

    // Add change listener to delivery status element
    deliveryStatus.addEventListener('change', () => {
      if (deliveryStatus.checked) {
        deliveryStatus.indeterminate = false;
      } else {
        deliveryStatus.indeterminate = true;
      }
    });
  
    // Set delivery status color based on status value
    let statusColor = '';
    switch (deliveryStatus.value) {
      case 'تم التوصيل':
        statusColor = 'green';
        break;
      case 'لم يتم التوصيل':
        statusColor = 'red';
        break;
      case 'في الطريق':
        statusColor = 'gray';
        break;
    }




// Get the channel name input element and its value
const channelNameInput = document.getElementById("channel-name");
const channelName = channelNameInput.value;

// Add channel name to the commission results
const commissionResults = document.getElementById("commission-results");
commissionResults.innerHTML = `<h2 class="my-info">معلوماتك</h2>
  <p>اسم القناه: ${channelName}</p>
  <div class="row">
  <div class="col-sm-6">
  <p class="product-name">اسم المنتج: ${productName.value} </p>
  <p> سعر المنتج: ${+parseFloat(productPrice.value).toFixed(2)}ج</p>
  <p>معدل العمولة: %${+parseFloat(commissionRate.value).toFixed(2)}</p>
</div>
<div class="col-sm-6">
  <p>تكلفة الشحن:${+shippingCostDecimal.toFixed(2)}ج</p>
  <p>المصاريف الإضافية: ${+parseFloat(additionalExpenses.value).toFixed(2)}ج</p>
  <p>مبلغ العمولة: ${+commission.toFixed(2)}ج</p>
  <p>السعر النهائي: ${+finalPrice.toFixed(2)}ج</p>
</div>

<div class="col-sm-12">
<p>حالة التسليم: <span style="color: ${statusColor};">${deliveryStatus.value}</span></p>
</div>

</div>
`;






  // Clear error message
  errorMessage.innerHTML = "";
}

// Event listener for form submission
document.getElementById("commission-form").addEventListener("submit", function(event) {
  event.preventDefault();
  calculateCommission();
});


