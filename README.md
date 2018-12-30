# micro-c
## Frontend - Web microservices in go
Backend: https://github.com/theloox/micro-go

### What it is it
An example of how to build microservices in go
They communicate with each other, and ask for data

### Features
- Uses react-bootstrap
- No JQuery
- Minimal size
- Requires backend

### Build
Clone to a dir
```
git clone https://github.com/theloox/micro-go-frontend.git
cd micro-go-frontend
npm install
```

### Run
See README-RB.md

### API
#### Analysis
`/`

`/abnormal/<client>` Finds abnormaol behaviour on the client

`/duplicates` Finds invoices with sane client and amount onthe last hour

`/same` Finds invoices issued by 2 clients at the same time


#### Invoicing
`/`

`/create` Create a new invoice entry.

`/read/<id>` Reads all fields from invoice <id>

`/update` Updates an invoice entry.

`/delete/<id>` Deletes the invoice <id> . Use a DELETE request

`/all` Shows all invoices


#### Reporting
`/`

`/client/<client>` Shows invoices for client <client>

`/last/<seconds>` Shows invoices for the last <seconds>

`/today` Shows invoices since midnight

