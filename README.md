# MoneyManagement

Web application for personal finances.

## Features
- Income/expense/transfer accounting
- Setting and analyzing budget by categories
- Output of final results for a month/period
- Building graphs

## Description
The application consists of several pages:

### Home (Dashboard)
Here is the financial result for the last month (or another selected period). By choice, via drop-down list:
1. **budget item** (which categories have a limit, what is the result, is there an excess)
2. **income or expense chart by category**

![dashboard](/assets/previews/dashboard.png)

### Transactions
Transactions consist of fields:
1. Type (income / expense / transfer (between your accounts))
2. Category (each type has its own categories. There are no categories for the "_Transfer_" type)
3. Account
4. Amount
5. Commission (optional)
6. Date
7. Description (optional)

The page contains a form for creating a new transaction and a list of existing transactions (with the ability to filter by types/categories/accounts)

![transactions](/assets/previews/transactions.png)

### Accounts (Accounts)
Accounts consist of the fields:
1. Name
2. Balance (amount)
3. Description
Accounts can be created / deleted / edited

![accounts](/assets/previews/accounts.png)

### Settings (Accounts)
Here you can manage existing categories or add new ones.

![settings](/assets/previews/settings.png)

## How to use
### Production mode
1. Clone repository
```
git clone https://github.com/rnds-dev/money-management.git
```
2. Deploy project from folder ```/dist/money-management``` on your server
3. Follow the link (for example: [https://money-management-app/](https://money-management-app/))


### Development mode
1. Clone repository
```
git clone https://github.com/rnds-dev/money-management.git
```
2. Prepare local development environment [[Angular docs](https://v17.angular.io/tutorial/first-app#local-development-environment)]
3. Install [Node.js](https://nodejs.org/en/download/)
4. Install Angular CLI v16
```
npm install -g @angular/cli@16.0.2
```
3. Start project in terminal
`````
ng serve
`````
3. Follow the link [http://localhost:4200/](http://localhost:4200/)


## Stack
### Frontend
<a>  <img alt="Angular"     src="https://img.shields.io/badge/Angular%20-%230F0F11.svg?logo=angular&logoColor=white"></a>
<a href="https://github.com/search?q=user%3Arnds-dev+language%3Atypescript&type=repositories">  <img alt="TypeScript"   src="https://img.shields.io/badge/TypeScript%20-%233178C6.svg?logo=typescript&logoColor=white"></a>
<a href="https://github.com/search?q=user%3Arnds-dev+language%3Ahtml&type=repositories">        <img alt="HTML"         src="https://img.shields.io/badge/HTML%20-%23E34F26.svg?logo=html5&logoColor=white"></a>
<a href="https://github.com/search?q=user%3Arnds-dev+language%3Acss&type=repositories">         <img alt="CSS"          src="https://img.shields.io/badge/SCSS%20-%231572B6.svg?logo=css3&logoColor=white"></a>
<a>  <img alt="Chart.js"     src="https://img.shields.io/badge/Chart.js%20-%23FF6384.svg?logo=Chart.js&logoColor=white"></a>
### Backend
<a href="https://github.com/search?q=user%3Arnds-dev+language%3Aphp&type=repositories">         <img alt="PHP"          src="https://img.shields.io/badge/PHP-%23777BB4.svg?logo=php&logoColor=white"></a>
<a>  <img alt="MySQL"       src="https://img.shields.io/badge/MySQL%20-%234479A1.svg?logo=mysql&logoColor=white"></a>
