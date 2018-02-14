@@ -0,0 +1,27 @@
//Решето Эратосфена
function sumPrimes(num) {

  var list =[];
  for (var i = 2; i <= num; i++) {
 list[i] = true;
}
  var p=2;
  do {
    for (i=2*p;i <= num; i += p){
      list[i]=false;
    }
    for (i = p + 1; i <= num; i++) {
    if (list[i]) break;
  }
    p=i;
  } while (p*p<num);
  var sum=0;
  for (i=0;i<list.length;i++){
     if (list[i]) {
    sum += i;
  }
  }
  return sum;
}

sumPrimes(977);
