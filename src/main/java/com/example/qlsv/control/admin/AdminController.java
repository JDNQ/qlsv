package com.example.qlsv.control.admin;

import com.example.qlsv.model.student.Student;
import com.example.qlsv.model.teacher.Teacher;
import com.example.qlsv.service.admin.AdminService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "http://localhost:3000")   // Cho phép React gọi
public class AdminController {

    @Autowired
    private AdminService adminService;

    // ========================== STUDENT ==========================

    @GetMapping("/students")
    public List<Student> getAllStudents() {
        return adminService.getAllStudents();
    }

    @GetMapping("/students/{id}")
    public ResponseEntity<Student> getStudentById(@PathVariable Long id) {
        Student student = adminService.getStudentById(id);
        return student != null ? ResponseEntity.ok(student) : ResponseEntity.notFound().build();
    }

    @PostMapping("/students")
    public ResponseEntity<Student> createStudent(@RequestBody Student student) {
        Student saved = adminService.addStudent(student);
        return ResponseEntity.ok(saved);
    }

    @PutMapping("/students/{id}")
    public ResponseEntity<Student> updateStudent(@PathVariable Long id, @RequestBody Student student) {
        Student updated = adminService.updateStudent(id, student);
        return updated != null ? ResponseEntity.ok(updated) : ResponseEntity.notFound().build();
    }

    @DeleteMapping("/students/{id}")
    public ResponseEntity<Void> deleteStudent(@PathVariable Long id) {
        adminService.deleteStudent(id);
        return ResponseEntity.ok().build();
    }

    // ========================== TEACHER ==========================

    @GetMapping("/teachers")
    public List<Teacher> getAllTeachers() {
        return adminService.getAllTeachers();
    }

    @GetMapping("/teachers/{id}")
    public ResponseEntity<Teacher> getTeacherById(@PathVariable Long id) {
        Teacher teacher = adminService.getTeacherById(id);
        return teacher != null ? ResponseEntity.ok(teacher) : ResponseEntity.notFound().build();
    }

    @PostMapping("/teachers")
    public ResponseEntity<Teacher> createTeacher(@RequestBody Teacher teacher) {
        Teacher saved = adminService.addTeacher(teacher);
        return ResponseEntity.ok(saved);
    }

    @PutMapping("/teachers/{id}")
    public ResponseEntity<Teacher> updateTeacher(@PathVariable Long id, @RequestBody Teacher teacher) {
        Teacher updated = adminService.updateTeacher(id, teacher);
        return updated != null ? ResponseEntity.ok(updated) : ResponseEntity.notFound().build();
    }

    @DeleteMapping("/teachers/{id}")
    public ResponseEntity<Void> deleteTeacher(@PathVariable Long id) {
        adminService.deleteTeacher(id);
        return ResponseEntity.ok().build();
    }
}