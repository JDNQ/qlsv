package com.example.qlsv.control.teacher;

import com.example.qlsv.model.student.Score;
import com.example.qlsv.service.student.ScoreService;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

@Controller
public class SuaDiemControl {

    private final ScoreService service;

    public SuaDiemControl(ScoreService service) {
        this.service = service;
    }

    @PostMapping("/teacher/update-score")
    public String updateScore(Score score) {
        service.save(score);
        return "redirect:/teacher/students";
    }
}