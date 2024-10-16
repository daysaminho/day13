function handleSubmit(event) {
    event.preventDefault(); 

    
    const firstName = document.getElementById('firstname').value.trim();
    const lastName = document.getElementById('lastname').value.trim();
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value.trim();
    
    
    const errorElement = document.getElementById('error');
    errorElement.textContent = ''; 

    
    const emailRegex = /^[^@]+@[^@]+\.[^@]+$/; 
    const passwordRegex = /^(?=.*[a-zA-Z])(?=.*[0-9])[A-Za-z0-9]{8,}$/; 

    
    if (firstName === '') {
        errorElement.textContent = 'First name must not be empty';
        alert('First name must not be empty');
        return false;
    }

    if (lastName === '') {
        errorElement.textContent = 'Last name must not be empty';
        alert('Last name must not be empty');
        return false;
    }

    if (!emailRegex.test(email)) {
        errorElement.textContent = 'Email is badly formatted';
        alert('Email is badly formatted');
        return false;
    }

    if (!passwordRegex.test(password)) {
        errorElement.textContent = 'Password must be at least 8 characters long and contain at least a letter and a number';
        alert('Password must be at least 8 characters long and contain at least a letter and a number');
        return false;
    }

    
    alert('Form submitted successfully!');
    return true; 
}
