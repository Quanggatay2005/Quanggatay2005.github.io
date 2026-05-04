// ==========================================
// Language Translation Dictionary
// ==========================================
const translations = {
    vi: {
        nav_about: "1. Giới thiệu",
        nav_education: "2. Học vấn",
        nav_skills: "3. Kỹ năng",
        nav_projects: "4. Dự án",
        nav_certificates: "5. Chứng chỉ",

        hero_name: "Dang Minh Quang",
        hero_role: "Backend Developer & AI Engineer",
        hero_desc1: "Tôi là sinh viên ngành Khoa học máy tính với niềm đam mê mãnh liệt dành cho Trí tuệ nhân tạo (AI) và Backend. Định hướng của tôi là xây dựng các hệ thống backend mạnh mẽ, bảo mật cao và tích hợp các mô hình AI để giải quyết các bài toán kỹ thuật phức tạp.",
        hero_desc2: "Tôi luôn đề cao tư duy hệ thống và viết ra những dòng code tối ưu nhất.",
        hero_cv_btn: "Tải CV của tôi",

        edu_title: "Học vấn",
        edu_school: "Đại học Bách Khoa TP.HCM (HCMUT)",
        edu_date: "09/2023 - 06/2027 (Dự kiến)",
        edu_degree: "Cử nhân Khoa học Máy tính (Chuyên ngành Trí tuệ Nhân tạo)",
        edu_courses_label: "Môn học tiêu biểu:",
        edu_courses: "Cấu trúc dữ liệu & Giải thuật, Hệ cơ sở dữ liệu, Machine Learning, Lập trình cho KHDL và Trí tuệ nhân tạo",

        skills_title: "Kỹ năng chuyên môn",
        skills_lang: "Ngôn ngữ",
        skills_backend: "Backend",
        skills_tools: "Các công cụ khác",

        projects_title: "Dự án tiêu biểu",
        proj1_title: "Ứng dụng AI trong phân tích rò rỉ dữ liệu",
        proj_personal: "Cá nhân",
        proj1_desc1: "Thiết kế và huấn luyện kiến trúc Autoencoder để phát hiện rò rỉ dữ liệu.",
        proj1_desc2: "Tối ưu hóa hàm mất mát (loss function) và <b>ngưỡng lỗi tái thiết</b> (reconstruction error threshold), giúp phát hiện thành công <b>94.4%</b> các luồng dữ liệu rò rỉ mô phỏng mà không cần gán nhãn dữ liệu trước.",
        proj1_desc3: "Xây dựng pipeline tiền xử lý dữ liệu và huấn luyện mô hình bằng Python và <b>TensorFlow/PyTorch</b>, xử lý <b>hơn 200MB</b> dữ liệu thô để trích xuất các đặc trưng (features) quan trọng.",
        proj_code_btn: "Xem Source Code",

        proj2_title: "Ứng dụng AI trong việc chẩn đoán CVD",
        proj2_desc1: "Xây dựng pipeline xử lý dataset lớn (>1GB) BRFSS 2022 của CDC để phân tích và dự đoán xác suất mắc CVD.",
        proj2_desc2: "Triển khai backend FastAPI, frontend Streamlit và container hóa bằng Docker.",
        proj2_desc3: "So sánh hiệu suất các mô hình ML: LightGBM, Random Forest và SVM.",
        proj2_desc4: "Xử lý data streaming quy mô lớn sử dụng PySpark, Kafka và MapReduce.",

        cert_title: "Chứng chỉ",
        cert_status: "Đã hoàn thành",
        cert_desc: "Khóa học chuyên sâu về phát triển mã khai thác lỗ hổng bảo mật, củng cố nền tảng kiến thức cho định hướng Reverse Engineering và An toàn thông tin.",
        cert_score: "Điểm: <b>815</b>",

        footer_text: "Portfolio."
    },
    en: {
        nav_about: "1. About",
        nav_education: "2. Education",
        nav_skills: "3. Skills",
        nav_projects: "4. Projects",
        nav_certificates: "5. Certificates",

        hero_name: "Dang Minh Quang",
        hero_role: "Backend Developer & AI Engineer",
        hero_desc1: "I am a Computer Science student with a strong passion for Artificial Intelligence (AI) and Backend development. My goal is to build robust, highly secure backend systems and integrate AI models to solve complex engineering problems.",
        hero_desc2: "I always value systems thinking and strive to write the most optimized code.",
        hero_cv_btn: "Download my CV",

        edu_title: "Education",
        edu_school: "Ho Chi Minh City University of Technology (HCMUT)",
        edu_date: "09/2023 - 06/2027 (Expected)",
        edu_degree: "Bachelor of Computer Science (Major: Artificial Intelligence)",
        edu_courses_label: "Key Courses:",
        edu_courses: "Data Structures & Algorithms, Database Systems, Machine Learning, Programming for Data Science and AI",

        skills_title: "Professional Skills",
        skills_lang: "Languages",
        skills_backend: "Backend",
        skills_tools: "Other Tools",

        projects_title: "Highlighted Projects",
        proj1_title: "AI Application in Data Leakage Analysis",
        proj_personal: "Personal",
        proj1_desc1: "Designed and trained an Autoencoder architecture to detect data leaks.",
        proj1_desc2: "Optimized the loss function and <b>reconstruction error threshold</b>, successfully detecting <b>94.4%</b> of simulated leaked data streams without prior data labeling.",
        proj1_desc3: "Built a data preprocessing pipeline and trained models using Python and <b>TensorFlow/PyTorch</b>, processing <b>over 200MB</b> of raw data to extract essential features.",
        proj_code_btn: "View Source Code",

        proj2_title: "AI Application in CVD Diagnosis",
        proj2_desc1: "Built a pipeline to process a large dataset (>1GB) from CDC's BRFSS 2022 to analyze and predict the probability of Cardiovascular Disease (CVD).",
        proj2_desc2: "Deployed a FastAPI backend, Streamlit frontend, and containerized using Docker.",
        proj2_desc3: "Compared the performance of ML models: LightGBM, Random Forest, and SVM.",
        proj2_desc4: "Processed large-scale data streaming using PySpark, Kafka, and MapReduce.",

        cert_title: "Certificates",
        cert_status: "Completed",
        cert_desc: "In-depth course on developing exploit code for security vulnerabilities, solidifying fundamental knowledge for Reverse Engineering and Information Security.",
        cert_score: "Score: <b>815</b>",

        footer_text: "Portfolio."
    }
};

