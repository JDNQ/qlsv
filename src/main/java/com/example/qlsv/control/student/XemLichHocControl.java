package com.example.qlsv.control.student;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class XemLichHocControl {

    @GetMapping("/student/schedule")
    public String viewSchedule(Model model) {
        model.addAttribute("schedule", "Thứ 2, 4, 6");
        return "student/XemLichHocView";
    }
}