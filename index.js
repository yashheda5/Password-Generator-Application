const inputSlider=document.querySelector("[data-lengthSlider]")
const lengthdisplay=document.querySelector("[data-lengthNumber]")
const passwordDisplay=document.querySelector("[data-passwordDisplay]")
const copyBtn=document.querySelector(".btn")
const copyMsg=document.querySelector("[data-copyMsg]")
const uppercasecheck=document.querySelector("#uppercase")
const lowercasecheck=document.querySelector("#lowercase")
const numbercheck=document.querySelector("#numbers")
const symbolcheck=document.querySelector("#symbols")
const indicator =document.querySelector("data-strength-indicator")
const generatebtn =document.querySelector(".generateButton")
const allcheckbox =document.querySelector("input[type=checkbox]")

let password=""
let passwordLength=10
let checkcount=1