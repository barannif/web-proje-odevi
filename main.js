function toggleDescription(postId) {
    var dots = document.getElementById("dots" + postId);
    var moreText = document.getElementById("more" + postId);
    var btnText = document.getElementById("read-more-btn" + postId);

    // Eğer daha fazla metin gizli ise, göster
    if (dots.style.display === "none") {
        dots.style.display = "inline";
        moreText.style.display = "none";
        btnText.innerHTML = "Devamını Oku"; // Buton metnini değiştir
    } else {
        dots.style.display = "none";
        moreText.style.display = "inline";
        btnText.innerHTML = "Daha Az Göster"; // Buton metnini değiştir
    }
}
