package com.application.springboot.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.application.springboot.exception.ResourceNotFoundException;
import com.application.springboot.model.Project;
import com.application.springboot.repository.ProjectRepository;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/")
public class ProjectController {

	@Autowired
	private ProjectRepository projectRepository;
	
	//get all project details
	
	@GetMapping("/projects")
	public List<Project> getAllProjects(){
		return projectRepository.findAll();
	}
	
	//create project rest api
	@PostMapping("/projects")
	public Project createProject(@RequestBody Project project) {
		return projectRepository.save(project);
	}
	
	//get project by id rest api
	@GetMapping("/projects/{id}")
	public ResponseEntity<Project> getProjectById(@PathVariable int id) {
		
		Project project = projectRepository.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("Project nor exist with id: " + id));
	    
		return ResponseEntity.ok(project);
	}
	
	//update project rest api
	@PutMapping("/projects/{id}")
	public ResponseEntity<Project> updateProject(@PathVariable int id, @RequestBody Project projectDetails){
		
		Project project = projectRepository.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("Project nor exist with id: " + id));
		
	    project.setProjectName(projectDetails.getProjectName());
	    project.setStartDate(projectDetails.getStartDate());
	    project.setEndDate(projectDetails.getEndDate());
	    project.setStatus(projectDetails.getStatus());
	    project.setDescription(projectDetails.getDescription());
	    
	    Project updatedProject = projectRepository.save(project);
	    return ResponseEntity.ok(updatedProject);
	}
	
	//delete project rest api
	
	@DeleteMapping("/projects/{id}")
	public ResponseEntity<Map<String, Boolean>> deleteProject(@PathVariable int id){
		Project project = projectRepository.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("Project not exist with id: " +id));

	     
		projectRepository.delete(project);
		Map<String, Boolean> response = new HashMap<>();
		response.put("deleted", Boolean.TRUE);
		return ResponseEntity.ok(response);
		
	}
}
