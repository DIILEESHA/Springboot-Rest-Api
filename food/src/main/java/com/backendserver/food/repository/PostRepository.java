package com.backendserver.food.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.backendserver.food.entity.Post;

public interface PostRepository extends JpaRepository<Post, Long> {
}

