import * as Yup from 'yup';

export function validateForm(formId) {
    const schema = Yup.object().shape({
        name: Yup.string().matches(/^[A-Za-zА-Яа-яЁё\s\-]+$/, "Введите правильное ФИО").required("Это поле обязательно"),
        phone: Yup.string().matches(/^(?:\+7|7|8)?[\s\-]?\d{3}[\s\-]?\d{3}[\s\-]?\d{2}[\s\-]?\d{2}$/, "Введите телефон в правильном формате").min(11, "Телефон должен содержать не менее 11 символов").required("Это поле обязательно"),
        email: Yup.string().email("Введите правильный E-mail").optional(),
        message: Yup.string().optional()
    });

    const form = document.getElementById(formId);

    form.addEventListener("submit", async function (event) {
        event.preventDefault();

        const data = {
            name: document.getElementById("name").value,
            phone: document.getElementById("phone").value,
            email: document.getElementById("email").value,
            message: document.getElementById("message").value
        };

        const inputFields = document.querySelectorAll("input, textarea");
        inputFields.forEach(input => input.classList.remove("error")); 

        try {
            await schema.validate(data, { abortEarly: false });
            alert('Форма отправлена')

            form.reset(); 

        } catch (error) {
            error.inner.forEach(err => {
                const field = document.getElementById(err.path);
                field.classList.add("error"); 
            });
        }
    });
}
