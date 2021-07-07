package com.application.springboot.model;

import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonFormat;

@Entity
@Table(name = "projects")
public class Project {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;
	
	@Column(name = "project_name")
	private String projectName;
	
	@Column(name = "status")
	private String status;
	
	@Column(name = "start_date")
	@JsonFormat(pattern = "yyyy-mm-dd")
	private Date startDate;
	
	@Column(name = "end_date")
	@JsonFormat(pattern = "yyyy-mm-dd")
	private Date endDate;
	
	@Column(name = "description")
	private String description;

	public Project() {

	}

	public Project(String projectName, String status, Date startDate, Date endDate, String description) {
		super();
		this.projectName = projectName;
		this.status = status;
		this.startDate = startDate;
		this.endDate = endDate;
		this.description = description;
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getProjectName() {
		return projectName;
	}

	public void setProjectName(String projectName) {
		this.projectName = projectName;
	}

	public String getStatus() {
		return status;
	}

	public void setStatus(String status) {
		this.status = status;
	}

	public Date getStartDate() {
		return startDate;
	}

	public void setStartDate(Date startDate) {
		this.startDate = startDate;
	}

	public Date getEndDate() {
		return endDate;
	}

	public void setEndDate(Date endDate) {
		this.endDate = endDate;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

}
