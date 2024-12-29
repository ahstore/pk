document.getElementById('whatsapp-button').addEventListener('click', function() {
    const phoneNumber = '923136605128'; // Replace with your phone number
    const productTitle = document.getElementById('product-title').innerText;
    const productDetails = document.getElementById('product-details').innerText;
    const productId = document.getElementById('itemCode').value;

    // Create the message using backticks for template literals
    const message = `I would like to buy the following product:\n\nTitle: ${productTitle}\nDetails: ${productDetails}\nValue: ${productId}`;
    
    // URL encode the message
    const encodedMessage = encodeURIComponent(message);
    
    // Create the WhatsApp link using backticks for template literals
    const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    
    // Redirect to WhatsApp
    window.open(whatsappLink, '_blank');
});

function order(event){
    event.preventDefault();
    document.getElementById('orderdetails').style.display = 'block';
}
function closeorder(){
    document.getElementById('orderdetails').style.display = 'none';
}