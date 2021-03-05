$(function() {
    $('#name').change(function() {　
        let $text = $('#name').val();
        let length = $text.length;
        if (length >= 20) {
            alert('文字は20文字以内で入力してください');
            $('#name').val('');
        }
        return (false);
    });

    $('#nameForm').submit(function() {
        let $name = $('#name').val();
        alert($name);
        return (false);
    });

    $('#messageForm').submit(function() {
        let $message = $('#messageInput').val();
        $('#messageList').append(`<li>${$message}</li>`);
        $('#messageInput').val('');
        return false;
    });

    $('#greetingButton').click(function() {
        if ($('#greetingLine').hasClass('displaying')) {
            $('#greetingLine').hide('slow');
            $('#greetingLine').removeClass('displaying');
        } else {
            $('#greetingLine').show('slow');
            $('#greetingLine').addClass('displaying');
        }
    });

    $('#colorChangeButton').click(function() {
        $('#colorChange').toggleClass('color-red')
    });

    $('#right').click(function() {
        $('#moveText').addClass('text-right');
    });
    $('#left').click(function() {
        $('#moveText').removeClass('text-right');
    });
});