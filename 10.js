//1)BY A PRODUCT


let cart = ['Laptop', 'Smartphone', 'Headphones', 'Camera', 'Book'];

let product = prompt("Enter the product you want to buy:");

let productFound = false;

for (let i = 0; i < cart.length; i++) {
    if (cart[i].toLowerCase() === product.toLowerCase()) {
        productFound = true;
        break;
    }
}

if (productFound) {
   
    let confirmPurchase = confirm(`The product "${product}" is in your cart. Do you want to proceed with the purchase?`);
    
    if (confirmPurchase) {
        alert("Purchase successful! Thank you for shopping with us.");
    } else {
        alert("Purchase canceled.");
    }
} else {
    alert(`The product "${product}" is not available in your cart.`);
}


//2)HOTSTAR SUBSCRIPTION


let plan = prompt("Select a subscription plan:\n1. basic\n2. premium\n3. vip\n\nEnter the plan :");

switch (plan) {
    case 'basic':
        alert("You selected the Basic Plan.\nDetails:\n- Access to limited content\n- SD quality streaming\n- Ads included\n\nPrice: $5 per month");
        break;
    
    case 'premium':
        alert("You selected the Premium Plan.\nDetails:\n- Access to all content\n- HD quality streaming\n- Ad-free experience\n\nPrice: $10 per month");
        break;
    
    case 'vip':
        alert("You selected the VIP Plan.\nDetails:\n- Access to exclusive content\n- HD quality streaming\n- Some ads included\n\nPrice: $7 per month");
        break;
    
    default:
        alert("Invalid selection. Please enter a valid plan number (1, 2, or 3).");
        break;
}


//3)UBER RIDE


let confirmRide = confirm("Do you want to book a ride?");

if (confirmRide) {

    setTimeout(function() {
        alert("Your ride has been successfully booked! A driver will arrive shortly.");
    }, 3000);
} else {

    alert("Ride booking canceled.");
}



//4)PRODUCT RATING


let rating = prompt("Please rate the product from 1 to 5 stars:");

for (let i = 0; i < 1; i++) {
    if (rating >= 1 && rating <= 5) {
        alert(`Thank you for your ${rating}-star rating!`);
    } else {
        alert("Invalid rating. Please enter a number between 1 and 5.");
      
        rating=prompt('please rate the product : ')
   
        i--;
    }
}



//5)VIDEO QUALITY




let quality = prompt("Select video quality:\n1. 720p\n2. 1080p\n3. 4K\n\nEnter the quality number (1, 2, or 3):");


switch (quality) {
    case '1':
        alert("You selected 720p quality.\n- Standard HD\n- Requires less bandwidth\n- Good for small screens.");
        break;

    case '2':
        alert("You selected 1080p quality.\n- Full HD\n- Requires moderate bandwidth\n- Good for most screens.");
        break;

    case '3':
        alert("You selected 4K quality.\n- Ultra HD\n- Requires high bandwidth\n- Best for large screens.");
        break;

    default:
        alert("Invalid selection. Please enter a valid quality number (1, 2, or 3).");
        break;
}