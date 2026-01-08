-- Run this query in your Supabase SQL Editor to permanently add the "Về Chúng Tôi" link to the navbar.

UPDATE page_sections
SET data = jsonb_set(
    data,
    '{links}',
    (data->'links') || '[{"label": "Về Chúng Tôi", "href": "/about"}]'::jsonb
)
WHERE section_key = 'navbar' 
  AND data->'links' IS NOT NULL 
  AND NOT (data->'links' @> '[{"href": "/about"}]');
