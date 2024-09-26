function Error() {
    return (
        <div class="error">
        <div class="container">
            <h3 class="error-title">Произошла ошибка</h3>
            <p class="error-description">Проверьте подключение к интернету. Возможно сервер отключился или временно не работает.</p>
            <link to="/" class="white-btn">Обновить</link>
        </div>
    </div>
    );
}

export default Error