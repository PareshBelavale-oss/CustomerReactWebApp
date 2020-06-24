import React, { Component } from 'react'
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import '../MPandFacilityRegister/register.css';
import axios from 'axios'
import Header from '../Header/Header';

class MPandFacilityRegister extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
            facilityId: '',
            facilityName : '',
            participantId: '',
            participantName: ''
        };

        this.changeEventReact = this.changeEventReact.bind(this);
        this.addRegister = this.addRegister.bind(this);
        this.retriveRegisterDetails = this.retriveRegisterDetails.bind(this);
    }

    // facilityID = (event) => {
    //     this.setState({facilityID: event.target.value});
    // }

    // facilityName = (event) => {
    //     this.setState({facilityName: event.target.value});
    // }

    // participantID = (event) => {
    //     this.setState({participantID: event.target.value});
    // }

    // participantName = (event) => {
    //     this.setState({participantName: event.target.value});
    // }

    changeEventReact = (e) =>{
        this.setState({[e.target.name]: e.target.value});
        console.log(this.state);
    }
   

    addRegister = event =>{
        console.log(this.state);
        this.state.facilityId = parseInt(this.state.facilityId);
        axios.post("https://jsonplaceholder.typicode.com/posts", this.state)
        .then(response=>{
            console.log(response)
        })
        .catch(error=>{
            console.log(error)
        })    
    }
    
    retriveRegisterDetails = event=>{
        // const obj = [
        //     {
        //         "facilityId": 11,
        //         "facilityName": "Saran",
        //         "participantId": "21",
        //         "participantName": "test1"
        //       }]

        //   this.setState({
        //       facilityId: obj[0].facilityId,
        //       facilityName: obj[0].facilityName,
        //       participantId: obj[0].participantId,
        //       participantName: obj[0].participantName

        //     });
        axios.get("http://localhost:9090/getRegistrationDetailsByFacilityId/" + this.state)
        .then(response=>{
            console.log(response)
            if(response.status === 200){
                console.log(response);
                this.setState({
                    facilityId: response.data.result[0].facilityId,
                    facilityName: response.data.result[0].facilityName,
                    participantId: response.data.result[0].participantId,
                    participantName: response.data.result[0].participantName
                });
            }
        })
        .catch(error=>{
            console.log(error)
        })
    }

    clearAll = event=>{
        this.setState({
            facilityId: "",
            facilityName: "",
            participantId: "",
            participantName: ""
        });
    }
    
    render() {
        const formFields = {...this.state};
        console.log(formFields);
        return (
            <div>
                {/* <Button color="primary">Hello World</Button> */}
                {/* <nav className="navbar navbar-dark bg-primary">
                    <a className="navbar-brand" href="#">FCMAS</a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                </nav> */}
                <Header></Header>

                <div className="container-fluid">
                    <div className="row">
                        <div className="col-sm-12">
                        <b>Facility Registeration</b>
                        </div>
                        <form noValidate autoComplete="off" >
                        {/* onSubmit={this.addRegister} */}
                            <div className="col-sm-12">
                                <TextField label="Facility ID" name="facilityId" value={formFields.facilityId} onChange={this.changeEventReact}/>
                            </div>
                            <div className="col-sm-12">
                                <TextField id="standard-basic" label="Facility Name" value={formFields.facilityName} name="facilityName" onChange={this.changeEventReact}/>
                            </div>
                            <div className="col-sm-12">
                                <TextField id="standard-basic" label="Market Participant ID" value={formFields.participantId} name="participantId"  onChange={this.changeEventReact}/>
                            </div>
                            <div className="col-sm-12">
                                <TextField id="standard-basic" label="Market Participant Name" value={formFields.participantName} name="participantName"  onChange={this.changeEventReact}/>
                            </div>

                            <div className="col-sm-12 padTop10">
                                <Button variant="contained" color="primary" onClick={this.addRegister}>
                                    Save
                                </Button> 
                                <Button className="marleft10" variant="contained" color="primary" onClick={this.clearAll}>
                                    Clear
                                </Button> 
                                <Button className="marleft10" variant="contained" color="primary" onClick={this.retriveRegisterDetails}>
                                    Retrive
                                </Button>
                                {/* <input type="submit" variant="contained" color="primary"></input> */}
                            </div>
                            
                        </form>
                    </div>
                </div>
                
            </div>
        )
    }
}

export default MPandFacilityRegister
