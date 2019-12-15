package com.zygimantus.app.calculator.model;

public class Message {

    private String name;

    public Message(final String name) {

        this.name = name + ", thanks so much for clicking the button! You really do love me!";
    }

    public String getName() {

        return name;
    }

    public void setName(final String name) {

        this.name = name;
    }

}