// ==========================================
// Language Toggle Logic
// ==========================================
const btnVi = document.getElementById('lang-vi');
const btnEn = document.getElementById('lang-en');
const cvBtn = document.getElementById('cv-btn');

// Dummy Drive links for CVs
const cvLinks = {
    vi: "https://drive.google.com/drive/u/1/folders/1egt_x5H4cqZ5YLustuhh9_F31FEB-3JZ",
    en: "https://drive.google.com/drive/u/1/folders/1egt_x5H4cqZ5YLustuhh9_F31FEB-3JZ"
};

function setLanguage(lang) {
    // Save to local storage
    localStorage.setItem('preferredLang', lang);

    // Update active button styling
    if (lang === 'vi') {
        btnVi.classList.add('active');
        btnEn.classList.remove('active');
    } else {
        btnEn.classList.add('active');
        btnVi.classList.remove('active');
    }

    // Update CV link
    if (cvBtn) {
        cvBtn.href = cvLinks[lang];
    }

    // Update text content
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (translations[lang] && translations[lang][key]) {
            // Use innerHTML so HTML tags (like <b>) in translations work
            element.innerHTML = translations[lang][key];
        }
    });
}

// Event Listeners for toggle
btnVi.addEventListener('click', () => setLanguage('vi'));
btnEn.addEventListener('click', () => setLanguage('en'));

// Initialize language on load
document.addEventListener('DOMContentLoaded', () => {
    const savedLang = localStorage.getItem('preferredLang') || 'vi';
    setLanguage(savedLang);
});


// ==========================================
// Scroll Animations (Intersection Observer)
// ==========================================
const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.15 // Trigger when 15% of the section is visible
};

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
            // Stop observing once shown
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe all sections with class .hidden
document.addEventListener('DOMContentLoaded', () => {
    const hiddenElements = document.querySelectorAll('.hidden');
    hiddenElements.forEach((el) => observer.observe(el));
});
