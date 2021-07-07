package com.application.springboot.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.application.springboot.model.Project;

@Repository
public interface ProjectRepository extends JpaRepository<Project,Integer> {

}
