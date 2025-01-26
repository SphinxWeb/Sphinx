// دالة لتخزين اسم المستخدم وعرض رسالة الترحيب
function storeUsername() {
    // الحصول على اسم المستخدم من حقل الإدخال
    const username = document.getElementById("username").value;

    // التحقق من أن المستخدم أدخل اسماً
    if (username.trim() !== "") {
        // تخزين الاسم في localStorage حتى يتم استخدامه في الصفحات الأخرى
        localStorage.setItem("username", username);

        // عرض اسم المستخدم في مكان الرسالة
        displayUsername();
    }
}

// دالة لعرض اسم المستخدم المحفوظ
function displayUsername() {
    // الحصول على الاسم من localStorage
    const username = localStorage.getItem("username");

    if (username) {
        // عرض رسالة الترحيب وإخفاء قسم الإدخال
        document.getElementById("welcome-section").style.display = "none";
        document.getElementById("welcome-message").style.display = "block";

        // وضع اسم المستخدم في الرسالة
        document.getElementById("display-username").textContent = username;
    }
}

// عرض اسم المستخدم عند تحميل الصفحة إذا كان محفوظاً مسبقاً
window.onload = displayUsername;


// استهداف جميع الأزرار في الصفحة
document.querySelectorAll('button').forEach(button => {
    button.addEventListener('click', function (e) {
        // إنشاء عنصر التأثير
        const effect = document.createElement('span');
        effect.classList.add('click-effect');
        
        // تحديد مكان النقر بالنسبة للزر
        const x = e.clientX - e.target.offsetLeft;
        const y = e.clientY - e.target.offsetTop;
        
        // تعيين موقع التأثير
        effect.style.left = `${x}px`;
        effect.style.top = `${y}px`;
        
        // إضافة التأثير إلى الزر
        e.target.appendChild(effect);
        
        // إزالة التأثير بعد انتهاء الحركة
        setTimeout(() => {
            effect.remove();
        }, 600);
    });
});
