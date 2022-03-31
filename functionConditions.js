function window(num){
  if (num == 1){
    return "first floor window";
  }
  else if (num == 2){
    return "second floor window";
  }
  else if (num ==3){
    return "third floor window";
  }
  else{
    return "there are no windows on that floor";
  }
}

console.log(window(1));
console.log(window(2));
console.log(window(3));
