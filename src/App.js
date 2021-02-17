import {useState} from "react" ;
import {dommyData} from "./domyData" ;
import {Table, Button} from "reactstrap" ;
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome" ;
import {faImages , faThumbsUp , faThumbsDown, faMoneyCheckAlt, faSearchDollar} from "@fortawesome/free-solid-svg-icons" ;
import './App.css';

function App() {
 const [isLoading, setIsLoading] = useState(false) ;
 const [invoices, setInvoice] = useState(dommyData) ;

 function remove (id){
   var updatedInvoice = invoices.filter(invoice => invoice.id !== id) ;
   setInvoice(updatedInvoice) ;
 }
 
 const invoiceComponent = invoices.map(invoice =>
  <tr key = {invoice.id}>
    {console.log(invoice.id)}
    <td>{invoice.Vendor}</td>
    <td>{invoice.Amount}</td>
    <td>{invoice.Invoice}</td>
    <td>{invoice.Date}</td>
    <td><Button className ="btn btn-lg btn-success" onClick={() => remove(invoice.id)} > <FontAwesomeIcon icon = {faThumbsUp} /> OK </Button></td>
    <td><Button className ="btn btn-lg btn-danger" onClick={() => remove(invoice.id)} > <FontAwesomeIcon icon = {faThumbsDown} /> Not OK </Button></td>
    <td><Button className ="btn btn-lg btn-info" onClick={() => remove(invoice.id)} > <FontAwesomeIcon icon = {faMoneyCheckAlt} /> 50% </Button></td>
    <td><Button className ="btn btn-lg btn-warning" onClick={() => remove(invoice.id)} > <FontAwesomeIcon icon = {faSearchDollar} />?? </Button></td>
    <td><Button className ="btn btn-lg btn-info" onClick={() => remove(invoice.id)} > <FontAwesomeIcon icon = {faImages} /> Image </Button></td>
 </tr>)

 return (isLoading) ? 
  (<div> Loading...</div>) :
   (
    <div className="container border border-secondary rounded center">
      <div className ="row">
        <div className ="col-12">
          <h4> Pending Invoices - The test Company</h4>
        </div>
      </div>
      <div className ="row">
        <div className = ".col-xs-12 center text-center">
          <Table dark responsive striped bordered hover>
            <thead>
              <tr>
                <th>Vendor</th>
                <th>Amount</th>
                <th>Invoice No.</th>
                <th>Date</th>
                <th colSpan ="4">Actions</th>
                <th>Image</th>
              </tr>
            </thead>
            <tbody>
              {invoices.length === 0 ? <tr colSpan = "9">
                <td colSpan = "9">All caught up and deleted! </td>
                
              </tr> : invoiceComponent
              }
            </tbody>
          </Table>
        </div>
      </div>
    </div>
  );
}

export default App;
