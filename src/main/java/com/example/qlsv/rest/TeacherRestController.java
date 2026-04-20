package com.example.qlsv.rest;

import com.example.qlsv.model.student.Student;
import com.example.qlsv.model.teacher.Teacher;
import com.example.qlsv.service.student.StudentService;
import com.example.qlsv.service.teacher.TeacherService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "*")
public class TeacherRestController {

    private final TeacherService teacherService;
    private final StudentService studentService;

    public TeacherRestController(TeacherService teacherService, StudentService studentService) {
        this.teacherService = teacherService;
        this.studentService = studentService;
    }

    @GetMapping("/teachers/{id}")
    public ResponseEntity<Teacher> getTeacher(@PathVariable Long id) {
        Teacher teacher = teacherService.getById(id);
        return teacher != null ? ResponseEntity.ok(teacher) : ResponseEntity.notFound().build();
    }

    // Danh sách sinh viên theo lớp (hiện tại dùng tất cả sinh viên làm demo)
    @GetMapping("/classes/{classId}/students")
    public ResponseEntity<List<Student>> getStudentsByClass(@PathVariable Long classId) {
        // TODO: Sau này join với teaching_classes
        // Hiện tại trả tất cả sinh viên để frontend không lỗi
        List<Student> students = studentService.getAll();
        return ResponseEntity.ok(students);
    }
}