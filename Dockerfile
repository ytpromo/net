# استفاده از ایمیج سبک Node.js
FROM hub.megan.ir/node:20-alpine

# تنظیم پوشه‌ی کاری
WORKDIR /usr/src/app

# کپی فایل‌های package
COPY package*.json ./

# نصب وابستگی‌ها (فقط برای محیط production)
RUN npm instal
# کپی باقی کدها
COPY . .

# باز کردن پورت 5173
EXPOSE 5173

# اجرای برنامه
CMD ["npm", "run", "dev"]
