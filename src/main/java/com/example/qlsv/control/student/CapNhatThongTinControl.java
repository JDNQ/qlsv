package com.example.qlsv.control.student;

import com.example.qlsv.model.student.Student;
import com.example.qlsv.service.student.StudentService;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

@Controller
public class CapNhatThongTinControl {

    private final StudentService service;

    public CapNhatThongTinControl(StudentService service) {
        this.service = service;
    }

    @GetMapping("/student/edit")
    public String showForm(Model model) {
        model.addAttribute("student", service.getById(1L));
        return "student/CapNhatThongTinView";
    }

    @PostMapping("/student/update")
    public String update(Student student) {
        service.update(student);
        return "redirect:/student/info";
    }
}