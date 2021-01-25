package com.square.squareerp.controller;

import com.square.squareerp.model.Employee;
import com.square.squareerp.repositories.EmployeeRepositories;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/v1/")
public class EmployeeController {

    @Autowired
    private EmployeeRepositories employeeRepository;

    @GetMapping("/employees")
    public List<Employee>getAllEmployees()
    {
        return employeeRepository.findAll();
    }
}
