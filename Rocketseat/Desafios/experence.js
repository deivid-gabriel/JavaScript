<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Desafio #3 da Rocketseat</title>
</head>
<body>
  <script>
    function experence(year) {
      if (year == 0 || year == 1) {
        return 'Iniciante';
      } else if (year > 1 && year <= 2) {
        return 'Intermediario';
      } else if (year >= 3 && year <= 4) {
        return 'Avançado';
      } else if (year >= 5 && year <= 6) {
        return 'Um mestre dos marios';
      } else if (year >= 7 && null) {
        return 'Um mextre dos canos';
      } else {
        return 'Não existi mais exprencia';
      }
    }
    var yearStudy = 7;
    console.log(experence(yearStudy));
  </script>
</body>
</html>