package com.example.qlsv.persistent.student;

import com.example.qlsv.model.student.Course;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CourseRepository extends JpaRepository<Course, Long> {
}