import express from "express";
import cors from "cors";

const webServer = express();
webServer.use(cors());
webServer.use(express.json());

const ipAddress = "127.0.0.1";
const port = 3001;

const company = [];

webServer.get("/", (request, response) => {
  response.send("Hello World");
});

// code down below.

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

webServer.listen(port, ipAddress);