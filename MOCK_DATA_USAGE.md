# Mock Data Usage Report

## 📊 Tình Trạng Sử Dụng Mock Data

### ✅ Mock Data Hiện Tại (Chỉ Dùng Làm Fallback)

Mock data **CHỈ** được sử dụng khi Supabase không trả về dữ liệu. Đây là cách tốt nhất để đảm bảo ứng dụng luôn có nội dung hiển thị.

| Dữ Liệu | Nguồn Chính | Fallback | Vị Trí Sử Dụng |
|---------|-------------|----------|----------------|
| **Hero** | ✅ Supabase (`LD_page_sections`) | `MOCK_HERO` | `usePageData.ts`, `Hero.tsx` |
| **Services** | ✅ Supabase (`LD_page_sections`) | `MOCK_SERVICES` | `usePageData.ts` |
| **Wants** | ✅ Supabase (`LD_homepage_insights`) | `MOCK_WANTS` | `usePageData.ts` |
| **Difficulties** | ✅ Supabase (`LD_homepage_insights`) | `MOCK_DIFFICULTIES` | `usePageData.ts` |
| **Solutions** | ✅ Supabase (`LD_page_sections`) | `MOCK_SOLUTIONS` | `usePageData.ts` |
| **Courses** | ✅ Supabase (`LD_page_sections`) | `MOCK_COURSES` | `usePageData.ts` |
| **Clients** | ✅ Supabase (`LD_page_sections`) | `MOCK_CLIENTS` | `usePageData.ts` |
| **Testimonials** | ✅ Supabase (`LD_page_sections`) | `MOCK_TESTIMONIALS` | `usePageData.ts` |
| **Team** | ✅ Supabase (`LD_team`) | `MOCK_TEAM` | `usePageData.ts` |
| **Vision/Mission** | ✅ Supabase (`LD_vision_mission`) | `MOCK_VISION_MISSION` | `usePageData.ts` |
| **Resources** | ✅ Supabase (`LD_resources`) | `MOCK_RESOURCES` | `usePageData.ts` |
| **Footer** | ✅ Supabase (`LD_homepage_footer`) | ❌ No fallback | `usePageData.ts` |

---

## 🎯 Chiến Lược Sử Dụng Mock Data

### 1. **Initial State = Empty** ✅
```typescript
// Trước đây (❌ Không tốt):
const [courses, setCourses] = useState<any[]>(MOCK_COURSES);

// Bây giờ (✅ Tốt hơn):
const [courses, setCourses] = useState<any[]>([]);
```

**Lý do:**
- Tránh "flash" effect khi chuyển từ mock data sang real data
- Chỉ hiển thị mock data khi thực sự cần thiết
- Loading state rõ ràng hơn

---

### 2. **Fallback Logic** ✅
```typescript
// Sử dụng mock data KHI VÀ CHỈ KHI Supabase không có dữ liệu
setCourses(processed.courses || MOCK_COURSES);
setTeam(teamData?.length > 0 ? teamData : MOCK_TEAM);
```

**Khi nào dùng fallback:**
- ✅ Khi Supabase query trả về `null` hoặc `undefined`
- ✅ Khi Supabase query trả về mảng rỗng `[]`
- ✅ Khi có lỗi kết nối database
- ❌ KHÔNG dùng làm initial state

---

## 📍 Vị Trí Sử Dụng Mock Data

### 1. **`src/hooks/usePageData.ts`**
- **Mục đích:** Fallback cho tất cả data sections
- **Cách dùng:** `data || MOCK_DATA`
- **Ví dụ:**
  ```typescript
  setCourses(processed.courses || MOCK_COURSES);
  setWants(wantsData || MOCK_WANTS);
  ```

### 2. **`src/components/Hero.tsx`**
- **Mục đích:** Fallback cho hero images và title
- **Cách dùng:** `hero?.images || MOCK_HERO.images`
- **Ví dụ:**
  ```typescript
  const heroImages = hero?.images || MOCK_HERO.images;
  const title = hero?.title || MOCK_HERO.title;
  ```

### 3. **`src/lib/mock-data.ts`**
- **Mục đích:** Định nghĩa tất cả mock data
- **Không nên:** Import trực tiếp vào components (trừ Hero)
- **Nên:** Chỉ import vào `usePageData.ts` để làm fallback

---

## ⚠️ Lưu Ý Quan Trọng

### ✅ Nên Làm:
1. Dùng mock data làm **fallback** khi Supabase không có dữ liệu
2. Khởi tạo state với giá trị **empty** (`[]`, `null`)
3. Kiểm tra `data?.length > 0` trước khi set state
4. Có loading state rõ ràng

### ❌ Không Nên:
1. ❌ Dùng mock data làm initial state
2. ❌ Import mock data trực tiếp vào nhiều components
3. ❌ Hardcode mock data trong JSX
4. ❌ Bỏ qua error handling

---

## 🔍 Kiểm Tra Mock Data Có Đang Được Dùng

### Cách kiểm tra:
1. Mở DevTools → Network tab
2. Reload trang
3. Kiểm tra Supabase requests
4. Nếu thấy dữ liệu từ Supabase → Mock data **KHÔNG** được dùng ✅
5. Nếu không thấy dữ liệu → Mock data được dùng làm fallback ⚠️

### Test fallback:
1. Tạm thời disable Supabase connection
2. Reload trang
3. Nếu vẫn thấy nội dung → Fallback hoạt động ✅
4. Nếu trang trống → Cần thêm fallback ❌

---

## 📈 Kết Luận

**Tình trạng hiện tại:** ✅ **OPTIMAL**

- Mock data chỉ dùng làm fallback
- Không có initial state với mock data
- Tất cả data đều fetch từ Supabase trước
- Fallback logic đầy đủ cho mọi section

**Không cần thay đổi gì thêm!** 🎉
