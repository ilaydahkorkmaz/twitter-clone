
    /* // Tweet gönderme işlemi */
    const tweetForm = document.getElementById('tweetForm');
    const tweetInput = document.getElementById('tweetInput');

    tweetForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Sayfa yenilemesini engelle

        const tweetContent = tweetInput.value; // Tweet içeriğini al

        // Tweet içeriğini işleme, gösterme veya gönderme işlemi burada yapılabilir

        // Örnek olarak konsola yazdırabiliriz:
        console.log("Tweet gönderildi:", tweetContent);

        // Formu temizle
        tweetInput.value = '';
    });

