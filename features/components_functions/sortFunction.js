module.exports = {
  OrdenPalabraAscendente: function(a,b){
    if (a.value < b.value) {
      return 1;
    }
    if (a.value > b.value) {
      return -1;
    }
    return 0;
  },
  compareNumbersDes: function (a, b) {
    return a - b;
  },
  compareNumbersAs:function (a, b) {
    return b - a;
  }
}
