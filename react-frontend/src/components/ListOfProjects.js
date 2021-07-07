import React, { Component } from 'react'
import ProjectService from '../service/ProjectService'

class ListOfProjects extends Component {
  constructor(props){
    super(props)

    this.state = {
           projects:[]
    }
    this.addProject = this.addProject.bind(this);
    this.editProject = this.editProject.bind(this);
    this.deleteProject = this.deleteProject.bind(this);
  }

   componentDidMount(){
     ProjectService.getProjects().then((res)  => {
         this.setState({ projects: res.data});
     });
   }

   //addProject function
   addProject(){
      this.props.history.push('/add-project');
   }

   //update project function
   editProject(id){
     this.props.history.push(`/update-project/${id}`);
   }

   //delete project
   deleteProject(id){
      ProjectService.deleteProject(id).then((res) => {
         this.setState({projects: this.state.projects.filter(project => project.id !== id)});
      });
   }

  render() {
    return (
      <div>
        <h2 className="text-center">Project List</h2>
        <div className="row">
            <table className = "table table-bordered border shadow">
               <thead className="thead-dark">
                   <tr>
                     <th>Project Name</th>
                     <th>Start Date</th>
                     <th>End Date</th>
                     <th>Project status</th>
                     {/* <th>Actions</th> */}
                   </tr>
               </thead>

               <tbody>
                 {
                 this.state.projects.map(
                   project =>
                   <tr key = {project.id}>
                     <td>{project.projectName}</td>
                     <td>{project.startDate}</td>
                     <td>{project.endDate}</td>
                     <td>{project.status}</td>
                     <td>
                        <button style={{marginLeft:"40px"}} className="btn btn-info" onClick = {() => this.editProject(project.id)}>Edit</button>
                        <button style={{marginLeft:"20px"}} className="btn btn-warning" onClick = {() => this.deleteProject(project.id)}>Delete</button>
                     </td>
                   </tr>
                   )

                 }
               </tbody>
            </table>

            <button style ={{width:'170px' , textAlign:'center'}} className="btn btn-primary" onClick={this.addProject}>Add Project</button>

        </div>
      </div>
    )
  }
}

export default ListOfProjects;
