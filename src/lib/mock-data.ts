import { getIcon } from "@/components/ui/IconHelper";

export const MOCK_HERO = {
    title: "Tiếng Anh giao tiếp \n chuyên ngành xây dựng",
    images: [
        "https://lh3.googleusercontent.com/aida-public/AB6AXuCMURFziLh10NsWXUt3sXvUYRGfh_KHSFU73tSwFcIvuQVNnjTHINIPoDWk9ofMQ8fp6baSiIKloW36RFirhd-RCQyk-qoblC3fASM1tJ24HbxhU8fqMQEIvchHUVNUV5FqHG2IjAhTjAaji5dp5cXJ1Nr00xriHPGr9v5YVwp20okgv_GsW2nmoB-b_V7FNia7I20iNtSJDqqspuRTKiMMhajHG6doETgiaQJuV6mdA5tVH5vQWCqLnltNMnnQTznBpP-RjIMMVXg",
        "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=1920&q=80",
        "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=1920&q=80",
        "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1920&q=80"
    ]
};

export const MOCK_SERVICES = [
    { title: "Kỹ sư & Kiến trúc sư", image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=800&q=80", href: "/course-detail" },
    { title: "Quản lý dự án", image: "https://images.unsplash.com/photo-1504307651254-35680f3366d4?w=800&q=80", href: "/course-detail" },
    { title: "Sinh viên ngành xây dựng", image: "https://images.unsplash.com/photo-1523240715630-9917c2f1f6c3?w=800&q=80", href: "/course-detail" },
    { title: "Doanh nghiệp", image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80", href: "/course-detail" },
    { title: "Tư vấn thiết kế", image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80", href: "/course-detail" },
    { title: "Giám sát công trình", image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?w=800&q=80", href: "/course-detail" },
    { title: "Nhà thầu phụ", image: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?w=800&q=80", href: "/course-detail" },
    { title: "Kỹ sư M&E", image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=800&q=80", href: "/course-detail" },
    { title: "Kỹ sư QS", image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=80", href: "/course-detail" },
];

export const MOCK_WANTS = [
    { icon: "ArrowDownCircle", text: "Giao tiếp tự tin bằng tiếng Anh trong công việc", bg: "bg-[#edf6ff]" },
    { icon: "Package", text: "Nghe hiểu và thảo luận bằng tiếng Anh trong cuộc họp", bg: "bg-[#c6e1ff]" },
    { icon: "ArrowDownCircle", text: "Soạn thảo Email, báo cáo, văn bản bằng tiếng Anh hiệu quả", bg: "bg-[#9ecaff]" },
    { icon: "Loader", text: "Trình bày năng lực bằng tiếng Anh trong công việc, phỏng vấn", bg: "bg-[#5b85aa]" },
];

export const MOCK_DIFFICULTIES = [
    { icon: "Globe", text: "Không thể nghe, hiểu và trao đổi tiếng Anh trong các tình huống cuộc họp, phối hợp công trường", highlight: false },
    { icon: "Frown", text: "Lúng túng khi giao tiếp tiếng Anh với đồng nghiệp và đối tác nước ngoài vì vốn từ và kỹ năng hạn chế ...", highlight: false },
    { icon: "Mic", text: "Mặc dù có vốn từ vựng tiếng Anh chuyên ngành nhưng vẫn gặp khó khăn về nghe hiểu và giao tiếp", highlight: false },
    { icon: "CheckCircle", text: "Lệ thuộc vào các công cụ hỗ trợ và mất nhiều thời gian khi soạn thảo Email và văn bản tiếng Anh", highlight: false },
    { icon: "ArrowLeft", text: "Bỏ lỡ cơ hội thăng tiến trong sự nghiệp vì không đáp ứng được yêu cầu về ngoại ngữ", highlight: false },
    { icon: "RefreshCw", text: "Có thể giao tiếp tiếng Anh cơ bản, nhưng vẫn cần cải thiện kỹ năng thuyết trình thương thảo", highlight: false },
];

export const MOCK_SOLUTIONS = [
    { icon: "ArrowLeft", text: "Được học và thực hành giao tiếp tiếng Anh với mẫu câu, từ vựng chuyên ngành theo sát tình huống thực tế công việc" },
    { icon: "ArrowLeft", text: "Được xây dựng nền tảng phát âm và ngữ pháp căn bản thông qua lồng ghép và lặp lại trong mỗi bài học" },
    { icon: "RefreshCcw", text: "Được tiếp cận bài học với lộ trình, tốc độ và khối lượng kiến thức phù hợp cho người đi làm" },
    { icon: "RefreshCcw", text: "Được phát triển đầy đủ kỹ năng ngoại ngữ trong công việc, tập trung rèn luyện nghe nói, thuyết trình, thương thảo và soạn thảo Email, báo cáo" },
    { icon: "RefreshCcw", text: "Được xây dựng thói quen, khả năng tự học thông qua bài tập thực hành sau giờ học, kết hợp thuyết trình và đóng vai theo tình huống thực tế" },
];

export const MOCK_COURSES = [
    {
        type: "Trực tiếp tại \n Doanh Nghiệp",
        stats: { left: "3", leftLabel: "Modules", right: "36", rightLabel: "Bài học" },
        desc1: "Khóa học tiếng Anh giao tiếp chuyên ngành Xây dựng, Kiến trúc và Nội thất được <span class='text-[#3da9fc] font-bold'>thiết kế riêng cho đội ngũ nhân viên của Quý doanh nghiệp</span>, nhằm nâng cao kỹ năng giao tiếp thông qua việc bổ sung từ vựng chuyên ngành và mẫu câu giao tiếp thông dụng trong tình huống công việc thực tế.",
        desc2: "Với lộ trình học tập bài bản, học viên sẽ được đánh giá năng lực đầu vào, <span class='text-[#3da9fc] font-bold'>xây dựng tư duy đúng về việc học ngoại ngữ</span>, được <span class='text-[#3da9fc] font-bold'>“bắt đúng bệnh”</span> và <span class='text-[#3da9fc] font-bold'>tư vấn phương pháp tự học phù hợp với từng cá nhân</span>. Sau khoảng thời gian 6-9 tháng, học viên có thể bắt đầu tự tin giao tiếp và sử dụng tiếng Anh hiệu quả trong công việc.",
        modules: [
            { title: "Module 01", img: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?w=400&q=80" },
            { title: "Module 02", img: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=400&q=80" },
            { title: "Module 03", img: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=400&q=80" },
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
    { name: "Central Cons", img: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=800&q=80", sub: "Xây dựng chất lượng", desc: "Đối tác chiến lược trong đào tạo ngoại ngữ chuyên ngành.", logo: "Central" },
    { name: "Delta Corp", img: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=800&q=80", sub: "Phát triển bền vững", desc: "Chương trình đào tạo được thiết kế riêng cho từng bộ phận.", logo: "Delta" },
];

export const MOCK_TESTIMONIALS = [
    { text: "Khóa học thực sự rất thực tế. Tôi có thể áp dụng ngay những gì đã học vào các buổi họp với tư vấn giám sát.", handle: "Anh Tuấn", role: "Site Engineer", img: "https://i.pravatar.cc/150?u=1" },
    { text: "Giảng viên rất chuyên nghiệp và có kiến thức sâu về ngành xây dựng, điều này giúp việc học từ vựng dễ dàng hơn.", handle: "Chị Lan", role: "Project Manager", img: "https://i.pravatar.cc/150?u=2" },
    { text: "Lộ trình học linh hoạt, phù hợp với người đi làm bận rộn như tôi. Kết quả đạt được ngoài mong đợi.", handle: "Anh Hùng", role: "Architect", img: "https://i.pravatar.cc/150?u=3" },
    { text: "Môi trường học tập cởi mở, khuyến khích học viên nói và phát triển kỹ năng phản xạ.", handle: "Anh Dũng", role: "Structural Engineer", img: "https://i.pravatar.cc/150?u=4" },
    { text: "Các bài tập tình huống sát với thực tế giúp tôi tự tin hơn khi trao đổi email với đối tác nước ngoài.", handle: "Chị Mai", role: "QS Engineer", "img": "https://i.pravatar.cc/150?u=5" },
];
