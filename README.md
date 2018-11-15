# CÁCH RUN SERVER
- **make local-db** : Tạo database với những config trong file localdb-docker-compose.yaml 
- **make run** : Chạy server với port 3000.

# GIẢI THÍCH LUỒNG DỮ LIỆU
### - Khi 1 user gửi **request** lên **server**. **Server** nhận xử lý **request** tại **routes** và **decode body** của **request**.
### - Sau đó **data** nhận được sau khi **decode** được gửi tới **service** tương ứng để xử lý tương tác với **database** và trả về **result**.
### - **Result** nhận được sẽ trở thành **endpoint** và show cho user.

# DEMO WEB REACTJS

<img src="https://i.imgur.com/oCoT5Bd.png">

# DEMO POSTMAN

## **Create member (name, phone)**

### url:"localhost:3000/members"

### success
<img src="https://imgur.com/R37W7ZC">

### failed by missing phone 
<img src="https://imgur.com/Rn81AeD">

## **Create project (name)**

### url:"localhost:3000/projects"

### success
<img src="https://imgur.com/JeGQhLS">

### failed by missing name 
<img src="https://imgur.com/Q78PkSA">

## **Assign member to project**

### url:"localhost:3000/projects/{project_id}/members"

### success
<img src="https://imgur.com/dagmonI">

### failed by userID invalid
<img src="https://imgur.com/fw1UoX9">

## **Show project detail (name, list member)**

### url:"localhost:3000/projects/{project_id}"

### success
<img src="https://imgur.com/fH4z7qr">



