package com.example.qlsv.persistent.teacher;

import com.example.qlsv.model.teacher.Teacher;
import org.springframework.data.jpa.repository.JpaRepository;

public interface TeacherRepository extends JpaRepository<Teacher, Long> {
}