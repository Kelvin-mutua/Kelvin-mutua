function validateForm() {
    const role = document.getElementById('role').value;
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const errorMessage = document.getElementById('error-message');

    
    
    if (!username || !password) {
        errorMessage.textContent = "Please fill in all fields.";
        return false; 
    }

    
    if (role === 'cashier') {
        window.location.href = 'Cahier.html'; 
    } else if (role === 'admin') {
        window.location.href = 'Admin.html'; 
    } else {
        errorMessage.textContent = "Invalid role selected.";
        return false; // Prevent form submission
    }

    return false; 
}