package com.example.TrumpGame.service;

import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Collections;

@Service
public class Trump implements CardGame {
    //トランプのデッキ
    ArrayList<String> deck;

    public Trump() {
        //デッキを作成
        createDeck();
        //デッキをシャッフル
        shuffle();
        //deck.forEach(System.out::println);
    }

    @Override
    public void createDeck() {
        //デッキを初期化
        deck = new ArrayList<>();
        //トランプのマーク
        String[] marks = {"スペード", "クラブ", "ダイヤ", "ハート"};
        //トランプの数字
        int[] nums = {1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13};
        //デッキに格納
        for (String mark : marks) {
            for (int num : nums) {
                deck.add(mark + num);
            }
        }
    }

    @Override
    public void shuffle() {
        //リストをランダムに並べ替え
        Collections.shuffle(deck);
    }
}
