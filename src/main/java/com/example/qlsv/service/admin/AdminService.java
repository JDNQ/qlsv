package com.example.qlsv.service.admin;

import com.example.qlsv.model.student.Student;
import com.example.qlsv.model.teacher.Teacher;
import com.example.qlsv.persistent.student.StudentRepository;
import com.example.qlsv.persistent.teacher.TeacherRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class AdminService {

    @Autowired
    private StudentRepository studentRepository;

    @Autowired
    private TeacherRepository teacherRepository;

    // ================== STUDENT ==================

    public List<Student> getAllStudents() {
        return studentRepository.findAll();
    }

    public Student getStudentById(Long id) {
        return studentRepository.findById(id).orElse(null);
    }

    public Student addStudent(Student student) {
        return studentRepository.save(student);
    }

    public Student updateStudent(Long id, Student student) {
        Student existing = studentRepository.findById(id).orElse(null);
        if (existing != null) {
            existing.setName(student.getName());
            existing.setEmail(student.getEmail());
            existing.setPhone(student.getPhone());
            return studentRepository.save(existing);
        }
        return null;
    }

    public void deleteStudent(Long id) {
        studentRepository.deleteById(id);
    }

    // ================== TEACHER ==================

    public List<Teacher> getAllTeachers() {
        return teacherRepository.findAll();
    }

    public Teacher getTeacherById(Long id) {
        return teacherRepository.findById(id).orElse(null);
    }

    public Teacher addTeacher(Teacher teacher) {
        return teacherRepository.save(teacher);
    }

    public Teacher updateTeacher(Long id, Teacher teacher) {
        Teacher existing = teacherRepository.findById(id).orElse(null);
        if (existing != null) {
            existing.setName(teacher.getName());
            existing.setEmail(teacher.getEmail());
            existing.setPhone(teacher.getPhone());
            return teacherRepository.save(existing);
        }
        return null;
    }

    public void deleteTeacher(Long id) {
        teacherRepository.deleteById(id);
    }
}