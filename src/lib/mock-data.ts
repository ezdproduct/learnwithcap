import { getIcon } from "@/components/ui/IconHelper";

export const MOCK_HERO = {
    title: "Tiếng Anh giao tiếp \n chuyên ngành xây dựng",
    images: [
        "https://lh3.googleusercontent.com/aida-public/AB6AXuCMURFziLh10NsWXUt3sXvUYRGfh_KHSFU73tSwFcIvuQVNnjTHINIPoDWk9ofMQ8fp6baSiIKloW36RFirhd-RCQyk-qoblC3fASM1tJ24HbxhU8fqMQEIvchHUVNUV5FqHG2IjAhTjAaji5dp5cXJ1Nr00xriHPGr9v5YVwp20okgv_GsW2nmoB-b_V7FNia7I20iNtSJDqqspuRTKiMMhajHG6doETgiaQJuV6mdA5tVH5vQWCqLnltNMnnQTznBpP-RjIMMVXg",
        "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=1920&q=80",
        "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=1920&q=80",
        "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1920&q=80"
    ]
};

export const MOCK_SERVICES = [
    { title: "Kỹ sư & Kiến trúc sư", image: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=800&q=80", href: "/course-detail" },
    { title: "Quản lý dự án", image: "https://images.unsplash.com/photo-1504307651254-35680f3366d4?w=800&q=80", href: "/course-detail" },
    { title: "Sinh viên ngành xây dựng", image: "https://images.unsplash.com/photo-1523240715630-9917c2f1f6c3?w=800&q=80", href: "/course-detail" },
    { title: "Doanh nghiệp", image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80", href: "/course-detail" },
    { title: "Tư vấn thiết kế", image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=800&q=80", href: "/course-detail" },
    { title: "Giám sát công trình", image: "https://images.unsplash.com/photo-1504307651254-35680f3366d4?w=800&q=80", href: "/course-detail" },
    { title: "Nhà thầu phụ", image: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=800&q=80", href: "/course-detail" },
];

export const MOCK_WANTS = [
    { icon: "Mic", text: "Giao tiếp tự tin với đối tác quốc tế", bg: "bg-[#e3f2fd]" },
    { icon: "Briefcase", text: "Thăng tiến sự nghiệp trong ngành", bg: "bg-[#f3e5f5]" },
    { icon: "Globe", text: "Làm việc tại các tập đoàn nước ngoài", bg: "bg-[#e8f5e9]" },
    { icon: "CheckCircle", text: "Đọc hiểu tài liệu kỹ thuật chuẩn", bg: "bg-[#fff3e0]" },
];

export const MOCK_DIFFICULTIES = [
    { icon: "Frown", text: "Mất gốc tiếng Anh căn bản", highlight: false },
    { icon: "Clock", text: "Lịch làm việc bận rộn, xoay ca", highlight: false },
    { icon: "MicOff", text: "Sợ phát âm sai, ngại nói", highlight: true },
    { icon: "Package", text: "Thiếu từ vựng chuyên môn", highlight: false },
    { icon: "Ear", text: "Không nghe được đối tác nói gì", highlight: false },
    { icon: "RefreshCcw", text: "Học mãi không lên trình", highlight: false },
];

export const MOCK_SOLUTIONS = [
    { icon: "Rocket", text: "Lộ trình học tập cá nhân hóa 1-1" },
    { icon: "Hammer", text: "Giáo trình sát với thực tế công trường" },
    { icon: "GraduationCap", text: "Giảng viên là chuyên gia nhiều kinh nghiệm" },
    { icon: "MessageSquare", text: "Hỗ trợ sửa lỗi phát âm và viết mail 24/7" },
    { icon: "Plus", text: "Cộng đồng kỹ sư xây dựng lớn mạnh" },
];

export const MOCK_COURSES = [
    {
        type: "Tiếng Anh Giao Tiếp \n Chuyên Ngành Xây Dựng",
        stats: { left: "12", leftLabel: "TUẦN HỌC", right: "24", rightLabel: "CHỦ ĐỀ" },
        desc1: "Khóa học tập trung vào các tình huống thực tế tại công trường, từ họp giao ban đến báo cáo kỹ thuật.",
        desc2: "Giúp bạn làm chủ các cấu trúc câu đặc thù và từ vựng chuyên sâu ngành kiến trúc - xây dựng.",
        modules: [
            { title: "Meeting", img: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?w=400&q=80" },
            { title: "Site Tour", img: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=400&q=80" },
            { title: "Safety", img: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=400&q=80" },
            { title: "Material", img: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=400&q=80" },
            { title: "Contract", img: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=400&q=80" },
            { title: "Design", img: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=400&q=80" },
            { title: "Survey", img: "https://images.unsplash.com/photo-1590487988256-9ed24133863e?w=400&q=80" },
            { title: "Renovation", img: "https://images.unsplash.com/photo-1484154218962-a197022b5858?w=400&q=80" },
        ]
    }
];

export const MOCK_CLIENTS = [
    { name: "Coteccons", img: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80", sub: "Tập đoàn xây dựng hàng đầu", desc: "Đã đào tạo hơn 500 kỹ sư tại các dự án trọng điểm trên toàn quốc.", logo: "CTD" },
    { name: "Hoa Binh Corp", img: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=800&q=80", sub: "Nhà thầu uy tín", desc: "Nâng cao năng lực giao tiếp quốc tế cho đội ngũ quản lý từ năm 2020.", logo: "HBC" },
];

export const MOCK_TESTIMONIALS = [
    { text: "Khóa học thực sự rất thực tế. Tôi có thể áp dụng ngay những gì đã học vào các buổi họp với tư vấn giám sát.", handle: "Anh Tuấn", role: "Site Engineer", img: "https://i.pravatar.cc/150?u=1" },
    { text: "Giảng viên rất chuyên nghiệp và có kiến thức sâu về ngành xây dựng, điều này giúp việc học từ vựng dễ dàng hơn.", handle: "Chị Lan", role: "Project Manager", img: "https://i.pravatar.cc/150?u=2" },
    { text: "Lộ trình học linh hoạt, phù hợp với người đi làm bận rộn như tôi. Kết quả đạt được ngoài mong đợi.", handle: "Anh Hùng", role: "Architect", img: "https://i.pravatar.cc/150?u=3" },
    { text: "Môi trường học tập cởi mở, khuyến khích học viên nói và phát triển kỹ năng phản xạ.", handle: "Anh Dũng", role: "Structural Engineer", img: "https://i.pravatar.cc/150?u=4" },
];
