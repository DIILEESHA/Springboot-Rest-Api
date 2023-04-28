package com.backendserver.food.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.backendserver.food.entity.Post;
import com.backendserver.food.repository.PostRepository;

@RestController
@RequestMapping("/api/posts/")
@CrossOrigin(origins = "http://localhost:3000")
public class PostController {
    @Autowired
    private PostRepository postRepository;

    @GetMapping("/")
    public List<Post> getAllPosts() {
        return postRepository.findAll();
    }

    @GetMapping("/{id}")
    public Post getPostById(@PathVariable Long id) {
        return postRepository.findById(id).orElse(null);
    }

    @PostMapping("/posted")
    public Post createPost(@RequestBody Post post) {
        return postRepository.save(post);
    }
}

