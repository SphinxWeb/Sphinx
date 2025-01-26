// developed by zeyad zaran (: 'o' ^[]^ *+*

document.addEventListener("DOMContentLoaded", function() {
    ScrollReveal().reveal(' footer, header, section, p, h1, h2, h3, li, ul, input, label, img', {
    distance: '50px',
    origin: 'bottom',
    opacity: 0,
    duration: 800,
    delay: 400
    });
});

let index = 0;
const slides = document.querySelectorAll('.slides img');
const next = document.querySelector('.next');
const prev = document.querySelector('.prev');
const slidesContainer = document.querySelector('.slides');

function showSlide(n) {
index = (n + slides.length) % slides.length; 
  const offset = -index * 100;
slidesContainer.style.transform = `translateX(${offset}%)`;  
}

next.addEventListener('click', () => showSlide(index + 1));
prev.addEventListener('click', () => showSlide(index - 1));

showSlide(index);

const intervalTime = 3000; 

function showSlide(n) {
index = (n + slides.length) % slides.length;
  const offset = -index * 100;
slidesContainer.style.transform = `translateX(${offset}%)`;
}

function startAutoSlide() {
autoSlide = setInterval(() => showSlide(index + 1), intervalTime);
}

function stopAutoSlide() {
clearInterval(autoSlide);
}

startAutoSlide();

slidesContainer.addEventListener('mouseenter', stopAutoSlide);
slidesContainer.addEventListener('mouseleave', startAutoSlide);

document.querySelectorAll(".f-q").forEach((question) => {
    question.addEventListener("click", () => {
    const answer = question.nextElementSibling;
    
      // Toggle display style for the answer
    if (answer.style.display === "block") {
        answer.style.display = "none";
    } else {
        answer.style.display = "block";
    }
    });
});


        // إنشاء عنصر صوت وربط ملف الصوت به
        const audio = new Audio('audio/audiomass-output.mp3'); // استبدل المسار بالمسار الصحيح لملف الصوت

        // دالة لتشغيل الصوت
        function playSound() {
            audio.play();
        }

        // دالة لإيقاف الصوت
        function stopSound() {
            audio.pause();
            audio.currentTime = 0; // تعيد الصوت إلى البداية
        }

        // تشغيل الصوت عند النقر في أي مكان في الصفحة
        document.addEventListener('click', playSound);






console.log("welcom in %cSphinx web", "font-size: 40px;background-color:white ;color:#213165; display:block; padding:20px; border-radius:10px; font-family:arial")
console.log("%cWe are a leading web development company offering innovative digital solutions using the latest technologies.", "font-size: 30px;background-color:#213165 ; color:white; display:block; padding:20px; border-radius:10px;font-family:arial")
console.log("%cOur Services", "font-size: 40px;background-color:white ;color:#213165; display:block; padding:20px; border-radius:10px; font-family:arial")
console.log("%cWebsite Development","font-size: 30px;background-color:white ;color:#213165; display:block; padding:20px; border-radius:10px; font-family:arial")
console.log("%cHigh-quality websites tailored to your business needs.", "font-size: 30px;background-color:#213165 ; color:white; display:block; padding:20px; border-radius:10px;font-family:arial")
console.log("%cMobile App Development","font-size: 30px;background-color:white ;color:#213165; display:block; padding:20px; border-radius:10px; font-family:arial")
console.log("%cResponsive and user-friendly mobile applications.","font-size: 30px;background-color:#213165 ; color:white; display:block; padding:20px; border-radius:10px;font-family:arial")
console.log("%cProjects services", "font-size: 40px;background-color:white ;color:#213165; display:block; padding:20px; border-radius:10px; font-family:arial")
console.log("%cProject Management", "font-size: 30px;background-color:white ;color:#213165; display:block; padding:20px; border-radius:10px; font-family:arial")
console.log("%cProject Management: An Overview Project management is the systematic process of planning, executing, and overseeing projects from initiation to completion. It involves defining project objectives, establishing a timeline, and allocating the necessary resources to achieve desired outcomes. By employing effective project management strategies, organizations can ensure that projects are completed on time, within budget, and to the satisfaction of stakeholders. ", "font-size: 30px;background-color:#213165 ; color:white; display:block; padding:20px; border-radius:10px;font-family:arial")
console.log("%cWebsite security", "font-size: 30px;background-color:white ;color:#213165; display:block; padding:20px; border-radius:10px; font-family:arial")
console.log("%cWebsite security is crucial for protecting sensitive data and maintaining user trust. It involves measures to defend against cyber threats like hacking and malware. Key components include SSL certificates for data encryption and regular software updates to fix vulnerabilities. Strong password policies and two-factor authentication enhance account security. Educating users about phishing scams is also important. Prioritizing website security helps safeguard assets and build confidence with users.","font-size: 30px;background-color:#213165 ; color:white; display:block; padding:20px; border-radius:10px;font-family:arial")
console.log("%cContact Us", "font-size: 40px;background-color:white ;color:#213165; display:block; padding:20px; border-radius:10px; font-family:arial")
console.log("%cEmail: zeyadzahran56@gmail.com","font-size: 30px;background-color:#213165 ; color:white; display:block; padding:20px; border-radius:10px;font-family:arial")
console.log("%cPhone: +20 11 5666 0435", "font-size: 30px;background-color:#213165 ; color:white; display:block; padding:20px; border-radius:10px;font-family:arial")
console.log("%c2024 All Rights Reserved developer: Zeyad Zahran","font-size: 30px;background-color:#213165 ; color:white; display:block; padding:20px; border-radius:10px;font-family:arial")
console.log("%cShpinx", "font-size: 40px;background-color:white ;color:#213165; display:block; padding:20px; border-radius:10px; font-family:cursive")