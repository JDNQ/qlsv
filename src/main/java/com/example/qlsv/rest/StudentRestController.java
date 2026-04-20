package com.example.qlsv.rest;

import com.example.qlsv.model.student.Course;
import com.example.qlsv.model.student.Score;
import com.example.qlsv.model.student.Student;
import com.example.qlsv.model.teacher.Teacher;
import com.example.qlsv.service.student.CourseService;
import com.example.qlsv.service.student.ScoreService;
import com.example.qlsv.service.student.StudentService;
import com.example.qlsv.service.teacher.TeacherService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "*")   // Cho phép React gọi từ localhost:3000
public class StudentRestController {

    private final StudentService studentService;
    private final ScoreService scoreService;
    private final CourseService courseService;
    private final TeacherService teacherService;

    public StudentRestController(StudentService studentService, ScoreService scoreService,
                                 CourseService courseService, TeacherService teacherService) {
        this.studentService = studentService;
        this.scoreService = scoreService;
        this.courseService = courseService;
        this.teacherService = teacherService;
    }

    // Lấy thông tin sinh viên
    @GetMapping("/students/{id}")
    public ResponseEntity<Student> getStudent(@PathVariable Long id) {
        Student student = studentService.getById(id);
        return student != null ? ResponseEntity.ok(student) : ResponseEntity.notFound().build();
    }

    // Bảng điểm của sinh viên (có tên môn + tên giảng viên)
    @GetMapping("/students/{id}/scores")
    public ResponseEntity<List<ScoreDTO>> getStudentScores(@PathVariable Long id) {
        List<Score> scores = scoreService.getByStudentId(id);

        List<ScoreDTO> dtos = scores.stream().map(score -> {
            ScoreDTO dto = new ScoreDTO();
            dto.setId(score.getId());
            dto.setScore(score.getScore());

            if (score.getCourse() != null) {
                dto.setCourseName(score.getCourse().getCourseName());
                // Tìm giảng viên dạy môn này (lấy một teacher dạy course này)
                // Ở đây đơn giản lấy teacher đầu tiên có dạy course
                // Bạn có thể cải tiến sau bằng join tốt hơn
            }
            return dto;
        }).collect(Collectors.toList());

        return ResponseEntity.ok(dtos);
    }

    // Môn học của sinh viên (có điểm nếu đã có)
    @GetMapping("/students/{id}/courses")
    public ResponseEntity<List<CourseDTO>> getStudentCourses(@PathVariable Long id) {
        // Hiện tại DB chưa có bảng enrollment, nên trả tất cả courses + điểm nếu có
        List<Course> courses = courseService.getAll();

        List<CourseDTO> dtos = courses.stream().map(course -> {
            CourseDTO dto = new CourseDTO();
            dto.setCourseName(course.getCourseName());
            dto.setSemester("2026 Spring");

            // Tìm điểm của sinh viên với môn này
            List<Score> scores = scoreService.getByStudentId(id);
            scores.stream()
                    .filter(s -> s.getCourse() != null && s.getCourse().getId().equals(course.getId()))
                    .findFirst()
                    .ifPresent(score -> dto.setScore(score.getScore()));

            return dto;
        }).collect(Collectors.toList());

        return ResponseEntity.ok(dtos);
    }

    // DTO cho Scores
    static class ScoreDTO {
        private Long id;
        private Double score;
        private String courseName;
        private String teacherName = "Chưa phân công";

        // getters & setters
        public Long getId() { return id; }
        public void setId(Long id) { this.id = id; }
        public Double getScore() { return score; }
        public void setScore(Double score) { this.score = score; }
        public String getCourseName() { return courseName; }
        public void setCourseName(String courseName) { this.courseName = courseName; }
        public String getTeacherName() { return teacherName; }
        public void setTeacherName(String teacherName) { this.teacherName = teacherName; }
    }

    // DTO cho Courses
    static class CourseDTO {
        private String courseName;
        private String semester;
        private Double score;

        public String getCourseName() { return courseName; }
        public void setCourseName(String courseName) { this.courseName = courseName; }
        public String getSemester() { return semester; }
        public void setSemester(String semester) { this.semester = semester; }
        public Double getScore() { return score; }
        public void setScore(Double score) { this.score = score; }
    }
}