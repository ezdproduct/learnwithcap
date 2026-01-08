-- Run this query in your Supabase SQL Editor to update the navbar structure.

UPDATE page_sections
SET data = jsonb_set(
    data,
    '{links}',
    '[
        {"label": "Khóa Học", "href": "/shop"},
        {"label": "Tài Nguyên", "href": "/resources"},
        {"label": "Về Chúng Tôi", "href": "/about"}
    ]'::jsonb
)
WHERE section_key = 'navbar';
