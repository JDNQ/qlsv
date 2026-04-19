package com.example.qlsv.model.teacher;

import com.example.qlsv.model.student.Course;
import jakarta.persistence.*;

@Entity
@Table(name = "teaching_classes")
public class TeachingClass {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String className;

    @ManyToOne
    @JoinColumn(name = "teacher_id")
    private Teacher teacher;

    @ManyToOne
    @JoinColumn(name = "course_id")
    private Course course;

    public TeachingClass() {}

    public Long getId() { return id; }

    public String getClassName() { return className; }
    public void setClassName(String className) { this.className = className; }

    public Teacher getTeacher() { return teacher; }
    public void setTeacher(Teacher teacher) { this.teacher = teacher; }

    public Course getCourse() { return course; }
    public void setCourse(Course course) { this.course = course; }
}