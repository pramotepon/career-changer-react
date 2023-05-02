import express from "express";
const webServer = express();
webServer.use(express.json());

const ipAddress = "127.0.0.1";
const port = 3001;

// code here.
const company = [];

webServer.get('/', (req, res) => {
  res.json('Hello World');
});

webServer.get('/company', (req, res) => {
  res.json(company);
});

webServer.post('/company', (req, res) => {
  const { name, taxId } = req.body;
  const compId = company.length + 1;
  const newCompany = {
    companyId: "comp-" + compId,
    name: name,
    taxId: taxId,
    employees: []
  }
  company.push(newCompany);
  res.json('Create Company Success');
});

webServer.listen(port, ipAddress, () => {
  console.log(`Web Application Server is running on ${ipAddress} port ${port}`);
  console.log(`Address: http://${ipAddress}:${port}`);
});