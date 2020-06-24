import React, { Component } from 'react'
import Header from '../Header/Header';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import axios from 'axios'
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { makeStyles } from '@material-ui/core/styles';



export class AuctionDetail extends Component {

    
    
    constructor(props) {
        super(props)
    
        this.state = {
            auctionName: '',
            auctionId : '',
            auctionStatus: '',
            auctionResult: '',
            auctionType: ''
        }
        this.changeEventReact = this.changeEventReact.bind(this);
    }

    changeEventReact = (e) =>{
        this.setState({[e.target.name]: e.target.value});
        console.log(this.state);
    }
    
    
    saveAuction = event =>{
        console.log(this.state);
        axios.post("http://localhost:9090/saveAuction", this.state)
        .then(response=>{
            console.log(response)
        })
        .catch(error=>{
            console.log(error)
        }) 
    }

    getAuction = event =>{
        console.log(this.state);
        axios.get("http://localhost:8080/amar/1.0/customer/getCustomerById?customerId=123")
        .then(response=>{
            console.log(response)
            this.setState({
                auctionName: response.data.customerName,
                auctionId: response.data.customerId,
                auctionStatus: response.data.customerStatus,
                auctionResult: response.data.customerResult,
                auctionType: response.data.customerType
            });
        })
        .catch(error=>{
            console.log(error)
        }) 
    }

    clearAll = event=>{
        this.setState({
            auctionName: '',
            auctionId : '',
            auctionStatus: '',
            auctionResult: '',
            auctionType: ''
        });
    }

    
    render() {
        const formFields = {...this.state};
        console.log(formFields);
        return (
            <div>
                <Header></Header>
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-sm-12">
                            <b>Auction Details</b>
                            </div>
                            <form noValidate autoComplete="off" >
                            {/* onSubmit={this.addRegister} */}
                                <div className="col-sm-12">
                                    <TextField label="Customer Name" value={formFields.auctionName} name="auctionName"  onChange={this.changeEventReact}/>
                                </div>
                                <div className="col-sm-12">
                                    <TextField label="Customer Id" value={formFields.auctionId} name="auctionId" onChange={this.changeEventReact}/>
                                </div>
                                <div className="col-sm-12">
                                    <TextField  label="Customer Status" value={formFields.auctionStatus} name="auctionStatus"  onChange={this.changeEventReact}/>
                                </div>
                                <div className="col-sm-12">
                                    <TextField label="Customer Result" value={formFields.auctionResult} name="auctionResult"  onChange={this.changeEventReact}/>
                                </div>
                                <div className="col-sm-12">
                                   
                                    {/* Auction Type: <br/>
                                    <select name="auctionType" value={formFields.auctionType} onChange={this.changeEventReact}>
                                        <option value="Base">Base</option>
                                        <option value="Rebalancing">Rebalancing</option>
                                    </select> */}
                                    <TextField label="Customer Type" value={formFields.auctionType} name="auctionType"  onChange={this.changeEventReact}/>
                                </div>

                                <div className="col-sm-12 padTop10">
                                    <Button variant="contained" color="primary" onClick={this.saveAuction}>
                                        Save
                                    </Button>

                                    <Button id="getAuctionBtn" className="marleft10" variant="contained" color="primary" onClick={this.getAuction}>
                                        Get
                                    </Button>

                                    <Button className="marleft10" variant="contained" color="primary" onClick={this.clearAll}>
                                        Clear
                                    </Button>
                                </div>
                                
                            </form>
                        </div>
                    </div>
            </div>
        )
    }
}

export default AuctionDetail
