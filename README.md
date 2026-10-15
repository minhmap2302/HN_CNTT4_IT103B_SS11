Sửa lỗi :
Vì fasle và 0 là có giá trị là falsy 
Trong code cũ có : "if (updatedData.isActive)" và "if (updatedData.powerWatts)", khi truyền fasle hoặc 0 vào thì điều kiện if không chạy nên thiết bị không được cập nhập.
Sửa là thay điều kiện cũ thành "if (data.isActive !== undefined)" và "if (data.powerWatts !== undefined)" giúp chương trình cập nhạt được giá trị fasle và 0.

Kiểm thử:
1. Khi cập nhập điều hòa với điều kiện active: false, chương trình cũ sẽ vấn giữ điều hòa là bật. Sau khi sửa thì điều hòa sẽ chuyển sang tắt
2. Khi cập nhaaoj đèn ngủ với giá trị là powerWats: , thì chương trình cũ vẫn sẽ giữ đèn ở 50W. Sau khi sửa thì đèn được cập nhập chính xác về 0W

