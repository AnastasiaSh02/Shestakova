document.addEventListener('DOMContentLoaded', () =>
{
    const form = document.querySelector('.forms');

    form.addEventListener('submit', (event) => 
    {
        event.preventDefault(); 

        let isValid = true; 
        let errors = []; // Список ошибок

        // Проверка имени
        const nameField = form.querySelector('input[name="name"]');
        const namePattern = /^[a-zA-Zа-яА-ЯёЁ\s-]+$/; 
        if (!nameField.value.trim()) {
            isValid = false;
            errors.push('Введите ваше имя.');
        } else if (!namePattern.test(nameField.value.trim())) {
            isValid = false;
            errors.push('Имя должно содержать только буквы и пробелы.');
        } else if (nameField.value.length < 2 || nameField.value.length > 50) {
            isValid = false;
            errors.push('Имя должно быть длиной от 2 до 50 символов.');
        }

        // Проверка телефона
        const phoneField = form.querySelector('input[name="phone"]');
        const phonePattern = /^\+?[0-9\s\-\(\)]{10,20}$/;
        if (!phonePattern.test(phoneField.value.trim())) {
            isValid = false;
            errors.push('Введите корректный номер телефона (10-20 символов).');
        }

        // Проверка модели телефона
        const modelField = form.querySelector('select[name="model"]');
        if (!modelField.value) {
            isValid = false;
            errors.push('Выберите модель телефона.');
        }

        // Проверка цвета
        const colorFields = form.querySelectorAll('input[name="color"]');
        const selectedColor = [...colorFields].find(field => field.checked)?.value;
        if (!selectedColor) {
            isValid = false;
            errors.push('Выберите цвет телефона.');
        }

        // Проверка даты доставки
        const dateField = form.querySelector('input[name="delivery_date"]');
        if (!dateField.value) {
            isValid = false;
            errors.push('Выберите дату доставки.');
        }

        // Проверка количества телефонов
        const quantityField = form.querySelector('input[name="quantity"]');
        if (!quantityField.value || quantityField.value < 1 || quantityField.value > 10) {
            isValid = false;
            errors.push('Количество телефонов должно быть от 1 до 10.');
        }
        // Проверка галочки на упаковку
        const giftWrapField = form.querySelector('input[name="gift_wrap"]');
        const giftWrap = giftWrapField.checked ? 'Да' : 'Нет';

        let errorContainer = document.querySelector('.error-messages');
        if (!errorContainer) {
            errorContainer = document.createElement('div');
            errorContainer.className = 'error-messages';
            errorContainer.style.color = 'red';
            errorContainer.style.marginTop = '10px';
            form.insertAdjacentElement('beforebegin', errorContainer);
        }

        errorContainer.innerHTML = '';

        if (!isValid) 
        {
            errorContainer.innerHTML = errors.join('<br>');
        } 
        else 
        {
            const message = `
                Ваш заказ успешно оформлен!
                
                -----------------------------
                Имя: ${nameField.value}
                Телефон: ${phoneField.value}
                Модель: ${modelField.value}
                Цвет: ${selectedColor}
                Дата доставки: ${dateField.value}
                Количество: ${quantityField.value}
                Упаковываем в красивую коробку 🎁: ${giftWrap}

                Спасибо, что используете этот сайт)`;
            alert(message);
            form.reset(); 
            errorContainer.innerHTML = 'Форма успешно отправлена!';
        }
    });


    // Анимация кнопки оформления заказа
    const orderButton = document.querySelector('.btn1');
    orderButton.addEventListener('mouseover', () => 
    {
        orderButton.style.backgroundColor = 'rgb(231, 95, 118)';
        orderButton.style.boxShadow = '0 0 20px rgb(231, 95, 118)';
        orderButton.style.transform = 'scale(1.1)';
    });

    orderButton.addEventListener('mouseout', () => 
    {
        orderButton.style.backgroundColor = '';
        orderButton.style.boxShadow = '';
        orderButton.style.transform = '';
    });

    // Анимация для изображения телефона
    const phoneImage = document.querySelector('.form-image img');
    phoneImage.addEventListener('click', () => 
    {
        phoneImage.style.transition = 'transform 0.6s ease';
        phoneImage.style.transform = 'rotate(360deg) scale(1.2)';
        setTimeout(() => 
        {
            phoneImage.style.transform = '';
        }, 600);
    });

    const giftWrapField = form.querySelector('input[name="gift_wrap"]');
    giftWrapField.addEventListener('change', function() {
        var emoji = document.getElementById('emoji');
        if (this.checked) {
            emoji.style.display = 'inline';  
        } else {
            emoji.style.display = 'none'; 
        }
    });
});
