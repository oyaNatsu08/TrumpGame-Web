package com.example.TrumpGame.entity;

public class Player {
    //プレイヤー名
    String name;
    //取得したカード組数
    Integer getCard;

    Player(String name, int getCard) {
        this.name = name;
        this.getCard = getCard;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public int getGetCard() {
        return getCard;
    }

    public void setGetCard(int getCard) {
        this.getCard = getCard;
    }
}

