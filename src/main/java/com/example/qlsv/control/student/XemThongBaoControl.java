package com.example.qlsv.control.student;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class XemThongBaoControl {

    @GetMapping("/student/notifications")
    public String viewNotifications(Model model) {
        model.addAttribute("message", "Không có thông báo mới");
        return "student/XemThongBaoView";
    }
}