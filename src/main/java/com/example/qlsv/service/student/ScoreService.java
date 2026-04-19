package com.example.qlsv.service.student;

import com.example.qlsv.model.student.Score;
import com.example.qlsv.persistent.student.ScoreRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ScoreService {

    private final ScoreRepository repo;

    public ScoreService(ScoreRepository repo) {
        this.repo = repo;
    }

    public List<Score> getByStudentId(Long studentId) {
        return repo.findByStudentId(studentId);
    }

    // ==================== THÊM PHƯƠNG THỨC NÀY ĐỂ SỬA LỖI ====================
    public Score save(Score score) {
        return repo.save(score);
    }
    // =====================================================================
}