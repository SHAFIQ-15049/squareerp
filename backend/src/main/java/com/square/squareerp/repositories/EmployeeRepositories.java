package com.square.squareerp.repositories;

import com.square.squareerp.model.Employee;
import org.springframework.data.jpa.repository.JpaRepository;

public interface EmployeeRepositories extends JpaRepository<Employee,Long> {
}
