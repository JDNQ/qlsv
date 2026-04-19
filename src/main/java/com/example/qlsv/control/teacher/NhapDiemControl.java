package com.example.qlsv.control.teacher;

import com.example.qlsv.model.student.Score;
import com.example.qlsv.model.student.Student;
import com.example.qlsv.service.student.ScoreService;
import com.example.qlsv.service.student.StudentService;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

@Controller
public class NhapDiemControl {

    private final ScoreService scoreService;
    private final StudentService studentService;

    public NhapDiemControl(ScoreService scoreService, StudentService studentService) {
        this.scoreService = scoreService;
        this.studentService = studentService;
    }

    @GetMapping("/teacher/grade")
    public String showForm() {
        return "teacher/NhapDiemView";
    }

    @PostMapping("/teacher/grade")
    public String saveScore(@RequestParam Long studentId,
                            @RequestParam Double scoreValue) {

        Student student = studentService.getById(studentId);

        Score score = new Score();
        score.setStudent(student);
        score.setScore(scoreValue);

        scoreService.save(score);

        return "redirect:/teacher/students";
    }
}