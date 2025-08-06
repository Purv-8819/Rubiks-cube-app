package com.purv.rubiks_backend.controller;

import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api")
public class CubeController {

    @GetMapping("/ping")
    public String ping() {
        return "Backend is working!";
    }
}