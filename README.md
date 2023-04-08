# user-authentication ( S2-3 )

## 專案畫面

![This is an image](https://github.com/Playpaper/user-authentication/blob/main/public/images/index.PNG)

![This is an image](https://github.com/Playpaper/user-authentication/blob/main/public/images/notFound.PNG)

## Features - 產品功能
使用者可以輸入帳號、密碼登入網頁。

## Environment SetUp - 環境建置
- Runtime : Node.js
- Framework : Express@4.17.1
- Template Engine : Express-handlebars@4.0.2
- Database : MongoDB + mongoose@5.9.7
> :heavy_check_mark: Check package.json for other dependencies

## Installing - 專案安裝流程
:one: 開啟終端機, 複製此專案至本機電腦:
```
git clone https://github.com/Playpaper/user-authentication.git
```
:two: 進入存放此專案的資料夾
```
cd user-authentication
```
:three: 安裝 express
```
npm i express@4.17.1
```
:four: 安裝 handlebars
```
npm i express-handlebars@4.0.2
```
:five: 安裝 nodemon (如已安裝可跳過此步驟)
```
npm install -g nodemon
```
:six: 新增種子資料
```
npm run seed
```
:seven: 啟動伺服器
```
npm run dev
```
> :heavy_check_mark: 當終端機出現以下字樣時，表示伺服器已啟動
```
mongodb connected!
The express server is listening on http://localhost:3000
```
