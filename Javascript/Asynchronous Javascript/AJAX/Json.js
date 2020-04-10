var button_1 = document.querySelector("#button_1");
var button_2 = document.querySelector("#button_2");
var customerr = document.querySelector("#customer");
var customerrs = document.querySelector("#customers");

button_1.addEventListener("click", loadCustomer);
button_2.addEventListener("click", loadCustomers);

// ! Load Single Customer :-

function loadCustomer(event)
{
  const xhr = new XMLHttpRequest();

  xhr.open('GET', 'customer.json', true);

  // xhr.responseType = "json";

  xhr.setRequestHeader("Content-type", "application/json");

  xhr.onload = function ()
  {
    if (this.status === 200)
    {
      console.log(this.responseText);

      const customer = JSON.parse(this.responseText);

      const output = `
                      <ul>
                        <li>ID: ${customer.id}</li>
                        <li>Name: ${customer.name}</li>
                        <li>Company: ${customer.company}</li>
                        <li>Phone: ${customer.phone}</li>
                      </ul>
                    `;

      customerr.innerHTML = output;
    }
  }

  xhr.send();
}

// ! Load Multiple Customers :-

function loadCustomers(event)
{
  const xhr = new XMLHttpRequest();

  xhr.open('GET', 'customers.json', true);

  xhr.onload = function ()
  {
    if (this.status === 200)
    {
      console.log(this.responseText);

      const customers = JSON.parse(this.responseText);

      let output = '';

      customers.forEach(function (customer)
      {
        output += `
                    <ul>
                      <li>ID: ${customer.id}</li>
                      <li>Name: ${customer.name}</li>
                      <li>Company: ${customer.company}</li>
                      <li>Phone: ${customer.phone}</li>
                    </ul>
                  `;
      });

      customerrs.innerHTML = output;
    }
  }

  xhr.send();
}