/*
const data = {
    customers: [
        { id: 1, name: "John Doe" },
        { id: 2, name: "Jane Smith" }
    ],
    equipment: [
        { id: 101, name: "Laptop", customerId: 1 },
        { id: 102, name: "Bulldozer", customerId: 2 }
    ]
};
*/

const customerList = document.getElementById("customerList");
const equipmentList = document.getElementById("equipmentList");

fetch('data.json') // Assuming the JSON file is in the same directory
    .then(response => response.json())
    .then(data => {
// Display customers
data.customers.forEach(customer => {
    const li = document.createElement("li");
    li.textContent = customer.name;
    customerList.appendChild(li);
});

// Display equipment
data.equipment.forEach(item => {
    const li = document.createElement("li");
    li.textContent = `${item.name} (Customer: ${data.customers.find(c => c.id === item.customerId).name})`;
    equipmentList.appendChild(li);
});
    });
// (Add functions for adding/editing customers/equipment here)
