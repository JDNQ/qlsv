package com.example.qlsv.control.student;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

@Controller
public class DangKyHocPhanControl {

    @GetMapping("/student/register")
    public String showRegisterPage() {
        return "student/DangKyHocPhanView";
    }

    @PostMapping("/student/register")
    public String registerCourse() {
        // xử lý đăng ký (demo)
        return "redirect:/student/register";
    }
}