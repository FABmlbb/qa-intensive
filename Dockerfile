# Официальный образ Playwright с уже установленными браузерами
FROM mcr.microsoft.com/playwright:v1.56.0-jammy

WORKDIR /app

# Копируем только package* для кеширования установки
COPY package*.json ./

# Чистая установка зависимостей (быстрее и повторяемо)
RUN npm ci

# Копируем остальной проект
COPY . .

# Гарантируем наличие браузеров и системных deps (на всякий)
RUN npx playwright install --with-deps

# По умолчанию запускать тесты (репортёры берутся из playwright.config.js)
CMD ["npx", "playwright", "test"]