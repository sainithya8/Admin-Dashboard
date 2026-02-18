const contentArea = document.getElementById("contentArea");
const pageTitle = document.getElementById("pageTitle");

function loadDashboard(){
    pageTitle.innerText="Temple Overview";
    contentArea.innerHTML = `
        <!-- Stats Cards -->
        <div class="cards">
            <div class="card"><h3>2450</h3><p>Devotees</p></div>
            <div class="card"><h3>₹1,20,000</h3><p>Donations</p></div>
            <div class="card"><h3>18</h3><p>Daily Pujas</p></div>
            <div class="card"><h3>320</h3><p>Visitors Today</p></div>
        </div>

        <!-- Devotees Preview -->
        <div class="tableBox">
            <h2>Recent Devotees</h2>
            <table>
                <tr><th>Name</th><th>City</th><th>Status</th></tr>
                <tr><td>Nithya</td><td>Madanapalle</td><td>Active</td></tr>
                <tr><td>Swetha</td><td>Hyderabad</td><td>Active</td></tr>
                <tr><td>Yakshitha</td><td>Bangalore</td><td>Active</td></tr>
            </table>
        </div>
    `;
}


function loadUsers(){
    pageTitle.innerText="Devotees";
    contentArea.innerHTML = `
        <div class="tableBox">
        <h2>Registered Devotees</h2>
        <table>
            <tr><th>Name</th><th>City</th><th>Status</th></tr>
            <tr><td>Nithya</td><td>Madanapalle</td><td>Active</td></tr>
            <tr><td>Yakshitha</td><td>Chennai</td><td>Active</td></tr>
            <tr><td>Swetha</td><td>Tirupati</td><td>Inactive</td></tr>
        </table>
        </div>
    `;
}

function loadOrders(){
    pageTitle.innerText="Donations";
    contentArea.innerHTML = `
        <div class="tableBox">
        <h2>Recent Donations</h2>
        <table>
            <tr><th>Name</th><th>Amount</th><th>Date</th></tr>
            <tr><td>Nithya</td><td>₹5000</td><td>Today</td></tr>
            <tr><td>Sweety</td><td>₹2500</td><td>Yesterday</td></tr>
        </table>
        </div>
    `;
}

function loadProducts(){
    pageTitle.innerText="Prasadam Store";
    contentArea.innerHTML = `
        <div class="cards">
            <div class="card"><h3>Laddu</h3><p>₹50</p></div>
            <div class="card"><h3>Butter</h3><p>₹80</p></div>
            <div class="card"><h3>Tulsi Mala</h3><p>₹120</p></div>
        </div>
    `;
}

function loadSettings(){
    pageTitle.innerText="Temple Settings";
    contentArea.innerHTML = "<h2>Temple configuration panel</h2>";
}

loadDashboard();
