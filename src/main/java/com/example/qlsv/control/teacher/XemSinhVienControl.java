package com.example.qlsv.control.teacher;

import com.example.qlsv.service.student.StudentService;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class XemSinhVienControl {

    private final StudentService service;

    public XemSinhVienControl(StudentService service) {
        this.service = service;
    }

    @GetMapping("/teacher/students")
    public String viewStudents(Model model) {
        model.addAttribute("students", service.getAll());
        return "teacher/XemSinhVienView";
    }
}