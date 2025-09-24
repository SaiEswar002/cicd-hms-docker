package com.example.demo;

import com.example.demo.entity.Doctor;
import com.example.demo.repository.DoctorRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

@SpringBootApplication
public class BackendApplication {

	public static void main(String[] args) {
		SpringApplication.run(BackendApplication.class, args);
	}

	@Bean
	CommandLineRunner initDatabase(DoctorRepository doctorRepository) {
		return args -> {
			// Only add sample data if the database is empty
			if (doctorRepository.count() == 0) {
				doctorRepository.save(new Doctor("Dr. Sarah Johnson", "Cardiology", "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=300&h=300&fit=crop&crop=face"));
				doctorRepository.save(new Doctor("Dr. Michael Chen", "Neurology", "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=300&h=300&fit=crop&crop=face"));
				doctorRepository.save(new Doctor("Dr. Emily Rodriguez", "Pediatrics", "https://images.unsplash.com/photo-1594824911186-9b566f3c8d9e?w=300&h=300&fit=crop&crop=face"));
				doctorRepository.save(new Doctor("Dr. James Wilson", "Orthopedics", "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face"));
				doctorRepository.save(new Doctor("Dr. Lisa Park", "Dermatology", "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=300&h=300&fit=crop&crop=face"));
				doctorRepository.save(new Doctor("Dr. Robert Kim", "Ophthalmology", "https://images.unsplash.com/photo-1537368910025-700350fe46c7?w=300&h=300&fit=crop&crop=face"));

				System.out.println("Sample doctor data has been added to the database.");
			} else {
				System.out.println("Database already contains doctor data. Skipping sample data insertion.");
			}
		};
	}
}
