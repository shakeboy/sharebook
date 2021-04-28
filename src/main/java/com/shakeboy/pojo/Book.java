package com.shakeboy.pojo;

import org.springframework.stereotype.Component;

@Component
public class Book {
    private int book_id;
    private String book_name;
    private String book_description;
    private String book_image;
    private String book_content;

    @Override
    public String toString() {
        return "Book{" +
                "book_id=" + book_id +
                ", book_name='" + book_name + '\'' +
                ", book_description='" + book_description + '\'' +
                ", book_image='" + book_image + '\'' +
                ", book_content='" + book_content + '\'' +
                '}';
    }

    public int getBook_id() {
        return book_id;
    }

    public void setBook_id(int book_id) {
        this.book_id = book_id;
    }

    public String getBook_name() {
        return book_name;
    }

    public void setBook_name(String book_name) {
        this.book_name = book_name;
    }

    public String getBook_description() {
        return book_description;
    }

    public void setBook_description(String book_description) {
        this.book_description = book_description;
    }

    public String getBook_image() {
        return book_image;
    }

    public void setBook_image(String book_image) {
        this.book_image = book_image;
    }

    public String getBook_content() {
        return book_content;
    }

    public void setBook_content(String book_content) {
        this.book_content = book_content;
    }

    public Book() {
    }

    public Book(int book_id, String book_name, String book_description, String book_image, String book_content) {
        this.book_id = book_id;
        this.book_name = book_name;
        this.book_description = book_description;
        this.book_image = book_image;
        this.book_content = book_content;
    }
}
