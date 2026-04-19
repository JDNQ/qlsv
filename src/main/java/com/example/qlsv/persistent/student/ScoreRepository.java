package com.example.qlsv.persistent.student;

import com.example.qlsv.model.student.Score;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface ScoreRepository extends JpaRepository<Score, Long> {

    List<Score> findByStudentId(Long studentId);
}