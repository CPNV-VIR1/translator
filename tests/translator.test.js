/**
 * @file      translator.test.js
 * @brief     Unit tests for the translation worker
 * @author    Created by Vivien.Piccin
 * @version   08-03-2023 - original
 */
"use strict";

const app = require('../index');
const request = require('supertest')

test('Translation returns consistent result', done => {
    //given
    const languageToTranslateTo = "ip";
    const textToTranslate = "My super awesome text";
    const expectedOutputText = "vitae super awesome text";

    //when
    //Assertion will trigger the events

    //then
    request(app)
        .post('/translate')
        .send({language: languageToTranslateTo, text: textToTranslate})
        .expect('Content-Type', /text\/html/)
        .expect(expectedOutputText)
        .expect(200, done);
})

test('Translate to unknown language returns original prompt', done => {
    //given
    const languageToTranslateTo = "rr";
    const textToTranslate = "My super awesome text";
    const expectedOutputText = "My super awesome text";

    //when
    //Assertion will trigger the events

    //then
    request(app)
        .post('/translate')
        .send({language: languageToTranslateTo, text: textToTranslate})
        .expect('Content-Type', /text\/html/)
        .expect(expectedOutputText)
        .expect(200, done);
})

test('Translate with empty payload returns bad request (400)', done => {
    //given

    //when
    //Assertion will trigger the events

    //then
    request(app)
        .post('/translate')
        .expect(400, done);
})