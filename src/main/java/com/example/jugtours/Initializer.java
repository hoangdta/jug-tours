package com.example.jugtours;

import com.example.jugtours.model.Event;
import com.example.jugtours.model.Group;
import com.example.jugtours.model.GroupRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

import java.time.Instant;
import java.time.format.DateTimeFormatter;
import java.util.Collections;
import java.util.stream.Stream;

@Component
class Initializer implements CommandLineRunner {

    private final GroupRepository repository;

    public Initializer(GroupRepository repository) {
        this.repository = repository;
    }

    @Override
    public void run(String... strings) {
        Stream.of("Seattle JUG", "Denver JUG", "Dublin JUG",
                "London JUG").forEach(name ->
                repository.save(new Group(name))
        );

        Group djug = repository.findByName("Seattle JUG");
        Event e = Event.builder().title("Micro Frontends for Java Developers")
                .description("JHipster now has microfrontend support!")
                .date(Instant.parse(Instant.now().toString())).build();
        djug.setEvents(Collections.singleton(e));
        repository.save(djug);

        repository.findAll().forEach(System.out::println);
    }
}
