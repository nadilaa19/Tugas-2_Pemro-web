document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault(); 
    alert('Form telah disubmit!'); 
});

document.getElementById('name').addEventListener('input', function() {
    console.log('Nama diubah menjadi: ' + this.value); 
});

document.getElementById('nim').addEventListener('input', function() {
    console.log('NIM diubah menjadi: ' + this.value);
});

document.getElementById('class').addEventListener('focus', function() {
    this.style.borderColor = 'blue'; 

document.getElementById('class').addEventListener('blur', function() {
    this.style.borderColor = ''; 
});

document.getElementById('address').addEventListener('mousedown', function() {
    console.log('Textarea alamat di-klik'); 
});
