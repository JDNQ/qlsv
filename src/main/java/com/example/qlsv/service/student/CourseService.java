package com.example.qlsv.service.student;

import com.example.qlsv.model.student.Course;
import com.example.qlsv.persistent.student.CourseRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CourseService {

    private final CourseRepository repo;

    public CourseService(CourseRepository repo) {
        this.repo = repo;
    }

    public List<Course> getAll() {
        return repo.findAll();
    }
}