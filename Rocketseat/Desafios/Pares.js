<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Desafio #2 da Rocketseat</title>
</head>
<body>
  <script>
    var pare = [];
    function pares(x, y) {
      while(x <= y) {
        if ((x%4) == 0) {
          pare.push(x);
        }
        x++;
      }
    }
    pares(32, 321);
    console.log(pare);
  </script>
</body>
</html>