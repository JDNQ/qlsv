package com.example.qlsv.control.teacher;

import com.example.qlsv.service.teacher.TeachingClassService;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class XemLopControl {

    private final TeachingClassService service;

    public XemLopControl(TeachingClassService service) {
        this.service = service;
    }

    @GetMapping("/teacher/classes")
    public String viewClasses(Model model) {
        // demo teacher id = 1
        model.addAttribute("classes", service.getByTeacher(1L));
        return "teacher/XemLopView";
    }
}