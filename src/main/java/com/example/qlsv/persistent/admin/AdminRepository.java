package com.example.qlsv.persistent.admin;

import com.example.qlsv.model.admin.Admin;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface AdminRepository extends JpaRepository<Admin, Long> {

    // dùng cho login
    Admin findByUsername(String username);
}