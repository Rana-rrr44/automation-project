
const WEBHOOK_URL = "https://rana-abdelhak4.app.n8n.cloud/webhook/new-order";

function selectProduct(productName) {

    document.getElementById("product").value = productName;

    document.getElementById("order").scrollIntoView({
        behavior: "smooth"
    });

}

async function sendOrder() {

    const name = document.getElementById("name").value.trim();

    const phone = document.getElementById("phone").value.trim();

    const address = document.getElementById("address").value.trim();

    const quantity = document.getElementById("quantity").value;

    const product = document.getElementById("product").value;


    if (
        name === "" ||
        phone === "" ||
        address === "" ||
        quantity === "" ||
        product === ""
    ) {

        alert("Please fill in all fields.");

        return;

    }



    const order = {

        name: name,

        phone: phone,

        address: address,

        quantity: quantity,

        product: product,

        date: new Date().toLocaleString()

    };



    console.log(order);
    if (WEBHOOK_URL === "PUT_YOUR_N8N_WEBHOOK_HERE") {

        alert("Order Created Successfully ✅\n\nn8n is not connected yet.");

        clearForm();

        return;

    }



    try {

        const response = await fetch(WEBHOOK_URL, {

            method: "POST",

            headers: {

                "Content-Type": "application/json"

            },

            body: JSON.stringify(order)

        });



        if (response.ok) {

            alert("Order Sent Successfully ✅");

            clearForm();

        }

        else {

            alert("Failed to Send Order");

        }

    }

    catch (error) {

        console.log(error);

        alert("Connection Error");

    }

}

function clearForm() {

    document.getElementById("name").value = "";

    document.getElementById("phone").value = "";

    document.getElementById("address").value = "";

    document.getElementById("quantity").value = "";

    document.getElementById("product").value = "";

}