package com.example.qlsv.service.teacher;

import com.example.qlsv.model.teacher.TeachingClass;
import com.example.qlsv.persistent.teacher.TeachingClassRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class TeachingClassService {

    private final TeachingClassRepository repo;

    public TeachingClassService(TeachingClassRepository repo) {
        this.repo = repo;
    }

    public List<TeachingClass> getByTeacher(Long teacherId) {
        return repo.findByTeacherId(teacherId);
    }
}