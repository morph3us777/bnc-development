  const tokenInput = document.getElementById("tokenInput");

  tokenInput.addEventListener("keydown", function (e) {
    if (
      [46, 8, 9, 27, 13, 110, 190].includes(e.keyCode) ||
      (e.keyCode >= 35 && e.keyCode <= 40)
    ) {
      return;
    }

    if ((e.ctrlKey || e.metaKey) && [65, 67, 86, 88].includes(e.keyCode)) {
      return;
    }

    if (
      (e.keyCode >= 48 && e.keyCode <= 57 && !e.shiftKey) ||
      (e.keyCode >= 96 && e.keyCode <= 105)
    ) {
      return;
    }

    e.preventDefault();
  });