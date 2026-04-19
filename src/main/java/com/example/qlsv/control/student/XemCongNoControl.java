package com.example.qlsv.control.student;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class XemCongNoControl {

    @GetMapping("/student/debt")
    public String viewDebt(Model model) {
        model.addAttribute("debt", 0);
        return "student/XemCongNoView";
    }
}