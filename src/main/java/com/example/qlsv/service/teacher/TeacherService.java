package com.example.qlsv.service.teacher;

import com.example.qlsv.model.teacher.Teacher;
import com.example.qlsv.persistent.teacher.TeacherRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class TeacherService {

    private final TeacherRepository repo;

    public TeacherService(TeacherRepository repo) {
        this.repo = repo;
    }

    public List<Teacher> getAll() {
        return repo.findAll();
    }

    public Teacher getById(Long id) {
        return repo.findById(id).orElse(null);
    }
}