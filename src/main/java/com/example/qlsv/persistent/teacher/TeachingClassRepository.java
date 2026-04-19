package com.example.qlsv.persistent.teacher;

import com.example.qlsv.model.teacher.TeachingClass;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface TeachingClassRepository extends JpaRepository<TeachingClass, Long> {

    List<TeachingClass> findByTeacherId(Long teacherId);
}