"use strict";

/*
   New Perspectives on HTML5 and CSS3, 8th Edition
   Tutorial 10
   Case Problem 1

   Author: Katrice Thomas
   Date:   December 5, 2025
   
   Filename: tc_cart.js
	
*/

// Running total for the order
let orderTotal = 0;

// HTML for the cart table
let cartHTML = "<table>" +
"<tr>" +
"<th>Item</th><th>Description</th><th>Price</th><th>Qty</th><th>Total</th>" +
"</tr>";

// Loop through all items purchased
for (let i = 0; i < item.length; i++) {

    // Start table row with product image
    cartHTML += "<tr><td><img src='tc_" + item[i] + ".png' alt='" + item[i] + "' /></td>";

    // Add description, price, and quantity
    cartHTML += "<td>" + itemDescription[i] + "</td>";
    cartHTML += "<td>$" + itemPrice[i].toFixed(2) + "</td>";
    cartHTML += "<td>" + itemQty[i] + "</td>";

    // Calculate cost of this line item
    let itemCost = itemPrice[i] * itemQty[i];

    // Add cost column
    cartHTML += "<td>$" + itemCost.toFixed(2) + "</td></tr>";

    // Add to running order total
    orderTotal += itemCost;
}

// Add subtotal row
cartHTML += "<tr>" +
"<td colspan='4'>Subtotal</td>" +
"<td>$" + orderTotal.toFixed(2) + "</td>" +
"</tr></table>";

// Output the HTML to the cart div
document.getElementById("cart").innerHTML = cartHTML;