# استفاده از ایمیج سبک Node.js
FROM hub.megan.ir/node:20-alpine

# تنظیم پوشه‌ی کاری
WORKDIR /usr/src/app

# کپی فایل‌های package
COPY package*.json ./

# نصب وابستگی‌ها (فقط برای محیط production)
RUN npm ci --omit=dev

# کپی باقی کدها
COPY . .

# تنظیم متغیر محیطی
ENV NODE_ENV=production

# باز کردن پورت 5173
EXPOSE 5173

# اجرای برنامه
CMD ["npm", "start"]
