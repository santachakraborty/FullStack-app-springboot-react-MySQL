import axios from 'axios';

const PROJECT_API_BASE_URL = "http://localhost:8080/api/projects";

class ProjectService{

  //call all projects REST api
  getProjects(){
    return axios.get(PROJECT_API_BASE_URL);
  }

   //REST api to add project
  createProject(project){
    return axios.post(PROJECT_API_BASE_URL, project);
  }

  getProjectById(projectId){
    return axios.get(PROJECT_API_BASE_URL + '/' + projectId);
  }

  // rest api to update project
  updateProject(project, projectId){
    return axios.put(PROJECT_API_BASE_URL + '/' + projectId, project);
  }

  //rest api to delete project
  deleteProject(projectId){
    return axios.delete(PROJECT_API_BASE_URL + '/' +projectId);
  }
}

export default new ProjectService();