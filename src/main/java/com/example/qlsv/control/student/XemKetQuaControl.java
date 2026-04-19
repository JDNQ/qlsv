package com.example.qlsv.control.student;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class XemKetQuaControl {

    @GetMapping("/student/result")
    public String viewResult(Model model) {
        // demo data
        model.addAttribute("gpa", 3.2);
        return "student/XemKetQuaView";
    }
}