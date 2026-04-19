package com.example.qlsv.persistent.student;

import com.example.qlsv.model.student.Student;
import org.springframework.data.jpa.repository.JpaRepository;

public interface StudentRepository extends JpaRepository<Student, Long> {
}