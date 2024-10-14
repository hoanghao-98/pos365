document.getElementById('shopRegistrationForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Lấy giá trị từ form
    const phone = document.getElementById('phone').value.trim();
    const shopName = document.getElementById('shopName').value.trim();

    // Lấy phần tử hiển thị lỗi
    const phoneError = document.getElementById('phoneError');
    const shopNameError = document.getElementById('shopNameError');
    
    // Biến kiểm tra lỗi
    let isValid = true;

    // Reset thông báo lỗi
    phoneError.style.display = 'none';
    shopNameError.style.display = 'none';

    // Kiểm tra số điện thoại
    if (!/^\d{10,11}$/.test(phone)) {
        phoneError.textContent = 'Số điện thoại không hợp lệ. Phải có 10-11 số.';
        phoneError.style.display = 'block';
        isValid = false;
    }

    // Kiểm tra tên cửa hàng
    if (shopName === '') {
        shopNameError.textContent = 'Tên cửa hàng không được để trống.';
        shopNameError.style.display = 'block';
        isValid = false;
    }

    // Nếu không có lỗi, hiển thị thông báo thành công
    if (isValid) {
        document.getElementById('successMessage').style.display = 'block';
    }
});
