package com.example.qlsv.control.student;

import com.example.qlsv.model.student.Student;
import com.example.qlsv.service.student.StudentService;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class XemThongTinControl {

    private final StudentService service;

    public XemThongTinControl(StudentService service) {
        this.service = service;
    }

    @GetMapping("/student/info")
    public String viewInfo(Model model) {
        // demo: lấy sinh viên id = 1
        Student student = service.getById(1L);
        model.addAttribute("student", student);
        return "student/XemThongTinView";
    }
}