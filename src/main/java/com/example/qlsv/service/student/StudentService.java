package com.example.qlsv.service.student;

import com.example.qlsv.model.student.Student;
import com.example.qlsv.persistent.student.StudentRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class StudentService {

    private final StudentRepository repo;

    public StudentService(StudentRepository repo) {
        this.repo = repo;
    }

    public List<Student> getAll() {
        return repo.findAll();
    }

    public void save(Student s) {
        repo.save(s);
    }

    public void delete(Long id) {
        repo.deleteById(id);
    }

    public Student getById(Long id) {
        return repo.findById(id).orElse(null);
    }

    public void update(Student s) {
        repo.save(s);
    }
}