import React, { Component } from 'react'
import ProjectService from '../service/ProjectService';

class AddProject extends Component {
  constructor(props){
    super(props)

    this.state = {
        projectName:'',
        status:'',
        startDate:'',
        endDate:'',
        description:''
    }
    this.changeProjectNameHandler = this.changeProjectNameHandler.bind(this);
    this.changeStatusHandler = this.changeStatusHandler.bind(this);
    this.changeEndDateHandler = this.changeEndDateHandler.bind(this);
    this.changeStartDateHandler = this.changeStartDateHandler.bind(this);
    this.changeDescriptionHandler = this.changeDescriptionHandler.bind(this);
    this.saveProject = this.saveProject.bind(this);
  }

  // event handler
  saveProject = (event) => {
    event.preventDefault();
    let project = {
      projectName: this.state.projectName,
      startDate: this.state.startDate,
      endDate: this.state.endDate,
      status: this.state.status,
      description: this.state.description
    };

    console.log('project => ' +JSON.stringify(project));

    //call rest api to add the project
    ProjectService.createProject(project).then((res) => {
       this.props.history.push('/projects');
    });
  }

  cancel(){
    this.props.history.push('/projects');
  }

  changeProjectNameHandler = (event) => {
     this.setState({projectName: event.target.value});
  }
  changeStartDateHandler = (event) => {
    this.setState({startDate: event.target.value});
  }
  changeEndDateHandler = (event) => {
    this.setState({endDate: event.target.value});
  }
  changeStatusHandler = (event) => {
    this.setState({status: event.target.value});
  }
  changeDescriptionHandler = (event) => {
    this.setState({description: event.target.value});
  }


  render() {
    return (
      <div>
        <div className="container">
          <div className="row">
            <div style={{backgroundColor:"cornsilk"}} className="card col-md-6 offset-md-3 offset-md-3 border shadow"> 
                <h3 className="text-center">Add Project Details</h3>
                <div className="card-body">
                  <form>
                    <div className="form-group">
                       <label>Project Name:</label>
                       <input className="form-control" type="text" placeholder="project name" name="projectName" value={this.state.projectName} onChange={this.changeProjectNameHandler}/>
                    </div>

                    <div className="form-group">
                       <label>Start Date:</label>
                       <input className="form-control" type="text" placeholder="start date" name="startDate" value={this.state.startDate} onChange={this.changeStartDateHandler}/>
                    </div>

                    <div className="form-group">
                       <label>End Date:</label>
                       <input className="form-control" type="text" placeholder="end date" name="endDate" value={this.state.endDate} onChange={this.changeEndDateHandler}/>
                    </div>

                    <div className="form-group">
                       <label>Project Status:</label>
                       <input className="form-control" type="text" placeholder="status" name="status" value={this.state.status} onChange={this.changeStatusHandler}/>
                    </div>

                    <div className="form-group">
                       <label>Description:</label>
                       <input className="form-control" type="text" placeholder="description" name="description" value={this.state.description} onChange={this.changeDescriptionHandler}/>
                    </div>

                    <button style={{marginTop:"10px"}} className="btn btn-success" onClick={this.saveProject}>Save</button>
                    <button className="btn btn-warning" onClick={this.cancel.bind(this)} style={{marginLeft:"10px", marginTop:"10px"}}>Cancel</button>
                    
                  </form>

                </div>
            </div>

          </div>

        </div>
        
      </div>
    )
  }
}

export default AddProject;
